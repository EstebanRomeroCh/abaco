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

    document.getElementById('formDonacion').addEventListener('submit', function(e) {
      e.preventDefault();
      const valor = parseFloat(document.getElementById('valorDonacion').value);
      const meses = parseInt(document.getElementById('meses').value);
      const total = valor * meses;

      document.getElementById('resultado').textContent =
        `Donación mensual de $${valor.toLocaleString()} durante ${meses} mes(es) = Total: $${total.toLocaleString()}`;
    });
