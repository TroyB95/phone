phone = {
  init: function() {
    this.powerOn();
    this.iconExpand();
    this.appPageClose();
    this.calcGetInput();
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

  calcGetInput: function() {
    let calcInputs = document.querySelectorAll(".calc-button");
    let displayArea = document.querySelector(".calc-content-answer-area");
    let currentValue = "";
    let selected = "";
    let mathSymbol;

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
        displayArea.innerHTML = currentValue;

        if (inputted === "reset") {
          currentValue = "";
          selected = "";
          displayArea.innerHTML = currentValue;
        } else if (currentValue === "") {
          currentValue = Number(inputted);
          displayArea.innerHTML = currentValue;
          console.log("0");
        } else if (inputted !== "+" && inputted !== "-" && inputted !== "/" && inputted !== "*") {
          selected += inputted;
          displayArea.innerHTML = selected;
          let numSelected = Number(selected);
          currentValue = mathMethod[mathSymbol](currentValue, numSelected);
          displayArea.innerHTML = currentValue;
          selected = "";
          console.log("1");
        } else if (
          (inputted === "+" || inputted === "-" || inputted === "/" || inputted === "*") &&
          selected === ""
        ) {
          console.log("or and working");
          mathSymbol = inputted;
          console.log(mathSymbol);
        } else {
          let numSelected = Number(selected);
          currentValue = mathMethod[inputted](currentValue, numSelected);
          displayArea.innerHTML = currentValue;
          selected = "";
          console.log(currentValue);
          console.log("2");
        }
      });
    });
  }
};

phone.init();
