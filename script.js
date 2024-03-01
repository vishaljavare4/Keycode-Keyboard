const pressedKeyDisplay = document.getElementById("pressedKey");
const keyCodeDisplay = document.getElementById("keyCode");

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  const key = event.key;
  const keyCode = event.keyCode;
  const keyInfo = `Pressed Key: ${key}`;
  const keyCodeInfo = `Key Code: ${keyCode}`;

  pressedKeyDisplay.textContent = keyInfo;
  keyCodeDisplay.textContent = keyCodeInfo;

  // Additional feature: Play sound on keypress
  playKeyPressSound();

  // Additional feature: Store key history
  storeKeyHistory(key, keyCode);
});

// Additional feature: Play sound on keypress
function playKeyPressSound() {
  // You can add your preferred sound file here
  // For example:
  // const audio = new Audio('keyPressSound.mp3');
  // audio.play();
}

// Additional feature: Store key history
let keyHistory = [];

function storeKeyHistory(key, keyCode) {
  keyHistory.push({ key, keyCode });
  console.log(keyHistory);
}
