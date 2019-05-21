import { observable, action, runInAction } from "mobx";
import { IClub } from "../interfaces";
import { getClubList } from "../utils/mockData";
import RootStore from ".";

// export interface IMeetingsStore {
//   clubList: IClub[];
//   searchedList: IClub[];
//   state: string;
//   isSearched: boolean;
// }

class MeetingsStore {
  root: RootStore;

  @observable clubList: IClub[] = [];
  @observable state: string = "pending";
  @observable searchedList: IClub[] = [];
  @observable isSearched: boolean = false;

  constructor(root: RootStore) {
    this.root = root;
  }

  @action async fetchClubList() {
    this.clubList = [];
    this.state = "pending";

    try {
      const clubList = await getClubList();
      runInAction(() => {
        this.state = "done";
        this.clubList = clubList;
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  }

  @action
  public search = (value: string): void => {
    const clubList = this.clubList;
    const lowerCasedText = value.toLowerCase();
    const searchedList = clubList.filter(item =>
      item.clubName.toLowerCase().includes(lowerCasedText)
    );

    this.searchedList = searchedList;
    this.isSearched = true;
  };
}

export default MeetingsStore;
