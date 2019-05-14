// clubListData 관련 타입
export interface IClub {
  imgSrc: string;
  clubName: string;
  clubDescription: string;
  bookTitle: string;
  location: string;
  time: string;
  clubRep: string;
  trevariDesigned: boolean;
}

// faq 관련 데이터의 타입
export interface IFaq {
  title: string;
  text: string;
  category: string;
}
