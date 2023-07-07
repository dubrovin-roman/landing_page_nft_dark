"use strict";

const page = {
  sections: document.querySelectorAll(".section"),
  header: {
    container: document.querySelector(".header__container"),
  },
  heroSection: document.querySelector(".hero-section"),
  clientsLogoSec: {
    scrollBtn: document.querySelector(".clients-logo__scroll-button"),
  },
  liveAuctionsSection: document.querySelector(".live-auctions-section"),
  liveAuctionsSec: {
    titleSecond: document.querySelector(".live-auctions-section__title-second"),
  },
};

// прокрутка при нажатии scrollBtn
page.clientsLogoSec.scrollBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  page.liveAuctionsSection.scrollIntoView({ behavior: "smooth" });
});

// всплытие секций при прокрутке
const sectionsObserver = new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.remove("section-hidden");
      observer.unobserve(entries[0].target);
    }
  },
  {
    threshold: 0.15,
  }
);

page.sections.forEach((elem) => {
  elem.classList.add("section-hidden");
  sectionsObserver.observe(elem);
});

// появление меню при прокрутке
const navObserver = new IntersectionObserver(
  (entries, observer) => {
    if (!entries[0].isIntersecting) {
      page.header.container.classList.add("sticky");
    } else {
      page.header.container.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);

navObserver.observe(page.heroSection);