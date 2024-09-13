const ctx = document.getElementById('citationChart').getContext('2d');
const citationChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2020', '2021', '2022', '2023', '2024'], // Years
    datasets: [{
      label: 'Citations',
      data: [5, 10, 25, 40, 60], // Replace with your citation data
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.4, // Smoothing the line
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
