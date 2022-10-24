const listItem = (id, title, text) => {
    const li = /*html*/`
        <li id="${id}">
            <figure>&nbsp;</figure>
            <h2>${title}</h2>
            <p>${text}</p>
        </li>
    `;
    return li;
};

export default listItem;
