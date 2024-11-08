function generatePoem(event){
    event.preventDefault();



let poemElement= document.querySelector("#poem");

new Typewriter('#poem', {
    strings: [ "I wandered lonely as a cloud That floats on high o’er vales and hills When all at once I saw a crowd A host, of golden daffodils"],
    autoStart: true,
    delay:1,
    cursor:"",
  });


           }


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);