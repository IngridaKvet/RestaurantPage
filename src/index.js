import "./styles.css";
import './modules/loadAboutUs'
import {loadAboutUsSection}from "./modules/loadAboutUs";
import {loadLocationsSection}from "./modules/loadLocations";
import {loadReservationsSection}from "./modules/loadReservations";
import { loadHomeSection } from "./modules/loadHome";

loadHomeSection();

const aboutUsBtn = document.getElementById('aboutUsBtn')
const locationsBtn = document.getElementById('locationsBtn')
const reservationsBtn = document.getElementById('reservationsBtn')
const nav = document.querySelector('nav');

// About Us Nav
const homeBtn1 =document.createElement('button');
homeBtn1.setAttribute('class', 'lightWhiteBtn itimFont');
homeBtn1.textContent ='Home';

aboutUsBtn.addEventListener('click', () => {
    const homeSection = document.getElementById('homeSection');
    homeSection.remove();
    loadAboutUsSection();
    aboutUsBtn.remove();
    locationsBtn.parentNode.insertBefore(homeBtn1, locationsBtn)
});

homeBtn1.addEventListener('click', () => {
    const aboutSection = document.getElementById('aboutSection');
    aboutSection.remove();
    homeBtn1.remove();
    locationsBtn.parentNode.insertBefore(aboutUsBtn, locationsBtn)
    loadHomeSection();
});

// Locations Nav
const homeBtn2 =document.createElement('button');
homeBtn2.setAttribute('class', 'pinkBtn itimFont');
homeBtn2.textContent ='Home';

locationsBtn.addEventListener('click', () => {
    const homeSection = document.getElementById('homeSection');
    homeSection.remove(); 
    loadLocationsSection();
    locationsBtn.remove();
    reservationsBtn.parentNode.insertBefore(homeBtn2, reservationsBtn)
});

homeBtn2.addEventListener('click', () => {
    const locationsSection = document.getElementById('locationsSection');
    locationsSection.remove();
    homeBtn2.remove();
    reservationsBtn.parentNode.insertBefore(locationsBtn, reservationsBtn)
    loadHomeSection();
});

// Reservations Nav
const homeBtn3 =document.createElement('button');
homeBtn3.setAttribute('class', 'redBtn itimFont');
homeBtn3.textContent ='Home';

reservationsBtn.addEventListener('click', () => {
    const homeSection = document.getElementById('homeSection');
    homeSection.remove(); 
    loadReservationsSection();
    reservationsBtn.remove();
    nav.append(homeBtn3)
});

homeBtn3.addEventListener('click', () => {
    const reservationsSection = document.getElementById('reservationsSection');
    reservationsSection.remove();
    homeBtn3.remove();
    nav.append(reservationsBtn)
    loadHomeSection();
});