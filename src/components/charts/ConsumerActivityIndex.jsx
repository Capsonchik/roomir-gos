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
          'Октябрь', 'Ноябрь', 'Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель',
          'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь',
          'Декабрь', 'Январь', 'Февраль'
        ],
        axisLabel: {
          rotate: 45,
        },
      },
      {
        type: 'category',
        position: 'top',
        offset: 30,
        data: [
          '', '', '', '2022', '', '', '', '',
          '', '', '', '', '2023', '', '', '', '', '2024'
        ],
        axisTick: {
          alignWithLabel: false,
          length: 0,
        },
        axisLine: {
          show: false,
        },
      }
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