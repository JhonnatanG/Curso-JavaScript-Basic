const flechaMenuDesktop = document.querySelector('.flecha-abajo');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shoping-cart');
const asideShoppingCart = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.card-container');


flechaMenuDesktop.addEventListener('click', showDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside)


function showDesktopMenu () {
    const isAsideClosed = asideShoppingCart.classList.contains('inactive');

    if(!isAsideClosed){
        asideShoppingCart.classList.add('inactive');
    }
    //con este codigo se quita o pone la clase con clik inactive del desktop-menu, que esta guardado en la variable desktopMenu
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = asideShoppingCart.classList.contains('inactive');

    if(!isAsideClosed){
        asideShoppingCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside (){
    //classList.contains se usa para verificar si tiene la clase enviada como argumento, devolviento true o false
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopClosed = desktopMenu.classList.contains('inactive');

    if(!isMobilMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopClosed){
        desktopMenu.classList.add('inactive');
    }

    asideShoppingCart.classList.toggle('inactive');  
}

//se crea un array que contendra todas las cards
const productList = [];

//se agrega al array un objeto con los elementos de la card
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    name: 'Laptop',
    price: 350,
    image: 'https://images.pexels.com/photos/3992776/pexels-photo-3992776.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    name: 'Phone',
    price: 720,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    name: 'XboxOne',
    price: 560,
    image: 'https://images.pexels.com/photos/12719126/pexels-photo-12719126.jpeg?auto=compress&cs=tinysrgb&w=600'
});

//se crea funcion para recorrer el array y crear etiquetas html para product-card, e insertarlas al html con manipulacion del DOM
function cardList(arr){
    for(product of arr){

        /**Contenedor div class=product-card */
        //.createElemet se usa para crear los elementos de html (etiquetas), se guarda el variable para manipularlo
        const productCard = document.createElement('div');
        //se le agrega al div la clase product-card con la funcion .classList.add()
        productCard.classList.add('product-card');
        const cardImg = document.createElement('img');
        //se agrega el src con la imgen que tenga el objeto producList, se agrega el atributo src con .setAtribute y se pasa dos parametros el nombre del atributo y el valor de este
        cardImg.setAttribute('src', product.image);

        /**contenedor <div clas=product-info> */
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        /*contenedor div */
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        //se agrega a la etiqueta p un texto con .innerText
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        //se agregaran las etiquetas P dentro del div
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        /*contenedor figure*/
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
        //se agregaran las etiquetas img dentro de Figure
        productInfoFigure.appendChild(productImgCard);

        /**Se agregan las etiquetas a los contenedores padres al final por que si no cuando las lee no estan creadas */

        //se agregaran las etiquetas div y figure dentro del div class=product-info
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        //se agregaran las etiquetas class=product-info dentro del div class=product-card
        productCard.appendChild(cardImg);
        productCard.appendChild(productInfo);

        //se agrega todo el contenedor product-card a html con la variable creada "cardContainer"
        cardContainer.appendChild(productCard);

    }
} 

cardList(productList);
