// Libraries
import ScrollOut from "scroll-out";
import { TweenMax, TimelineMax, Linear } from "gsap";

// Ultils
import { pageListener } from "./utils";
import Common from "./_Common";

// Pages
// import Sections from "./_Sections";
// + Services
// + Story Mission

export default class Main {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor() {
    // Page Listener
    window.BCMPageListener = new pageListener();

    // TweenMax
    window.TweenMax = TweenMax;
    window.TimelineMax = TimelineMax;

    // Ipad devices and below
    window.IS_MOBILE = window.innerWidth > 1080 ? false : true;
    $(window).on("resize", () => {
      window.IS_MOBILE = window.innerWidth > 1080 ? false : true;
    });

    // Common Behavior
    let common = new Common();

    // Bind Event
    this.bindEvents();
  }

  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents() {
    this.ScrollOutSetup();
  }

  /* ===================================
   *  METHODS
   * =================================== */
  ScrollOutSetup() {
    ScrollOut({
      onShown: (el) => {
        // use the web animation API
        // console.log("in: ",$(el).attr("id"));
        let elementID = $(el).attr("id");
        BCMPageListener.emit(`${elementID}-anim`);
      },
      threshold: 0.275,
    });

    ScrollOut({
      targets: ".header-fixed",
      offset: 80,
    });
  }
}
