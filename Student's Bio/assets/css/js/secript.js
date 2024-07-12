const img= document.getElementById("mybio");
img.addEventListener("click", changeshape);

const shapeArr =[
    //Hexagon
    "50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%",
    //Paralleogon
    "25% 0%, 100% 0%, 75% 100%, 0% 100%",
    //Trapezoid
    "20% 0%, 80% 0%, 100% 100%, 0% 100%",
    //Left point
    "25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%",
    //
    "50% 0%, 100% 50%, 50% 100%, 0% 50%"
];

function changeshape () {
    const ramdonShape = Math.floor(Math.random()
* shapeArr.length);
const newClipPath = shapeArr[randomShape];
const currentClipPath = getComputedStyle(img).getPropertyValue("--shape");

img.style.setProperty("--shape", shapeArr[ramdonShape]);

if (currentClipPath !== newClipPath) {
img.style.setProperty("--shape", newClipPath);
}

else {
img.style.setProperty("--shape", shapeArr[ramdonShape + 1]);
console.log (shapeArr[ramdonShape + 1]);
}
}