import menu1 from './images/P1.webp';
import menu2 from './images/P2.webp';
import menu3 from './images/drinks.webp';

export function createMenu() {
    const menu = document.createElement("div");
    menu.id = 'menu';
    
    const h1 = document.createElement("h1");
    h1.textContent = "Menu";
    
    const menuGrid = document.createElement("div");
    menuGrid.classList.add('menu-grid');
    
    const items = [menu1, menu2, menu3];
    items.forEach((item) => {
        const img = document.createElement("img");
        img.src = item;
        img.classList.add('menu-image');
        menuGrid.appendChild(img);
    });

    menu.appendChild(h1);
    menu.appendChild(menuGrid);
    return menu;
}