import React from 'react';
import './Ratings.css';
import Chart from 'react-apexcharts';

const Ratings = () => {
  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        endingShape: 'rounded',
        colors: {
          backgroundBarColors: ['#555'],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 5,
        },
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
      labels: {
        style: {
          colors: Array(5).fill('#fff'), // Sets all labels to white
          fontSize: '14px'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      show: false
    },
    fill: {
      colors: ['#7A55FF', '#7A55FF', '#7A55FF', '#FFC107', '#7A55FF']
    },
    tooltip: {
      enabled: false
    },
    colors: ['#7A55FF'],
    legend: {
      show: false
    }
  };

  const series = [
    {
      name: 'Ratings',
      data: [20, 40, 35, 60, 25] // Example data
    }
  ];

  return (
    <div className='rating-box'>
      <h1 className='rating-heading'>Ratings</h1>
      <div>
        <Chart options={options} series={series} type="bar" height="170" />
      </div>
    </div>
  );
}

export default Ratings;
