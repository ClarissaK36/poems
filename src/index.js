function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer, // Wrap response in an array to avoid errors
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions").value;
  let apiKey = "16dte5fe6bd880b3859a456a73aoea0f";
  let prompt = `user instructions: Generate a beautiful short poem about ${instructionsInput}`;
  let context =
    "You are an expert poem generator that loves to write 4 line poems and separate each line with a <br/>. Ensure to use the user instructions when generating a poem and generate all poems in HTML. Do not include a title to the poem. Sign the poem with 'SheCodes AI'.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="blink">⏳</span> Generating a Beautiful Poem about ${instructionsInput}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
