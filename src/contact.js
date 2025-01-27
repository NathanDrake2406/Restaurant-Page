export function createContact() {
    const contact = document.createElement("div");
    contact.id = 'contact';

    const h1 = document.createElement("h1");
    h1.textContent = 'Contact Us';

    const phone = document.createElement('p');
    phone.textContent = '123456789';

    const email = document.createElement('p');
    email.textContent = 'abcd@gmail.com';

    contact.appendChild(h1);
    contact.appendChild(phone);
    contact.appendChild(email);

    return contact;
}