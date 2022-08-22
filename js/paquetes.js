document.addEventListener('DOMContentLoaded', function () {


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

    //CARRITO

    function mostrarCarrito(){
        document.getElementById('carrito').style.display = 'block';
      }

    function ocultarCarrito(){
        document.getElementById('carrito').style.display = 'none';
    }
  
    let btnCarrito = document.querySelector('.container-precio');
  
    let btnClose = document.querySelector('.close-carrito'); 

      btnCarrito.addEventListener('click', () =>{
        mostrarCarrito();

        Swal.fire({
            icon: 'success',
            title: 'Se ha añadido al carrito.',
            background: '#666',
            color: '#fff',
            confirmButtonColor: "rgb(24, 102, 190)",
            confirmButtonText: "Aceptar",
            }
        )
    });

    btnClose.addEventListener('click', () =>{
        ocultarCarrito();
    })


}, false);