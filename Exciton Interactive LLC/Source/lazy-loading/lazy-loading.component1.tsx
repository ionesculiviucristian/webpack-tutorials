import * as React from "react";

import { PrintService } from "./print.service";

class Component1 extends React.Component {
    public render() {
        return <>
            <div>Component 1</div>
            <button onClick={this.print}>Print</button>
        </>;
    }

    private print = () => {
        const message = "Component 1";
        PrintService.getInstance().print(message);
    }
}

export default Component1;