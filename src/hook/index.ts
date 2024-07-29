import { useRef, useState, useEffect, RefObject } from 'react';
import * as echarts from 'echarts';

export const useCharts = (): [RefObject<HTMLDivElement> | any, HTMLDivElement | any] => {
  // 1 获取 dom 节点
  const chartRef = useRef<HTMLDivElement>(null);

  // 2 创建实例对象 -- 初始化 echarts 画布
  const [chartInstance, setChartInstance] = useState<echarts.ECharts | any>();

  // 保证页面组件渲染完之后再执行
  useEffect(() => {
    const chart = echarts.init(chartRef.current as HTMLElement);
    setChartInstance(chart);
  }, []);

  return [chartRef, chartInstance];
};
