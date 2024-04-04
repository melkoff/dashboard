// get theme
let darkTheme = document.getElementById('dark-theme');
//get theme btn
let sunMoonBtn = document.getElementById('sun-moon');

// Call dark theme function
darkTheme.onclick = function () {
   darkTheme.classList.toggle('dark-btn');
   sunMoonBtn.classList.toggle('sun-moon');

   // Set class to body
   document.body.classList.toggle('dark-theme');

   // Save theme in local storage
   if (localStorage.getItem('theme') == 'light') {
      localStorage.setItem('theme', 'dark');
   }
   else {
      localStorage.setItem('theme', 'light');
   }

}

// Change theme according to local storage
if (localStorage.getItem('theme') == 'light') {
   darkTheme.classList.remove('dark-btn');
   document.body.classList.remove('dark-theme');
   //image sun and moon
   sunMoonBtn.classList.remove('sun-moon');
}
else if (localStorage.getItem('theme') == 'dark') {
   darkTheme.classList.add('dark-btn');
   document.body.classList.add('dark-theme');
   //image sun and moon
   sunMoonBtn.classList.add('sun-moon');
}
else {
   localStorage.setItem('theme', 'light');
}

