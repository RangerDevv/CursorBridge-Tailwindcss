// Buttons

const SVG = document.getElementById("SVG");
const IMG = document.getElementById("IMG");
// contents 

const SVGcontent = document.getElementById("SVGcontent");
const IMGcontent = document.getElementById("IMGcontent");

SVG.onclick = function(){
    HTMLcontent.style.display = "none";
    CSScontent.style.display = "none";
    SVGcontent.style.display = "block";
    IMGcontent.style.display = "none";
}
IMG.onclick = function(){
    HTMLcontent.style.display = "none";
    CSScontent.style.display = "none";
    SVGcontent.style.display = "none";
    IMGcontent.style.display = "block";
}