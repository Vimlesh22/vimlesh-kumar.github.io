// Function to open tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove active class from all links
    tablinks = document.getElementsByClassName("nav-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab and add active class to the clicked link
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Show default tab on page load
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("home").style.display = "block"; // Show Home by default
    document.querySelector(".nav-link").classList.add("active");
  });
  
  // Citation Bar Chart
  const ctx = document.getElementById('citationChart').getContext('2d');
  const citationChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2020', '2021', '2022', '2023', '2024'], // Replace with actual years
      datasets: [{
        label: 'Citations',
        data: [5, 10, 25, 40, 60], // Replace with your citation data
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
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
  