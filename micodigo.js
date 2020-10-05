var x;
x=$(document);
x.ready(inicializar);
function inicializar () {
	var x;
	x=$("#soyundiv");
	x.click(clickPresionado);
}

function clickPresionado(){
	var x;
	x=$("#soyundiv");
	x.css("color", "blue");
}