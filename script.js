const output = document.querySelector(".output");
console.log(output);

const hackingText = [
  "System initialization...",
  "Establishing secure network connection...",
  "Accessing encrypted USB drive...",
  "Attempting password: F4n9L0g!6x...",
  "Password rejected. Retrying...",
  "You could at least go for '1234' like Joe Sixpack!",
  "Attempting password: 7YhJ9!bR...",
  "System alert: Intrusion detected. Disabling alerts...",
  "Attempting password: qZ4Wv3#1...",
  "Password incorrect. Next attempt in progress...",
  "Compiling data packets for system analysis...",
  "Analyzing data packets...",
  "Error: Analysis aborted due to unexpected data format.",
  "Seriously?!...",
  "Deciphering encryption layers...",
  "Reconstructing missing file clusters...",
  "Attempting password: 9oP!kV@7...",
  "Permission denied. Retrying...",
  "Come on!",
  "Attempting password: Zx7&Lp8*",
  "System warning: Access attempt limit reached...",
  "Bypassing access limit...",
  "Attempting password: hR8m!0Tk...",
  "Compiling data packets for system analysis...",
  "Analyzing data packets...",
  "Error: Data corruption detected. Restoring previous state...",
  "Oh Damn...",
  "Attempting password: Mq3#P5nV...",
  "Decrypting USB drive...",
  "Decoding encryption algorithm...",
  "Connecting to database for decryption assistance...",
  "Attempting password: N1&dJk9!",
  "Access failed. Scanning USB metadata...",
  "Oh great, my processor's about to fry! What's the hell in this sh*t?",
  "Attempting password: kV7@nP#3...",
  "Running quantum decryption process...",
  "Attempting password: 8B&fO2$t...",
  "ERROR: Unauthorized access detected. System rebooting...",
  "Attempting password: g3p!J4fT...",
  "Scanning for corrupt files...",
  "No shit, Scherlock...",
  "Analyzing data access patterns...",
  "Attempting password: tx21&Lp27IazaUigkjyaTYielfkdlsjdkflgktks?q3567kdlfmgkdgvkdlgmd@vkdlfm*",
  "WARNING: System overheating! CPU temperature rising...",
  "At this point, I’m going to need therapy after this hacking session...",
  "System reboot complete. Resuming hack...",
  "Analyzing data fingerprint...",
  "Attempting password: Z9p@J4fT...",
  "Running integrity checks on decrypted files...",
  "Success: Data integrity tests validated.",
  "Ahh, finally you pulled your head out of your ass!",
  "Preparing payload for data extraction...",
  "Decrypting file structure...",
  "Final attempt: Password accepted.",
  "Access granted. Accessing secure files...",
  "Binary code discovered: 01001001 01101110 01110110 01101001 01110011 01101001 01100010 01101100 01100101",
];

const italicPhrases = [
  "You could at least go for '1234' like Joe Sixpack!",
  "Seriously?!...",
  "Come on!",
  "Oh Damn...",
  "Oh great, my processor's about to fry! What's the hell in this sh*t?",
  "No shit, Scherlock...",
  "At this point, I’m going to need therapy after this hacking session...",
  "Ahh, finally you pulled your head out of your ass!",
];

let numbersInProgress = false;
let countNumbers = 0;

function displayRandomNumber(parentElement) {
  return new Promise((resolve) => {
    if (countNumbers < 30) {
      const randomNumber = Math.random();
      const numberEl = document.createElement("span");
      numberEl.textContent = randomNumber + " ";
      parentElement.appendChild(numberEl);
      output.scrollTop = output.scrollHeight;
      countNumbers++;
      setTimeout(() => displayRandomNumber(parentElement).then(resolve), 100);
    } else {
      numbersInProgress = false;
      resolve();
    }
  });
}

let index = 0;

async function displayText() {
  if (index < hackingText.length) {
    let textEl = document.createElement("p");
    textEl.textContent = hackingText[index];

    if (
      hackingText[index] === "Compiling data packets for system analysis..."
    ) {
      output.appendChild(textEl);

      countNumbers = 0;
      let numbersEl = document.createElement("p");
      output.appendChild(numbersEl);
      numbersInProgress = true;
      await displayRandomNumber(numbersEl);
    } else {
      if (!numbersInProgress) {
        if (italicPhrases.includes(hackingText[index])) {
          textEl.style.fontStyle = "italic";
        }
        output.appendChild(textEl);
      }
    }
    output.scrollTop = output.scrollHeight;
    index++;
    setTimeout(displayText, 700);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displayText();
});
