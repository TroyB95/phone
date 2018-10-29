phone = {
  init: function() {
    this.powerOn();
    this.iconExpand();
    this.appPageClose();
  },

  powerOn: function() {
    let powerButton = document.querySelector(".phone-body__power-button");
    let screenCover = document.querySelector(".phone-screen__cover");
    let phoneScreen = document.querySelector(".phone-screen");

    powerButton.addEventListener("click", function() {
      screenCover.classList.toggle("active");
      phoneScreen.classList.toggle("active");
    });
  },

  iconExpand: function() {
    let appIcons = document.querySelectorAll(".phone-screen-content__app");
    let appPage = document.querySelector(".phone-screen-content__app__page");

    appIcons.forEach(function(app) {
      app.addEventListener("click", function() {
        let currentAppPage = this.nextElementSibling;

        this.classList.add("scaled");
        currentAppPage.classList.add("scaled");

        if (this.classList.contains("scaleTR")) {
          this.classList.add("scaled-t-r");
        } else if (this.classList.contains("scaleT")) {
          this.classList.add("scaled-t");
        } else if (this.classList.contains("scaleTL")) {
          this.classList.add("scaled-t-l");
        }
      });
    });
  },

  appPageClose: function() {
    let closeBtn = document.querySelectorAll(".phone-screen-content__app__page__close-btn");

    closeBtn.forEach(btn => {
      btn.addEventListener("click", () => {
        let currentAppPage = btn.parentNode;
        let currentAppIcon = currentAppPage.previousElementSibling;

        currentAppPage.classList.remove("scaled");
        currentAppIcon.classList.remove("scaled");
      });
    });
  }
};

phone.init();
