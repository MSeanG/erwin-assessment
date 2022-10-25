import Data from "./data.json";
import listItem from "./list-item.js";
import Codex from "./codex.js";

const List = {
    //console.log(Data);
    callback: () => {
        const ul = document.querySelector("ul");

        document.body.addEventListener("click", (event) => {
            if (event.target.classList.contains("chapters")) {
                alert("Chapters Selected");
            }
            if (event.target.classList.contains("next")) {
                ul.append(ul.querySelector(".list-item:first-of-type"));
            }
            if (event.target.classList.contains("story")) {
                alert("story selected");
            }
            if (event.target.classList.contains("prev")) {
                ul.prepend(ul.querySelector(".list-item:last-of-type"));
            }
            if (event.target.classList.contains("close")) {
                alert("close selected");
            }
            return;
        });
    },
    render: () => {
        let items = "";
        const list = Data,
        main = document.querySelector("main");

        list.articles.forEach((article, index) => {
            const id = "i" + article.id,
            title = article.title,
            text = article.text,
            li = listItem(id, title, text);

            return (items += li);
        });

        Codex([`<ul class="the-list">${items}</ul>`], main);
    }
};

export default List;