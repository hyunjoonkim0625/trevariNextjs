import { NextFunctionComponent } from "next";
import Link from "next/link";

import "./FooterLinks.scss";

const FooterLinks: NextFunctionComponent = () => (
  <div className="FooterLinks">
    {/* 사용하지 않기 때문에 disabled 처리 */}
    <Link href="#">
      <a className="FooterLinks__disabled">
        <p>블로그</p>
      </a>
    </Link>
    <Link href="#">
      <a className="FooterLinks__disabled">
        <p>채용공고</p>
      </a>
    </Link>
    <Link href="#">
      <a className="FooterLinks__disabled">
        <p>이용약관</p>
      </a>
    </Link>
    <Link href="#">
      <a className="FooterLinks__disabled">
        <p>개인정보처리방침</p>
      </a>
    </Link>
  </div>
);

export default FooterLinks;
