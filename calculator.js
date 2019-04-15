var scr = document.getElementById("screen");
var x, y, z;
// var a, b;
var clr = document.getElementById("ce");
var eq = document.getElementById("equal");
var oa = document.getElementById("oa");

var em = true;
function on(){
	if(em){
		scr.style.backgroundColor = 'white';
		scr.innerHTML= "";
		oa.innerHTML="OFF";
	}
	else{
		scr.style.backgroundColor = '#001';
		scr.innerHTML = "";
		oa.innerHTML="ON";
		// scr.style.transparent = 'transparent';

	}
	em = !em;
}
function n(v)
{
	// scr.innerHTML = "";
	scr.innerHTML += v;
}
function one(u)
{
	x = scr.innerHTML;
	y = u;
	scr.innerHTML = "";
}
function del(){
	scr.innerHTML = v--;
}
eq.onclick = function()
// function q()
{
	z = scr.innerHTML;
	var a = Number(x), b = Number(z);
	// console.log(x, y, z);
	if (y == "+") 
	{
		scr.innerHTML = a + b;
	}
	else if (y == "-") 
	{
		scr.innerHTML = a - b;
	}
	else if (y == "/") 
	{
		scr.innerHTML = a / b;
	}
	else if (y == "*") 
	{
		scr.innerHTML = a * b;
	}

}
function cos()
{
	scr.innerHTML = Math.cos(scr.innerHTML);
}
function acos()
{
	scr.innerHTML = Math.acos(scr.innerHTML);
}
function sin()
{
	scr.innerHTML = Math.sin(scr.innerHTML);
}
function asin()
{
	scr.innerHTML = Math.asin(scr.innerHTML);
}
function tan()
{
	scr.innerHTML = Math.tan(scr.innerHTML);
}
function atan()
{
	scr.innerHTML = Math.atan(scr.innerHTML);
}
function log()
{
	scr.innerHTML = Math.log(scr.innerHTML);
}
function pi()
{
	scr.innerHTML = Math.PI;
}
function root()
{
	scr.innerHTML = Math.sqrt(scr.innerHTML);
}
function cube()
{
	scr.innerHTML = Math.cbrt(scr.innerHTML);
}
// function oth(v)
// {
// 	x = scr.innerHTML;
// 	if (x == "cos") 
// 	{
// 		scr.innerHTML = Math.cos(x);
// 	}
// }
clr.onclick = function()
{
	scr.innerHTML = "";
}