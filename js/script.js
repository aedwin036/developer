const buttons = document.querySelectorAll('.navbar button');
const sections = document.querySelectorAll('.section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.section;

    sections.forEach(section => {
      section.classList.remove('active');
    });

    document.getElementById(target).classList.add('active');
  });
});

// Lógica del formulario de WhatsApp
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("formWhatsApp").addEventListener("submit", function(e) {
    e.preventDefault(); // 1. Evitar que el formulario recargue la página

    // 2. Capturar los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    // 3. Configurar número de destino y construir el mensaje
    const telefono = "573108694173"; // 👈 Reemplaza esto con tu número real (código país + número)
    const texto = `Hola, me interesa un servicio de diseño web. 👋\n\nNombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`;
    
    // 4. Crear la URL de WhatsApp y abrirla en nueva pestaña
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  });
});

// Lógica de los Banners (Sliders) Independientes
document.addEventListener("DOMContentLoaded", () => {
  
  // Función constructora para iniciar un slider
  function initBanner(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const slides = container.querySelectorAll('.banner-slide');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    let currentIndex = 0;
    let slideInterval;

    // Función para mostrar la imagen actual
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }

    // Funciones de navegación
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    // Control del intervalo automático
    function startAutoSlide() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 6000); // Cambio cada 6 segundos
    }

    // Eventos de botones (reinician el timer)
    nextBtn.addEventListener('click', () => { nextSlide(); startAutoSlide(); });
    prevBtn.addEventListener('click', () => { prevSlide(); startAutoSlide(); });

    startAutoSlide(); // Iniciar automáticamente
  }

  // Inicializar ambos banners
  initBanner('banner-left');
  initBanner('banner-right');
});