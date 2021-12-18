const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


const lastDay = document.querySelector('.last-date');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();



// let futureDate = new Date(2022, 0, 31, 23, 59, 59);
// console.log(futureDate);

const futureDate = new Date(tempYear, tempMonth, tempDay + 20, 23, 59, 59);


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minumtes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];
const date = futureDate.getDate();


const weekday = weekdays[futureDate.getDay()];
// console.log(weekday);

 lastDay.textContent = `The Last Date is ${weekday}, ${date} ${month} ${year} ${hours}:${minumtes}pm`;

//  Future time in miliseconds

const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
const today = new Date().getTime();
// console.log(today);
const t = futureTime - today;
// console.log(t);
// 1s = 1000ms
// 1m = 60s
// 1hr = 60mins
// 1d = 24hrs

// values in ms
const oneDay = 24 * 60 * 60 * 1000;
// // console.log(oneDay);
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

// // Calculate
let days = t / oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay) / oneHour);
// console.log(hours);
let minutes = Math.floor((t % oneHour) / oneMinute);
let seconds = Math.floor((t % oneMinute) / 1000);
// console.log(minumtes);

//  set values array;
const values = [days, hours, minutes, seconds];


function format(item){
    if(item < 10){
        return item = `0${item}`
    }
    return item
}




items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
})
if  (t < 0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">Kindly contact olaoluwa via mail olaoluwaowoeye@gmail.com to know why he has not puchased the domain name, thank you. </h4>`
}
}
// countdown

let countdown = setInterval(getRemainingTime,1000)

getRemainingTime();
















