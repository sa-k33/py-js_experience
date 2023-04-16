const librarySelector = document.getElementById('library-selector');
const comparisonSection = document.getElementById('comparison-section');

librarySelector.addEventListener('change', () => {
  const selectedLibrary = librarySelector.value;
  displayComparison(selectedLibrary);
});

function displayComparison(library) {
  let comparisonHtml = '';

  switch (library) {
    case 'numpy':
      comparisonHtml = 
        <><h3>NumPy</h3><p>In Python, NumPy is a popular library for numerical computing.</p><p>In JavaScript, you can use libraries like
          <a href="<https://mathjs.org/>" target="_blank">math.js</a> for similar functionality.
        </p></>
      ;
      break;
    case 'pandas':
      comparisonHtml = 
        <><h3>pandas</h3><p>In Python, pandas is a widely-used library for data manipulation and analysis.</p><p>In JavaScript, you can use libraries like <a href="<https://github.com/danfojs/danfojs>" target="_blank">Danfo.js</a> for similar functionality.</p></>
      ;
      break;
    case 'matplotlib':
      comparisonHtml = 
        <><h3>Matplotlib</h3><p>In Python, Matplotlib is a popular library for creating static, interactive, and animated visualizations.</p><p>In JavaScript, you can use libraries like <a href="<https://www.chartjs.org/>" target="_blank">Chart.js</a> or <a href="<https://d3js.org/>" target="_blank">D3.js</a> for similar functionality.</p></>
      ;
      break;
  }

  comparisonSection.innerHTML = comparisonHtml;
}

// Initialize the page with the default library comparison
displayComparison(librarySelector.value);