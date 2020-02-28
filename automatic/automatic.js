var a,b,c,inp=prompt("Enter a time in Miliseconds:");
function start()
{
    document.getElementById('Red').style.backgroundColor='red';
    document.getElementById('Yellow').style.backgroundColor='';
    document.getElementById('Green').style.backgroundColor='';
    a=setTimeout(yellow,inp)
}
function yellow()
{
    document.getElementById('Yellow').style.backgroundColor='yellow';
    document.getElementById('Red').style.backgroundColor='';
    document.getElementById('Green').style.backgroundColor='';
    b=setTimeout(green,inp)
}
function green()
{
    document.getElementById('Yellow').style.backgroundColor='';
    document.getElementById('Red').style.backgroundColor='';
    document.getElementById('Green').style.backgroundColor='Green';
    c=setTimeout(start,inp)
}
function stop()
{
    clearInterval(a);
    clearInterval(b);
    clearInterval(c);
}
function reset()
{
    document.getElementById('Yellow').style.backgroundColor="";
    document.getElementById('Red').style.backgroundColor="";
    document.getElementById('Green').style.backgroundColor="";  
}