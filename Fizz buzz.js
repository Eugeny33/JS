

for ( i = 1; i <= 100 ; i++ )
{
   
if (i % 15 == 0) {
    console.log ("Fizzbuzz"); //orange chaine de caractère
}
else if (i % 3 == 0) {
    console.log ("Fizz");
}
else if (i % 5 == 0) {
    console.log("Buzz");
}
else {
    console.log (i); //nom de la variable
}
}