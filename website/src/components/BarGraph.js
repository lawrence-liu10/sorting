import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarGraph = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (Array.isArray(data) && chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      // Create new chart instance
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map((_, index) => `Bar ${index + 1}`),
          datasets: [{
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust the color as needed
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }],
        },
        options: {
            scales: {
              x: {
                display: false, // Hide x-axis
              },
              y: {
                display: false, // Hide y-axis
              },
            },
            plugins: {
              legend: {
                display: false, // Hide legend
              },
            },
            elements: {
              bar: {
                borderWidth: 0, // Hide bar borders
              },
            },
          },
      });
    }
  }, [data]);

  return (
    <canvas ref={chartRef} width="400" height="200"></canvas>
  );
};

export default BarGraph;
