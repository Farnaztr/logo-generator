const fonts = [
  "'Dancing Script', cursive",
  "'Roboto', sans-serif",
  "'Pacifico', cursive",
  "'Sacramento', cursive"
];

function generateSignature() {
  const name = document.getElementById("name").value.trim();
  const signatureDiv = document.getElementById("signature");

  if (name === "") {
    alert("Please enter a name");
    signatureDiv.style.display = 'none';
    return;
  }

  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  signatureDiv.innerText = name;
  signatureDiv.style.fontFamily = randomFont;
  signatureDiv.style.display = 'inline-block';
}
