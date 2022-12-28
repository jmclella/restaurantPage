function createAbout() {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    const aboutHeading = document.createElement('h1');
    aboutHeading.classList.add('aboutHeading');
    aboutHeading.textContent = 'Contact';

    const chefName = document.createElement('p');
    chefName.classList.add('chef-name');
    chefName.textContent = 'Head Chef: Justin Mclellan';

    const chefEmail = document.createElement('p');
    chefEmail.classList.add('chef-email');
    chefEmail.textContent = 'Email: jmclella@fandm.edu';

    mainContainer.appendChild(aboutHeading);
    mainContainer.appendChild(chefName);
    mainContainer.appendChild(chefEmail);

    return mainContainer;
}

function loadAbout() {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createAbout());
}

export default loadAbout;