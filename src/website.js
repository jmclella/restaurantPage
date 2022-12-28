import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';

function createHeader() {
    const pageHeader = document.createElement('header');

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Green Bowls";

    pageHeader.appendChild(headerTitle);
    pageHeader.appendChild(createNav());

    return pageHeader;
};

function createNav() {
    const pageNav = document.createElement('nav');
    pageNav.classList.add('page-nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-element');
    homeButton.textContent = 'Home';

    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('selected')) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-element');
    menuButton.textContent = 'Menu';

    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('selected')) return;
        setActiveButton(menuButton);
        loadMenu();
    });

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('nav-element');
    aboutButton.textContent = 'About';

    aboutButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('selected')) return;
        setActiveButton(aboutButton);
        loadAbout();
    });

    pageNav.appendChild(homeButton);
    pageNav.appendChild(menuButton);
    pageNav.appendChild(aboutButton);

    return pageNav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.nav-element');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('selected');
            console.log('class removed');
        }
    })

    button.classList.add('selected');
}

function createMain() {
    const pageMain = document.createElement('main');
    pageMain.classList.add('main');
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-container');

    mainContent.textContent = 'Testing Testing';

    pageMain.appendChild(mainContent);

    return pageMain;
};

function createFooter() {
    const pageFooter = document.createElement('footer');
    const footerHeading = document.createElement('h3');
    footerHeading.innerHTML = 'Copyright &copy; 2022 jmclella'

    pageFooter.appendChild(footerHeading);

    return pageFooter;
};

function genWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".nav-element"));

    loadHome();
};

export default genWebsite;