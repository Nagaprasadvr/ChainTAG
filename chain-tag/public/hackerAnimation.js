const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

const katakana = "!@#$%^&*()_+~><,.?/:;";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const small = "abcdefghijklmnopqrstuvwxz";

const alphabet = katakana + latin + nums + small;

const fontSize = 20;
const columns = canvas.width;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "lightskyblue";
  context.font = fontSize + "Roboto Mono monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 30);
