var randomNumber1;
randomNumber1=Math.floor((6*Math.random())+1);
randomNumber2=Math.floor((6*Math.random())+1);
var imgName1="dice"+randomNumber1+".png";
var imgName2="dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgName1);
document.querySelectorAll("img")[1].setAttribute("src",imgName2);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1  wins!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player2  wins!";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}
