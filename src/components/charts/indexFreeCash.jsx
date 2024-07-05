import ReactECharts from "echarts-for-react";

export const IndexFreeCash = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Индекс'],
    },
    xAxis: {
      type: 'category',
      data: ['2021-05', '2021-06', '2021-07', '2021-08', '2021-09'],
    },
    yAxis: [
      {
        type: 'value',
        name: 'Процент',
        min: -20,
        max: 100,
        position: 'left',
        axisLabel: {
          formatter: '{value} %',
        },
      },
    ],
    series: [
      {
        name: 'Индекс',
        type: 'bar',
        data: [80, 46, 58, 34, -18],
        itemStyle: {
          color: 'rgba(238, 239, 244, 1)',
        },
        label: {
          show: true,
          formatter: '{c}%',
          position: 'top',
        },
      },
      {
        name: 'Индекс',
        type: 'line',
        data: [95, -9, -13, 15, -18],
        itemStyle: {
          color: 'orange',
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
    <>
      <ReactECharts style={{height: 385}} option={option} />
    </>
  );
};