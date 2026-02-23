// Aquí puedes agregar animaciones futuras
console.log("Darr 🔥");



const loader = document.getElementById("loader");
const heroVideo = document.getElementById("heroVideo");

// hero pausado al inicio
heroVideo.pause();
heroVideo.style.opacity = "0";

// simulamos duración del loader (puede ser el tiempo del GIF)
setTimeout(() => {
  // fade del loader
  loader.style.opacity = "0";

  // hero comienza al mismo tiempo
  heroVideo.style.opacity = "1";
  heroVideo.play();

  // después del fade, ocultamos loader
  setTimeout(() => {
    loader.style.display = "none";
  }, 1500); // coincide con el CSS
}, 2000); // duración del loader (ajusta según tu GIF)


document.body.classList.add("no-scroll"); // bloquea scroll al iniciar

loaderVideo.addEventListener("ended", () => {

  loader.style.opacity = "0";
  heroVideo.style.opacity = "1";
  heroVideo.play();

  setTimeout(() => {
    loader.style.display = "none";
    document.body.classList.remove("no-scroll"); // vuelve a permitir scroll
  }, 1500);

});



//wifi
wifiBtn.addEventListener("click", function(e) {
  e.preventDefault();

  wifiText.textContent = "Copiada ✅";

  navigator.clipboard.writeText(password);

  setTimeout(() => {
    wifiText.textContent = "Contraseña WIFI";
  }, 2000);
});

