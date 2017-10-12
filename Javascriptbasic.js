/*var username = prompt("Whats your Name");
var lastname = prompt("Last Name");
var age = prompt("age");
console.log("Also great to meet you " + username + "" +lastname);
console.log("To confirm your age is " + age); */

/*var age = prompt("Enter your age");
var total = (age * 365);
alert("Your on earth from " + total + "days"); */

/*var square = Number(prompt("Give the square of 2"));


  if (square === 4){
    alert("Awesome you guess it right");
  }

else {
  alert("Lets try again");
}*/

/* Print all the number between -10 to 19"
var num = "-10"

while (num <= 19){
  console.log(num);
  num++;
}*/

/*Print all even numbers between 10 to 40*/
/*var num = 10

while (num <= 40){
  if (num % 2 === 0){
    console.log(num);
    num+=2
  }
}*/

/*
var numbb = 300;

while (numbb <= 333)
{
  if ( numbb % 2 !== 0)
  {
    console.log(numbb);

  }
    numbb+=1;
}
*/


/*var num = 5;

while (num <= 50)
{
  if ((num % 5 === 0) && (num % 3 === 0))
  {
    console.log(num);

  }
    num++;
}*/

var reply = prompt("Are we there yet ?")


while ( reply !== "yes" && reply !== "yeah")
{
  prompt("Are we there yet ?");
}

alert("We have reached finally");
