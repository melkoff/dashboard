// get all tags <a> in class .main-menu
const menuLinks = document.querySelectorAll('.main-menu li');

// add events
menuLinks.forEach(link => {
   link.addEventListener('click', function (event) {
      event.preventDefault();

      // other links will be by default
      menuLinks.forEach(link => {
         link.classList.remove('active-link');
         link.querySelector('a').style.color = '';
         link.querySelector('svg path').style.stroke = '';
         link.querySelector('.icon').style.display = '';
         link.querySelector('.icon-white').style.display = '';
      });

      // add class to element <li>
      this.classList.add('active-link');

      // change link color
      const linkColor = this.querySelector('a');
      linkColor.style.color = '#fff';

      // change icon
      const iconMain = this.querySelector('.icon');
      iconMain.style.display = 'none';

      // change icon white
      const iconWhite = this.querySelector('.icon-white');
      iconWhite.style.display = 'block';

      // change SVG color
      const svgIconColor = this.querySelector('svg path');
      svgIconColor.style.stroke = '#fff';
   });

});