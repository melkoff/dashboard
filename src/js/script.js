document.addEventListener('DOMContentLoaded', function () {
   const menuLinks = document.querySelectorAll('.main-menu li');
   const logoLink = document.querySelector('.sidebar__container-logo a');

   // Function to add click event on menu links
   function handleClick(event) {
      // Prevent default
      event.preventDefault();

      // Remove 'active-link' class from all links
      menuLinks.forEach(link => {
         link.classList.remove('active-link');
      });

      // Add 'active-link' class to the clicked link
      this.classList.add('active-link');

      // Get href attribute clicked link
      const href = this.querySelector('a').getAttribute('href');

      // Navigate to the clicked link
      window.location.href = href;

      // Save href in local storage
      localStorage.setItem('activeLink', href);
   }

   // Function to add click event on logo link
   function handleLogoClick(event) {
      // Prevent default
      event.preventDefault();

      // Remove 'active-link' class from all links
      menuLinks.forEach(link => {
         link.classList.remove('active-link');
      });

      // Save empty href in local storage
      localStorage.setItem('activeLink', '');

      // Navigate to the homepage
      window.location.href = this.getAttribute('href');
   }

   // Add click event to menu links
   menuLinks.forEach(link => {
      link.addEventListener('click', handleClick);
   });

   // Add click event to logo link
   logoLink.addEventListener('click', handleLogoClick);

   // Check if active link saved in local storage
   const activeLink = localStorage.getItem('activeLink');

   // If active link saved add 'active-link' class
   if (activeLink) {
      if (activeLink === '/') {
         // Remove 'active-link' class from all links if homepage saved
         menuLinks.forEach(link => {
            link.classList.remove('active-link');
         });
      } else {
         // Add 'active-link' class to the saved active link
         const activeLinkElement = document.querySelector(`.main-menu li a[href="${activeLink}"]`).parentNode;
         activeLinkElement.classList.add('active-link');
      }
   }
});
