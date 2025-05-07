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
    return `<div class="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card__img">
    <h3 class="media-card__title">${info.name}</h3>
    </a>
   <p>${info.description}</p>
     </div>`;
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

function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
  }
  function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
  }
  function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);
  
    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}<p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice}</p>
  </section>
  `;
  }


function setFooter(data) {
    const footerEl = document.querySelector("#park-footer");
    footerEl.innerHTML = footerTemplate(data);
  }


setHeaderInfo(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkData)
setFooter(parkData);



