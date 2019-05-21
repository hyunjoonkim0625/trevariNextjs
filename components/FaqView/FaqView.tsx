import React from "react";
import { inject, observer } from "mobx-react";
import { IFaq } from "../../interfaces";

import FaqCollapse from "./FaqCollapse";

import "./FaqView.scss";
import FaqStore from "../../stores/FaqStore";

const faqCategoriesData: string[] = [
  "북클럽",
  "신청/환불",
  "독후감",
  "놀러가기",
  "이벤트",
  "아지트"
];

interface FaqViewProps {
  faqContent: IFaq[];
  faqStore: FaqStore;
}

interface FaqViewState {
  currentTab: string;
  displayCategory: string;
}

@inject("faqStore")
@observer
class FaqView extends React.Component<FaqViewProps, FaqViewState> {
  state = {
    currentTab: "faq",
    displayCategory: "북클럽"
  };

  componentDidMount() {
    this.props.faqStore.fetchFaqContent();
  }

  handleChangeCategory = (category: string): void => {
    this.setState({
      displayCategory: category
    });
  };

  handleFaqClick = (): void => {
    this.setState({
      currentTab: "faq"
    });
  };

  handleNoticeClick = (): void => {
    this.setState({
      currentTab: "notice"
    });
  };

  render() {
    const { faqContent } = this.props.faqStore;
    const { displayCategory, currentTab } = this.state;
    return (
      <div className="FaqView">
        <div className="FaqView__container">
          {/* 카테고리와 공지사항 탭 */}
          <div className="FaqView__container__tabs">
            <button
              className={currentTab === "faq" ? "clicked" : ""}
              onClick={this.handleFaqClick}
            >
              FAQ
            </button>
            <button
              className={currentTab === "notice" ? "clicked" : ""}
              onClick={this.handleNoticeClick}
            >
              공지사항
            </button>
          </div>

          {/* 카테고리 탭 텍스트 */}
          <div className="FaqView__container__info">
            <p>
              더 궁금하신 사항은{" "}
              <a href="mailto:contact@trevari.co.kr">contact@trevari.co.kr</a>로
              문의주세요 :)
            </p>
            <p>
              성함/휴대전화번호/클럽명을 함께 알려주시면 더 빠르게 확인
              가능합니다!
            </p>
            <p>- 회신가능요일: 월~금</p>
          </div>

          {/* 카테고리 메뉴  */}
          <div className="FaqView__container__categoryMenu">
            {faqCategoriesData.map(category => (
              <button
                className={displayCategory === category ? "selected" : ""}
                key={category}
                onClick={() => this.handleChangeCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 각 카테고리 내용 */}
          <div className="FaqView__container__categoryContent">
            {faqContent &&
              faqContent
                .filter(item => item.category === displayCategory)
                .map((item, index) => {
                  return (
                    <FaqCollapse
                      category={displayCategory}
                      title={item.title}
                      initialShow={false}
                      key={index}
                    >
                      <div>{item.text}</div>
                    </FaqCollapse>
                  );
                })}
          </div>
        </div>
      </div>
    );
  }
}

export default FaqView;
