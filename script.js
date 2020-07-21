
/*import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);*/
/***********************UNEXPECTED ANIMATION BEHAVIOR WHEN SLIDING AFTER BROWSER WIDTH DECREASES******************/
//Slides the navigation bar out when selected
const navSlide = () => {
    const button = document.querySelector('.NavButton');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    button.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

/*************FADE NOT WORKING*******************/
        //Fade in links when button is clicked
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${(index/5)+2}s';
            }


        });
        //Button Animation
       button.classList.toggle('toggle');
    });
};

/*****************************CODE FOR CALENDAR ON EVENTS PAGE***********/
/*
var date = new Date();
date.setDate(1);

window.onload = function() {
    Generate_Month(date.getMonth());
};

function dayOfWeekAsString(dayIndex) {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayIndex];
}

function monthsAsString(monthIndex) {
    return ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][monthIndex];
}

function createcalendar_jsDay(num, day, month) {
    var currentcalendar_js = document.getElementById("calendar_js");

    var newDay = document.createElement("div");
    var date = document.createElement("p");
    date.innerHTML = num;

    var dayElement = document.createElement("p");
    dayElement.innerHTML = day;

    newDay.className = "calendar_js-day";
    var dateActual = new Date();
    if (num == dateActual.getDate() && month == dateActual.getMonth()) {
        var special_jsElement = document.createElement("p");
        special_jsElement.className = "special_jsElement";
        newDay.appendChild(special_jsElement);
        newDay.className = "calendar_js-day special_js";
    }

    newDay.appendChild(date);
    newDay.appendChild(dayElement);

    currentcalendar_js.appendChild(newDay);
}

function clearcalendar_js() {
    var currentcalendar_js = document.getElementById("calendar_js");

    currentcalendar_js.innerHTML = "";

}

function Create_Month(i) {
    clearcalendar_js();
    date.setMonth(i);
    Generate_Month(date.getMonth());
}

// generate a month
function Generate_Month(month) {
    var currentcalendar_js = document.getElementById("calendar_js");

    var dateObject = new Date();
    dateObject.setDate(date.getDate());
    dateObject.setMonth(month);
    dateObject.setYear(date.getFullYear());

    createcalendar_jsDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), dateObject.getMonth());
    dateObject.setDate(dateObject.getDate() + 1);

    while (dateObject.getDate() != 1) {
        createcalendar_jsDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), dateObject.getMonth());
        dateObject.setDate(dateObject.getDate() + 1);
    }

}
*/

navSlide();
