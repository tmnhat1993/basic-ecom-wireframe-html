export default class Common {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor() {
    this.bindEvents();
  }

  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents() {
    // Smooth Scrolling Setup
    this.SmoothScrollSetup();

    // Mobile Header Menu Setup
    if (IS_MOBILE) {
      this.MobileHeaderSetup();
    }
    $(window).on("resize", () => {
      if (IS_MOBILE) {
        this.MobileHeaderSetup();
      }
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  // Smooth Scrolling
  SmoothScrollSetup() {
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();

            // get height menu for scroll exactly position of div
            var getHeightMenu = 52;
            if ($(window).width() < 767) {
              getHeightMenu = 62;
            }

            $("html, body").animate(
              {
                scrollTop: target.offset().top - getHeightMenu,
              },
              1000
            );
          }
        }
      });
  }

  // Mobile Header Menu Setup
  MobileHeaderSetup() {
    // Variables
    this.$pageHeader = $(".header");
    this.$pageHeader_Toggler = this.$pageHeader.find(".mb-toggler");
    this.blockHeaderInteraction = false;

    // Unbind Old Event
    this.$pageHeader_Toggler.unbind("click");

    // Cleanup Old Class
    this.$pageHeader.removeClass("show-menu");

    // Events
    this.$pageHeader_Toggler.on("click", () => {
      // Turn the blocking flag on
      if (!this.blockHeaderInteraction) {
        this.blockHeaderInteraction = true;
        this.$pageHeader.toggleClass("show-menu");

        // Release the blocking flag after 400 ms
        setTimeout(() => {
          this.blockHeaderInteraction = false;
        }, 500);
      }
    });
  }
}
