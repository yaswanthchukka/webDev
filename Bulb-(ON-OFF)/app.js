function off(){
    let background=document.getElementById('card');
    // background.style.backgroundColor="white";
    let img=document.getElementById('img');
    img.src='https://github.com/yaswanthchukka/webDev/blob/main/Bulb-(ON-OFF)/off.jpg'
    img.style.width="60%"
    img.style.height="60%"
    let btn1=document.getElementById('btn1')
    let btn2=document.getElementById('btn2')
    btn1.style.backgroundColor="Red"
    btn2.style.backgroundColor="white"
}


function on(){
    let background=document.getElementById('card');
    // background.style.backgroundColor= "black";
    let img=document.getElementById('img');
    let btn1=document.getElementById('btn1')
    let btn2=document.getElementById('btn2')
    img.src='https://github.com/yaswanthchukka/webDev/blob/main/Bulb-(ON-OFF)/on.jpeg'
    img.style.width="60%"
    img.style.height="60%"
    btn1.style.backgroundColor="white"
    btn2.style.backgroundColor="green"

}
