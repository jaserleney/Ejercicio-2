const d = document;
const $windowsModal = d.querySelector(".modal");
const $cantidad = d.getElementById("cantidad");
let value = 0;

d.addEventListener("click", (e) => {
  if (e.target.matches(".pedir")) {
    $windowsModal.showModal();
  }

  if (e.target.matches("#reduce")) {
    if (value < 1) {
      return false;
    }
    value--;
    $cantidad.innerHTML = `${value}`;
  }

  if (e.target.matches("#increment")) {
    value++;
    $cantidad.innerHTML = `${value}`;
  }

  if (e.target.matches(".agregar")) {
    if (value < 1) {
      alert("Debe agregar al menos un producto");
      return false;
    }
    alert("Agregado con exito");
    window.location.reload();
  }

  if (e.target.matches(".close") || e.target.matches(".close *")) {
    $windowsModal.close();
  }
});
