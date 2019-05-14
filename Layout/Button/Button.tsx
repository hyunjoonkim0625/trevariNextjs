import React from "react";
import Router, { withRouter } from "next/router";
import "./Button.scss";

type ButtonProps = {
  scrollStepInPx: number;
  delayInMs: number;
};

type ButtonState = {
  intervalId: any;
};

class Button extends React.Component<ButtonProps, ButtonState> {
  state = {
    intervalId: 0
  };

  scrollStep(): void {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop(): void {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  // shallowRouting(): void {
  //   const href = `/faq`;

  //   Router.push(href, href, { shallow: true });
  // }

  render() {
    return (
      <button
        className="Button"
        onClick={() => {
          this.scrollToTop();
          // this.shallowRouting();
        }}
      >
        자주 묻는 질문 &#38; 공지사항
      </button>
    );
  }
}

export default Button;
