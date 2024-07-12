import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";
import {selectPieChartData} from "../../store/selectors";

export const QuestionPieChart = () => {
  const pieChartData = useSelector(selectPieChartData);

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: pieChartData
      }
    ]
  };

  return (
    <div>
      <ReactECharts option={option} />
    </div>
  );
};