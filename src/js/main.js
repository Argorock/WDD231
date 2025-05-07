import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.textContent = data.fullName;

    document.querySelector("head > title").textContent = data.fullName;

    const heroImage = document.querySelector(".hero-banner img");
    heroImage.src = data.images[0].url;
    heroImage.alt = data.images[0].altText;


    const sectionHeading = document.querySelector(".global-nav__section-heading");
    if (sectionHeading) sectionHeading.remove();

    const navList = document.querySelector(".global-nav__list");
    if (navList) navList.remove();

    const globalNav = document.querySelector(".global-nav");
    if (globalNav) globalNav.remove();

    // document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
}


function setParkIntro(data) {
    const introSection = document.querySelector(".intro")
    introSection.innerHTML = `
    <h2>${data.fullName}</h2>
    <p>${data.description}</p>
    `;
};

function mediaCardTemplate(info) {
    return `
    <dive class="media-card">
        <a href="${info.link}">
            <img src="${info.image}" alt="${info.altText}">
        </a>
        <h3><a href="${info.link}">${info.name}</a></h3>
        <p>${info.description}</p>
    </div>
    `;
}

const parkInfoLinks = [
    {
      name: "Current Conditions &#x203A;",
      link: "conditions.html",
      image: parkData.images[2].url,
      description:
        "See what conditions to expect in the park before leaving on your trip!"
    },
    {
      name: "Fees and Passes &#x203A;",
      link: "fees.html",
      image: parkData.images[3].url,
      description: "Learn about the fees and passes that are available."
    },
    {
      name: "Visitor Centers &#x203A;",
      link: "visitor_centers.html",
      image: parkData.images[9].url,
      description: "Learn about the visitor centers in the park."
    }
  ];

function setParkInfoLinks(data) {
    const infoSection = document.querySelector(".info");
    infoSection.innerHTML = parkInfoLinks
    .map((link) => mediaCardTemplate(link))
    .join("");
};


setHeaderInfo(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkData);



