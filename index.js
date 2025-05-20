document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const contactModalEl = document.getElementById('contactModal');  
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Evita que el formulario se envíe normalmente

      // Muestra el modal de Bootstrap
        const contactModal = new bootstrap.Modal(contactModalEl);
        contactModal.show();
      // Limpia los campos del formulario
    contactForm.reset();
    });
});
    function multiplicar() {
      const numero1 = parseFloat(document.getElementById('num1').value) || 0;
      const numero2 = parseFloat(document.getElementById('num2').value) || 0;
      const resultado = numero1 * numero2;
      document.getElementById('resultado').textContent = resultado;
    }