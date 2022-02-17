var options = {
  series: [
    {
      type: "column",
      name: "&nbspVolume",
      data: [950, 1750, 1800, 3600, 1800, 3600, 1800, 1830, 1350, 1350, 1250, 1850, 4000, 1250],
    },
    {
      name: "&nbspAvg PSF",
      type: "line",
      data: [160, 140, 120, 140, 40, 54, 60, 70, 80, 90, 120, 170, 150, 200],
    },
  ],
  colors: ["#9255A2", "#F1AF4C"],
  chart: {
    type: "bar",
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 6,
    strokeWidth: 0,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent", "#F1AF4C"],
  },
  xaxis: {
    categories: [
      "Jan 01",
      "Feb 01",
      "Mar 01",
      "Apr 01",
      "May 01",
      "Jun 01",
      "Jul 01",
      "Aug 01",
      "Sep 01",
      "Oct 01",
      "Nov 01",
      "Dec 01",
      "Jan 01",
      "Feb 01",
    ],
    labels: {
      minHeight: 120,
      style: {
        colors: ["#6B7380"],
        fontSize: "12px",
        fontFamily: "Source Sans Pro, sans-serif",
        fontWeight: 400,
      },
    },
    axisBorder: {
      show: false,
      color: "#E6E7EB",
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: [
    {
      title: {
        text: "PSF",
        style: {
          color: "#6B7380",
        },
      },
      min: 0,
      max: 4000,
      tickAmount: 5,
      labels: {
        style: {
          colors: ["#6B7380"],
          fontSize: "12px",
          fontFamily: "Source Sans Pro, sans-serif",
          cssClass: "left-title",
        },
        formatter: (value) => {
          return "$" + value;
        },
      },
    },
    {
      opposite: true,
      title: {
        text: "Volume",
        style: {
          color: "#6B7380",
        },
      },
      labels: {
        style: {
          colors: ["#6B7380"],
          fontSize: "12px",
          fontFamily: "Source Sans Pro, sans-serif",
          cssClass: "right-title",
        },
        formatter: (value) => {
          return value;
        },
      },
    },
  ],
  grid: {
    borderColor: "#E6E7EB",
    strokeDashArray: 10,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    opacity: 1,
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        legend: {
          itemMargin: {
            vertical: 5,
            horizontal: 8,
          },
        },
      },
    },
  ],
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "left",
    fontSize: "14px",
    fontFamily: "Source Sans Pro, sans-serif",
    fontWeight: 400,
    offsetY: -65,
    labels: {
      colors: "#111828",
      useSeriesColors: false,
    },
    itemMargin: {
      vertical: 20,
      horizontal: 8,
    },
    markers: {
      width: 15,
      height: 15,
      strokeWidth: 0,
      strokeColor: "transparent",
      radius: 3,
      offsetX: 0,
      offsetY: 3,
    },
  },
  //   All roltip settings
  tooltip: {
    shared: true,
    intersect: false,
  },
};

var options2 = {
  series: [
    {
      type: "column",
      name: "&nbspVolume",
      data: [1250, 1050, 1800, 3600, 1800, 3600, 1800, 1130, 1350, 1350, 1250, 1850, 4000, 1250],
    },
    {
      name: "&nbspAvg PSF",
      type: "line",
      data: [160, 140, 120, 60, 40, 54, 60, 70, 40, 90, 120, 120, 150, 200],
    },
  ],
  colors: ["#9255A2", "#F1AF4C"],
  chart: {
    type: "bar",
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 6,
    strokeWidth: 0,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent", "#F1AF4C"],
  },
  xaxis: {
    categories: [
      "Jan 01",
      "Feb 01",
      "Mar 01",
      "Apr 01",
      "May 01",
      "Jun 01",
      "Jul 01",
      "Aug 01",
      "Sep 01",
      "Oct 01",
      "Nov 01",
      "Dec 01",
      "Jan 01",
      "Feb 01",
    ],
    labels: {
      minHeight: 120,
      style: {
        colors: ["#6B7380"],
        fontSize: "12px",
        fontFamily: "Source Sans Pro, sans-serif",
        fontWeight: 400,
      },
    },
    axisBorder: {
      show: false,
      color: "#E6E7EB",
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: [
    {
      title: {
        text: "PSF",
        style: {
          color: "#6B7380",
        },
      },
      min: 0,
      max: 4000,
      tickAmount: 5,
      labels: {
        style: {
          colors: ["#6B7380"],
          fontSize: "12px",
          fontFamily: "Source Sans Pro, sans-serif",
          cssClass: "left-title",
        },
        formatter: (value) => {
          return "$" + value;
        },
      },
    },
    {
      opposite: true,
      title: {
        text: "Volume",
        style: {
          color: "#6B7380",
        },
      },
      labels: {
        style: {
          colors: ["#6B7380"],
          fontSize: "12px",
          fontFamily: "Source Sans Pro, sans-serif",
          cssClass: "right-title",
        },
        formatter: (value) => {
          return value;
        },
      },
    },
  ],
  grid: {
    borderColor: "#E6E7EB",
    strokeDashArray: 10,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    opacity: 1,
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        legend: {
          itemMargin: {
            vertical: 5,
            horizontal: 8,
          },
        },
      },
    },
  ],
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "left",
    fontSize: "14px",
    fontFamily: "Source Sans Pro, sans-serif",
    fontWeight: 400,
    offsetY: -65,
    itemMargin: {
      vertical: 20,
      horizontal: 8,
    },
    labels: {
      colors: "#111828",
      useSeriesColors: false,
    },
    markers: {
      width: 15,
      height: 15,
      strokeWidth: 0,
      strokeColor: "transparent",
      radius: 3,
      offsetX: 0,
      offsetY: 3,
    },
  },
  //   All roltip settings
  tooltip: {
    shared: true,
    intersect: false,
  },
};

var chart = new ApexCharts(document.querySelector("#chart-sales-trend-1"), options);
chart.render();

var chart2 = new ApexCharts(document.querySelector("#chart-sales-trend-2"), options2);
chart2.render();

var chart3 = new ApexCharts(document.querySelector("#chart-sales-trend-3"), options);
chart3.render();

var chart4 = new ApexCharts(document.querySelector("#chart-sales-trend-4"), options2);
chart4.render();

var chart5 = new ApexCharts(document.querySelector("#chart-sales-trend-5"), options);
chart5.render();

var chart6 = new ApexCharts(document.querySelector("#chart-sales-trend-6"), options2);
chart6.render();
