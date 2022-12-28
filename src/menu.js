function createMenu() {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const tomatoSalad = 'images/tomatoSalad.jpg';
    const summerSalad = 'images/summerSalad.jpg';
    const quinoaBowl = 'images/quinoaBowl.jpg';
    const fishBowl = 'images/fishBowl.jpg';
    const colorfulGrainBowl = 'images/colorfulGrainBowl.jpg';
    menuContainer.appendChild(createCard('Tomato Salad', '$14.25', tomatoSalad));
    menuContainer.appendChild(createCard('Summer Salad', '$12.95', summerSalad));
    menuContainer.appendChild(createCard('Quinoa Bowl', '$15.95', quinoaBowl));
    menuContainer.appendChild(createCard('Fish Bowl', '$17.95', fishBowl));
    menuContainer.appendChild(createCard('Grain Bowl', '$14.25', colorfulGrainBowl));

    mainContainer.appendChild(menuContainer);

    return mainContainer;
};

function createCard(item, price, imageSrc) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menuCard');

    const menuItem = document.createElement('p');
    menuItem.classList.add('menuItem');
    menuItem.textContent = item;
    menuCard.appendChild(menuItem);

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('itemPrice');
    itemPrice.textContent = price;
    menuCard.appendChild(itemPrice);

    const itemImage = document.createElement('img');
    itemImage.classList.add('itemImage');
    itemImage.src = imageSrc;
    menuCard.appendChild(itemImage);

    return menuCard;
};


function loadMenu() {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createMenu());
};

export default loadMenu;