import { createContact } from "./contact";
import { createHome } from "./home";
import { createMenu } from "./menu";
import './styles.css';

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function loadHome() {
    clearContent();
    document.getElementById('content').appendChild(createHome());
}

document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    document.getElementById('home-btn').addEventListener('click', loadHome);
    document.getElementById('menu-btn').addEventListener('click', () => {
        clearContent();
        document.getElementById('content').appendChild(createMenu());
    });
    document.getElementById('contact-btn').addEventListener('click', () => {
        clearContent();
        document.getElementById('content').appendChild(createContact());
    });
});