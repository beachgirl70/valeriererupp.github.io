const red = 254;
const green = 234;
const blue = 232;

const header = document.getElementById("header");
console.log(header.innerText);

function changeColor() {
    console.log(window.schollY);
    const scrollFactor = 1 + window.scrollY / 10;

     const r = red / scrollFactor;
    const g = scrollFactor;
    const b = blue / scrollFactor; 

      const updatedColor = `rgb(${r}, ${g}, ${b})` ;

      header.style.backgroundColor = updatedColor;

}
changeColor();

window.addEventListener('scroll', changeColor);