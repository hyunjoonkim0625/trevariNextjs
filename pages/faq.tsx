import { NextFunctionComponent } from "next";

import { IFaq } from "../interfaces";
import { getFaqContent } from "../utils/mockData";

import FaqView from "../components/FaqView";

type FaqPageProps = {
  faqContentData: IFaq[];
};

const FaqPage: NextFunctionComponent<FaqPageProps> = ({ faqContentData }) => (
  <FaqView faqContent={faqContentData} />
);

FaqPage.getInitialProps = async () => {
  const faqContentData: IFaq[] = await getFaqContent();

  return { faqContentData };
};

export default FaqPage;
