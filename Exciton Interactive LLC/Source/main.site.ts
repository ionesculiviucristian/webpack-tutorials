const className = "main-app";

export class MainModule {
    constructor() {
        const app = document.createElement("div");
        app.classList.add(className);
        const child = document.createTextNode("main!");
        app.appendChild(child);
        document.body.appendChild(app);
    }
}
new MainModule();