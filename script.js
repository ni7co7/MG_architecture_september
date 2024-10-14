


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
       /* document.getElementById('landing_overlayID').style.opacity = `${.65  + offsetY * 60}`;  */
     /*   document.getElementById('landing_overlayID').style.backgroundImage = "none";  */
         /*  document.getElementById('landing_overlayID').style.marginLeft = 'auto'; */
          /*  document.getElementById('landing_overlayID').style.paddingBottom = '50%' */
/*           document.getElementById('landing_overlayID').style.backgroundColor =     '#33333354';
*/          
      /* document.getElementById(' landing_text-contenedor').style.display = 'none';  */
     
     /*  document.getElementById('landing_contenedor').style.position = "relative"; */
     /*  document.getElementById('tex_top-container').style.marginTop = '50%'; */
    
    /*  document.getElementById(tex_top-text).style.transform = `translateX(${offsetY * -4}px)`; */
  /*     document.getElementById('tex_btn-container').style.marginLeft = 'auto'; */
      /* document.getElementById('tex_btn-container').style.marginLeft = '10%' */
/*         document.getElementById('tex_btn-container').style.width = '50%';
*/       /*  document.getElementById('tex_btn-container').style.height = '250px'; */
/*         document.getElementById('tex_btn-container').style.marginRight = 'auto'  */  
  /* document.getElementById('tex_btn-container').style.transform = `translateX(${offsetY * 1}px)`; */
    /* document.getElementById('tex_btn-container').style.backgroundColor = 'transparent'; */
 
/*       document.getElementById('tex_btn-container--text').style.opacity = `${0 + offsetY * 6}`;
*/   /*      document.getElementById('tex_btn-container').style.opacity = `${0 + offsetY * 60}`;  */
    /*   document.getElementById('tex_btn-container').style.transform = `translateX(${offsetY * -4}px)`; */
    /*   document.getElementById('tex_btn-container').style.marginRight = 'auto'; */
    /*   document.getElementById('tex_btn-container').style.width = '50%'; */
    /*   document.getElementById('tex_btn-container').style.paddingTop = '5%'; */
    /*   document.getElementById('tex_btn-container').style.marginTop = '10%'; */



     /*  document.getElementById('tex_top-container').style.transform = `translateX(${offsetY * 0}px)`; */
     /*  document.getElementById('tex_top-container').style.display = 'block'; */
/*         document.getElementById('tex_top-container').style.transform = `translateY(${offsetY * .1}px)`;
*/      /*   document.getElementById('tex_top-container').style.marginLeft = 'auto'; */
    /*   document.getElementById('tex_top-container').style.width = '50%'; */
    /*   document.getElementById('tex_top-container').style.height = '50%'; */
    /*   document.getElementById('tex_top-container__text').style.paddingTop = '25%'; */
    /*    document.getElementById('tex_top-container__text').style.transform = `translateY(${offsetY * 1}px)`;  */

    /*  */
     /*  document.getElementById('  tex_top-container__text').style.height = '100%'; */
     /*  document.getElementById('tex_top-container').style.marginTop = '10%'; */
     
      /* document.getElementById('tex_top-container__img').style.maxWidth = '110%'; */
    /*   document.getElementById('tex_top-container__img').style.width = '50%'; */
    /* document.getElementById('tex_top-container__text').style.paddingTop = '30%'; */
    /*   document.getElementById('tex_top-container__img').style.transform = `translateX(${offsetY * 4}px)`; */
      /*  document.getElementById('tex_top-container__img').style.transform = `translateY(${offsetY * -.5}px)`;  */
    /*   document.getElementById('tex_top-container__img').style.marginLeft = '50%'; */
    /*   document.getElementById('tex_top-container__img').style.width = '40%'; */
    /*   document.getElementById('tex_top-container__img').style.marginBottom = '21%'; */
   /*     */
     

     /*  document.getElementById('tex_top-container').style.marginTop = '.2%'; */
   
     

     
     /*  document.getElementById(' tex_top-container__text').style.transform = `translateX(${offsetY * 1}px)`; */
      

    } else {
/*         document.getElementById('landing_overlayID').style.opacity = `1`; 
*//*         document.getElementById('landing_overlayID').style.width = '100%';
*//*             document.getElementById('landing_overlayID').style.marginLeft = '0';
*/           /*   document.getElementById('landing_overlayID').style.paddingTop = '10%' */
/*           document.getElementById('landing_overlayID').style.backgroundColor =     '#333333';
*/      /*     document.getElementById('tex_top-container').style.display = 'flex'; */
    /*   document.getElementById('tex_top-container').style.width = '100%'; */
      /* document.getElementById('  tex_top-container__text').style.height = '100%'; */
     /*  document.getElementById('tex_top-container').style.height = '110%'; */
    /*   document.getElementById('tex_top-container__img').style.width = '18%'; */
    /*   document.getElementById('tex_top-container__img').style.height = '30%'; */

       /* document.getElementById('tex_top-container__img').style.marginLeft = 'auto';  */
    /*   document.getElementById('tex_top-container').style.height = '100%'; */
    /*   document.getElementById('tex_top-container').style.textAlign = 'center'; */
      /*    document.getElementById('tex_btn-container').style.marginTop = '0%' */
  /*     document.getElementById('tex_top-container').style.transform = `translateX(0)`; */
  /*      document.getElementById('tex_top-container').style.marginTop = '0' */
  /*     document.getElementById('tex_top-container__img').style.width = '100%'; */
    /*    document.getElementById('tex_btn-container').style.marginTop = '0%' */
     /*  document.getElementById('tex_btn-container--text').style.opacity = (0); */
/*        document.getElementById('tex_btn-container').style.opacity = (0);
*/       
     
     /*  document.getElementById('hero-logos').style.opacity = (1); */
     /*  document.getElementById('landing_contenedor').style.display = "block"; */

    }
  });


 
 

/*   const mediaQueryL = window.matchMedia('(min-width: 299px)'); { */
/*   document.querySelector('.btn btn-outline-info').addEventListener('mouseover', function() { */
/*     document.querySelector('.tex_btn-text').style.border = '2px solid #275767'; */
/* }); */
/*  */
/* document.querySelector('.btn btn-outline-info').addEventListener('mouseout', function() { */
/*     document.querySelector('.tex_btn-text').style.border = '2px solid transparent'; */
/* }); */
/*  */
/*   } */
/*  */


// Seleccionamos todas las imágenes y los contenedores de categorías
/* const img1 = document.getElementById('image1'); */
/* const img2 = document.getElementById('image'); */
/* const img3 = document.getElementById('image3'); */
/* const categoria1 = document.getElementById('categoria1'); */
/* const categoria2 = document.getElementById('categoria2'); */
/* const categoria3 = document.getElementById('categoria3'); */

// Función para mostrar una categoría y ocultar las demás
function mostrarCategoria(categoria) {
  // Ocultamos todos los contenedores
 /*  categoria1.classList.remove('active'); */
 /*  categoria2.classList.remove('active'); */
 /*  categoria3.classList.remove('active'); */
  
  // Mostramos el contenedor correspondiente
  /* categoria.classList.add('active'); */
}

// Añadimos eventos "hover" a cada imagen
/* img1.addEventListener('mouseover', () => mostrarCategoria(categoria1)); */
/* img2.addEventListener('mouseover', () => mostrarCategoria(categoria2)); */
/* img3.addEventListener('mouseover', () => mostrarCategoria(categoria3)); */

 
const mediaQueryL = window.matchMedia('(min-width: 799px)');

function handleWidthChangeL(e)  { 
  const texTop = document.getElementById('tex_top-container__text');
  const imagenenaI = document.getElementById('tex_top-ima');
  const container = document.getElementById('tex_top-text');
  if (e.matches) { 
     window.addEventListener('scroll', function()   { 
      const offsetY = window.scrollY;
      if (offsetY > 0) {
        imagenenaI.style.display = "block";
         imagenenaI.style.transform = `translateY(${offsetY * 2}px)`; 
        texTop.style.transform = `translateX(${offsetY * 2 /1.9}px)`;
        texTop.style.backgroundColor = 'transparent';
        texTop.style.color = "green";

        container.style.backgroundColor = 'transparent';
      } else {
         imagenenaI.style.transform = `translateY(0px)`;  // Si el desplazamiento es 0 o menor
      } 
    }); 
  } else {
    // Aquí puedes agregar lógica para manejar cuando el ancho es menor a 799px, si lo necesitas.
    // Por ejemplo, podrías remover el evento de scroll o resetear la posición de la imagen.
    imagenenaI.style.transform = `translateY(0px)`; 
  }
}

// Escucha cambios en el ancho de la ventana
mediaQueryL.addListener(handleWidthChangeL);

// Llama la función inmediatamente para manejar el estado inicial
handleWidthChangeL(mediaQueryL);




// Media Query Listener para cambiar el ancho en 599px o menos 
/* const mediaQueryL = window.matchMedia('(min-width: 299px)'); */
const mediaQuery = window.matchMedia('(max-width: 599px)');
function handleWidthChange(e) {
  const  top = document.getElementById('tex_top-text');
  const  imagenena = document.getElementById('tex_top-ima');
  const nosotros = document.getElementById('transcriptions-container'); 
  const navbar = document.getElementById('navbar');
  const cartas = document.getElementById('cartas');
  const texTop = document.getElementById('tex_top-container__text');
  const imagenenaI = document.getElementById('tex_top-ima');
  const container = document.getElementById('tex_top-text');
  /*  const container = document.getElementById('tex_top-container'); */
   const containerBtn = document.getElementById('tex_btn-container');
if (e.matches) { // Si el ancho es igual o menor a 599px
  window.addEventListener('scroll', function() {
    const offsetY = window.scrollY;
        if (offsetY > 0) {
         /*  document.querySelector('.tex_btn-text').style.border = '2px solid #275767'; */
          top.style.transform = `translateX(${offsetY * -2}px)`;
          imagenena.style.transform = `translateX(${offsetY * 2}px)`;
          containerBtn.style.transform = `translateY(${offsetY * -.2}px)`;
          navbar.style.opacity = 1;
          imagenenaI.style.display = "block";
          imagenenaI.style.transform = `translateY(${offsetY * 2}px)`;
          texTop.style.transform = `translateX(${offsetY * 2 /1.9}px)`;
          texTop.style.backgroundColor = 'transparent';
          texTop.style.color = "green";
          container.style.backgroundColor = 'transparent';
       /*    navbar.style.zIndex = -1; */
       /*    nosotros.style.transform = `translateY(${offsetY * -1}px)`; */
        } else {
          top.style.transform  = `translateX(${offsetY * 0}px)`;
          imagenena.style.transform= `translateX(${offsetY * 0}px)`;
          containerBtn.style.transform = `translateY(${offsetY * 0}px)`;
          nosotros.style.transform = `translateY(${offsetY * 0}px)`; 
          navbar.style.opacity = 0;
         /*  navbar.style.display = "bolck"; */
         /* navbar.style.position = 1; */
      /*    navbar.style.zIndex = 0; */
        }
  });

} else {
  
  /* imagenena.style.transform = `translateY(${offsetY * -2}px)`; */
  /*  */
       
           
       
       
       
  };
 

}

;
mediaQuery.addListener(handleWidthChange);
handleWidthChange(mediaQuery);
// Media Query Listener para cambiar el ancho en 768px o más
/* const mediaQuery = window.matchMedia('(min-width: 769px)'); */

/* function handleWidthChange(e) { */
 /* const container = document.getElementById('tex_btn-container'); */

 /* if (e.matches) { */ // Si el ancho es mayor o igual a 768px
 /*  container.style.visibility = 'hidden'; */
/*     container.style.display = 'none'; */
/*   container.style.opacity = `${0 + offsetY * 600}`; */
  /* container.style.marginLeft = 'auto';  */
/*   document.getElementById('tex_btn-container').style.marginLeft = '10%'; */
/* container.style.width = '50%'; */
/* container.style.height = '50%'; */
/* container.style.transform = `translateX(${offsetY * -1}px)`;  */



/* container.style.marginRight = 'auto'; */
/* container.style.marginBottom = '-50%'; */
/* container.style.position = 'absolute'; */

/* container.style.height = '250px'; */
/* container.style.backgroundColor = 'transparent'; */
/*   container.style.opacity = `0`;  */
/* container.style.display = 'none'; */


/*    } else { */
 /*  container.style.visibility = 'visible'; */
   /*  container.style.width = '100%'; */ // Restaurar al 100% si es menor
    /*  container.style.opacity = `${0 + offsetY * 60}`; */
   /*  container.style.display = 'block'; */
    /* container.style.opacity = `1`;  */
  
/*    } */
/* }; */

// Llama la función de inmediato y cuando cambia el tamaño
/* mediaQuery.addListener(handleWidthChange); */
/* handleWidthChange(mediaQuery); */
/*  */


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
  1: ['https://raw.githubusercontent.com/ni7co7/MG_architecture_september/refs/heads/main/img/a11.jpeg', 'https://raw.githubusercontent.com/ni7co7/MG_architecture_september/refs/heads/main/img/a2.jpeg', 'https://raw.githubusercontent.com/ni7co7/MG_architecture_september/refs/heads/main/img/a3.jpeg'],
  2: ['https://raw.githubusercontent.com/ni7co7/MG_architecture_september/refs/heads/main/img/a4.jpeg', 'https://raw.githubusercontent.com/ni7co7/MG_architecture_september/refs/heads/main/img/a5.jpeg', 'https://raw.githubusercontent.com/ni7co7/MG_architecture_september/refs/heads/main/img/a6.jpeg'],
  3: ['https://raw.githubusercontent.com/ni7co7/MG_architecture_september/refs/heads/main/img/a7.jpeg', 'https://raw.githubusercontent.com/ni7co7/MG_architecture_september/refs/heads/main/img/a8.jpeg', 'https://raw.githubusercontent.com/ni7co7/MG_architecture_september/refs/heads/main/img/a9.jpeg']
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
