import ReactECharts from "echarts-for-react";

export const AverageCheckDynamics = ({data}) => {
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Средний чек', 'Динамика'],
    },
    xAxis: {
      type: 'category',
      data: data ? data.year : ['2021-05', '2021-06', '2021-07', '2021-08', '2021-09'],
    },
    yAxis: [
      {
        type: 'value',
        name: 'Процент',
        // Параметры для отображения нижней и верхней границы графика
        // min: -30,
        // max: 100,
        position: 'left',
        axisLabel: {
          formatter: '{value}',
        },
      },
    ],
    series: [
      {
        name: 'Средний чек',
        type: 'bar',
        data: data ? data.value : [80, 46, 58, 34, -18],
        itemStyle: {
          // color: 'rgba(238, 239, 244, 1)',
          color: 'rgba(238, 239, 244, 1)',
        },
        label: {
          show: true,
          formatter: '{c}',
          position: 'top',
        },
      },
      {
        name: 'Динамика',
        type: 'line',
        data: data ? data.line_value : [95, -9, -13, 15, -18],
        itemStyle: {
          color: '#08912B',
        },
        lineStyle: {
          width: 3,
        },
        symbolSize: 10,
        label: {
          show: true,
          formatter: '{c}%',
          position: 'top',
        },
      },
    ],
  };

  return (
    <div>
      <ReactECharts style={{height: 385}} option={option} />
    </div>
  );
};