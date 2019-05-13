import React from "react";
import { withRouter } from "next/router";

import HeaderLinks from "./HeaderLinks";

import "./Header.scss";

// fontAwsomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeaderProps = {
  // 더 나은 타입 선언이 없을까...
  router: any;
};

type HeaderState = {
  prevScrollPos: number;
  show: boolean;
  dropDownShow: boolean;
};

class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    prevScrollPos: 60,
    show: true,
    dropDownShow: false
  };

  public componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  public componentDidUpdate(prevProps: HeaderProps) {
    const { pathname } = this.props.router;
    if (prevProps.router.pathname !== pathname) {
      this.setState({
        dropDownShow: false
      });
    }
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  private handleScroll = (): void => {
    const { prevScrollPos } = this.state;

    if (window.pageYOffset >= 60) {
      const currentScrollPos = window.pageYOffset;
      const show = prevScrollPos > currentScrollPos;

      this.setState({
        prevScrollPos: currentScrollPos,
        show
      });
    }
  };

  private handleDropDownShow = () => {
    this.setState({
      dropDownShow: !this.state.dropDownShow
    });
  };

  render() {
    return (
      <div className={`Header ${!this.state.show ? "hidden" : ""}`}>
        <a className="Header__logo" href="/">
          TREVARI
        </a>
        <div className="Header__menuButton">
          <div onClick={this.handleDropDownShow}>
            <FontAwesomeIcon icon="bars" />
          </div>
        </div>
        <div className="Header__links">
          <HeaderLinks />
        </div>

        <div
          className={`Header__dropMenu ${
            this.state.dropDownShow ? "show" : ""
          }`}
        >
          <HeaderLinks />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
