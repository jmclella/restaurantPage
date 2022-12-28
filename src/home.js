function createHome() {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    const par1 = document.createElement('p');
    par1.classList.add('homePar');
    par1.textContent = 'Welcome to Green Bowls!';
    mainContainer.appendChild(par1);

    const par2 = document.createElement('p');
    par2.classList.add('homePar');
    par2.textContent = 'Made with perfection since 2022';
    mainContainer.appendChild(par2);

    const imageContainer = document.createElement('img');
    imageContainer.classList.add('homeImage');
    imageContainer.src = "images/chef.jpg";

    mainContainer.appendChild(imageContainer);

    return mainContainer;
}

function loadHome() {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;