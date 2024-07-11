import ReactECharts from "echarts-for-react";

export const ConsumerActivityIndex = () => {
  const option = {
    // title: {
    //   text: 'Индекс потребительской уверенности',
    //   left: 'center',
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '2022-10', '2022-11', '2022-12', '2023-01', '2023-02', '2023-03', '2023-04',
          '2023-05', '2023-06', '2023-07', '2023-08', '2023-09', '2023-10', '2023-11',
          '2023-12', '2024-01', '2024-02'
        ],
        // axisLabel: {
        //   rotate: 45,
        // },
      },
      // {
      //   type: 'category',
      //   position: 'top',
      //   offset: 30,
      //   data: [
      //     '', '', '', '2022', '', '', '', '',
      //     '', '', '', '', '2023', '', '', '', '', '2024'
      //   ],
      //   axisTick: {
      //     alignWithLabel: false,
      //     length: 0,
      //   },
      //   axisLine: {
      //     show: false,
      //   },
      // }
    ],
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Индекс',
        type: 'bar',
        data: [-12, -8, -7, -1, -1, 1, 1, 1, 1, -1, 0, -4, -2, 1, 1, 2, 5, 11],
        itemStyle: {
          color: function (params) {
            return params.value > 0 ? '#76C043' : '#E83132';
          },
        },
        label: {
          show: true,
          position: 'top',
          formatter: '{c}',
        },
      },
    ],
  };
  return (
    <ReactECharts style={{height: 700}} option={option} />
  );
};