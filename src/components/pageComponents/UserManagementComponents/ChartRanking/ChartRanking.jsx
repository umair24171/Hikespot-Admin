import React from 'react';
import Chart from 'react-apexcharts';

const ChartRanking = () => {
    const options = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
                endingShape: 'flat'
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: Array.from({ length: 24 }, (_, i) => i + 1),
            labels: {
                show: false
            },
            axisTicks: {
                show: false
            },
            axisBorder: {
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
            colors: ['#FFC107']
        },
        tooltip: {
            enabled: false
        }
    };

    const series = [
        {
            name: 'Earnings',
            data: [10, 21, 15, 30, 40, 35, 25, 15, 10, 20, 18, 22, 30, 25, 10, 15, 20, 25, 30, 20, 10, 15, 20, 25]
        }
    ];

    return (
        <div style={{ width: '70%', height: '100px' }}>
            <Chart options={options} series={series} type="bar" height="100%" width="100%" />
        </div>
    );
}

export default ChartRanking;
