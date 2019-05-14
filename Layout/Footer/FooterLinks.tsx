import { NextFunctionComponent } from "next";
import Link from "next/link";

import "./FooterLinks.scss";

const FooterLinks: NextFunctionComponent = () => (
  <div className="FooterLinks">
    {/* 사용하지 않기 때문에 disabled 처리 */}
    <Link href="#">
      <a className="FooterLinks__disabled">블로그</a>
    </Link>
    <Link href="#">
      <a className="FooterLinks__disabled">채용공고</a>
    </Link>
    <Link href="#">
      <a className="FooterLinks__disabled">이용약관</a>
    </Link>
    <Link href="#">
      <a className="FooterLinks__disabled">개인정보처리방침</a>
    </Link>
  </div>
);

export default FooterLinks;
