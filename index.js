const greeting = document.getElementById ("greeting");
greeting.style.textAlign="center";
greeting.style.marginTop="50px";
const username = window.prompt ("what is your name?", "Jane");
greeting.textContent = "Welcome to Messy Genes, " +username+ "!";
