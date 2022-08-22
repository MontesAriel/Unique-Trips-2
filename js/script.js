document.addEventListener('DOMContentLoaded', function () {

    //esto es para las paginas de paquetes
    
    // console.log("data de neuquen:", data);
    // let tituloPagina = document.querySelector(".h3-paquetes");
    // tituloPagina.innerHTML = data.pagina.titulo;

    
    // let descripcionPagina = document.querySelector(".lista-columna-flex");
    // descripcionPagina.innerHTML = data.pagina.descripcion;

    //fin pagina de paquetes


    let searchBtn = document.querySelector('#search-btn');
    let searchBar = document.querySelector('.search-bar-container');
    let formBtn = document.querySelector('#login-btn');
    let loginForm = document.querySelector('.login-form-container');
    let formClose = document.querySelector('#form-close');
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');


    window.onscroll = () =>{
        searchBtn.classList.remove('fa-times');
        searchBar.classList.remove('active');
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        loginForm.classList.remove('active');
    }

    menu.addEventListener('click', () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    searchBtn.addEventListener('click', () =>{
        searchBtn.classList.toggle('fa-times');
        searchBar.classList.toggle('active');
    });

    formBtn.addEventListener('click', () =>{
        loginForm.classList.add('active');
    });

    formClose.addEventListener('click', () =>{
        loginForm.classList.remove('active');
    });

    var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
        },
    });

    var swiper = new Swiper(".brand-slider", {
        spaceBetween: 20,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            450: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          },
    });



    //FORMULARIO 

    let lugar = document.getElementById("paquetes");

    // FORMULARIO CONTACTO

    const formulario = document.getElementById("form");
    const buttonMailto = document.getElementById("gmail");

    formulario.addEventListener("submit", enviarDatos);


    function enviarDatos(event){
      event.preventDefault();

      const formulario = new FormData(this);
      console.log(formulario.get("name"));
      buttonMailto.setAttribute("href", `mailto:montesarieel@gmail.com?subject=${formulario.get("name")}${formulario.get("email")}&body=${formulario.get("message")}`);
      buttonMailto.click();
    }


    //FORMULARIO

    const selectPaquetes = document.querySelector('#select-paquetes');
    const btnPaquete = document.querySelector('#btnPaquete');

    btnPaquete.addEventListener('click', (e) => {
        e.preventDefault();
        let selectPaquetesOption = selectPaquetes.options[selectPaquetes.selectedIndex].value;
        window.location = selectPaquetesOption+".html";
    });


//BUSCADOR 
// searchBar----> search-bar-container (FORM QUE TIENE UN INPUT Y UN LABEL)
 //INPUT ---> search-bar
 //BUTON ----> login-btn


 const searchInput = document.querySelector('#search-bar');

 const filtrar = () => {
  //  console.log(searchInput.value);

  const texto = searchInput.value.toLowerCase();
  
  if(texto == "roma"){
    window.location = 'roma.html';
  } 
  
  else if(texto == "bariloche"){
    window.location = 'bariloche.html';
  }
  
  else if(texto == "neuquen"){
    window.location = 'neuquen.html';
  }
  
  else if(texto == "mendoza"){
    window.location = 'mendoza.html';
  }
  
  else if(texto == "salta"){
    window.location = 'salta.html';
  }
  
  else if(texto == "venecia"){
    window.location = 'venecia.html';
  }
  
  else if(texto == "tomorrowland"){
    window.location = 'tomorrowland.html';
  }
  
  else if(texto == "oktoberfest"){
    window.location = 'oktoberfest.html';
  }
  else if(texto == "fdd parana" || texto == "fiesta de disfraces"){
    window.location = 'fddparana.html';
  }
  
  else{
    return "sin resultado";
  }
 }

const searchLabel = document.querySelector('#btnLabel');

searchLabel.addEventListener('click', filtrar);




}, false);
