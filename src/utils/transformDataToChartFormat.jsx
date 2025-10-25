const transformDataToChartFormat = (data, type) => {
    let series, options;

    if (type === 'daily') {
        series = [
            {
                name: 'Revenue',
                type: 'column',
                data: data.daily
            },
            {
                name: 'Revenue Line',
                type: 'line',
                data: data.daily
            }
        ];
        options = {
            chart: {
                height: 350,
                type: 'line',
                toolbar: { show: false }
            },
            stroke: { width: [0, 2], curve: 'smooth' },
            plotOptions: { bar: { columnWidth: '50%', endingShape: 'rounded' } },
            dataLabels: { enabled: true, enabledOnSeries: [1] },
            fill: { type: ['gradient', 'solid'], gradient: { shade: 'dark', type: 'vertical', shadeIntensity: 0.5, opacityFrom: 0.85, opacityTo: 0.85, stops: [0, 100] } },
            labels: ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
            markers: { size: 5, colors: ['#FFC107'], strokeColors: '#fff', strokeWidth: 2 },
            xaxis: { labels: { style: { colors: '#fff' } } },
            yaxis: { labels: { style: { colors: '#fff' }, formatter: (value) => `${value}M` } },
            legend: { position: 'top', horizontalAlign: 'left', offsetX: 40 }
        };
    } else if (type === 'monthly') {
        series = [
            {
                name: 'Revenue',
                type: 'column',
                data: data.monthly
            },
            {
                name: 'Revenue Line',
                type: 'line',
                data: data.monthly
            }
        ];
        options = {
            chart: { height: 350, type: 'line', toolbar: { show: false } },
            stroke: { width: [0, 2], curve: 'smooth' },
            plotOptions: { bar: { columnWidth: '50%', endingShape: 'rounded' } },
            dataLabels: { enabled: true, enabledOnSeries: [1] },
            fill: { type: ['gradient', 'solid'], gradient: { shade: 'dark', type: 'vertical', shadeIntensity: 0.5, opacityFrom: 0.85, opacityTo: 0.85, stops: [0, 100] } },
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            markers: { size: 5, colors: ['#FFC107'], strokeColors: '#fff', strokeWidth: 2 },
            xaxis: { labels: { style: { colors: '#fff' } } },
            yaxis: { labels: { style: { colors: '#fff' }, formatter: (value) => `${value}M` } },
            legend: { position: 'top', horizontalAlign: 'left', offsetX: 40 }
        };
    } else if (type === 'annually') {
        series = [
            {
                name: 'Revenue',
                type: 'column',
                data: data.annually
            },
            {
                name: 'Revenue Line',
                type: 'line',
                data: data.annually
            }
        ];
        options = {
            chart: { height: 350, type: 'line', toolbar: { show: false } },
            stroke: { width: [0, 2], curve: 'smooth' },
            plotOptions: { bar: { columnWidth: '50%', endingShape: 'rounded' } },
            dataLabels: { enabled: true, enabledOnSeries: [1] },
            fill: { type: ['gradient', 'solid'], gradient: { shade: 'dark', type: 'vertical', shadeIntensity: 0.5, opacityFrom: 0.85, opacityTo: 0.85, stops: [0, 100] } },
            labels: ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028'],
            markers: { size: 5, colors: ['#FFC107'], strokeColors: '#fff', strokeWidth: 2 },
            xaxis: { labels: { style: { colors: '#fff' } } },
            yaxis: { labels: { style: { colors: '#fff' }, formatter: (value) => `${value}M` } },
            legend: { position: 'top', horizontalAlign: 'left', offsetX: 40 }
        };
    }

    return { series, options, total: data.total };
};

// export default transformDataToChartFormat;
