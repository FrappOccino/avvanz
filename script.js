// Smooth Line Chart
var lineChartOptions = {
  series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
  }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
      height: 350,
      type: 'area'
  },
  colors: ['#eca85d', '#298091'],
  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'smooth'
  },
  xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
      x: {
          format: 'dd/MM/yy HH:mm'
      },
  },
};

var lineChart = new ApexCharts(document.querySelector("#smooth"), lineChartOptions);
lineChart.render();

function getRandomData() {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100) + 1);
}

setInterval(function() {
  var newSeries = [{
      name: 'series1',
      data: getRandomData()
  }, {
      name: 'series2',
      data: getRandomData()
  }];

  lineChart.updateSeries(newSeries);
}, 2000);


// Radial Chart
var initialValue = Math.floor(Math.random() * 100) + 1; // Set the initial random value

var radialBarOptions = {
    chart: {
        height: 300,
        type: "radialBar",
    },
    series: [initialValue],
    colors: ["#fff"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "70%",
                background: "#298091"
            },
            track: {
                dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    blur: 4,
                    opacity: 0.15
                }
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#fff",
                    fontSize: "13px"
                },
                value: {
                    color: "#fff",
                    fontSize: "30px",
                    show: true
                }
            }
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#eca85d"],
            stops: [0, 100]
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Progress"],
    legend: {
        show: false,
        position: 'bottom',
        horizontalAlign: 'center',
        labels: {
            colors: '#fff',
            useSeriesColors: false
        }
    }
};

var radialBarChart = new ApexCharts(document.querySelector("#pie"), radialBarOptions);
radialBarChart.render();

var currentValue = initialValue;

function incrementValue() {
    if (currentValue < 100) {
        currentValue += 1;
    } else {
        currentValue = Math.floor(Math.random() * 100) + 1; // Reset to a new random value
    }
    radialBarChart.updateSeries([currentValue]);
}

setInterval(incrementValue, 2000); // Increment every 2 seconds


// Horizontal Bar Chart
var barChartOptions = {
  series: [{
      data: [44, 55, 41, 64, 22, 43, 21]
  }, {
      data: [53, 32, 33, 52, 13, 44, 32]
  }],
  chart: {
      type: 'bar',
      height: 300,
      width: 570,
  },
  colors: ['#298091', '#eca85d'],
  plotOptions: {
      bar: {
          horizontal: true,
          dataLabels: {
              position: 'top',
          },
      }
  },
  dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
          fontSize: '12px',
          colors: ['#fff']
      }
  },
  stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
  },
  tooltip: {
      shared: true,
      intersect: false
  },
  xaxis: {
      categories: [2001, 2002, 2003, 2004],
  },
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

// Function to generate an array of random values for the chart
function getRandomValues(length) {
  return Array.from({ length: length }, () => Math.floor(Math.random() * 100) + 1);
}

// Update the chart's series data every 2 seconds
setInterval(function() {
  var newSeries = [
      { data: getRandomValues(barChartOptions.series[0].data.length) },
      { data: getRandomValues(barChartOptions.series[1].data.length) }
  ];
  barChart.updateSeries(newSeries);
}, 2000);


// Graphs Polar Area Chart
var polarAreaOptions = {
  series: [14, 23, 21, 17, 20, 16],
  chart: {
      type: 'polarArea',
      width: 400,
      height: 400  
  },
  stroke: {
      colors: ['#dcdcdc']
  },
  fill: {
      colors: ['#298091', '#eca85d'],
      opacity: 0.8
  },
  responsive: [{
      breakpoint: 480,
      options: {
          chart: {
              width: 200,
              height: 200
          },
          legend: {
              position: 'bottom'
          }
      }
  }]
};

var polarAreaChart = new ApexCharts(document.querySelector("#polar-area-chart"), polarAreaOptions);
polarAreaChart.render();

// Function to generate random values for the series
function getRandomValues(length) {
  return Array.from({ length: length }, () => Math.floor(Math.random() * 100) + 1);
}

// Update the chart's series data every 2 seconds
setInterval(function() {
  var newSeries = getRandomValues(polarAreaOptions.series.length);
  polarAreaChart.updateSeries(newSeries);
}, 2000);



// Graph radar chart
var polarAreaChart = new ApexCharts(document.querySelector("#polar-area"), polarAreaOptions);
polarAreaChart.render();

var options = {
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      },
      {
        name: "Tablets",
        data: [5, 30, 25, 45, 40, 55, 60, 80, 120]
      },
      {
        name: "Mobiles",
        data: [15, 50, 40, 60, 55, 70, 75, 100, 160]
      }
    ],
    chart: {
      height: 350,
      width: 600,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: [3, 3, 3], // Width of the lines for each series
      colors: ['#298091', '#eca85d', '#10bbe7'] // Colors for each series
    },
    markers: {
      size: 0 // Hide markers
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#fff', '#fff', '#fff'], // End colors for each series
        shadeIntensity: 1,
        type: 'horizontal',
        stops: [0, 100]
      }
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };
  
  var userLine = new ApexCharts(document.querySelector("#user-line-chart"), options);
  userLine.render();

// User line
var options = {
  series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
    {
      name: "Tablets",
      data: [5, 30, 25, 45, 40, 55, 60, 80, 120]
    },
    {
      name: "Mobiles",
      data: [15, 50, 40, 60, 55, 70, 75, 100, 160]
    }
  ],
  chart: {
    height: 350,
    width: 600,
    type: 'line',
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 2000
      }
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: [3, 3, 3], 
    colors: ['#298091', '#eca85d', '#10bbe7'] 
  },
  markers: {
    size: 0 
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: ['#fff', '#fff', '#fff'], 
      shadeIntensity: 1,
      type: 'horizontal',
      stops: [0, 100]
    }
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], 
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
};

var userLine = new ApexCharts(document.querySelector("#user-line-chart"), options);
userLine.render();

function shiftDataForward() {
  // Generate new random values for each series
  var newValue1 = Math.floor(Math.random() * 100) + 50;
  var newValue2 = Math.floor(Math.random() * 100) + 50;
  var newValue3 = Math.floor(Math.random() * 100) + 50;
  
  // Shift the data to the left and push the new value at the end
  options.series[0].data.push(newValue1);
  options.series[0].data.shift();
  
  options.series[1].data.push(newValue2);
  options.series[1].data.shift();
  
  options.series[2].data.push(newValue3);
  options.series[2].data.shift();
  
  // Update the chart with the new data
  userLine.updateSeries(options.series);
}

// Update the data every 2 seconds to simulate forward movement
setInterval(shiftDataForward, 2000);


// User pie chart interactive
var options = {
    series: [44, 55, 13, 33],
    chart: {
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 400,
    options: {
      chart: {
        width: 100
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    position: 'right',
    offsetY: 0,
  }
  };

  var userPieChart = new ApexCharts(document.querySelector("#user-pie-chart"), options);
  userPieChart.render();


  function appendData() {
  var arr = userPieChart.w.globals.series.slice()
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  return arr;
}

function removeData() {
  var arr = userPieChart.w.globals.series.slice()
  arr.pop()
  return arr;
}

function randomize() {
  return userPieChart.w.globals.series.map(function() {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  })
}

function reset() {
  return options.series
}

document.querySelector("#randomize").addEventListener("click", function() {
    userPieChart.updateSeries(randomize())
})

document.querySelector("#add").addEventListener("click", function() {
    userPieChart.updateSeries(appendData())
})

document.querySelector("#remove").addEventListener("click", function() {
    userPieChart.updateSeries(removeData())
})

document.querySelector("#reset").addEventListener("click", function() {
    userPieChart.updateSeries(reset())
})


// User custom chart
var options = {
    series: [{
      name: 'series1',
      data: [45, 60, 40, 90, 60, 70, 50]
    }, {
      name: 'series2',
      data: [40, 32, 80, 32, 95, 52, 41]
    },{
      name: 'series3',
      data: [4, 50, 60, 42, 95, 42, 11]
    }],
    chart: {
      height: 350,
      width: 600,
      type: 'area',
      toolbar: {
        show: false  // Disables the toolbar, removing zoom and other tools
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 0  // Stroke width set to 0
    },
    colors: ['#0048a3', '#00aaff', '#a3c2f0'],  // Base colors for series
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0.1,
        stops: [0, 100]
      }
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };
  
  var customChart = new ApexCharts(document.querySelector("#customChart"), options);
  customChart.render();
  
  function getRandomData() {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
  }
  
  setInterval(function () {
    var newSeries1 = getRandomData();
    var newSeries2 = getRandomData();
    var newSeries3 = getRandomData();
  
    customChart.updateSeries([{
      name: 'series1',
      data: newSeries1
    }, {
      name: 'series2',
      data: newSeries2
    },{
      name: 'series3',
      data: newSeries3,
    }]);
  }, 2000);


  // custom chart

  // Function to generate random data
  function generateRandomData(length, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * max));
  }

  // Initial chart options
  var options = {
    series: [{
      name: 'Net Profit',
      data: generateRandomData(4, 30)
    }, {
      name: 'Revenue',
      data: generateRandomData(4, 30)
    }],
    chart: {
      type: 'bar',
      height: 100,  // Set height to 100px
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May'],
    },
    yaxis: {
      labels: {
        show: false  // Hide y-axis labels
      },
      title: {
        text: ''  // Remove y-axis title
      },
      max: 30
    },
    fill: {
      opacity: 1,
      colors: ['#298091', '#eca85d']
    },
    legend: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  };

  // Initialize the chart
  var barChartUser = new ApexCharts(document.querySelector("#barChartUser"), options);
  barChartUser.render();

  // Update the chart data every 2 seconds
  setInterval(function() {
    barChartUser.updateSeries([{
      name: 'Net Profit',
      data: generateRandomData(4, 30)
    }, {
      name: 'Revenue',
      data: generateRandomData(4, 30)
    }]);
  }, 2000);  // Update interval set to 2000ms (2 seconds)
  
  // User radar chart
  var options = {
    series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
    }],
    chart: {
        height: 300,
        width: 350,
        type: 'radar',
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
        },
        animations: {
            enabled: true,
            easing: 'easeinout',
            dynamicAnimation: {
                enabled: true,
                speed: 1000
            }
        }
    },
    stroke: {
        width: 2
    },
    fill: {
        opacity: 0.1
    },
    markers: {
        size: 0
    },
    yaxis: {
        stepSize: 20
    },
    xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016']
    },
    colors: ['#298091', '#eca85d', '#a3c2f0'], // Initial colors
    legend: {
        show: false // Hide legend
    },
    tooltip: {
        enabled: false // Disable tooltips
    }
};

// Create and render the chart
var radarChart = new ApexCharts(document.querySelector("#radarChart"), options);
radarChart.render();

// Function to update chart data with animation
function updateChart() {
    radarChart.updateSeries([{
        name: 'Series 1',
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100))
    }, {
        name: 'Series 2',
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100))
    }, {
        name: 'Series 3',
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100))
    }]);
}

// Update chart every 2 seconds
setInterval(updateChart, 2000);


// User Heatmap chart
function generateData(count, range) {
  let series = [];
  for (let i = 0; i < count; i++) {
      series.push(Math.floor(Math.random() * (range.max - range.min + 1)) + range.min);
  }
  return series;
}

document.addEventListener('DOMContentLoaded', function() {
  var options = {
      series: [{
          name: 'Metric1',
          data: generateData(18, { min: 0, max: 90 })
      },
      {
          name: 'Metric2',
          data: generateData(18, { min: 0, max: 90 })
      },
      {
          name: 'Metric3',
          data: generateData(18, { min: 0, max: 90 })
      },
      {
          name: 'Metric4',
          data: generateData(18, { min: 0, max: 90 })
      },
      {
          name: 'Metric5',
          data: generateData(18, { min: 0, max: 90 })
      },
      {
          name: 'Metric6',
          data: generateData(18, { min: 0, max: 90 })
      },
      {
          name: 'Metric7',
          data: generateData(18, { min: 0, max: 90 })
      },
      {
          name: 'Metric8',
          data: generateData(18, { min: 0, max: 90 })
      },
      {
          name: 'Metric9',
          data: generateData(18, { min: 0, max: 90 })
      }],
      chart: {
          height: 200,
          type: 'heatmap',
          toolbar: {
            show: false // Hide the chart toolbar
        },
        zoom: {
            enabled: false // Disable zoom functionality
        }
      },
      plotOptions: {
          heatmap: {
              radius: 0, // Ensures cells are square
              colorScale: {
                  ranges: [{
                      from: 0,
                      to: 30,
                      name: 'Low',
                      color: '#E0F2F1' // Lightest shade
                  },
                  {
                      from: 31,
                      to: 60,
                      name: 'Medium',
                      color: '#80CBC4' // Medium shade
                  },
                  {
                      from: 61,
                      to: 90,
                      name: 'High',
                      color: '#298091' // Darkest shade
                  }]
              }
          }
      },
      dataLabels: {
          enabled: false
      },
      xaxis: {
          type: 'category',
          labels: {
              show: true
          }
      },
      yaxis: {
          show: false
      },
      grid: {
          show: true,
          borderColor: '#e0e0e0',
          strokeDashArray: 4,
          position: 'back',
          xaxis: {
              lines: {
                  show: true
              }
          },
          yaxis: {
              lines: {
                  show: true
              }
          }
      },
  };

  var heatMap = new ApexCharts(document.querySelector("#heatMap"), options);
  heatMap.render();
});

// Add product button
document.addEventListener('DOMContentLoaded', function() {
  const icon = document.getElementById('icon');
  const content = document.getElementById('newProductInfo');

  icon.addEventListener('click', function() {
      // Add the rotate animation class
      icon.classList.add('rotate-transform');

      // Change the icon after the animation ends
      icon.addEventListener('animationend', function() {
          icon.classList.remove('rotate-transform');
          icon.classList.toggle('fa-circle-plus');
          icon.classList.toggle('fa-circle-minus');

          // Toggle the visibility of the content
          content.style.display = content.style.display === 'none' ? 'block' : 'none';
      }, { once: true }); // Ensure the event listener is called only once
  });
});

// Ripple effect button
document.querySelectorAll('.tablinks').forEach(button => {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();

    // Set the ripple position
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
    ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + 'px';

    // Add the ripple effect to the button
    this.appendChild(ripple);

    // Remove the ripple after animation completes
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });
});

