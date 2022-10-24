import Data from "./data.json";
import listItem from "./list-item.js";
import Codex from "./codex.js";

const List = () => {
    //console.log(Data);
    let items = "";
    const list = Data,
    main = document.querySelector("main");

    list.articles.forEach((article, index) => {
        const id = article.id,
        title = article.title,
        text = article.text,
        li = listItem(id, title, text);

        return (items += li);
    });

    Codex([`<ul>${items}</ul>`], main);
};

export default List;