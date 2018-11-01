phone = {
  init: function() {
    this.powerOn();
    this.iconExpand();
    this.appPageClose();
    this.calcFunctions();
    this.projectsPageSwap();
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
  },

  calcFunctions: function() {
    let calcInputs = document.querySelectorAll(".calc-button");
    let displayArea = document.querySelector(".calc-content-answer-area");
    let currentValue = "";
    let selected = "";
    let mathSymbol = "";

    let mathMethod = {
      "+": function(x, y) {
        return x + y;
      },
      "-": function(x, y) {
        return x - y;
      },
      "*": function(x, y) {
        return x * y;
      },
      "/": function(x, y) {
        return x / y;
      }
    };

    calcInputs.forEach(function(input) {
      input.addEventListener("click", function() {
        let inputted = input.dataset.selector;

        if (inputted === "reset") {
          currentValue = "";
          selected = "";
          mathSymbol = "";
          displayArea.innerHTML = "- - - - - - -";
        } else if (
          currentValue === "" &&
          inputted !== "=" &&
          inputted !== "+" &&
          inputted !== "-" &&
          inputted !== "/" &&
          inputted !== "*"
        ) {
          currentValue = Number(inputted);
          displayArea.innerHTML = currentValue;
        } else if (
          (inputted === "+" || inputted === "-" || inputted === "/" || inputted === "*") &&
          selected === "" &&
          currentValue !== ""
        ) {
          mathSymbol = inputted;
          console.log("Maths symbol set", mathSymbol);
          displayArea.innerHTML = mathSymbol;
        } else if (
          mathSymbol === "" &&
          inputted !== "=" &&
          inputted !== "+" &&
          inputted !== "-" &&
          inputted !== "/" &&
          inputted !== "*" &&
          (currentValue.length < 12 || currentValue.length === undefined)
        ) {
          currentValue += inputted;
          console.log("Current value is", currentValue);
          displayArea.innerHTML = currentValue;
        } else if (
          inputted !== "+" &&
          inputted !== "-" &&
          inputted !== "/" &&
          inputted !== "*" &&
          mathSymbol !== "" &&
          inputted !== "=" &&
          (selected.length < 12 || selected.length === undefined)
        ) {
          selected += inputted;
          console.log("Selected value is ", selected);
          displayArea.innerHTML = "";
          displayArea.innerHTML = selected;
          let numSelected = Number(selected);
        } else if (inputted === "=" && mathSymbol !== "") {
          console.log("last function firing");
          let numSelected = Number(selected);
          currentValue = mathMethod[mathSymbol](currentValue, numSelected);
          displayArea.innerHTML = currentValue;
          selected = "";
          console.log(currentValue);
          console.log("2");
        }
      });
    });
  },

  projectsPageSwap: function() {
    let projectPages = [...document.querySelectorAll(".projects-content-page")];
    let pageSelectors = [...document.querySelectorAll(".projects-content-selector__button")];

    pageSelectors.forEach(function(selector) {
      selector.addEventListener("click", function() {
        projectPages.forEach(function(page) {
          page.classList.remove("active");
        });

        let pageNumber = projectPages.filter(page => page.dataset.page === selector.dataset.pageSelector);
        pageNumber[0].classList.add("active");
      });
    });
  }
};

phone.init();
