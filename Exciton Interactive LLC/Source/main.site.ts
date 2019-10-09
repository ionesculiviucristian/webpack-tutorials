if (typeof module.hot !== "undefined") {
    module.hot.accept();

    const oldApp = document.getElementsByClassName("app")[0];
    if (typeof oldApp !== "undefined" && oldApp !== null) {
        oldApp.remove();
    }
}

const app = document.createElement("div");
app.classList.add("app");
const child = document.createTextNode("Of course it does!");
app.appendChild(child);
document.body.appendChild(app);