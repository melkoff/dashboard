// Pagination script
let table = document.getElementById('myTable');
let rowsPerPage = 8;
let currentPage = 1;

function displayRows() {
   let rows = table.rows;
   let totalRows = rows.length - 1;
   let totalPages = Math.ceil(totalRows / rowsPerPage);

   if (currentPage > totalPages) {
      currentPage = totalPages;
   }

   let startIndex = (currentPage - 1) * rowsPerPage + 1;
   let endIndex = Math.min(startIndex + rowsPerPage - 1, totalRows);

   for (let i = 1; i < rows.length; i++) {
      if (i >= startIndex && i <= endIndex) {
         rows[i].style.display = '';
      }
      else {
         rows[i].style.display = 'none';
      }
   }

   // Update pagination buttons
   let pagination = document.getElementById('pagination');
   pagination.innerHTML = '';

   if (totalPages > 1) {
      // Add previous page button
      let prevButton = document.createElement('button');
      prevButton.innerText = '«';
      prevButton.onclick = function () {
         if (currentPage > 1) {
            currentPage--;
            displayRows();
         }
      };
      pagination.appendChild(prevButton);

      // Add first page button
      let firstPageButton = document.createElement('button');
      firstPageButton.innerText = '1';
      firstPageButton.onclick = function () {
         currentPage = 1;
         displayRows();
      };
      if (currentPage === 1) {
         firstPageButton.classList.add('active');
      }
      pagination.appendChild(firstPageButton);

      // Add dots before first button
      if (totalPages > 3 && currentPage > 3) {
         let dotsStart = document.createElement('span');
         dotsStart.innerText = '...';
         pagination.appendChild(dotsStart);
      }

      // Add page buttons
      let startButton = Math.max(2, currentPage - 1);
      let endButton = Math.min(startButton + 1, totalPages);
      if (currentPage === totalPages - 1 && totalPages > 4) {
         startButton -= 1;
      }
      for (let i = startButton; i <= endButton; i++) {
         let linkPagination = document.createElement('button');
         linkPagination.innerText = i;
         if (i === currentPage) {
            linkPagination.classList.add('active');
         }
         linkPagination.onclick = function () {
            currentPage = parseInt(this.innerText);
            displayRows();
         };
         pagination.appendChild(linkPagination);
      }

      // Add dots after last button
      if (totalPages > 1 && currentPage < totalPages - 1) {
         let dotsEnd = document.createElement('span');
         dotsEnd.innerText = '...';
         pagination.appendChild(dotsEnd);
      }

      // Add last page button only if it doesn't already exist
      let lastPageButton = document.createElement('button');
      lastPageButton.innerText = totalPages;
      lastPageButton.onclick = function () {
         currentPage = totalPages;
         displayRows();
      };
      if (currentPage === totalPages) {
         lastPageButton.classList.add('active');
      }
      if (currentPage !== totalPages) {
         pagination.appendChild(lastPageButton);
      }

      // Add next page button
      let nextButton = document.createElement('button');
      nextButton.innerText = '»';
      nextButton.onclick = function () {
         if (currentPage < totalPages) {
            currentPage++;
            displayRows();
         }
      };
      pagination.appendChild(nextButton);
   }
}

currentPage = 1;
displayRows();

console.log('Pagination script loaded');
