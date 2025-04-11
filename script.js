const ctx = document.getElementById('chart').getContext('2d');
let chart;

const FINNHUB_API_KEY = 'cvselbpr01qhup0qbe3gcvselbpr01qhup0qbe40'; 
const symbols = ['IBM', 'GOOGL', 'TSLA', 'AAPL', 'AMZN', 'MSFT'];

async function fetchStockPrice(symbol) {
  const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  const price = parseFloat(data.c); 
  if (isNaN(price)) throw new Error(`Price not found for ${symbol}`);
  return price;
}

async function fetchData() {
  try {
    const pricePromises = symbols.map(symbol => fetchStockPrice(symbol));
    const prices = await Promise.all(pricePromises);

    symbols.forEach((symbol, i) => {
      const id = `${symbol.toLowerCase()}-price`;
      const element = document.getElementById(id);
      if (element) {
        element.textContent = `$${prices[i].toFixed(2)}`;
      }
    });

    updateChart(prices);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function updateChart(prices) {
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: symbols,
      datasets: [{
        label: 'Stock Prices (USD)',
        data: prices,
        borderColor: 'black',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        borderWidth: 2,
        tension: 0.1,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          title: { display: true, text: 'Price (USD)' }
        },
        x: {
          title: { display: true, text: 'Company' }
        }
      }
    }
  });
}

// Call once immediately
fetchData();
// Then update every 60 seconds
setInterval(fetchData, 60000);



function goToDetails(symbol) {
  window.location.href = `stock.html?symbol=${symbol}`;
}



