import Chart from 'react-apexcharts';
import data from '../../../utils/avalAge';

function AvalGeneroChart() {
  const categories = data.categories;
  const seriesData = data.data.map((num) => {
    return Math.round(num * 10) / 10;
  });

  const options = {
    xaxis: { categories: categories },
    dataLabels: {
      enabled: false,
    },
    colors: ['#0455BF', '#05C7F2', '#D95204', '#EEAF24'],
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    title: {
      text: 'Avaliação geral por faixa etária',
      align: 'center',
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#263238',
      },
    },
    legend: {
      show: false,
    },
  };

  const series = [{ data: seriesData }];

  return <Chart options={options} series={series} type='bar' width='100%' />;
}

export default AvalGeneroChart;
