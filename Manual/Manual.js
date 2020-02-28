var ylight;
function red()
{
    document.getElementById('Red').style.backgroundColor='red';
    document.getElementById('Yellow').style.backgroundColor='';
    document.getElementById('Green').style.backgroundColor='';
    document.getElementById('b1').disabled=false;
    document.getElementById('b2').disabled=false;
    document.getElementById('b3').disabled=true;
ylight=1;
}
function yellow()
{
    document.getElementById('Yellow').style.backgroundColor='yellow';
    document.getElementById('Red').style.backgroundColor='';
    document.getElementById('Green').style.backgroundColor='';
    if(ylight==1)
    {
    document.getElementById('b1').disabled=true;
    document.getElementById('b2').disabled=false;
    document.getElementById('b3').disabled=false;
    }
    else
    {
    document.getElementById('b1').disabled=false;
    document.getElementById('b2').disabled=false;
    document.getElementById('b3').disabled=true;
    }

}
function green()
{
    document.getElementById('Yellow').style.backgroundColor='';
    document.getElementById('Red').style.backgroundColor='';
    document.getElementById('Green').style.backgroundColor='Green';
    document.getElementById('b3').disabled=false;
    document.getElementById('b2').disabled=false;
    document.getElementById('b1').disabled=true;
    ylight=2;
}
// var colors = ["#red", "yellow", "yellow", "green","#red", "yellow", "yellow", "green","#red", "yellow", "yellow", "green"];
// var n=0
// function seq()
// {
//     red.style.backgroundColor=color[n]
//     yellow.style.backgroundColor=color[n+1]
//     green.style.backgroundColor=color[n+2]
//     n+=3;
//     if(n==15)
//     {
//         n=3;
//     }
// }
// setInterval(function(){seq();},1000);