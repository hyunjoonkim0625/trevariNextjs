import { IClub } from "../interfaces";
import { IFaq } from "../interfaces";
// meetings container에 갈 데이터
export const clubListData: IClub[] = [
  {
    imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
    clubName: "국경:철학",
    clubDescription:
      "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
    bookTitle: "열린사회와 그 적들. 1(양장본 HardCover)",
    location: "압구정 아지트",
    time: "2019년 04월 20일 토요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
    clubName: "Baseball-25",
    clubDescription: "야구를 즐기는 또 다른 방법",
    bookTitle: "야구가 뭐라고",
    location: "압구정 아지트",
    time: "2019년 04월 12일 금요일 오후 07시 40분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
    clubName: "법률가들-범죄와 사회",
    clubDescription: "사법의 눈으로 바라보는 한국 사회",
    bookTitle: "내 친구 다머",
    location: "안국 아지트",
    time: "2019년 04월 19일 금요일 오후 07시 40분",
    clubRep: "양지훈",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
    clubName: "리더십입문-야구",
    clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
    bookTitle: "리즈 와이즈먼 멀티플라이어",
    location: "압구정 아지트",
    time: "2019년 04월 14일 일요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: true
  },
  {
    imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
    clubName: "국경:철학",
    clubDescription:
      "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
    bookTitle: "열린사회와 그 적들. 1(양장본 HardCover)",
    location: "압구정 아지트",
    time: "2019년 04월 20일 토요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
    clubName: "야구야구-28",
    clubDescription: "야구를 즐기는 또 다른 방법",
    bookTitle: "야구가 뭐라고",
    location: "압구정 아지트",
    time: "2019년 04월 12일 금요일 오후 07시 40분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
    clubName: "법률가들-범죄와 사회",
    clubDescription: "사법의 눈으로 바라보는 한국 사회",
    bookTitle: "내 친구 다머",
    location: "안국 아지트",
    time: "2019년 04월 19일 금요일 오후 07시 40분",
    clubRep: "양지훈",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
    clubName: "Leadership입문-27",
    clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
    bookTitle: "리즈 와이즈먼 멀티플라이어",
    location: "압구정 아지트",
    time: "2019년 04월 14일 일요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: true
  },
  {
    imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
    clubName: "국경:철학",
    clubDescription:
      "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
    bookTitle: "열린사회와 그 적들. 1(양장본 HardCover)",
    location: "압구정 아지트",
    time: "2019년 04월 20일 토요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
    clubName: "야구야구-25",
    clubDescription: "야구를 즐기는 또 다른 방법",
    bookTitle: "야구가 뭐라고",
    location: "압구정 아지트",
    time: "2019년 04월 12일 금요일 오후 07시 40분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
    clubName: "법률가들-야구와 사회",
    clubDescription: "사법의 눈으로 바라보는 한국 사회",
    bookTitle: "내 친구 다머",
    location: "안국 아지트",
    time: "2019년 04월 19일 금요일 오후 07시 40분",
    clubRep: "양지훈",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
    clubName: "리더십입문-27",
    clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
    bookTitle: "리즈 와이즈먼 멀티플라이어",
    location: "압구정 아지트",
    time: "2019년 04월 14일 일요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: true
  },
  {
    imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
    clubName: "국경:야구",
    clubDescription:
      "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
    bookTitle: "열린사회와 그 적들. 1(양장본 HardCover)",
    location: "압구정 아지트",
    time: "2019년 04월 20일 토요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
    clubName: "야구야구-25",
    clubDescription: "야구를 즐기는 또 다른 방법",
    bookTitle: "야구가 뭐라고",
    location: "압구정 아지트",
    time: "2019년 04월 12일 금요일 오후 07시 40분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
    clubName: "법률가들-범죄와 사회",
    clubDescription: "사법의 눈으로 바라보는 한국 사회",
    bookTitle: "내 친구 다머",
    location: "안국 아지트",
    time: "2019년 04월 19일 금요일 오후 07시 40분",
    clubRep: "양지훈",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
    clubName: "리더십입문-33",
    clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
    bookTitle: "리즈 와이즈먼 멀티플라이어",
    location: "압구정 아지트",
    time: "2019년 04월 14일 일요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: true
  },
  {
    imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
    clubName: "국경:철학",
    clubDescription:
      "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
    bookTitle: "열린사회와 그 적들. 1(양장본 HardCover)",
    location: "압구정 아지트",
    time: "2019년 04월 20일 토요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
    clubName: "야구철학-25",
    clubDescription: "야구를 즐기는 또 다른 방법",
    bookTitle: "야구가 뭐라고",
    location: "압구정 아지트",
    time: "2019년 04월 12일 금요일 오후 07시 40분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
    clubName: "법률가들-범죄와 사회",
    clubDescription: "사법의 눈으로 바라보는 한국 사회",
    bookTitle: "내 친구 다머",
    location: "안국 아지트",
    time: "2019년 04월 19일 금요일 오후 07시 40분",
    clubRep: "양지훈",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
    clubName: "리더십입문-27",
    clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
    bookTitle: "리즈 와이즈먼 멀티플라이어",
    location: "압구정 아지트",
    time: "2019년 04월 14일 일요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: true
  },
  {
    imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
    clubName: "국경:철학",
    clubDescription:
      "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
    bookTitle: "열린사회와 그 적들. 1(양장본 HardCover)",
    location: "압구정 아지트",
    time: "2019년 04월 20일 토요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
    clubName: "야구법률-25",
    clubDescription: "야구를 즐기는 또 다른 방법",
    bookTitle: "야구가 뭐라고",
    location: "압구정 아지트",
    time: "2019년 04월 12일 금요일 오후 07시 40분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
    clubName: "법률가들-범죄와 사회",
    clubDescription: "사법의 눈으로 바라보는 한국 사회",
    bookTitle: "내 친구 다머",
    location: "안국 아지트",
    time: "2019년 04월 19일 금요일 오후 07시 40분",
    clubRep: "양지훈",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
    clubName: "범죄입문-27",
    clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
    bookTitle: "리즈 와이즈먼 멀티플라이어",
    location: "압구정 아지트",
    time: "2019년 04월 14일 일요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: true
  },
  {
    imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
    clubName: "국경:철학",
    clubDescription:
      "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
    bookTitle: "열린사회와 그 적들. 1(양장본 HardCover)",
    location: "압구정 아지트",
    time: "2019년 04월 20일 토요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
    clubName: "야구야구-25",
    clubDescription: "야구를 즐기는 또 다른 방법",
    bookTitle: "야구가 뭐라고",
    location: "압구정 아지트",
    time: "2019년 04월 12일 금요일 오후 07시 40분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
    clubName: "법률가들-범죄와 사회",
    clubDescription: "사법의 눈으로 바라보는 한국 사회",
    bookTitle: "내 친구 다머",
    location: "안국 아지트",
    time: "2019년 04월 19일 금요일 오후 07시 40분",
    clubRep: "양지훈",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
    clubName: "리더십입문-27",
    clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
    bookTitle: "리즈 와이즈먼 멀티플라이어",
    location: "압구정 아지트",
    time: "2019년 04월 14일 일요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: true
  },
  {
    imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
    clubName: "국경:철학",
    clubDescription:
      "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
    bookTitle: "열린사회와 그 적들. 1(양장본 HardCover)",
    location: "압구정 아지트",
    time: "2019년 04월 20일 토요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
    clubName: "야구야구-25",
    clubDescription: "야구를 즐기는 또 다른 방법",
    bookTitle: "야구가 뭐라고",
    location: "압구정 아지트",
    time: "2019년 04월 12일 금요일 오후 07시 40분",
    clubRep: "",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
    clubName: "법률가들-범죄와 사회",
    clubDescription: "사법의 눈으로 바라보는 한국 사회",
    bookTitle: "내 친구 다머",
    location: "안국 아지트",
    time: "2019년 04월 19일 금요일 오후 07시 40분",
    clubRep: "양지훈",
    trevariDesigned: false
  },
  {
    imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
    clubName: "리더십입문-27",
    clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
    bookTitle: "리즈 와이즈먼 멀티플라이어",
    location: "압구정 아지트",
    time: "2019년 04월 14일 일요일 오후 02시 20분",
    clubRep: "",
    trevariDesigned: true
  }
];

// faq container에 갈 데이터

export const faqContentData: IFaq[] = [
  {
    title: "트레바리는 젊은 사람들만 가는 곳이라고 하던데 맞나요?",
    text:
      " 나이의 많고 적음과 무관하게 '더 좋은 사람이 되고 싶고 다양한 생각에 열려있다'면 누구나 오셔도 됩니다.",
    category: "북클럽"
  },
  {
    title: "파트너는 어떤 역할을 하나요?",
    text:
      "트레바리의 모든 북클럽에는 '파트너'가 한 분씩 계십니다. 트레바리의 '크루'(직원)와는 달리 생계(?)는 다른 곳에서 해결하시지만, 트레바리와 같은 곳을 바라봐 주시는 든든한 분들이랍니다! 한 시즌 동안 아래의 업무를 담당해주시며 멤버분들이 트레바리를 더욱 잘 즐길 수 있도록 도와주실 거예요.",
    category: "북클럽"
  },
  {
    title: "공휴일에도 독서모임 하나요?",
    text: `설 연휴와 추석 연휴를 제외한 법정공휴일에도 독서모임 합니다!

<트레바리 이용약관> 제 12조 5항

(5) “회사"는 “독서모임 서비스" 를 제공함에 있어 설, 추석을 제외한 법정공휴일에도 “독서모임 서비스”를 제공합니다. 다만 법정공휴일 등 일정 변경에 상당한 사유가 발생할 경우 “회사”는 해당 서비스 제공 일정을 변경할 수 있으며, 이 경우에 “회사" 는 “회원" 에게 이 내용을 사전 통보 후 “독서모임 서비스”를 제공합니다.`,
    category: "북클럽"
  },
  {
    title: "함께 만드는 클럽의 경우, 책은 어떻게 선정되나요?",
    text:
      "첫 책은 트레바리에서 정해드립니다!\n첫 모임 이후로는 매달 대화와 투표를 통해 읽고 싶은 책과 주제를 정합니다.그리고 책을 추천한 사람이 발제자가 되어 토론을 이끌어 나갑니다.",
    category: "북클럽"
  },
  {
    title: " 클럽장은 어떤 역할을 하나요?",
    text:
      "전문적으로 이끌어주시는 분이 계시면 더 좋을 클럽에는 '클럽장'을 모시고 있어요. 주로 과학관장님, 교수님, 작가님, 특정 기업 대표님 등 해당 분야 전문가분들을 모십니다. 이렇게 모신 ‘클럽장’님들은 해당 클럽의 커리큘럼을 직접 짜주십니다. 같이 읽으면 좋을 책, 아티클, 영상/이미지 자료를 추천해주실 뿐만 아니라, 클럽 어떤 식으로 운영되면 좋을지까지 같이 고민해주신답니다. 나아가 모임 당일 양질의 대화가 이뤄질 수 있도록 토론 주제를 준비하고, 대화를 이끌어가주시고 계세요. :)",
    category: "북클럽"
  },
  {
    title: "한 달에 한 번만 모이나요?",
    text:
      "아지트에서 열리는 정규 독서모임은 월 1회입니다. 하지만 매달 정기적으로 번개 모임이 열리기 때문에 멤버분들과 함께 할 수 있는 시간은 월 2회라고 생각해주셔도 무방할 것 같아요. :) 이외에도 멤버들만을 위한 ‘커뮤니티 이벤트’, 편하게 놀러 올 수 있는 ‘트레바리 압구정 아지트 지하 바 b1’ 등 다양한 혜택이 준비되어 있습니다!",
    category: "북클럽"
  },
  {
    title: "멤버 구성은 어떻게 되나요?",
    text:
      "정말 다양한 직업과 연령대의 멤버분들이 활동하고 계세요! 나와 다른 배경을 가진 멤버들의 다양한 이야기를 듣는 즐거움이 있습니다!",
    category: "북클럽"
  },
  {
    title: "한 클럽당 인원은 몇 명 정도인가요?",
    text:
      "각 클럽마다 차이가 있지만, 모집 정원은 평균 15~20명이에요. 한 클럽이 개설되기 위한 최소 인원 기준이 있기 때문에, 시즌 시작 인원이 적어도 6명은 넘을거예요!",
    category: "북클럽"
  },

  {
    title: "트레바리 멤버십을 양도할 수 있나요?",
    text: "트레바리 멤버십은 양도가 불가능합니다.",
    category: "신청/환불"
  },
  {
    title: "어떤 결제수단이 있나요? (결제수단 유의사항)",
    text:
      "[카드결제] - 결제 완료 즉시 실시간 결제 확인 및 신청 완료![Toss결제] - 결제 완료 즉시 실시간 결제 확인 및 신청 완료! - 본인 명의의 계좌와 휴대전화만 있으면 Toss앱 없이도 손쉽게 결제할 수 있습니다. - 물론, 이미 Toss앱을 쓰고 계신다면 앱에서 결제도 가능합니다. - 반드시 신청 단계에서 'Toss결제'를 선택하신 후 화면 상의 안내를 따라 결제를 진행하세요. - Toss결제 이용 시 현금영수증은 자동 발행 처리됩니다. (2018년 4월 30일 13시 이후 결제 건부터, 인증받은 휴대전화번호로 개인소득공제용 현금영수증이 자동 발행됩니다.) - (주의) Toss결제가 아닌 Toss '송금하기'는 계좌이체와 동일하게 처리됩니다. [가상계좌] - 이체 시각과 입금 확인 시점 사이에 시차가 있습니다 - 신청 단계에서 '가상계좌'를 선택하신 후 안내사항을 꼭 확인해주세요. - 계좌이체 입금확인 시점 이전에 클럽이 마감되는 경우, 이미 이체하신 금액은 최대 3영업일 이내로 환불해드립니다. 모든 북클럽은 결제/입금확인 시점을 기준으로 선착순 마감됩니다.",
    category: "신청/환불"
  },
  {
    title: "환불 신청이 제대로 완료되지 않은 것 같아요!",
    text:
      "멤버십 혜택으로 이벤트를 할인 받으신 경우에는 할인 받으신 금액을 차감한만큼 환불받으실 수 있습니다. 할인 받으신 금액만큼 차감하고 환불하기를 원하시는 경우에는 contact@trevari.co.kr으로 문의주세요. 환불 신청 시 '당일 환불가능 금액 초과' 또는 '은행 업무 중단 시간'을 알리는 메세지가 뜨는 경우가 있습니다. 이런 경우 대부분 환불 신청 자체는 홈페이지 서버에 정상적으로 접수되기 때문에 최대 3영업일 내로 담당자가 확인 후 처리해드려요! 환불 신청 버튼이 보이지 않는다면 환불 신청이 이미 접수된 것이랍니다!",
    category: "신청/환불"
  },
  {
    title: "클럽을 여러 개 등록해도 되나요?",
    text:
      "네, 클럽 등록에는 개수 제한이 없습니다. 다만, 세 개 이상의 클럽을 하실 땐 이런 점을 염두에 두어주세용! 세 개 이상의 클럽에서 활동하시면, 책을 깊이 소화하고, 독후감에 생각을 잘 담아내고, 멤버들과 끈끈한 관계를 맺는 것이 버거울 수 있어요 :( 저희는 트레바리에서의 시간이 더 깊고 끈끈하길 바란답니다♥",
    category: "신청/환불"
  },
  {
    title: "독후감 공지 문자는 왜, 언제 발송되나요?",
    text:
      "독후감 제출 마감 일주일 전, 3일 전, 당일에 각각 안내 문자를 발송해 멤버분들의 독서습관 형성에 도움을 드리고 있어요. 한 권의 책을 곱씹고 소화하는 충분한 시간을 가지길, 한 편의 글을 쓰며 최소 일주일 동안 나만의 생각을 만들어 가길, 이를 통해 서로에게 도움이 되는 가치 있는 대화를 나눌 수 있길 바랍니다. 좀 더 여유롭게 책 읽기와 글쓰기를 즐겨봐요! 분명 더 가치 있는 시간이 될 거예요 :)",
    category: "독후감"
  },
  {
    title: "벌써 도서가 두 권이에요! 독후감을 두 편 써야 하나요?",
    text:
      "여러 권을 읽을 때에도 제출해야 하는 독후감 수와 분량은 동일합니다. 예외적으로 독후감 분량과 형식이 달라질 때는 미리 공지드릴게요. 클럽에 따라 읽는 책이 두 권 이상이거나, 영화를 같이 보기도 해요. 그래도 모임 참석을 위한 독후감은 400자 이상 한 편이 기본이라는 사실! (예외인 클럽도 있으니, 내 클럽의 독후감 분량을 꼭! 살펴봐 주세요.) 두 권 이상의 책을 읽고 한 편의 글로 엮어내는 과정이 만만치 않겠지만, 그 연결고리를 찾는 과정에서 고민한 시간만큼 모임 당일에 나눌 수 있는 이야기는 훨씬 더 풍부해질 거예요.",
    category: "독후감"
  },
  {
    title: "내가 작성한 독후감이 외부에 공개되나요?",
    text:
      "아닙니다! 홈페이지에 작성해주신 독후감은 해당 시즌 멤버들에게만 공개됩니다.",
    category: "독후감"
  },
  {
    title: "독후감을 안 내면 정말로 독서모임에 참가할 수 없나요?",
    text:
      "네, 안타깝지만 그렇습니다.ㅠㅠ 트레바리는 양질의 대화를 위해서는 구성원들이 어느 정도 각자의 생각을 정리해 와야 한다고 믿습니다. 그리고 생각을 정리하는 데에는 글쓰기만 한 것이 없죠. 저희는 많은 독서모임이 서로 친해지면서 '좋은 게 좋은 거지!' 식으로 운영하다가 콘텐츠를 잃어가는 모습을 지켜봐 왔습니다. 그래서 독서모임들의 평균 수명은 채 2년이 넘지 못하죠. 저희를 믿고 등록을 해주신 멤버 여러분들에게 '지속 가능한 독서모임 서비스'를 제공하기 위해서라도, 저희는 최선을 다해 원칙을 지켜나가려고 합니다. 예쁘게 봐주세요! :D",
    category: "독후감"
  },
  {
    title: "놀러가기 성공 여부는 언제 알 수 있나요?",
    text:
      "독후감 마감 다음 날(=모임 전 날) 오전 11시에, 놀러가기 성공 여부가 문자로 전송됩니다!",
    category: "놀러가기"
  },
  {
    title: "놀러가기는 어떻게 신청하나요?",
    text:
      "놀러가고 싶은 클럽에 독후감을 남겨주시면 자동으로 신청됩니다! 위 메뉴에서 '독서모임'을 클릭하신 후 놀러 가고 싶은 클럽에 독후감을 올려주세요! 언제나 그렇듯, 기한과 분량을 어기시면 참가하실 수 없습니다.",
    category: "놀러가기"
  },
  {
    title: "이벤트 신청은 어떻게 하나요?",
    text:
      "트레바리 홈페이지의 이벤트 메뉴(click!)에서 이벤트 내용과 일정을 확인하고 '신청하기' 버튼을 눌러주세요! 결제 또는 입금해주시는 순서대로 신청이 완료됩니다.",
    category: "이벤트"
  },
  {
    title: "이벤트는 언제 열리나요?",
    text:
      "트레바리는 매월 초에 당월 진행되는 이벤트 캘린더를 홈페이지(click!)와 페이스북 '트레바리 클럽' 그룹(click!)을 통해서 공지드립니다! 해당 캘린더를 참고하시면 1) 어떤 이벤트가, 2) 언제 진행되며, 3) 언제 신청하실 수 있는지 아실 수 있답니다!",
    category: "이벤트"
  },
  {
    title: "커뮤니티 이벤트가 무엇인가요?",
    text:
      "트레바리에서는 독서모임뿐만 아니라 다양한 커뮤니티 이벤트들이 열리고 있습니다! 강연부터 체험까지 멤버들만을 위한 지적이고 사랑스러운 이벤트, 함께해요!",
    category: "이벤트"
  },
  {
    title: "아지트에 소지품을 두고 온 것 같아요. 어떡하죠?",
    text:
      "contact@trevari.co.kr 로 습득 여부를 문의해주세요. 분실 일자, 분실 장소, 분실 품목의 특성(형태, 색상, 브랜드 등)을 구체적으로 제보해주실수록 찾을 수 있는 확률이 높아진답니다. 습득물은 습득일로부터 3개월간 보관하니, 너무 늦지 않게 찾아가 주시면 감사하겠습니다. :)",
    category: "아지트"
  },
  {
    title: "아지트는 언제 열려있나요?",
    text:
      "압구정 아지트 / 안국 아지트 / 성수 아지트 / 강남 아지트 / 압구정 아지트 지하 바 <b1>은 수요일~금요일 18:30~02:00, 토요일~일요일 13:00~02:00 에 열려있습니다! (월-화는 쉬어요)",
    category: "아지트"
  },
  {
    title: "[압구정 아지트] 지하 바, b1이 궁금해요!",
    text:
      "압구정 아지트 지하 1층에 위치한 비밀스러운 공간이랍니다 :) 책도 읽고, 술도 마시고, 대화도 나눌 수 있어요. b1은 멤버분들을 언제나 환영합니다! 자주 놀러 오세요. :)",
    category: "아지트"
  }
];

// get all clubList data
export async function getClubList() {
  if (!Array.isArray(clubListData)) {
    throw new Error("정보를 찾을 수 없습니다.");
  }

  return clubListData;
}

export async function getFaqContent() {
  if (!Array.isArray(faqContentData)) {
    throw new Error("정보를 찾을 수 없습니다.");
  }

  return faqContentData;
}
