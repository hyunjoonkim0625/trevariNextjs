import { NextFunctionComponent } from "next";
import { withRouter, WithRouterProps } from "next/router";
import Link from "next/link";

import FooterLinks from "./FooterLinks";
import Button from "../Button";

import "./Footer.scss";

interface OwnProps {}

type CombineProps = OwnProps & Required<WithRouterProps>;

const Footer: NextFunctionComponent<CombineProps> = ({ router }) => {
  return (
    <div className="Footer">
      <div className="Footer__vision">
        <span>세상을 더 지적으로 사람들을 더 친하게</span>
        <Link href="/faq" shallow={router.asPath === "/faq"}>
          <a>
            <Button scrollStepInPx="50" delayInMs="20" />
          </a>
        </Link>
      </div>
      <div className="Footer__divider" />
      <div className="Footer__links">
        <FooterLinks />
      </div>
      <div className="Footer__icons">
        <a
          href="https://www.facebook.com/trevari/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/static/facebook-logo.png" alt="link to facebook" />
        </a>
        <a
          href="https://blog.naver.com/trevarivari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/static/naver-blog-logo.png" alt="link to naver blog" />
        </a>
        <a
          href="https://www.instagram.com/trevari_official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/static/instagram-logo.png" alt="link to instagram" />
        </a>
      </div>
      <div className="Footer__info">
        주식회사 트레바리 | 대표: 윤수영 | 사업자 등록번호: 326-86-01375 | 주소:
        서울특별시 성동구 아차산로 68, 705호(성수동2가)
      </div>
      <div className="Footer__contact">
        전화: 070-7799-9708 | E-mail: contact@trevari.co.kr | 통신판매업신고:
        <a
          href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=3268601375"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> 제2019-서울성동-138호</span>
        </a>
      </div>
      <div className="Footer__copyright">
        Copyright © 2018 Trevari. All rights reserved.
      </div>
    </div>
  );
};

export default withRouter(Footer);
