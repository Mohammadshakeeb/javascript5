function myFunction(){
    var name=document.getElementById('namebtn').value;
    var age=document.getElementById('agebtn').value;
    var weight=document.getElementById('weightbtn').value;
    if (age >= 5 && age <= 7){
        {
            if(weight<15)
            underDisplay(name,age,weight);
            else if(weight>14 && weight<21)
            perfectDisplay(name,age,weight);
            else 
            overDisplay(name,age,weight);
        }
    }
    else if(age>=8 && age<=10){
        if(weight<21)
        underDisplay(name,age,weight);
        else if(weight>=21 && weight<26)
        perfectDisplay(name,age,weight);
        else 
        overDisplay(name,age,weight);
    }
    else if(age>=11 && age<=15){
        if(weight<26)
        underDisplay(name,age,weight);
        else if(weight>=26 && weight<=30)
        perfectDisplay(name,age,weight);
        else 
        overDisplay(name,age,weight);
    }
    else  if(age>15 && age <21){
        if(weight<31)
        underDisplay(name,age,weight);
        else if(weight>30 && weight<41)
        perfectDisplay(name,age,weight);
        else 
        overDisplay(name,age,weight);
    }
}
function underDisplay(name,age,weight){
    document.getElementById('output').innerHTML="Hello " +name+"!!! "+"your weight is less than the recommended value at the age of "+age;
}
function perfectDisplay(name,age,weight){
    document.getElementById('output').innerHTML="Hello " +name+"!!! "+"your weight is perfect";
}
function overDisplay(name,age,weight){
    document.getElementById('output').innerHTML="Hello " +name+"!!! "+"your weight is more than the recommended value at the age of "+age;
}