import React from "react";
import "./Layout.scss"; //!(@:)====>styles;

const Layout =({ children })=> { return (
<div className="Layout">{children}</div>
);  }; export { Layout };