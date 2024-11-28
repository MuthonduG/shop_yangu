"use client";

import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

// Placeholder for utility functions
const Utils = {
  months: ({ count }: { count: number }) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months.slice(0, count);
  },
  numbers: ({ count, min, max }: { count: number; min: number; max: number }) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  },
};

const ChartComponent: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [chartData, setChartData] = useState({
    labels: Utils.months({ count: 7 }),
    datasets: [
      {
        label: "Dataset 1",
        data: Utils.numbers({ count: 7, min: -100, max: 100 }),
        borderColor: "#91A6B4", // Black line
        backgroundColor: "rgba(255, 0, 0, 0.2)", // Red shading
        fill: true, // Enables the shaded area
        tension: 0.5, // Smooth curves
        animations: {
          y: {
            duration: 2000,
            delay: 500,
          },
        },
      },
    ],
  });

  useEffect(() => {
    if (!chartRef.current) return;

    // Cleanup previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        animations: {
          y: {
            easing: "easeInOutElastic",
            from: (ctx) => {
              const customCtx = ctx as any;
              if (ctx.type === "data") {
                if (ctx.mode === "default" && !customCtx.dropped) {
                  customCtx.dropped = true;
                  return 0;
                }
              }
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Monthly Sales",
          },
        },
        scales: {
          x: {
            grid: {
              color: "#CCCCCC",
            },
          },
          y: {
            grid: {
              color: "#CCCCCC",
            },
          },
        },
      },
    });

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, [chartData]);

  const actions = [
    {
      name: "Randomize",
      handler: () => {
        setChartData((prevData) => ({
          ...prevData,
          datasets: prevData.datasets.map((dataset) => ({
            ...dataset,
            data: Utils.numbers({ count: prevData.labels.length, min: -100, max: 100 }),
          })),
        }));
      },
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="xl:w-[50%] md:w-[90%] sm:w-[90%] p-6 shadow-md rounded-lg bg-white border border-gray-300">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Welcome Back, John Doe</h1>
        <canvas ref={chartRef}></canvas>
        <div className="mt-4 flex justify-center space-x-4">
          {actions.map((action, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={action.handler}
            >
              {action.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
