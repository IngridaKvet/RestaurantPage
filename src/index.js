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
const homeBtn = document.getElementById("homeBtn")

function removeCurrentSection() {
    const main = document.getElementById('content');
    const mainChild = main.children[0];
    mainChild.remove();
}

homeBtn.addEventListener('click', () => {
    removeCurrentSection();
    loadHomeSection();
})

aboutUsBtn.addEventListener('click', () => {
    removeCurrentSection();
    loadAboutUsSection();
})

locationsBtn.addEventListener('click', () => {
    removeCurrentSection();
    loadLocationsSection();
})

reservationsBtn.addEventListener('click', () => {
    removeCurrentSection();
    loadReservationsSection();
})