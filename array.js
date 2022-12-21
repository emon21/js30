     
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){

    const now = new Date();

    //seconds
    const seconds =now.getSeconds();
//    console.log(seconds);
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

    //minute
    const mins =now.getMinutes();
    const minsDegrees = ((mins / 60) * 365) + 90;
    minsHand.style.transform=`rotate(${minsDegrees}deg)`;

    //hour
    const hour =now.getMinutes();
    const hourDegrees = ((mins / 12) * 360) + 90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`;

    // console.log(seconds);
    // console.log('<br/>');
    // console.log(mins);
    // console.log('<br/>');
    // console.log(hour);

}

setInterval(setDate,1000);


//



// setInterval(() => {
//     d = new Date(); //object of date()
//     hr = d.getHours();

//     console.log();
//     min = d.getMinutes();
//     sec = d.getSeconds();
//     hr_rotation = 24 * hr + min / 2; //converting current time
//     min_rotation = 6 * min;
//     sec_rotation = 6 * sec;
  
//     hourHand.style.transform = `rotate(${hr_rotation}deg)`;
//     minsHand.style.transform = `rotate(${min_rotation}deg)`;
//     secondHand.style.transform = `rotate(${sec_rotation}deg)`;
// }, 1000);
