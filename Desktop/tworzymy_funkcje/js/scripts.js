function getTriangleArea(a, h) {

var a,
	h,
	getTriangleArea = (a*h/2);
	alert(getTriangleArea);
	triangle1Area = getTriangleArea(10, 15);
	triangle2Area = getTriangleArea(20, 25);
	triangle3Area = getTriangleArea(30, 35);

if (isNaN(a)) {
    alert("a nie jest liczbą!");
}

if (isNaN(h)) {
    alert("h nie jest liczbą!");
}

if (a <= 0) {
    	alert("Nieprawidłowe dane")
} 	

if (h <= 0) {
    	alert("Nieprawidłowe dane");
}	

return(a*h/2);
}

console.log(getTriangleArea(10,6));


