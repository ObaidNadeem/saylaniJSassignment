// **************************** Chapter 1 ****************************************** //
// // Task 1
// alert ('Greetings!');

// // Task 2
// alert('Error! Please Enter a valid password.');

// // Task 3
// alert('Welcome to JS land... \r\nHappy Coding');

// // Task 4
// alert('Welcome to JS land... ');

// var check = document.createElement('input');
// check.type = 'checkbox';
// checkbox.id = "id";
// var lable = document.createElement('label');
// lable.htmlFor = 'id';
// lable.appendChild(document.createTextNode('Prevent this page from creating additional dialogs.'))
// var myDiv = document.getElementById('myDiv');
// myDiv.appendChild(check);
// myDiv.appendChild(lable);
// confirm(myDiv) 

// // Task 5
// alert('Hello........I can run Javascript through my web browsers console');

// Task 6 and 7 in index.html





// ******************************** Chapter 2 ***********************//
// // Task 1
// var username = 'Username';

// // Task 2
// var myName = "Obaid Nadeem";

// // Task 3
// var message = 'Hello world';
// alert(message);

// // Task 4
// var students_name = "Obaid";
// alert(students_name);

// var students_age = "18 years old";
// alert(students_age);

// var course = "Web and Hybrid application development";
// alert(course);

// // Task 5
// var pizza = 'pizza';
// var str = ""
// for(var i = 0; pizza.length > 0; i++){
//     str += pizza;
//     str += "\n";
//     pizza = pizza.slice(0,-1);
// }
// alert(str);

// // Task 6
// var email = "obaidnadeem4@gmail.com";
// console.log("My email address is"+ " " + email);

// // Task 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book" + " " + book);

// // Task 8
// document.write("Yah! I can write HTML content through JavaScript");

// // Task 9
// var pattern = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"; 
// alert(pattern);


// *********************************** Chapter 3 ****************************//

// // Task 1
// var age = 18
// alert("I am " + age + " years old")

// Task 2 krna hai


// // Task 3
// var birth_year = 2001;
// document.write("My birth year is" + " " + birth_year);
// var type = typeof(birth_year);
// document.write("\n Data type of my decleared variable is "+ type);

// //Task 4
// var name = window.prompt("Enter Your Name:");
// var product = window.prompt("Enter The Product You Want to Buy:");
// var quantity = window.prompt("Enter How Many Quantities:");
// document.write(name + " " + "ordered " + quantity + " " +  product + " "+ "on XYZ Clothing store");


// **************************************** Chapter 4 *****************************//

// Task 1
// var var1="value1",var2 = "value2", var3="value3";

// // Task 2
// // **Legal variables **
// var var1 = value;
// var var_1 = value;
// var variableOne = value;
// var variable-one = value;
// var variable = value;

// // **Illeagal variables **
// var 1var = value;
// var vari 1 = value;
// var var = value
// var variable#$$%% = value;
// var print = value;

// // Task 3
document.write("<h1>Rules for naming JS variables</h1><br>")

document.write(" Variable names can only contain letter , $ , _  and number<br>")

document.write(" Variables must begin with a _ , $ , name <br>")

document.write("Variable names are case sensitive <br>")

document.write("Variable names should not be JS keywords False <br>")



// **************************************** Chapter 5 *************************//

// // Task 1

// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var sum = num1 + num2;
// document.write("The sum of " + n1 + " and " + n2 + " is " + sum);

// // Task 2

// Subtraction
// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var sub = num1 - num2;
// document.write("The subraction of " + n1 + " and " + n2 + " is " + sub);

// Multiply
// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var mul = num1 * num2;
// document.write("The product of " + n1 + " and " + n2 + " is " + mul);

// Division
// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var div = num1 + num2;
// document.write("The division of " + n1 + " and " + n2 + " is " + div);

// Modulus
// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var mod = num1 + num2;
// document.write("The modulus of " + n1 + " and " + n2 + " is " + mod);


// // Task 3
// var variable;
// document.write("<br><br>Value after variable declaration is " + variable);
// variable = 5;
// document.write("<br>Initial value is ", variable++);
// document.write("<br>Value after increment is " + variable);
// document.write("<br>Value after addition is " + (variable+7));
// document.write("<br>Value after decrement is " + --variable);
// document.write("<br>The remainder is " + variable%3)


// // Task 4

// var cost_of_movie_ticket = 600;
// var no_of_tickets = 5;
// document.write("<br><br>Total cost to buy " + no_of_tickets + " tickets to a movie is " + cost_of_movie_ticket + "PKR")


// // Task 5
// var no = prompt("Enter a number:");
// for(var i = 1 ; i<11; i++){
//     document.write("<br>" + no + "   x    " + i + "    =    " + "    " + (no*i))
// }


// ************************************* Chapter 6-9 **************************** //

// // Task 1
// var a = prompt("Enter value of a:");
// document.write("<br><br>Result:");
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>............................");
// document.write("<br><br>The value of ++a is: ",++a);
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>The value of a++ is:",a++);
// document.write("<br>The value of a is:",a);
// document.write("<br><br>The value of --a is: ",--a);
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>The value of a-- is: ",a--);
// document.write("<br>The value of a is: ",a);

// // Task 2
// var a = 2, b = 1;
// document.write("<br><br>a is ",a);
// document.write("<br>b is ",b);
// var result = --a - --b + ++b + b--;
// // --a = 1
// // --a - --b = 1
// // --a - --b + ++b = 2
// // --a - --b + ++b + b-- = 3
// document.write("<br>Result is ",result);


// // Task 3

// var name = prompt("Enter your name: ");
// alert("Hello " + name + " Welcome to our site!!!")


// // Task 4

// var no = prompt("Enter a number:");
// if(no === ""){
//     no = 5
// }
// for(var i = 1 ; i<11; i++){
//     document.write("<br>" + no + "   x    " + i + "    =    " + "    " + (no*i))
// }


// // Task 5











