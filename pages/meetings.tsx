import { NextFunctionComponent } from "next";
import MeetingsView from "../components/MeetingsView";
import { IClub } from "../interfaces";
import { getClubList } from "../utils/mockData";

type MeetingsPageProps = {
  clubListData: IClub[];
};

const MeetingsPage: NextFunctionComponent<MeetingsPageProps> = ({
  clubListData
}) => <MeetingsView clubList={clubListData} />;

MeetingsPage.getInitialProps = async () => {
  const clubListData: IClub[] = await getClubList();

  return { clubListData };
};

export default MeetingsPage;
