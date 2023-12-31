import React from 'react';
import { Bar } from 'react-chartjs-2';

const RecentActivity = ({  }) => {
  const barChartData = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
    datasets: [
      {
        label: 'Activity Count',
        data: [8, 12, 6, 10, 15],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="mb-4">
        <Bar data={barChartData} />
      </div>
    </div>
  );
};

export default RecentActivity;
