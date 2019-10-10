import * as React from "react";
import * as ReactDOM from "react-dom";

import { filter } from "lodash";

ReactDOM.render(
    <h1>Page 1</h1>,
    document.getElementById("root")
);

const examples = ["one", "two"];
console.log(filter(examples, (e: string) => {
    return e === "one";
}));