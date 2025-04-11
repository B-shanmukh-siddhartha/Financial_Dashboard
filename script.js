const ctx = document.getElementById('chart').getContext('2d');
let chart;

// Function to simulate stock prices and update UI
async function fetchData() {
    try {
        // Simulated prices for demonstration
        const ibmPrice = (Math.random() * 200).toFixed(2);
        const googlPrice = (Math.random() * 3000).toFixed(2);
        const tslaPrice = (Math.random() * 1000).toFixed(2);
        const aaplPrice = (Math.random() * 200).toFixed(2);
        const amznPrice = (Math.random() * 4000).toFixed(2);
        const msftPrice = (Math.random() * 350).toFixed(2);

        // Display Prices on the Dashboard
        document.getElementById('ibm-price').textContent = `$${ibmPrice}`;
        document.getElementById('googl-price').textContent = `$${googlPrice}`;
        document.getElementById('tsla-price').textContent = `$${tslaPrice}`;
        document.getElementById('aapl-price').textContent = `$${aaplPrice}`;
        document.getElementById('amzn-price').textContent = `$${amznPrice}`;
        document.getElementById('msft-price').textContent = `$${msftPrice}`;

        // Update the chart with new prices
        updateChart([ibmPrice, googlPrice, tslaPrice, aaplPrice, amznPrice, msftPrice]);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to update or create the chart
function updateChart(prices) {
    // Destroy the previous chart if it exists
    if (chart) chart.destroy();

    // Create a new chart
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['IBM', 'GOOGL', 'TSLA', 'AAPL', 'AMZN', 'MSFT'],
            datasets: [{
                label: 'Stock Prices (in USD)',
                data: prices,
                borderColor: 'black',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                borderWidth: 2,
                tension: 0.1, // adds a curve to lines
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Price (USD)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Company'
                    }
                }
            }
        }
    });
}

// Fetch data initially and then every 5 seconds
fetchData();
setInterval(fetchData, 5000);




