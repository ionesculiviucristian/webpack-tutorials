const className = "charting-app";

if (typeof module.hot !== "undefined") {
    module.hot.accept();

    const oldApp = document.querySelector(`.${className}`);
    if (typeof oldApp !== "undefined" && oldApp !== null) {
        oldApp.remove();
    }
}

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