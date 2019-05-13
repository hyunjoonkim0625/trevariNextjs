import React from "react";
import Header from "./Header";

const Layout: React.FC = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
    <div>Footer</div>
  </React.Fragment>
);

export default Layout;
