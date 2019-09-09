import React, { Component } from 'react';
import { Input, Select, Button, Table, Icon } from 'antd';
import styles from './welcome.less';
import ReactEcharts from 'echarts-for-react';
class Welcome extends Component {
  render() {
    const option = {
      title: {
        text: '订单和商家数据'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['当日发布订单量', '当日注册商家数']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['5月13日', '5月14日', '5月15日', '5月16日', '5月17日', '5月18日', '5月19日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '当日发布订单量',
          type: 'line',
          stack: '总量',
          data: [20, 25, 44, 43, 40, 80, 100]
        },
        {
          name: '当日注册商家数',
          type: 'line',
          stack: '总量',
          data: [30, 55, 23, 30, 38, 80, 133]
        },

      ]
    };
    return (
      <div className={styles.content}>
        {/* <p>员工管理</p> */}
        <div className={styles.content_search}>
          <div style={{ backgroundColor: "#27A9E3" }}>
            <p>今日放单商家数：320家</p>
            <p>今日注册商家数：28家</p>
            <p>总注册商家数：32家</p>
          </div>
          <div style={{ backgroundColor: "#28B779" }}>
            <p>今日放单量：320单</p>
            <p>进行中刷单：28单</p>
            <p>待接订单量：32单</p>
          </div>
          <div style={{ backgroundColor: "#FFB748" }}>
            <p>总注册推广员：320人</p>
            <p>总推广订单：28单</p>
            <p>总推广分成：32</p>
          </div>
          <div style={{ backgroundColor: "#2255A4" }}>
            <p>今日收入：320元</p>
            <p>待结算收入：28元</p>
            <p>累计结算收入：32元</p>
          </div>
        </div>
        <div className={styles.content_content}>
          <ReactEcharts option={option} style={{ height: 450 }} />
        </div>

      </div>
    );
  }
}

export default Welcome;