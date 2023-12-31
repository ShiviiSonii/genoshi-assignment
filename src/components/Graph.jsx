import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && data.labels.length > 0 && data.values.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.labels,
          datasets: [
            {
              data: data.values,
              backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
              hoverOffset: 4,
            },
          ],
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />; // Adjust the width and height as needed
};

export default Graph;
