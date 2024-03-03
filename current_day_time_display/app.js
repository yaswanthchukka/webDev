function fun(){
    let obj={0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'}
    var date=new Date();
    var s=date.toString();
    document.getElementById('day').innerText=obj[date.getDay()]
    document.getElementById('time').innerText=date.getHours()%12+":"+date.getMinutes()+":"+date.getSeconds();
    document.getElementById('date').innerText=s.slice(4,15);
}

setInterval(fun,1000);



