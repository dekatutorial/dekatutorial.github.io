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
    files: ["explosion0.mp3", "explosion1.mp3", "explosion2.mp3"],
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
fireworks.start();
