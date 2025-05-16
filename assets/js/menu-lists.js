// DECLARE THE FUNCTIONS

// => MENU LISTS FOR THE HOME PAGE
const menuList = () => {
  let ourMenu = document.querySelector(".our-menu");
  let homePage = document.querySelector(".homepage");
  const limitOnHomePage = homePage ? 6 : allMenu.length;
  
  allMenu.slice(0, limitOnHomePage).forEach((items) => {
    // CREATE THE LIST ELEMENT
    let list = document.createElement("div");
    let listInner = document.createElement("div");
    let listFront = document.createElement("div");
    let listFront_h3 = document.createElement("h3");
    let listFront_p = document.createElement("p");
    let listFront_div = document.createElement("div");
    let listFront_div_p = document.createElement("p");
    let listFront_div_button = document.createElement("button");

    let listBack = document.createElement("div");
    let listBack_img = document.createElement("img");
    let listBack_div = document.createElement("div");
    let listBack_div_inner = document.createElement("div");
    let listBack_div_inner_p = document.createElement("p");
    let listBack_div_inner_button = document.createElement("button");
    let listBack_div_inner_button_span = document.createElement("span");
    let listBack_div_inner_button_div = document.createElement("div");
    let listBack_div_inner_button_div_whatsapp = document.createElement("a");
    let listBack_div_inner_button_div_whatsapp_i = document.createElement("i");
    let listBack_div_inner_button_div_email = document.createElement("a");
    let listBack_div_inner_button_div_email_i = document.createElement("i");
    
    
    // ADD THEIR CLASSES
    list.classList.add("list");
    listInner.classList.add("list-inner");
    listFront.classList.add("list-front");
    listFront_p.classList.add("description");
    
    listBack.classList.add("list-back");
    listBack_div_inner.classList.add("inner");
    listBack_div_inner_button.classList.add("order");
    listBack_div_inner_button_div_whatsapp_i.classList.add("fa-brands", "fa-whatsapp");
    listBack_div_inner_button_div_email_i.classList.add("fa-solid", "fa-envelope-open-text");
    
    // ADD CONTENT TO THEM
    listFront_div_button.textContent = "Place order via";
    listFront_div_p.textContent = items.price;
    listFront_p.textContent = items.description;
    listFront_h3.textContent = items.nameOfFood;
    
    listBack_div_inner_button_span.innerHTML = `Place Order <i class="fa-solid fa-arrow-pointer"></i>`;
    listBack_div_inner_button_div_whatsapp.href = items.whatsappLink;
    listBack_div_inner_button_div_email.href = items.email;
    listBack_div_inner_p.textContent = items.price;
    listBack_img.src = items.image;
    listBack_img.alt = items.nameOfFood;
    
    // APPEND THEM
    listFront_div.appendChild(listFront_div_p);
    listFront_div.appendChild(listFront_div_button);
    listFront.appendChild(listFront_h3);
    listFront.appendChild(listFront_p);
    listFront.appendChild(listFront_div);
    
    listBack_div_inner_button_div_whatsapp.appendChild(listBack_div_inner_button_div_whatsapp_i);
    listBack_div_inner_button_div_email.appendChild(listBack_div_inner_button_div_email_i);
    
    listBack_div_inner_button_div.appendChild(listBack_div_inner_button_div_whatsapp);
    listBack_div_inner_button_div.appendChild(listBack_div_inner_button_div_email);
    
    listBack_div_inner_button.appendChild(listBack_div_inner_button_span);
    listBack_div_inner_button.appendChild(listBack_div_inner_button_div);
    
    listBack_div_inner.appendChild(listBack_div_inner_p);
    listBack_div_inner.appendChild(listBack_div_inner_button);
    listBack_div.appendChild(listBack_div_inner);
    listBack.appendChild(listBack_img);
    listBack.appendChild(listBack_div);
    
    listInner.appendChild(listFront);
    listInner.appendChild(listBack);
    
    list.appendChild(listInner);
    
    ourMenu.appendChild(list);
  });
}

// CALL THE FUNCTIONS
menuList();
