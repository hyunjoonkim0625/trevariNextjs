import React from "react";
import Link from "next/link";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Link href="/meetings">
          <a>독서모임</a>
        </Link>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
      </div>
    );
  }
}

export default Index;
