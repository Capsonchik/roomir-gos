import ReactECharts from "echarts-for-react";

export const PurchasingActivityIndex = ({data}) => {
  const option = {
    // title: {
    //   text: 'Stacked Line'
    // },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['2016', '2017', '2018', '2019', '2020']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '2016',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210, 210, 220, 230, 240,250]
      },
      {
        name: '2017',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310, 320,330, 340, 250, 360]
      },
      {
        name: '2018',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410, 420, 430, 440, 450, 460]
      },
      {
        name: '2019',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320, 320, 330, 340, 350, 360]
      },
      {
        name: '2020',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 1330, 1340,1350, 1360, 1370]
      }
    ]
  };

  return (
    <>
      <ReactECharts style={{height: '100%'}} option={option} />
    </>
  );
};