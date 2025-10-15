import { defaultInput } from "./utils/default.js";
import { submitForm } from "./components/form.js";

const formButton = document.querySelector("#ageCalculatorButton");

defaultInput();

formButton.addEventListener("click", submitForm);
