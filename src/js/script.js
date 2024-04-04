document.addEventListener('DOMContentLoaded', function () {
   const menuLinks = document.querySelectorAll('.main-menu li');
   const logoLink = document.querySelector('.sidebar__container-logo a');
   const openSideBar = document.getElementById('burger-menu');
   const sidebar = document.querySelector('.sidebar');
   const closeSideBar = document.getElementById('close-burger-menu');

   // Function to add click event on menu links
   function handleClick(event) {
      event.preventDefault();

      // Remove 'active-link' class
      menuLinks.forEach(link => {
         link.classList.remove('active-link');
      });

      // Add 'active-link' class
      this.classList.add('active-link');

      // Get href attribute clicked link
      const href = this.querySelector('a').getAttribute('href');
      window.location.href = href;

      // Save href
      localStorage.setItem('activeLink', href);
   }

   // Function to add click event on logo link
   function handleLogoClick(event) {
      event.preventDefault();

      // Remove 'active-link' class
      menuLinks.forEach(link => {
         link.classList.remove('active-link');
      });

      // Save empty href
      localStorage.setItem('activeLink', '');

      // Navigate to the homepage
      window.location.href = this.getAttribute('href');
   }

   // Function to handle burger menu click
   function handleBurgerMenuClick() {
      sidebar.style.left = '-100%';
   }

   // Add click event to menu links
   menuLinks.forEach(link => {
      link.addEventListener('click', handleClick);
   });

   // Add click event to logo link
   logoLink.addEventListener('click', handleLogoClick);

   // Add click event to burger menu
   openSideBar.addEventListener('click', () => {
      sidebar.style.left = '0';
   });
   closeSideBar.addEventListener('click', handleBurgerMenuClick);

   // Check if active link saved
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

// Filter table
function filterTable() {
   let input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("tableSearch");
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable");
   tr = table.getElementsByTagName("tr");
   for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (let j = 0; j < td.length; j++) {
         if (td[j]) {
            txtValue = td[j].textContent || td[j].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
               tr[i].style.display = "";
               break; // Show the row if at least one cell matches
            } else {
               tr[i].style.display = "none"; // Hide the row if no cell matches
            }
         }
      }
   }
}