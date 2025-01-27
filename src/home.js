import restaurantImage from './Images/LT.webp';

export function createHome() {
  const home = document.createElement("div");
  home.id = 'home';
  const img = document.createElement("img");
  img.src = restaurantImage;
  img.classList.add('restaurant-image');
  const h1 = document.createElement("h1");
  h1.textContent = "Cơm Lộc Thành";
  const h2 = document.createElement("h2");
  h2.textContent = "Tinh hoa ẩm thực đất Cảng!"
  const p = document.createElement("p");
  p.textContent = "Với lịch sử hơn 20 năm, chúng tôi đã phục vụ cho hàng trăm nghìn quý khách khắp cả nước."

  home.appendChild(h1);
  home.appendChild(h2);
  home.appendChild(p);
  home.appendChild(img);

  return home;
}