
// Chapter 1
// question 1 
function task1() {
    alert("Hello visitors !")

}


// question 2 
function task2() {
    alert('Error! Please enter a valid password.')
}


// question 3
function task3() {
    alert('Welcome to JS Land... \n Happy Coding !');

}

// question 4
function task4() {
    alert('Welcome to JS Land')
    alert(' Happy Coding !  \n')
}




// Chapter 2 


// Question 1 
var username;

// Question 2
var myName = "Sadiq Shah";



// Question 3 
function task23() {
    var message = "Hello World";
    alert(message)
}


// Question 4 
function StdData() {
    var name = "Ali Raza";
    var age = 23;
    var course = "Web and Mobile Development ";
    var qualification = "Graduate";

    alert(name);
    alert(age);
    alert(course);
    alert(qualification);

    // alert("Name: "  +  name +   "\n"  +  "Age: " + age+  "\n"  +  "Course " + course  +  "\n"+ "Qualification: " + qualification);
}



// Question 5 

function pizza() {
    alert("PIZZA \n PIZZ \n PIZ \n PI \n P\n");
}


// Question 6

function Email() {
    emailAddress = "shahsadiq208@gmail.com"
    alert("My Email Address is : " + emailAddress);
}


// Question 7
function book() {
    var book = 'A smarter way to learn JavaScript'
    alert("I'm trying to learn from the book " + book);
}

// Question 8
function Content() {
    document.write("Yah! I can write HTML content through JavaScript  (Note : Please Refresh it for back again)");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// Question 9

function PatternDesign() {

    var pattern ="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
    alert(pattern);
}





// Chapter 3 

// Question 1 

function age() {

    var age=24;
    alert(age);
}

// Question 2 

function visitors() {

    var userVisitors=14;
    alert("You have visited this site"  + " "  + userVisitors + " " +  "times" );
}

// Question 3

function birthYear() {

    var birthYear = 24;
    document.write("My birth year is" + " " +  birthYear + "<br>"  + "Data type of my declared variable is" + " " +  typeof(birthYear));
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// Question 4

function order() {

    var visitorName = "Sadiq Shah";
    var productTitle = "AI watch";
    var productQty = "1";
    var storeName = "Shah's";
    alert(visitorName + " " + "ordered " + productQty +  " " + productTitle + " " + "on " + storeName + " Accessories store");
    
}




// Chapter 4 

// Question 1 

function multipleVariables() {

    var name,age,qualification;
}

// Question 2 

function varibaleDeclaration() {

    // Legal varaibles 
    var myname = "Sadiq Shah";
    var myName = "Sadiq Shah";
    var my_name = "sadiq shah";
    var _my_name = "sadiq shah";
    var $my_name = "sadiq shah";


    // Illlegal varaibles 
    // var @myname = "Sadiq Shah";
    // var 123myName = "Sadiq Shah";
    // var my name = "sadiq shah";
    // var month&year = "saadiq shah";
    // var birth-year = "1990";
    
}

// Question 3

function filleInTheBlanks() {

    document.write("<h2>Rules for naming JS variables</h2>");
    document.write("a) Variable names can only contain number,$,_. and letter <b> For example : $my_1stVariable.</b> <br>");
    document.write("b) Variable must begin with a letter, $ or _. <b> For example : $name,_name or name.</b> <br>");
    document.write("c) Variable names are case sensitive.<br>");
    document.write("d) Variable names should not be JS keywords.");




    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');



}



// Chapter 5

// Question 1 

function AddTwoNumbers() {

    var num1=34;
    var num2=45;
    var addNumbers = num1+num2;
    document.write("Sum of " + num1 + " and " + num2+ " is " + addNumbers);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
    
 

}


// Question 2 

function Operators() {

    var num1=34;
    var num2=45;
    var subNumbers = num1-num2;
    var mulNumbers = num1*num2;
    var divNumbers = num1/num2;
    var Module = num1%num2;



    document.write("Subtraction of " + num1 + " and " + num2+ " is " + subNumbers +"<br>");
    document.write("Multiplication of " + num1 + " and " + num2+ " is " + mulNumbers+"<br>");
    document.write("Division of " + num1 + " and " + num2+ " is " + divNumbers+"<br>");
    document.write("Reminder of " + num1 + " and " + num2+ " is " + Module+"<br>");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// Question 3 

function varibaleDeclaration() {

    var number1;
    document.write("Value after variable declaration is:" + number1 +"<br>");


    number1  = 5;
    document.write("Value after variable declaration is:" + number1 +"<br>");


    number1++
    document.write("Initial value: " + number1+"<br>");


    number1 = number1 + 7;
    document.write("Value after addition is:" + number1+"<br>");

    number1--;
    document.write("Value after decrement is:" + number1+"<br>");

    number1 = number1 % 3;
    document.write("The remainder is : " + number1+"<br>");

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 4

function ticketCalculation() {

    var ticketPrice = 600;
    var numberOfTickets = 5;
    var boughtTickets = ticketPrice * numberOfTickets;
    document.write("Total Cost of : " +  numberOfTickets + " tickets to a movie  is " + boughtTickets +"PKR");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}



// Question 5

function table() {

    var tableNumber = 4;
    document.write("<h2>Table of 4 </h2>")
   document.write("4x1= "+ 4*1 + "<br>"+"4x2= "+ 4*2 + "<br>"+"4x3= "+ 4*3 + "<br>"+"4x4= "+ 4*4 + "<br>"+"4x5= "+ 4*5 + "<br>"+"4x6= "+ 4*6 + "<br>"+"4x7= "+ 4*7 + "<br>"+"4x8= "+ 4*8 + "<br>"+"4x9= "+ 4*9 + "<br>"+"4x10= "+ 4*10 + "<br>")
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}



// Question 6
function tempratureConversion() {
var Celsius = 25;
var fahrenheit = 70;

c = (fahrenheit - 32) * 5/9;
f = (Celsius*9/5) + 32;


document.write(Celsius+ "<sup>o</sup>C is " +f + "<sup>o</sup>C");
document.write("<br>");
document.write(fahrenheit + "<sup>o</sup>F is " + c + "<sup>o</sup>C ");
document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}



// Question 7
function checkoutBillingInfo() {

    var item1 = 4000;
    var item2 = 2500;
    var item1Qty = 5;
    var item2Qty = 2;
    var shippingCharges = 800;


    var priceViaQtyItem1 = item1 * item1Qty;
    var priceViaQtyItem2 = item2 * item2Qty;

    var priceCal =  priceViaQtyItem1 + priceViaQtyItem2;

    var totalCost = priceViaQtyItem1  + priceViaQtyItem2 + shippingCharges;
    
    document.write("<h2>Your Order</h2>");

    document.write("PRODUCT ----------------------------- SUBTOTAL" );
    document.write("<br>");
    document.write("AI Watch (item1)  × " +item1Qty + " ----------------- " + priceViaQtyItem1 + "PKR" );
    document.write("<br>");
    document.write("Mac Book (item2)  × " +item2Qty + " ----------------- " + priceViaQtyItem2 + "PKR"  );
    document.write("<br>");
    document.write("Subtotal " + " ---------------------------------- " + priceCal + "PKR"  );
    document.write("<br>");
    document.write("Total cost of your order is :  " + " --------- " + totalCost + "PKR"  );
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>')
}

// / Question 8
function marksheet() {

    var totalMarks = 980;
    var obtMarks = 804;
    var per = obtMarks / totalMarks * 100;

    document.write("Total Marks : " + totalMarks + "<br>Obtained Marks : " + obtMarks + "<br>Percentage : " + per + "%");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>')



}

// / Question 9
function currenciesConversion() {

        var oneUSD = 193.65;
        var oneRiyal = 51.63;


        var PKR2USD = oneUSD * 10;
        var PKR2Riyal = oneRiyal * 10;
        var totalCost = PKR2USD + PKR2Riyal;
    document.write("<h1>Currency In PKR</h1>");
        document.write("Total Currency in PKR : " + totalCost);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// / Question 10
function SignleExpression() {


    var SingleExpression = 5 * 10 / 2;
    document.write("Single Expression calculation is : " + SingleExpression);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}

// / Question 11
function yearCalculation() {
    var currentYear = 2022;
    var birthYear = 1998;

    var myAge = currentYear - birthYear;

    document.write("<h1>Age Calculator</h1>")
    document.write("Current Year : " + currentYear + "<br>Birth Year is" + birthYear + "<br>My age is  : " + myAge  );

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}


// / Question 12
function circumferenceAndArea() {

    var radius = 20;
    var pi = 3.142;
    var cf = 2 * pi * radius;
    var area = pi * radius * radius;

    document.write("<h1>The Geometrizer</h1>");
    document.write('Radius of Circle is : ' + radius);
    document.write("<br>");
    document.write('The Circumference of Circle is : ' + cf);
    document.write("<br>");
    document.write('The Area of Circle is : ' + pi);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');



}