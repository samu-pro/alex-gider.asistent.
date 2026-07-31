
JavaScript 
const input = document.getElementById("codeInput");

const button = document.getElementById("helpButton");

const output = document.getElementById("response");

button.addEventListener("click", () => {

  const code = input.value.trim();

  if (code === "") {

    output.innerHTML = "Please paste some code first.";

    return;

  }

  output.innerHTML = `

    <h3>AI Coding Helper:</h3>

    <p>I looked at your code. Try checking:</p>

    <ul>

      <li>Missing brackets or symbols</li>

      <li>Spelling mistakes in your code</li>

      <li>Incorrect file names or tags</li>

      <li>Errors in your logic</li>

    </ul>

    <p>Keep improving your code!</p>

  `;
  helpButton.addEventListener("click", function() {

    responseBox.textContent = "Hola, soy Alex. Estoy aquí para ayudarte a programar.";

});
helpButton.addEventListener("click", function() {

    responseBox.textContent = "Hola, soy Alex. Estoy aquí para ayudarte a programar.";

helpButton.addEventListener "click" function "¡Hola, soy Alex!"
