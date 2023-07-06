"use strict";

const page = {
  clientsLogoSec: {
    scrollBtn: document.querySelector(".clients-logo__scroll-button"),
  },
  liveAuctionsSection: document.querySelector(".live-auctions-section"),
  liveAuctionsSec: {
    titleSecond: document.querySelector(".live-auctions-section__title-second"),
  },
};

//прокрутка при нажатии scrollBtn
page.clientsLogoSec.scrollBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  page.liveAuctionsSec.titleSecond.scrollIntoView({ behavior: "smooth" });
});
