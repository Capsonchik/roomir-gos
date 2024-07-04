import ReactECharts from "echarts-for-react";

export const Deflator = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['2021-05', '2021-06', '2021-07', '2021-08', '2021-09'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Дефлятор',
        type: 'bar',
        barWidth: '50%',
        color: '#FF8200',
        data: [10, 52, 200, 334, 390]
      }
    ]
  };

  return (
    <>
      <ReactECharts style={{height: '100%'}} option={option} />
    </>
  );
};