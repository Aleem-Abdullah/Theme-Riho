// sidebar Toggle and Submenu
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
const header = document.getElementById('header')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  header.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}


// Select the profile section and dropdown menu
const profileSection = document.querySelector('.profile-section');
const profileDropdown = document.querySelector('.profile-dropdown');

profileSection.addEventListener('click', (event) => {
  event.stopPropagation();
  
  profileDropdown.style.display =
    profileDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', () => {
  profileDropdown.style.display = 'none';
});


// First Chart
const ctx = document.getElementById('chartContainer').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line', 
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Maximum Price',
        data: [18000, 28000, 19000, 21000, 32000, 24000, 29500, 26000, 20000, 31000, 24000, 22000],
        borderColor: '#006666', // Green line for max price
        backgroundColor: 'rgba(0, 102, 102, 0)', // Transparent background
        borderWidth: 2,
        stepped: true, // Stepline effect
        fill: false, // No fill under the line
        tension: 0, // Stepped line (no curve)
      },
      {
        label: 'Minimum Price',
        data: [5000, 17000, 6000, 11000, 20000, 19000, 18500, 7500, 11000, 18500, 9000, 10000],
        borderColor: '#F4B555', // Yellow line for min price
        backgroundColor: 'rgba(244, 181, 85, 0)', // Transparent background
        borderWidth: 2,
        stepped: true, // Stepline effect
        fill: false, // No fill under the line
        tension: 0, // Stepped line (no curve)
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false // Hides the legend from the chart
      },
    },
    scales: {
      y: {
        min: 0, // Minimum value explicitly set
        max: 35000, // Maximum value explicitly set
        ticks: {
          stepSize: 5000, // Interval of 5000
          callback: function(value) {
            return `$${value.toLocaleString()}`; // Display as currency
          }
        },
        title: {
          display: true,
        }
      },
      x: {
        title: {
          display: true,
        }
      }
    },
    elements: {
      line: {
        borderWidth: 2, // Line thickness
        shadowColor: 'rgba(0, 0, 0, 0.2)', // Shadow color (light black)
        shadowBlur: 10, // Soft blur for shadow
        shadowOffsetX: 0, // No horizontal shadow offset
        shadowOffsetY: 5, // Vertical shadow offset (5px below the line)
      }
    }
  }
});


// Horizontal Bar Chart
var ctx2 = document.getElementById('myNewChart').getContext('2d');
var myNewChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'New Values',
            data: [3200, 2700, 1500, 3200, 3000, 5500, 2300],
            backgroundColor: 'rgba(0, 102, 102, 0.8)',
            borderColor: 'rgba(0, 102, 102, 1)',
            borderWidth: 2
        }]
    },
    options: {
        indexAxis: 'y', // Horizontal bars
        responsive: true,
        scales: {
            x: {
                beginAtZero: true,
                min: 0, // Set the minimum value of x-axis
                max: 10000, // Set the maximum value of x-axis
                grid: {
                    display: false // Remove x-axis grid lines
                },
                ticks: {
                    display: false // Hide the numbers on x-axis
                }
            },
            y: {
                grid: {
                    display: false // Remove y-axis grid lines
                }
            }
        },
        plugins: {
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#fff',
                bodyColor: '#fff'
            },
            legend: {
                display: false // Hide the legend
            }
        }
    }
});


 // Donut Chart
  // Get the canvas context
  const chartContext = document.getElementById('smartChart').getContext('2d');

  // Create the chart
  const smartChart = new Chart(chartContext, {
    type: 'doughnut', // Use doughnut or any other type as needed
    data: {
      labels: ['Huawie Smart', 'OnePlus Airbuds', 'Apple Iphone', 'Samsung Galaxy'], // Categories or labels
      datasets: [{
        label: 'Best Selling Product',
        data: [3.4, 2.1, 1.8, 3.9], // Values for each category
        backgroundColor: [
          'rgba(0, 102, 102, 1)', // Color for Product A
          'rgb(254, 106, 73, 1)', // Color for Product B
          'rgba(134, 144, 156, 1)', // Color for Product C
          'rgba(244, 181, 85, 1)'  // Color for Product D
        ],
        borderColor: [
          'rgba(0, 102, 102, 1)',
          'rgba(254, 106, 73, 1)',
          'rgba(134, 144, 156, 1)',
          'rgba(244, 181, 85, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top', // Position of the legend
        },
        tooltip: {
          enabled: true, // Enable tooltips for better interactivity
        }
      }
    }
  });
  

          