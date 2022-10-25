import Index from "./src/index.js";

Index();

document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("next")) {
        alert("next clicked");
    }
    if (event.target.classList.contains("prev")) {
        alert("prev clicked");
    }
    if (event.target.classList.contains("check")) {
        alert("check clicked");
    }
    return;
});
