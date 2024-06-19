const container = document.querySelector(".fireworks");
const fireworks = new Fireworks.default(container, {
  intensity: 40,
  mouse: {
    click: true,
    move: false,
    max: 1,
  },
  sound: {
    enabled: 1,
    files: ["https://dekatutorial.github.io/v/fireworks/explosion0.mp3", "https://dekatutorial.github.io/v/fireworks/explosion1.mp3", "https://dekatutorial.github.io/v/fireworks/explosion2.mp3"],
    volume: {
      min: 10,
      max: 15,
    },
    rocketsPoint: {
      min: 20,
      max: 80,
    },
  },
});
//fireworks.start();
