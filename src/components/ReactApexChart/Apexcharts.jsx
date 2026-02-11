import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Apexcharts = ({ mode = "light", name }) => {
  const [monthlyDownloads, setMonthlyDownloads] = useState(() =>
    new Array(12).fill(0)
  );
  console.log(monthlyDownloads);
  const isDark = mode === "dark";
  // Monthly Lables
  const monthLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const options = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: isDark ? ["#6b7280", "#2563eb"] : ["#2563eb", "#d1d5db"],
    grid: {
      borderColor: isDark ? "#404040" : "#e5e7eb",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "16px",
        borderRadius: 0,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 8,
      colors: ["transparent"],
    },
    xaxis: {
      categories: monthLabels,
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: { show: false },
      labels: {
        style: {
          colors: "#9ca3af",
          fontSize: "13px",
          fontFamily: "Inter, ui-sans-serif",
          fontWeight: 400,
        },
        offsetX: -2,
        formatter: (title) => title.slice(0, 3), // Jan, Feb, ...
      },
    },
    yaxis: {
      labels: {
        align: "left",
        minWidth: 0,
        maxWidth: 140,
        style: {
          colors: "#9ca3af",
          fontSize: "13px",
          fontFamily: "Inter, ui-sans-serif",
          fontWeight: 400,
        },
        formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.9,
        },
      },
    },
    tooltip: {
      y: {
        // downloads, not money 🙂
        formatter: (value) =>
          `${
            value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value
          } downloads`,
      },
    },
    responsive: [
      {
        breakpoint: 568,
        options: {
          chart: {
            height: 300,
          },
          plotOptions: {
            bar: {
              columnWidth: "14px",
            },
          },
          stroke: {
            width: 8,
          },
          xaxis: {
            labels: {
              style: {
                colors: "#9ca3af",
                fontSize: "11px",
                fontFamily: "Inter, ui-sans-serif",
                fontWeight: 400,
              },
              offsetX: -2,
              formatter: (title) => title.slice(0, 3),
            },
          },
          yaxis: {
            labels: {
              align: "left",
              minWidth: 0,
              maxWidth: 140,
              style: {
                colors: "#9ca3af",
                fontSize: "11px",
                fontFamily: "Inter, ui-sans-serif",
                fontWeight: 400,
              },
              formatter: (value) =>
                value >= 1000 ? `${value / 1000}k` : value,
            },
          },
        },
      },
    ],
  };
  const series = [
    {
      name: "Downloads",
      data: monthlyDownloads,
    },
  ];

  // get the monthly Data
  useEffect(() => {
    fetch(`https://api.npmjs.org/downloads/range/last-year/${name}`)
      .then((response) => response.json())
      .then((data) => {
        const monthly = new Array(12).fill(0);

        data.downloads.forEach(({ day, downloads }) => {
          const monthIndex = new Date(day).getMonth(); // 0-11
          monthly[monthIndex] += downloads;
        });

        setMonthlyDownloads(monthly);
      });
  }, [name]);

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={300}
      />
    </>
  );
};

export default Apexcharts;
