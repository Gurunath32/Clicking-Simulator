points="";

function givepoint() {
    points=parseInt(points+1);
    console.log("The Score Is "+ points);
    document.getElementById("score").innerHTML=points;
}