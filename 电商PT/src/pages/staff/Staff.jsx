import React from 'react';
import router from 'umi/router'
import styles from './Staff.less';
import { Input, Select, Button, Table, Icon } from 'antd';
const { Option } = Select;
import { connect } from 'dva';
class Staff extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        page: 0,
        pageSize: 6
      }
    }
  }
  componentWillMount() {
    this.props.dispatch({ type: 'staff/fetchLoadStaff', payload: this.state.form })
  }

  pageChange = (page, pageSize) => {
    this.props.dispatch({ type: 'staff/fetchLoadStaff', payload: { page: page - 1, pageSize: 6 } })
    this.setState({
      form: {
        ...this.state.form,
        page: page - 1
      }
    })
  }
  changeState = (record) => {
    // console.log(1);
    if (record.enabled == true) {
      this.props.dispatch({ type: 'staff/fetchChangeState', payload: { page: this.state.form, form: { id: record.id, enabled: false } } })
    }
    else if (record.enabled == false) {
      this.props.dispatch({ type: 'staff/fetchChangeState', payload: { page: this.state.form, form: { id: record.id, enabled: true } } })
    }
  }
  search = () => {
    this.props.dispatch({ type: 'staff/fetchLoadStaff', payload: this.state.form })
  }
  handleChange = (value) => {
    console.log(value)
    this.setState({
      form: {
        ...this.state.form,
        enabled: value
      }
    })
  }
  toLogs = (record) => {
    router.push('/logDetails')
  }
  changeStaffId = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        id: e.target.value
      }
    })

  }
  render() {
    const columns = [
      {
        title: '员工ID',
        dataIndex: 'id',
        align: 'center',
        render: text => <a>{text}</a>,
      },
      {
        title: '所属分站',
        align: 'center',
        dataIndex: 'siteVM.name',
      },
      {
        title: '用户名',
        align: 'center',
        dataIndex: 'username',
      },
      {
        title: '真实姓名',
        align: 'center',
        dataIndex: 'realname',
      },
      {
        title: '手机号',
        align: 'center',
        dataIndex: 'telephone',
      },
      {
        title: 'QQ号',
        align: 'center',
        dataIndex: 'qq',
      },
      {
        title: '上次登录时间',
        align: 'center',
        dataIndex: 'lastLoginTime',
      },
      {
        title: '上次登录IP',
        align: 'center',
        dataIndex: 'lastLogionIp',
      },
      {
        title: '状态',
        align: 'center',
        // dataIndex: 'id',
        render: (text, record) => {
          if (record.enabled == false) {
            return (
              <div>
                <span style={{ width: "5px", height: "5px", backgroundColor: "red", display: "inline-block", margin: "3px" }} ></span>
                <div style={{ display: "inline-block" }}>禁用</div>
              </div>

            )
          }
          else {
            return (
              <div>
                <span style={{ width: "5px", height: "5px", backgroundColor: "green", display: "inline-block", margin: "3px" }}></span>
                <div style={{ display: "inline-block" }}>正常</div>
              </div>
            )
          }
        }
      },
      {
        title: '操作',
        align: 'center',
        // dataIndex: 'address',
        render: (text, record) => {
          if (record.enabled === false) {
            return (
              <div>
                <Icon type="check" style={{ color: "green", marginRight: "5px" }} onClick={this.changeState.bind(this, record)}></Icon>
                <Icon type="file-text" style={{ marginRight: "5px" }} onClick={this.toLogs.bind(this, record)}></Icon>
              </div>
            )
          } else {
            return (
              <div>
                <Icon type="stop" style={{ color: "red", marginRight: "5px" }} onClick={this.changeState.bind(this, record)}></Icon>
                <Icon type="file-text" style={{ marginRight: "5px" }} onClick={this.toLogs.bind(this, record)}></Icon>
              </div>
            )
          }

        }
      },
    ];

    return (
      <div className={styles.content}>
        {/* <p>员工管理</p> */}
        <div className={styles.content_search}>
          <Input placeholder="员工ID" onChange={this.changeStaffId}></Input>
          <Input placeholder="用户名"></Input>
          <Input placeholder="手机号"></Input>
          <Select placeholder="状态" style={{ width: 200 }} onChange={this.handleChange}>
            <Option value="0">禁用</Option>
            <Option value="1">正常</Option>
          </Select>
          <Button type="primary" onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
          <Table columns={columns} size="small" rowKey="id" pagination={{
            total: this.props.staff.total,
            pageSize: 6,
            onChange: this.pageChange
          }}
            dataSource={this.props.staff.staffData}
          ></Table>
        </div>

      </div>
    )
  }

}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(actionCreator)
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}
export default connect(state => state)(Staff);