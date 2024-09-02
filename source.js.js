

function display(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=pad(dateTime.getMinutes());
    let sec=pad(dateTime.getSeconds());
    if(hr>12){
        hr=hr-12
        ampm.innerHTML='pm'
    }
    document.getElementById('hours').innerHTML=pad(hr);
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('secs').innerHTML=sec;
}
function pad(num){
    return num<10?'0'+num:num
}
setInterval(display,500)