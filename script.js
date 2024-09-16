


// HEADER//

// If you want any specific interactivity for your navbar, you can add it here.
// Bootstrap’s dropdowns and toggler functionality is handled by Bootstrap’s JS already.
document.addEventListener("DOMContentLoaded", function() {
    // Example: Toggle active state on navbar links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
  

// CARTAS//


// Datos para Cartas
const imageSetsCartas = [
    [
      "https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png",
      '/img/a1.jpeg', '/img/a2.jpeg', '/img/a3.jpeg'
    ]
  ];
  let imagesCartas = [4];
  
  // Cambiar imagen de Cartas
  function changeImageCartas(index, direction) {
    const currentImageIndex = imagesCartas[index];
    let newIndex = currentImageIndex + direction;
  
    if (newIndex < 0) newIndex = imageSetsCartas[index].length - 1;
    if (newIndex >= imageSetsCartas[index].length) newIndex = 0;
  
    imagesCartas[index] = newIndex;
    document.getElementById('cartas-image1').src = imageSetsCartas[index][newIndex];
  }
  
// CATEGORIAS//
 
// Datos para Categorias
  const imageSetsCategorias = [
    [
      "https://via.placeholder.com/150",
      '/img/a4.jpeg', '/img/a5.jpeg', '/img/a6.jpeg'
    ]
  ];
  let imagesCategorias = [0];
  
  // Cambiar imagen de Categorias
  function changeImageCategorias(index, direction) {
    const currentImageIndex = imagesCategorias[index];
    let newIndex = currentImageIndex + direction;
  
    if (newIndex < 0) newIndex = imageSetsCategorias[index].length - 1;
    if (newIndex >= imageSetsCategorias[index].length) newIndex = 0;
  
    imagesCategorias[index] = newIndex;
    document.getElementById('categorias-image1').src = imageSetsCategorias[index][newIndex];
  }
  

    // Scroll Listener para Back Ground
    
    const backgroundContainer = document.querySelector('.background-container');
    let zoom = false;

    function changeBackground () {
        zoom = true;
        setTimeout(() => {
            zoom = false;
            backgroundContainer.classList.remove('zoom-out');
          }, 100000); // Duración de la animación
    }

    window.addEventListener('scroll', () => {
        if (!zoom) {
          changeBackground();
          backgroundContainer.classList.add('zoom-out');
        }
      });

   
////////////////////////////////////////////
  
    // Scroll Listener para Landing
    window.addEventListener('scroll', function() {
      const offsetY = window.scrollY;
      if (offsetY > 0) {
        /* document.getElementById(' landing_text-contenedor').style.display = 'none';  */
       
       /*  document.getElementById('landing_contenedor').style.position = "relative"; */
       /*  document.getElementById('tex_top-container').style.marginTop = '50%'; */
      
       
       /*  document.getElementById('tex_btn-container').style.marginLeft = 'auto'; */
        /* document.getElementById('tex_btn-container').style.marginLeft = '10%' */
       /*  document.getElementById('tex_btn-container').style.width = '20%'; */
      /*   document.getElementById('tex_btn-container').style.marginRight = '4%' */
      document.getElementById('tex_btn-container').style.transform = `translateY(${offsetY * -3}px)`;
      document.getElementById('tex_btn-container').style.backgroundColor = 'transparent';
   
      document.getElementById('tex_btn-container--text').style.opacity = `${0 + offsetY * 6}`;
       /*  document.getElementById('tex_btn-container').style.opacity = `${0 + offsetY * 60}`; */
      /*   document.getElementById('tex_btn-container').style.transform = `translateY(${offsetY * -1}px)`; */
        document.getElementById('tex_top-container').style.transform = `translateX(${offsetY * -5}px)`;
        document.getElementById('tex_top-container').style.marginLeft = 'auto';
     /*    document.getElementById('tex_top-container').style.width = '80%'; */
        document.getElementById('tex_top-container').style.marginTop = '8%'

      } else {
        /* document.getElementById('tex_top-container').style.width = '100%'; */
        document.getElementById('tex_top-container').style.transform = `translateX(0)`;
         document.getElementById('tex_top-container').style.marginTop = '0'
      /*   document.getElementById('tex_btn-container').style.width = '100%'; */
      /*    document.getElementById('tex_btn-container').style.marginTop = '0%' */
        document.getElementById('tex_btn-container--text').style.opacity = (0);
       
        document.getElementById('hero-logos').style.opacity = (1);
       /*  document.getElementById('landing_contenedor').style.display = "block"; */

      }
    });


// Media Query Listener para cambiar el ancho en 768px o más
const mediaQuery = window.matchMedia('(min-width: 769px)');

function handleWidthChange(e) {
   const container = document.getElementById('tex_btn-container');

   if (e.matches) { // Si el ancho es mayor o igual a 768px
    /* container.style.opacity = `${0 + offsetY * 60}`; */
    /* container.style.marginLeft = 'auto';  */
/*   document.getElementById('tex_btn-container').style.marginLeft = '10%'; */
container.style.width = '100%';
container.style.marginLeft = 'auto';
container.style.marginRight = '1%';
    

   } else {
      container.style.width = '100%'; // Restaurar al 100% si es menor
   }
};

// Llama la función de inmediato y cuando cambia el tamaño
mediaQuery.addListener(handleWidthChange);
handleWidthChange(mediaQuery);



   // Scroll Listener para tex_top
 /* window.addEventListener('scroll', function() { */
 /*    const offsetY = window.scrollY; */
 /*    if (offsetY > 0) { */
/*       document.getElementById('tex_top-container').style.transform = `translateX(${offsetY * .2}px)`;
      document.getElementById('tex_top-container').style.filter = 'drop-shadow(5px 5px 0 blue) hue-rotate(-337deg) drop-shadow(5px 5px 0 #ff1500)';
      document.getElementById('tex_top-container').style.border= '1px solid blue';
 */     
 /* document.getElementById('tex_top-container').style.width = '50%';  */
 /* document.getElementById('tex_btn-container').style.width = '50%';  */
 /* document.getElementById('tex_btn-container').style.marginLeft = 'auto'; */
 
 

  

   /*  } else { */
      /* document.getElementById('tex_top-container').style.transform = `translateX(0)`; */
      /* document.getElementById('tex_top-container').style.filter = 'none'; */
      /* document.getElementById('tex_top-container').style.border= 'none'; */
      /* document.getElementById('tex_top-container').style.width = '100%';  */
  
   /*  } */
     /*  document.getElementById('tex_top-container').style.opacity = `${1 - offsetY / 200}`; */

    
    /*   document.getElementById('tex_btn-container').style.opacity = `${0 + offsetY * 60}`;  */
   /*  document.getElementById('tex_btn-container').style.transform = `translateY(${offsetY * .2}px)` */
   /*  document.getElementById('tex_btn-container').style.transform = `translateX(${offsetY * -1}px)`;  */
   /* document.getElementById('tex_btn-container').style.backgroundColor = 'transparent'; */
   
   /*  document.getElementById('tex_btn-container').style.filter = 'grayscale(0.4) blur(0.5px)';  */
    
       
 /*  }); */

/*     // Scroll Listener para transcriptions */
  window.addEventListener('scroll', function() {
    const offsetY = window.scrollY;
    if (offsetY > 0) {
/*       document.getElementById('transcriptions-container').style.backgroundColor = 'transparent'; // Esto remueve el color de fondo
 */

    } else {
/*       document.getElementById('transcriptions-container').style.backgroundColor = 'white'; // Esto remueve el color de fondo
 */
    }
    
    /* document.getElementById('transcriptions-container').style.filter = 'grayscale(1) blur(0.6px)'; */
  });


  ////////////////////////////////////////////


  // Scroll Listener para Cartas
  window.addEventListener('scroll', function() {
    const offsetY = window.scrollY;
    document.getElementById('cartas-producto1').style.transform = `translateX(${offsetY * 0.02}px)`;
  });
  
  // Scroll Listener para Categorias
  window.addEventListener('scroll', function() {
    const offsetY = window.scrollY;
    document.getElementById('categorias-producto1').style.transform = `translateY(${-offsetY * 0.02}px)`;
  });
  









const imageSets = {
    1: ['/img/a11.jpeg', '/img/a2.jpeg', '/img/a3.jpeg'],
    2: ['/img/a4.jpeg', '/img/a5.jpeg', '/img/a6.jpeg'],
    3: ['/img/a7.jpeg', '/img/a8.jpeg', '/img/a9.jpeg']
  };
  
  let currentImageIndex = {
    1: 0,
    2: 0,
    3: 0
  };
  
  document.querySelectorAll('.prev-btn').forEach((btn, idx) => {
    btn.addEventListener('click', () => showPrevImage(idx + 1));
  });
  
  document.querySelectorAll('.next-btn').forEach((btn, idx) => {
    btn.addEventListener('click', () => showNextImage(idx + 1));
  });
  
  function showPrevImage(index) {
    currentImageIndex[index] = currentImageIndex[index] === 0 ? imageSets[index].length - 1 : currentImageIndex[index] - 1;
    document.getElementById(`image${index}`).src = imageSets[index][currentImageIndex[index]];
  }
  
  function showNextImage(index) {
    currentImageIndex[index] = (currentImageIndex[index] + 1) % imageSets[index].length;
    document.getElementById(`image${index}`).src = imageSets[index][currentImageIndex[index]];
  }


// FOOTER //


// JavaScript para añadir el año dinámicamente en el footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();
