const imageSets = [
    [
      "https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png",
      '/img/a11.jpeg', '/img/a2.jpeg', '/img/a3.jpeg'
    ],
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ujnihDRAdDb_GZtE8wpakeqwlr0tjyE2Ow&usqp=CAU",
      '/img/a4.jpeg', '/img/a5.jpeg', '/img/a6.jpeg'
    ],
    [
      "https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png",
      '/img/a7.jpeg', '/img/a8.jpeg', '/img/a9.jpeg'
    ]
  ];
  
  const images = [0, 0, 0]; // Índice de imágenes actuales
  
  // Función para cambiar la imagen
  function changeImage(index, direction) {
    const imageElements = ['image1', 'image2', 'image3'];
    const currentImageIndex = images[index];
    let newIndex = currentImageIndex + direction;
  
    // Asegurar que el índice no se salga de los límites
    if (newIndex < 0) newIndex = imageSets[index].length - 1;
    if (newIndex >= imageSets[index].length) newIndex = 0;
  
    images[index] = newIndex;
    document.getElementById(imageElements[index]).src = imageSets[index][newIndex];
  }
  
  // Efecto de desplazamiento
  window.addEventListener('scroll', function() {
    const offsetY = window.scrollY;
    document.getElementById('producto1').style.transform = `translateX(${offsetY * 0.02}px)`;
    document.getElementById('producto2').style.transform = `translateY(${-offsetY * 0.02}px)`;
    document.getElementById('producto3').style.transform = `translateX(${offsetY * -0.02}px)`;
  });
  