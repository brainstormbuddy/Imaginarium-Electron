import * as React from "react";
import ReactApexChart from "react-apexcharts";

export const ProjectInformationSection = () => {
  const series1 = [15, 13];
  const options1 = {
    chart: {
      type: "donut",
    },
    colors: ["#1BA1E2", "#AA00FF"],
    stroke: {
      colors: ["#1BA1E2", "#AA00FF"],
    },
    labels: ["Male", "Female"],
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "GENDER",
      align: "left",

      offsetX: 16,
      offsetY: 16,
      floating: false,
      style: {
        fontSize: "14px",
        fontWeight: "800",
        fontFamily: "Mulish",
        color: "#FFFFFF",
      },
    },
    subtitle: {
      text: "15 M / 13 F",
      align: "center",
      offsetY: 115,
      floating: false,
      style: {
        fontSize: "12px",
        fontWeight: "normal",
        fontFamily: "Mulish",
        color: "#FFFFFF",
      },
    },
    borderColor: "#ff0000",
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "14px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: "#FFFFFF",
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  const series2 = [18, 25, 20, 12];
  const options2 = {
    chart: {
      type: "donut",
    },
    colors: ["#008A00", "#A4C400", "#F0A30A", "#825A2C"],
    stroke: {
      colors: ["#008A00", "#A4C400", "#F0A30A", "#825A2C"],
    },
    labels: ["Kid-18", "19-25", "26-40", "41-Older"],
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "AGE",
      align: "left",
      offsetX: 16,
      offsetY: 16,
      floating: false,
      style: {
        fontSize: "14px",
        fontWeight: "800",
        fontFamily: "Mulish",
        color: "#FFFFFF",
      },
    },
    subtitle: {
      text: "18 / 25 / 20 / 12",
      align: "center",
      offsetY: 115,
      floating: false,
      style: {
        fontSize: "12px",
        fontWeight: "normal",
        fontFamily: "Mulish",
        color: "#FFFFFF",
      },
    },
    borderColor: "#ff0000",
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "14px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: "#FFFFFF",
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  const series3 = [30, 25, 20];
  const options3 = {
    chart: {
      type: "donut",
    },
    colors: ["#FFFFFF", "#2B2B2B", "#E3C800"],
    stroke: {
      colors: ["#FFFFFF", "#2B2B2B", "#E3C800"],
    },
    labels: ["White", "Black", "Asian"],
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "RACE STATS",
      align: "left",
      offsetX: 16,
      offsetY: 16,
      floating: false,
      style: {
        fontSize: "14px",
        fontWeight: "800",
        fontFamily: "Mulish",
        color: "#FFFFFF",
      },
    },
    subtitle: {
      text: "30 / 25 / 20",
      align: "center",
      offsetY: 115,
      floating: false,
      style: {
        fontSize: "12px",
        fontWeight: "normal",
        fontFamily: "Mulish",
        color: "#FFFFFF",
      },
    },
    borderColor: "#ff0000",
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "14px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: "#FFFFFF",
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div className="flex flex-col divide-y divide-[#2B2B2B] max-h-[500px] overflow-scroll">
      <div id="chart1">
        <ReactApexChart options={options1} series={series1} type="donut" />
      </div>
      <div id="chart2">
        <ReactApexChart options={options2} series={series2} type="donut" />
      </div>
      <div id="chart3">
        <ReactApexChart options={options3} series={series3} type="donut" />
      </div>
    </div>
  );
};
