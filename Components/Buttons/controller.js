// Buttons
const HTML = document.getElementById("HTML");	
const CSS = document.getElementById("CSS");
const SVG = document.getElementById("SVG");
const IMG = document.getElementById("IMG");
// contents 
const HTMLcontent = document.getElementById("HTMLcontent");
const CSScontent = document.getElementById("CSScontent");
const SVGcontent = document.getElementById("SVGcontent");
const IMGcontent = document.getElementById("IMGcontent");

HTML.onclick = function(){
    HTMLcontent.style.display = "block";
    CSScontent.style.display = "none";
    SVGcontent.style.display = "none";
    IMGcontent.style.display = "none";
}
CSS.onclick = function(){
    HTMLcontent.style.display = "none";
    CSScontent.style.display = "block";
    SVGcontent.style.display = "none";
    IMGcontent.style.display = "none";
}
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