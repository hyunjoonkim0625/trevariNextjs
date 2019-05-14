import React from "react";

import "./FaqCollapse.scss";

type FaqCollapseProps = {
  category: string;
  title: string;
  initialShow: boolean;
  key: number;
};

type FaqCollapseState = {
  show: boolean;
};

class FaqCollapse extends React.Component<FaqCollapseProps, FaqCollapseState> {
  state = {
    show: this.props.initialShow
  };

  myRef = React.createRef<HTMLDivElement>();
  // 카테고리간 이동 시에는 이전 카테고리에서 열려있던 탭들이 닫히게 하기 위해 작성

  componentDidUpdate(prevState: any) {
    if (this.props.category !== prevState.category) {
      this.setState({
        show: false
      });
    }
  }

  handleCollapseShow = (): void => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  // 탭 선택 시, 탭이 화면 상단으로 이동

  scrollToMyRef = (): void => {
    const node = this.myRef.current;

    if (node) {
      window.scrollTo({
        top: node.offsetTop - 10,
        behavior: "smooth"
      });
    }
  };

  render() {
    const { category, title, children } = this.props;
    const { show } = this.state;
    return (
      <div className="Collapse">
        <div className="Collapse__body">
          <div
            className="Collapse__body__title"
            ref={this.myRef}
            onClick={() => {
              this.handleCollapseShow();
              this.scrollToMyRef();
            }}
          >
            <span>Q.</span>
            <span className="Collapse__body__title__category">{`[${category}]`}</span>
            <span
              className={`Collapse__body__title__text${
                show ? "--selected" : ""
              }`}
            >
              {title}
            </span>
          </div>
          <div className={show ? "Collapse__body__content" : ""}>
            {show && children}
          </div>
        </div>
      </div>
    );
  }
}

export default FaqCollapse;
