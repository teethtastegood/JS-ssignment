/*
Access the form element using the method getElementById()
The following URL will help you to do this:
https://www.javascript-coder.com/javascript-form/getelementbyid-form/
*/
var l = document.getElementById ('txtLength');
var w  document.getElementById ('txtWidth');
var h = document.getElementById ('txtHeight');

/*
Also store the tdCost id element as a variable.
The following link will help you to do this:
https://www.w3schools.com/jsref/met_document_getelementbyid.asp
*/
var price = document.getElementById("tdCost");

/*
select the "Calculate Cost" and "Reset" buttons by
getting their elements by ID. Add an event handler code to an
onclick event. The Calculate Cost button should run the function
that calculates the costs and the Reset button should run the
function that resets the text boxes and output.
The links below will help you to do this:
https://www.w3schools.com/js/js_htmldom_document.asp
https://www.w3schools.com/jsref/event_onclick.asp
*/
//var cost = document.getElementById("btnCalcCost");
//var reset = document.getElementById("btnRese");

document.getElementById("btnCalcCost").onclick = CalcCost;
document.getElementById("btnReset").onclick = resetInputs;

/*
Create a function that calculates the surface area.

Get the value of each variable you created at the beginning
and store each value as a new variable.
https://www.javascript-coder.com/javascript-form/getelementbyid-form/

Test whether the user has entered a number in
the text boxes and return an alert if non-numbers are entered. If
numbers have been entered into the text boxes, calculate the surface area
and return the result. You can use the following links to help you with this.
https://www.w3schools.com/js/js_functions.asp
https://www.w3schools.com/jsref/jsref_isNaN.asp
*/
function TotalSurfaceArea() {
	var length = l.value;
    var width = w.value;
    var height = h.value;

if (isNaN(length) || isNaN(width) || isNaN(height)) {
	alert("Access Denied :(. Insert Number")
} else {
	return (w*(height*length))+(2*(width*length))+(2*(width*height));
}
}

function edgeLength() {
	var length = l.value;
	var width = w.value;
	var height = h.value;
	
	return (2 * length) + (2 * width) + (4 * height);
}

/*
Create a function that calculates the length of the edges
and returns the result.
You can use the following link to help you with this.
https://www.w3schools.com/js/js_functions.asp

At the beginning of your function get the value of each variable you
created at the beginning of your program and store each value as a new variable.
https://www.javascript-coder.com/javascript-form/getelementbyid-form/
*/

/*
create a function that stores the results of the previous functions
as variables. Use a conditional statement to determine the thickness
of the glass and calculate the cost of the glass. You can use the URL
below to help you do this:
https://www.w3schools.com/js/js_if_else.asp

Calculate the cost of the glue, labour, sub-total, tax and total cost.

Use the .toFixed() method to round the result to two decimal places.
You can use the URL below to help you do this:
https://www.w3schools.com/jsref/jsref_tofixed.asp
*/
function finalCost() {
	var surfaceArea = TotalSurfaceArea();
	var edges = edgeLength();
	
	var length = new Number(l.value);
	var width = new Number(w.value); 
	var height = new Number(h.value); 
	price.innerHTML = "";

	var surfaceCost
	if (height < 25) {
          surfaceCost = surfaceArea * 0.06;
      } else {
		surfaceCost = surfaceArea * 0.1;
      } 

	var glue_cost = 0.1; 

	var labour_cost = 60/6000; 

	var subtotal = surfaceCost + (glue * edges) + (labour * surfaceArea) 
	
	var gst = 0.1; 
	
	var total = (subtotal * gst).toFixed(2); 
	
	price.innerHTML = total;


/*
Create a function named resetInputs to reset the inputs (Length, Width, Height).
Use this link to help https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_reset

Also reset the output (tdCost). Use this link to help you do this
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml_delete
*/

function resetInputs() {
	l.value = ' ';
	w.value = ' ';
	h.value = ' ';
		price.innerHTML = ' ';
}
