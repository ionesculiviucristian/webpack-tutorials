const className = "forms-app";

export class FormsModule {
    constructor() {
        const app = document.createElement("div");
        app.classList.add(className);
        const child = document.createTextNode("Forms Module!");
        app.appendChild(child);
        document.body.appendChild(app);
    }
}
new FormsModule();