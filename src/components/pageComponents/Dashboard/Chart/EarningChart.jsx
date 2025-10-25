import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const EarningChart = ({ type }) => {
    const [chartData, setChartData] = useState({
        series: [],
        options: {}
    });

    useEffect(() => {
        // Set different data based on the type
        if (type === 'daily') {
            setChartData({
                series: [
                    {
                        name: 'Revenue',
                        type: 'column',
                        data: [1.2, 1.0, 1.5, 1.3, 1.8, 1.4, 1.1, 1.6]
                    },
                    {
                        name: 'Revenue Line',
                        type: 'line',
                        data: [1.2, 1.0, 1.5, 1.3, 1.8, 1.4, 1.1, 1.6]
                    }
                ],
                options: {
                    chart: {
                        height: 350,
                        type: 'line',
                        toolbar: {
                            show: false
                        }
                    },
                    stroke: {
                        width: [0, 2],
                        curve: 'smooth'
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: '50%',
                            endingShape: 'rounded'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        enabledOnSeries: [1]
                    },
                    fill: {
                        type: ['gradient', 'solid'],
                        gradient: {
                            shade: 'dark',
                            type: 'vertical',
                            shadeIntensity: 0.5,
                            gradientToColors: undefined,
                            inverseColors: true,
                            opacityFrom: 0.85,
                            opacityTo: 0.85,
                            stops: [0, 100]
                        }
                    },
                    labels: ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
                    markers: {
                        size: 5,
                        colors: ['#FFC107'],
                        strokeColors: '#fff',
                        strokeWidth: 2
                    },
                    xaxis: {
                        labels: {
                            style: {
                                colors: '#fff'
                            }
                        }
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: '#fff'
                            },
                            formatter: (value) => `${value}M`
                        }
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'left',
                        offsetX: 40
                    }
                }
            });
        } else if (type === 'monthly') {
            setChartData({
                series: [
                    {
                        name: 'Revenue',
                        type: 'column',
                        data: [5.2, 4.8, 5.5, 5.3, 6.0, 5.6, 5.2, 5.8]
                    },
                    {
                        name: 'Revenue Line',
                        type: 'line',
                        data: [5.2, 4.8, 5.5, 5.3, 6.0, 5.6, 5.2, 5.8]
                    }
                ],
                options: {
                    // You can modify these options for monthly data if needed
                    chart: {
                        height: 350,
                        type: 'line',
                        toolbar: {
                            show: false
                        }
                    },
                    stroke: {
                        width: [0, 2],
                        curve: 'smooth'
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: '50%',
                            endingShape: 'rounded'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        enabledOnSeries: [1]
                    },
                    fill: {
                        type: ['gradient', 'solid'],
                        gradient: {
                            shade: 'dark',
                            type: 'vertical',
                            shadeIntensity: 0.5,
                            gradientToColors: undefined,
                            inverseColors: true,
                            opacityFrom: 0.85,
                            opacityTo: 0.85,
                            stops: [0, 100]
                        }
                    },
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    markers: {
                        size: 5,
                        colors: ['#FFC107'],
                        strokeColors: '#fff',
                        strokeWidth: 2
                    },
                    xaxis: {
                        labels: {
                            style: {
                                colors: '#fff'
                            }
                        }
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: '#fff'
                            },
                            formatter: (value) => `${value}M`
                        }
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'left',
                        offsetX: 40
                    }
                }
            });
        } else if (type === 'annually') {
            setChartData({
                series: [
                    {
                        name: 'Revenue',
                        type: 'column',
                        data: [60, 70, 80, 90, 100, 110, 120, 130]
                    },
                    {
                        name: 'Revenue Line',
                        type: 'line',
                        data: [60, 70, 80, 90, 100, 110, 120, 130]
                    }
                ],
                options: {
                    // You can modify these options for annual data if needed
                    chart: {
                        height: 350,
                        type: 'line',
                        toolbar: {
                            show: false
                        }
                    },
                    stroke: {
                        width: [0, 2],
                        curve: 'smooth'
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: '50%',
                            endingShape: 'rounded'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        enabledOnSeries: [1]
                    },
                    fill: {
                        type: ['gradient', 'solid'],
                        gradient: {
                            shade: 'dark',
                            type: 'vertical',
                            shadeIntensity: 0.5,
                            gradientToColors: undefined,
                            inverseColors: true,
                            opacityFrom: 0.85,
                            opacityTo: 0.85,
                            stops: [0, 100]
                        }
                    },
                    labels: ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028'],
                    markers: {
                        size: 5,
                        colors: ['#FFC107'],
                        strokeColors: '#fff',
                        strokeWidth: 2
                    },
                    xaxis: {
                        labels: {
                            style: {
                                colors: '#fff'
                            }
                        }
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: '#fff'
                            },
                            formatter: (value) => `${value}M`
                        }
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'left',
                        offsetX: 40
                    }
                }
            });
        }
    }, [type]);

    return (
        <div id="chart">
            <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
        </div>
    );
};

export default EarningChart;
