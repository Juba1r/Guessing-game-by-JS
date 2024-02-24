
var numofwon = 0;
var numofloss = 0;

for(var i = 1; i <= 5; i++){

var guessnumber = parseInt(prompt("Enter a number from 1 to 5"));

var randomnumber = Math.floor(Math.random()*5)+1;

if(guessnumber==randomnumber){

    console.log("You have won");
    numofwon++;
}
else {console.log("You have lost.Random number was " + randomnumber);
numofloss++;
}
}

document.write("Total Number of Won = "+ numofwon + "<br>");
document.write("Total Number of Loss = "+ numofloss);



