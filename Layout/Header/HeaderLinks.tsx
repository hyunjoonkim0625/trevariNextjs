import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

import "./HeaderLinks.scss";

// 링크 메뉴
const headerLinkMenu = [
  "트레바리 알아보기",
  "멤버십 신청",
  "독서 모임",
  "이벤트",
  "채용공고",
  "로그인"
];

type HeaderLinksProps = {
  router: any;
};

type HeaderLinksState = {
  currentMenu: string;
};
class HeaderLinks extends React.Component<HeaderLinksProps, HeaderLinksState> {
  state = {
    currentMenu: "독서 모임"
  };

  public shouldComponentUpdate(nextProps: HeaderLinksProps) {
    const { pathname } = this.props.router;

    return pathname !== nextProps.router.pathname;
  }

  public componentDidUpdate(prevProps: HeaderLinksProps) {
    const { pathname } = this.props.router;

    if (prevProps.router.pathname !== pathname) {
      this.setState({
        currentMenu: ""
      });
    }
  }

  handleChangeMenu = (menu: string): void => {
    this.setState({
      currentMenu: menu
    });
  };

  render() {
    const { currentMenu } = this.state;
    return (
      <div className="HeaderLinks">
        <ul className="HeaderLinks__linkList">
          {headerLinkMenu.map(menu =>
            menu === "독서 모임" ? (
              <Link href="/meetings" key={menu}>
                <li onClick={() => this.handleChangeMenu(menu)}>
                  <span className={currentMenu === menu ? "selected" : ""}>
                    {menu}
                  </span>
                </li>
              </Link>
            ) : (
              <li key={menu}>
                <span className="HeaderLinks__disabled">{menu}</span>
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}

export default withRouter(HeaderLinks);
