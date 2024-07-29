import { useEffect } from 'react';
import { Card, Button } from 'antd';
// import * as echarts from 'echarts';
import { useCharts } from '@/hook';
import api from '@/api';
import style from './index.module.less';

function Dashboard() {
  // 初始化折线图
  const [lineRef, lineChart] = useCharts();

  useEffect(() => {
    // 3 定义 options 配置+将配置设置到画布上
    renderLineChart();
  }, [lineChart]);

  // 加载折线图数据
  const renderLineChart = async () => {
    if (!lineChart) return;

    const { label, order, money } = await api.getLineData();

    // 3 定义 options 配置+将配置设置到画布上
    lineChart?.setOption({
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['订单', '流水']
      },
      grid: {
        left: 50,
        right: 20,
        bottom: 20
      },
      xAxis: {
        data: label
      },
      yAxis: {
        type: 'value'
      },
      series: [
        { name: '订单', type: 'line', data: order },
        { name: '流水', type: 'line', data: money }
      ]
    });
  };

  const [pieRef, pieChart] = useCharts();
  useEffect(() => {
    pieChart?.setOption({
      title: {
        text: '司机年龄分布',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '城市分布',
          type: 'pie',
          radius: [50, 140],
          roseType: 'area',
          data: [
            { value: 25, name: '北京' },
            { value: 30, name: '上海' },
            { value: 27, name: '广州' },
            { value: 23, name: '深圳' },
            { value: 33, name: '杭州' }
          ]
        }
      ]
    });
  }, [pieChart]);

  const [radarRef, radarChart] = useCharts();
  useEffect(() => {
    radarChart?.setOption({
      title: {
        text: '司机模型诊断',
        left: 'center'
      },
      legend: {
        data: ['司机模型诊断'],
        left: 'left'
      },
      radar: {
        center: ['50%', 230],
        indicator: [
          { name: '服务态度', max: 10 },
          { name: '在线时长', max: 600 },
          { name: '接单率', max: 100 },
          { name: '评分', max: 5 },
          { name: '关注度', max: 10000 }
        ]
      },
      series: [
        {
          name: '模型诊断',
          type: 'radar',
          data: [
            {
              value: [8, 300, 80, 4, 9000],
              name: '司机模型诊断'
            }
          ]
        }
      ]
    });
  }, [radarChart]);

  useEffect(() => {
    renderLineChart();
    // getPieChartCity();
    // getRadarChart();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <Card
          title='订单和流水走势图'
          extra={
            <Button type='primary' onClick={renderLineChart}>
              刷新
            </Button>
          }
        >
          <div ref={lineRef} className={style.itemLine}></div>
        </Card>
      </div>
      <div className={style.card}>
        <Card title='司机分布' extra={<Button type='primary'>刷新</Button>}>
          <div ref={pieRef} className={style.itemLine}></div>
        </Card>
      </div>
      <div className={style.card}>
        <Card title='模型诊断' extra={<Button type='primary'>刷新</Button>}>
          <div ref={radarRef} className={style.itemLine}></div>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
