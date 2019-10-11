import * as React from "react";

import { PrintService } from "./print.service";

class Component2 extends React.Component {
    public render() {
        return <>
            <div>Component 2</div>
            <button onClick={this.print}>Print</button>
        </>;
    }

    private print = () => {
        const message = "Component 2";
        PrintService.getInstance().print(message);
    }
}

export default Component2;