document.addEventListener("DOMContentLoaded", () => {
  const privateBtn = document.getElementById("btn-private");
  if (privateBtn) {
    privateBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Proyecto privado empresarial sujeto a acuerdo de confidencialidad.");
    });
  }
});
