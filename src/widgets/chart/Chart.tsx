import React from 'react';
import { Bar } from 'react-chartjs-2';
import {num_word} from "../../entities/numWord/NumWord";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  plugins: {
    tooltip: {
      yAlign: 'bottom',
      callbacks: {
        beforeTitle: function (context) {
          return ""
        },
        title: function (context) {
          return ''
        },
        afterTitle: function (context) {
          return 'За ' + context[0].label + ' число' + ' вы отработали ' + context[0].raw + num_word(context[0].raw, [' час', ' часа', ' часов'])
        },
        label: function (context) {
          return ""
        },
      },
      backgroundColor: '#303030',
      caretSize: 4,
      padding: 12,
      titleMarginBottom: 0,
    } as any,
    legend: {
      display: false,
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 14
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      beginAtZero: false,
      ticks: {
        color: '#FFFFFF',
      }
    },
    y: {
      ticks: {
        color: '#FFFFFF',
        min: 0,
        max: 100,
        callback: function(value) {
          return value % 2 ? '' : value
        }
      } as any,
      scaleLabel: {
        display: true,
        labelString: "Percentage"
      },
      grid: {
        display: false,
      },
      beginAtZero: true,
    }
  },
  maintainAspectRatio: false,
};


let labels = []

const getDate = () => {
  const DAY_MILSEC = 24 * 60 * 60 * 1000;



  let today = new Date().getTime();
  for (let i = 0; i < 7; i++) {
    let date = new Date(today + DAY_MILSEC * i);

    labels.push(getDay(date))
  }

  function getDay(date) {
    return date.getDate()
  }

  console.log(labels)
}
getDate()

const data = {
  labels,
  datasets: [
    {
      label: '',
      display: false,
      borderRadius: 8,
      data: [1, 2, 3, 4, 5, 6, 7],
      borderColor: 'rgba(0, 0, 0, 0)',
      categoryPercentage: 1,
      layout: {
        padding: {
          top: 24,
          right: 16,
          bottom: 0,
          left: 8
        }
      },
      elements: {
        line: {
          fill: false
        },
        point: {
          hoverRadius: 7,
          radius: 5
        }
      },
      backgroundColor: [
        '#9685FF',
        '#FF85EB',
        '#FF8585',
        '#53D780',
        '#9685FF',
        '#FF85EB',
        '#FF8585',
      ],
      stack: 'Stack',
    }
  ],
}

const Chart: React.FunctionComponent = () : any => {
  return (
    <>
      <Bar
        width={673}
        height={600}
        options={options}
        data={data}
      />
    </>
  );
};

export default Chart;
