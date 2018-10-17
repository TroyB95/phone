phone = {
  init: function() {
    this.powerOn();
    this.iconExpand();
  },

  powerOn: function() {
    let powerButton = document.querySelector('.phone-body__power-button');
    let screenCover = document.querySelector('.phone-screen__cover');
    let phoneScreen = document.querySelector('.phone-screen');

    powerButton.addEventListener('click', function() {
      
      screenCover.classList.toggle('active');
      phoneScreen.classList.toggle('active');
      
    })
  },

  iconExpand: function() {
    let appIcons = document.querySelectorAll('.phone-screen-content__app');
    let appPage = document.querySelector('.phone-screen-content__app__page');

    appIcons.forEach(function(app) {
      app.addEventListener('click', function() {
        console.log(this)
        this.classList.add('scaled');
        appPage.classList.add('scaled');

      })
    })
  }
}

phone.init();