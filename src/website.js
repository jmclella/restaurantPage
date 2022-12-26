function createHeader() {

};

function createMain() {

};

function createFooter() {

};

function genWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
};

export default genWebsite;