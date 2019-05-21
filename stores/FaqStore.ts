import { observable, action, runInAction } from "mobx";

import { IFaq } from "../interfaces";
import { getFaqContent } from "../utils/mockData";
import RootStore from "./index";

class FaqStore {
  root: RootStore;

  @observable faqContent: IFaq[] = [];
  @observable state: string = "pending";

  constructor(root: RootStore) {
    this.root = root;
  }

  @action async fetchFaqContent() {
    this.faqContent = [];
    this.state = "pending";

    try {
      const faqContent = await getFaqContent();

      runInAction(() => {
        this.state = "done";
        this.faqContent = faqContent;
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  }
}

export default FaqStore;
