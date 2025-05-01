import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const heroImage = document.querySelector(".hero-banner img");
const firstImage = parkData.images[0];
heroImage.src = firstImage.url;
heroImage.alt = firstImage.altText;
const sectionHeading = document.querySelector(".global-nav__section-heading");
sectionHeading.remove();
const navList = document.querySelector(".global-nav__list");
navList.remove();
const globalNav = document.querySelector(".global-nav");
globalNav.remove();

const disclaimer = document.querySelector(".disclaimer a");
disclaimer.href = parkData.url;
disclaimer.textContent = parkData.fullName;


