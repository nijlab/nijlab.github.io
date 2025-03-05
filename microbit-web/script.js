
import Microbit from "https://cdn.jsdelivr.net/npm/microbit-web-bluetooth";

const button = document.getElementById("connect");
const status = document.getElementById("status");
let microbit;

button.addEventListener("click", async () => {
    try {
        microbit = new Microbit();
        await microbit.connect();
        status.textContent = "Connected to Micro:bit!";

        // Example: Read button state
        microbit.onButtonAChanged = (pressed) => {
            console.log("Button A:", pressed ? "Pressed" : "Released");
        };

    } catch (error) {
        console.error("Connection failed", error);
        status.textContent = "Failed to connect!";
    }
});
