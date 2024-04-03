// get all tags <a> in class .main-menu
const menuLinks = document.querySelectorAll('.main-menu li');

// add events
menuLinks.forEach(link => {

   link.addEventListener('click', function (event) {
      event.preventDefault();

      // deleate class from other links
      menuLinks.forEach(link => {
         link.classList.remove('active-link');
         link.querySelector('a').style.color = '';
      });

      // add class to element <li>
      this.classList.add('active-link');

      // change link color
      const linkColor = this.querySelector('a');
      linkColor.style.color = '#fff';
   });

});