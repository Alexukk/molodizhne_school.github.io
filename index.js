const searchInput = document.getElementById('search-input');
const tableRows = document.querySelectorAll('tbody tr');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  tableRows.forEach(row => {
    const classCell = row.querySelector('.class-cell'); // Replace with your actual selector
    const classText = classCell.textContent.toLowerCase();
    const letterCell = row.querySelector('.letter-cell'); // Replace with your actual selector
    const letterText = letterCell.textContent.toLowerCase();

    if (searchTerm && (classText.includes(searchTerm) || letterText.includes(searchTerm))) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  });
});
