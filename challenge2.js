let Myheight = prompt("What is my height in meters?")
let Myweight = prompt("What is my weight in kilograms?")
let Friendheight = prompt("What is your height in meters?")
let Friendweight = prompt("What is your weight is kg?")
document.write("My height: " + Myheight)
document.write("<br>")
document.write("My weight: " + Myweight)
document.write("<br>")
var BMI1 = Myweight/(Myheight **2)
var BMI2 = Friendweight/(Friendheight**2)
document.write("My BMI:" + BMI1)
document.write("<br>")
document.write("<br>")
document.write("Friend height:" + Friendheight)
document.write("<br>")
document.write("Friend weight:" + Friendweight)
document.write("<br>")
document.write("My friend's BMI:" + BMI2)
document.write("<br>")
document.write("<br>")
if(BMI2 > BMI1){
    document.write("My friend has a higher BMI")
}
if(BMI2 < BMI1){
    document.write("My friend has a lower BMI")
}
    document.write("<br>")
    document.write("<br>")
if(BMI1 < 18.5){
    document.write("I'm Underweight")
}
else if(BMI1 < 25.0){
    document.write("I'm normal")
}
else if(BMI1 <= 29.9){
    document.write("I'm overweight")
}
else (document.write("I'm obessed"))
    document.write("<br>")
    document.write("<br>")
    if(BMI2 < 18.5){
        document.write("My friend is underweight")
    }
    else if(BMI2 < 25.0){
        document.write("My friend is normal")
    }
    else if(BMI2 <= 29.9){
        document.write("My friend is overweight")
    }
    else (document.write("My friend is obessed"))