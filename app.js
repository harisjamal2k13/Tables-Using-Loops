var a = +prompt("Enter table", "2,3,4 or 5");
var b = +prompt("Starting Number of Table");
var c = +prompt("Ending Number of table");

for(var i=b; i<=c; i++) {
document.write(a + "  x  " + i +"  =  "+ a*i +'<br />');
}
