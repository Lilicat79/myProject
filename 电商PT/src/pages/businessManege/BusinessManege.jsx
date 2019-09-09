import React from 'react';
import { Modal, Button, DatePicker, Select, Table, Input } from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;
import { connect } from 'dva'
import styles from './BusinessManege.less'
class BusinessManege extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      form: {
        page: 0,
        pageSize: 6
      }
    }
  }
  //状态选择
  StatusChange = (value) => {
    this.setState({
      form: {
        ...this.state.form,
        status: value
      }
    })
  }
  //高级用户选择
  handleChange = (value) => {
    this.setState({
      form: {
        ...this.state.form,
        rank: value
      }
    })
  }
  busChangeId = (e) => {
    // console.log(e.target.value)
    this.setState({
      form: {
        ...this.state.form,
        id: e.target.value
      }
    })
  }
  search = () => {
    this.props.dispatch({ type: 'Business/fetchLoadBufindess', payload: this.state.form })
  }
  componentWillMount() {
    this.props.dispatch({ type: 'Business/fetchLoadBufindess', payload: this.state.form })
  }

  pageChange = (page, pageSize) => {
    this.props.dispatch({ type: 'Business/fetchLoadBufindess', payload: { page: page - 1, pageSize: 6 } })
    this.setState({
      form: {
        ...this.state.form,
        page: page - 1
      }
    })
  }
  render() {
    const columns = [
      {
        title: '商家ID',
        width: 100,
        dataIndex: 'id',
        key: 'name',
        fixed: 'left',
      },

      { title: '手机号', dataIndex: 'address', key: '1' },
      { title: 'QQ', dataIndex: 'address', key: '2' },
      { title: '本金余额', dataIndex: 'address', key: '3' },
      { title: '佣金金额', dataIndex: 'address', key: '4' },
      { title: '累计充值', dataIndex: 'address', key: '5' },
      { title: '邀请ID', dataIndex: 'address', key: '6' },
      { title: '注册时间', dataIndex: 'registerTime', key: '7' },
      { title: '用户等级', dataIndex: 'rank', key: '8' },
      {
        title: '状态', key: '9',
        render: (text, record) => {
          if (record.status == 'false') {
            return (
              <div>
                <span style={{ width: "5px", height: "5px", backgroundColor: "red", display: "inline-block", margin: "3px" }} ></span>
                <div style={{ display: "inline-block" }}>禁用</div>
              </div>

            )
          }
          else if (record.status == 'true') {
            return (
              <div>
                <span style={{ width: "5px", height: "5px", backgroundColor: "green", display: "inline-block", margin: "3px" }}></span>
                <div style={{ display: "inline-block" }}>正常</div>
              </div>
            )
          }
        }
      },
      { title: '备注', dataIndex: 'address', key: '10' },

      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,

      },
    ];
    function onChange(date, dateString) {
      console.log(date, dateString);
    }

    return (
      <div className={styles.content}>
        {/* <p>员工管理</p> */}
        <div className={styles.content_search}>

          <Input type="text" placeholder="商家ID" onChange={this.busChangeId}></Input>
          <Input type="text" placeholder="手机号"></Input>
          <Input type="text" placeholder="推广员ID"></Input>
          <Select placeholder="用户等级" style={{ width: 150 }} onChange={this.handleChange}>
            <Option value="新手上路">新手上路</Option>
            <Option value="普通用户">普通用户</Option>
            <Option value="高级用户">高级用户</Option>
          </Select>

          <Select placeholder="状态" style={{ width: 150, marginLeft: "0.5em" }} onChange={this.StatusChange} >
            <Option value="false">禁用</Option>
            <Option value="true">正常</Option>
          </Select>
          <Button type="primary" onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
          <Table columns={columns} dataSource={this.props.Business.buinessData} scroll={{ x: 1300 }} pagination={{
            total: this.props.Business.total,
            pageSize: 6,
            onChange: this.pageChange
          }}></Table>
        </div>

      </div>

    )
  }
}

export default connect(state => state)(BusinessManege);