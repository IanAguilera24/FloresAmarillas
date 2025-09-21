function checkDateAccess() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  
  let targetDate = new Date(currentYear, 8, 21); // 21 de septiembre del año actual
  
  // Solo usar el próximo año si ya pasamos completamente el 21 de septiembre
  if (currentMonth > 8 || (currentMonth === 8 && currentDay > 21)) {
    targetDate.setFullYear(currentYear + 1);
  }
  
  console.log("Fecha actual:", currentDate.toLocaleDateString("es-ES"));
  console.log("Fecha objetivo:", targetDate.toLocaleDateString("es-ES"));
  
  if (currentDate < targetDate) {
    const timeDiff = targetDate - currentDate;
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    console.log("Días restantes:", days);

    document.body.innerHTML = `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 20px;
        box-sizing: border-box;
      ">
        <div style="
          text-align: center;
          color: white;
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 500px;
        ">
          <h1 style="
            font-size: 2.5em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          ">🌸</h1>
          <h2 style="
            font-size: 1.8em;
            margin-bottom: 20px;
            font-weight: 300;
          ">Contenido Bloqueado</h2>
          <p style="
            font-size: 1.2em;
            line-height: 1.6;
            margin-bottom: 30px;
            opacity: 0.9;
          ">
            Esta página estará disponible en<br>
            <strong style="font-size: 2em; color: #FFD700;">${days}</strong><br>
            ${days === 1 ? "día" : "días"}
          </p>
          <div style="
            font-size: 1em;
            opacity: 0.7;
            font-style: italic;
          ">
            Disponible el: 21 de Septiembre de ${targetDate.getFullYear()}
          </div>
          <div style="
            font-size: 0.9em;
            opacity: 0.6;
            margin-top: 20px;
          ">
            Fecha actual: ${currentDate.toLocaleDateString("es-ES")}
          </div>
        </div>
      </div>
    `;

    return false;
  }

  return true;
}

// Ejecutar la verificación
if (!checkDateAccess()) {
  throw new Error("Acceso bloqueado hasta el 21 de septiembre");
}

// FUNCIÓN DE PRUEBA - ELIMINAR DESPUÉS
function testDateAccess() {
  // Simular que es 21 de septiembre
  const fakeDate = new Date(2025, 8, 21); // 21 de septiembre de 2024

  // Sobrescribir Date temporalmente
  const originalDate = Date;
  window.Date = function (...args) {
    if (args.length === 0) {
      return fakeDate;
    }
    return new originalDate(...args);
  };
  window.Date.prototype = originalDate.prototype;

  console.log("Simulando fecha: 21 de septiembre");
  console.log("Acceso permitido:", checkDateAccess());

  // Restaurar Date original
  window.Date = originalDate;
}

// Ejecutar prueba (comentar después)
//testDateAccess();


// Sistema de letras sincronizadas
const audio = document.querySelector("audio");
const lyrics = document.querySelector("#lyrics");

// Aquí necesitarías poner tu propio contenido o fragmentos muy cortos
const lyricsData = [
  { text: "Préstame tu peine", time: 46.5 },
  { text: "Y péiname el alma", time: 50 },
  { text: "Desenrédame", time: 54.5 },
  { text: "Fuera de este mundo", time: 58.5 },
  { text: "Dime que no estoy", time: 62.5 },
  { text: "Soñándote", time: 65.5 },
  { text: "Enséñame", time: 70 },
  { text: "De qué estamos hechos", time: 73.5 },
  { text: "Que quiero orbitar planetas", time: 78 },
  { text: "Hasta ver uno vacío", time: 81 },
  { text: "Que quiero irme a vivir", time: 86 },
  { text: "Pero que sea contigo", time: 89 },
  { text: "Viento", time: 93 },
  { text: "Amárranos", time: 96.5 },
  { text: "Tiempo", time: 100.5 },
  { text: "Detente muchos años", time: 104.5 },
  { text: "Viento", time: 107.5 },
  { text: "Amárranos", time: 111.5 },
  { text: "Tiempo", time: 115.5 },
  { text: "Detente muchos años", time: 120 },
  { text: "Préstame tu peine", time: 138.5 },
  { text: "Y péiname el alma", time: 142.5 },
  { text: "Purifícame", time: 146.5 },
  { text: "No me abandones", time: 150 },
  { text: "Préstame tu sueño", time: 154.5 },
  { text: "Y duérmeme", time: 158 },
  { text: "Embrújame", time: 162 },
  { text: "Volvámonos eternos", time: 166 },
  { text: "Que quiero orbitar planetas", time: 170 },
  { text: "Hasta ver uno vacío", time: 173.5 },
  { text: "Que quiero irme a vivir", time: 178.5 },
  { text: "Pero que sea contigo", time: 181.5 },
  { text: "Viento", time: 185 },
  { text: "Amárranos", time: 189 },
  { text: "Tiempo", time: 193 },
  { text: "Detente muchos años", time: 196.5 },
  { text: "Viento", time: 200.5 },
  { text: "Amárranos", time: 204 },
  { text: "Tiempo", time: 208 },
  { text: "Detente muchos años", time: 211.5 },
  { text: "Viento", time: 215.5 },
  { text: "Amárranos", time: 219 },
  { text: "Tiempo", time: 223 },
  { text: "Detente muchos años", time: 227 },
];

// Debug: Ver el tiempo actual del audio
audio.addEventListener("timeupdate", () => {
  //console.log("Tiempo actual:", audio.currentTime);
});

// Debug: Ver cuando se encuentra una línea
function updateLyrics() {
  if (audio.paused) return;

  const time = audio.currentTime;
  //console.log("Buscando en tiempo:", time); // Para debug

  const currentLine = lyricsData.find((line, index) => {
    const nextLine = lyricsData[index + 1];
    const isInRange = nextLine
      ? time >= line.time && time < nextLine.time
      : time >= line.time && time < line.time + 3;

    if (isInRange) {
      console.log("Línea encontrada:", line.text, "en tiempo:", line.time);
    }
    return isInRange;
  });

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.textContent = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.textContent = "";
  }
}

// Actualización más frecuente para mejor sincronización
let lyricsInterval;

audio.addEventListener("play", () => {
  clearInterval(lyricsInterval);
  lyricsInterval = setInterval(updateLyrics, 50);
});

audio.addEventListener("pause", () => {
  clearInterval(lyricsInterval);
  lyrics.style.opacity = 0;
});

audio.addEventListener("ended", () => {
  clearInterval(lyricsInterval);
  // Si no tienes loop activado, reiniciar manualmente:
  audio.currentTime = 0;
  audio.play();
});

// Opcional: Limpiar las letras cuando se busca en la canción
audio.addEventListener("seeking", () => {
  lyrics.style.opacity = 0;
});

audio.addEventListener("seeked", () => {
  updateLyrics(); // Actualizar inmediatamente después de buscar
});

// Frases rotativas
const frases = [
  "Espero estas flores amarillas te gusten, porque sé que las hormigas causaron caos, pero no quería dejarte sin este obsequio.",
  "En verdad estoy muy enamorado y agradecido contigo. Simple y sencillamente por una razón. Por ser perfecta.",
  "Gracias por llegar a mi vida, en verdad me haces el hombre más feliz del mundo.",
  "Yo contigo quiero llegar hasta viejitos.",
  "Cada vez que pienso en mi futuro, tú estás ahí.",
  "No siempre logro estar a tu altura, pero siempre es un sueño poder estar tan siquiera a tu lado.",
  "Realmente no estoy tan menso, pero creeme que estar a tu lado me deja así porque estoy muy enamorado de ti.",
  "Me gustas mas que la carnita asada y los chilaquiles.",
  "Sé que te debo tu camioneta del año.",
  "Eres el amor de mi vida.",
  "Como me encanta que hagas equipo con tu suegra para quemarme, amo que se lleven bien",
  "Eres mi fresita bebé y siempre lo vas a ser",
  "No cambiaría nada de ti porque eres perfecta, pero cambiaria todo de mi para ser perfecto para ti",
  "Cocinas increible, tus salsas te quedan delciosas jiji",
];

let indiceActual = 0;
const tituloElement = document.getElementById("titulo-rotativo");

function cambiarFrase() {
  // Fade out
  tituloElement.style.animation = "fadeOut 1s ease-in-out forwards";

  setTimeout(() => {
    // Cambiar texto
    indiceActual = (indiceActual + 1) % frases.length;
    tituloElement.textContent = frases[indiceActual];

    // Fade in
    tituloElement.style.animation = "fadeIn 1s ease-in-out forwards";
  }, 1000);
}

// Cambiar frase cada 6 segundos
setInterval(cambiarFrase, 6000);

// Código para el fondo dinámico y elementos celestiales
const hour = new Date().getHours();
const body = document.body;
const sun = document.querySelector(".sun");
const clouds = document.querySelectorAll(".cloud");
const moon = document.querySelector(".moon");
const stars = document.querySelectorAll(".star");

if (hour >= 6 && hour < 12) {
  // Mañana (6 AM - 12 PM)
  body.style.background = "linear-gradient(to bottom, #87CEEB, #FFFFFF)";
  if (sun) sun.style.opacity = "1";
  clouds.forEach((cloud) => (cloud.style.opacity = "0.8"));
  if (moon) moon.style.opacity = "0";
  stars.forEach((star) => (star.style.opacity = "0"));
} else if (hour >= 12 && hour < 18) {
  // Tarde (12 PM - 6 PM)
  body.style.background = "linear-gradient(to bottom, #FFA500, #FF4500)";
  if (sun) sun.style.opacity = "1";
  clouds.forEach((cloud) => (cloud.style.opacity = "0.6"));
  if (moon) moon.style.opacity = "0";
  stars.forEach((star) => (star.style.opacity = "0"));
} else {
  // Noche (6 PM - 6 AM)
  body.style.background = "linear-gradient(to bottom, #000428, #004e92)";
  if (sun) sun.style.opacity = "0";
  clouds.forEach((cloud) => (cloud.style.opacity = "0"));
  if (moon) moon.style.opacity = "1";
  stars.forEach((star) => (star.style.opacity = "1"));
}

