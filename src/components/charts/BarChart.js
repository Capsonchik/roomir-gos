import ReactECharts from "echarts-for-react";

export const BarChart = ({values}) => {

  // const values = [25, 75];
  // const colors = ['#A8D08D', '#E06666'];
  const colors = ['#4D79D3', '#A8D08D'];

  const seriesData = values.map((value, index) => ({
    type: 'bar',
    stack: 'total',
    data: [value],
    itemStyle: {
      color: colors[index % colors.length]
    },
    label: {
      show: true,
      position: 'inside',
      formatter: '{c}'
    }
  }));

  const option = {
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      show: false,
      data: ['']
    },
    series: seriesData,
    grid: {
      left: 0,
      right: 0,
      top: 9,
      bottom: -9,
      containLabel: true
    }
  };

  return (
    <div>
      <ReactECharts style={{height: 50, width: '100%'}} option={option} />
    </div>
  );
};