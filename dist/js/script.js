"use strict";

const page = {
  sections: document.querySelectorAll(".section"),
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
  page.liveAuctionsSec.titleSecond.scrollIntoView({ behavior: "smooth" });
});

// всплытие секций при прокрутке
const sectionObserver = new IntersectionObserver(
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
  sectionObserver.observe(elem);
});
