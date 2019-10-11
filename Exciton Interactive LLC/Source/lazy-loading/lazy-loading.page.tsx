import * as React from "react";
import * as ReactDOM from "react-dom";

import Component1 from "./lazy-loading.component1";
import Component2 from "./lazy-loading.component2";

ReactDOM.render(
    <>
        <Component1/>
        <Component2/>
    </>,
    document.getElementById("root"),
);