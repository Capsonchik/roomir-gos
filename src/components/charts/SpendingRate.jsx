import ReactECharts from 'echarts-for-react';

export const SpendingRate = () => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '1%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        top: '10%',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Непродовольственные товары'},
          { value: 735, name: 'Продовольственные товары' },
          { value: 580, name: 'Услуги + АЗС' },
          { value: 484, name: 'HoReCa' },
        ]
      }
    ]
  };

  return (
    <>
      <ReactECharts style={{height: '100%'}} option={option} />
    </>

  )
};