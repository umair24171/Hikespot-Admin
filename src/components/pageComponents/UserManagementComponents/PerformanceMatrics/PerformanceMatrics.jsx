import React from 'react'
import './PerformanceMatrics.css'
import Chart from 'react-apexcharts';


const PerformanceMatrics = () => {

  const options1 = {
    chart: {
      type: 'radialBar',
      offsetY: -20,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 15,
          size: '70%',
        },
        track: {
          background: '#333',
          strokeWidth: '97%',
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: 10,
            color: '#FFBC07',
            fontSize: '30px',
            fontWeight: 700,
          }
        }
      }
    },
    fill: {
      colors: ['#FFBC07']
    },
    labels: ['Ride Completion Rate'],
  };

  const series1 = [85]; // 85%

  const options2 = {
    chart: {
      type: 'radialBar',
      offsetY: -20,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 15,
          size: '70%',
        },
        track: {
          background: '#333',
          strokeWidth: '97%',
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: 10,
            color: '#FFBC07',
            fontSize: '30px',
            fontWeight: 700,
          }
        }
      }
    },
    fill: {
      colors: ['#FFBC07']
    },
    labels: ['Average Wait Time'],
  };

  const series2 = [10]; // 10 minutes


  return (
    <>
      <div className="performance-box">
        <h1 className='performance-heading'>Performance Metrics</h1>

        <div className="graphs">
          <div className="row">
            <div className="col-lg-6">
              <div className="graph-container">
                <Chart options={options1} series={series1} type="radialBar" height={300} />
                <div className="graph-label">
                  <h2 className='graph-heading'>Ride Completion Rate</h2>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="graph-container">
                <Chart options={options2} series={series2} type="radialBar" height={300} />
                <div className="graph-label">
                  <h2 className='graph-heading'>Average Wait Time</h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default PerformanceMatrics