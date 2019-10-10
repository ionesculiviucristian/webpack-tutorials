const className = "charting-app";

export class ChartingModule {
    constructor() {
        const app = document.createElement("div");
        app.classList.add(className);
        const child = document.createTextNode("Charting Module!!!");
        app.appendChild(child);
        document.body.appendChild(app);
    }
}
new ChartingModule();