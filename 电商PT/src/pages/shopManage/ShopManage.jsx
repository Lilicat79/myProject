import React from 'react';
import router from 'umi/router'
import styles from './shopManage.less';
import { Input, Select, Button, Table, Icon } from 'antd';
const { Option } = Select;
import { connect } from 'dva';
class shopManage extends React.Component {
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
    this.props.dispatch({ type: 'shop/fetchLoadShop', payload: this.state.form })
  }
  //查找
  changeShopId = (e) => {
    console.log(e.target.value)
    this.setState({
      form: {
        ...this.state.form,
        businesId: e.target.value
      }
    })
  }
  search = () => {
    this.props.dispatch({ type: 'shop/fetchLoadShop', payload: this.state.form })
  }
  pageChange = (page, pageSize) => {
    this.props.dispatch({ type: 'shop/fetchLoadShop', payload: { page: page - 1, pageSize: 6 } })
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
        title: '店铺ID',
        dataIndex: 'businesId',
        align: 'center',
        render: text => <a>{text}</a>,
      },
      {
        title: '商家ID',
        align: 'center',
        dataIndex: 'id',
      },
      {
        title: '商家手机号',
        align: 'center',
        dataIndex: 'sendoutTelephone',
      },
      {
        title: '店铺名称',
        align: 'center',
        dataIndex: 'name',
      },
      {
        title: '店铺旺旺ID',
        align: 'center',
        dataIndex: 'wwid',
      },
      {
        title: '所属平台',
        align: 'center',
        dataIndex: 'platform',
      },
      {
        title: '接单间隔时间',
        align: 'center',
        dataIndex: 'lastLoginTime',
      },
      {
        title: '注册时间',
        align: 'center',
        // dataIndex: 'lastLogionIp',
      },
      {
        title: '店铺状态',
        align: 'center',
        dataIndex: 'status',
      },
      {
        title: '操作',
        align: 'center',
        // dataIndex: 'id',
        render: (text, record) => {
          return (
            <div>
              <Icon type="edit" style={{ color: "green", margin: "5px", cursor: "pointer" }} title="修改店铺状态" />

            </div>
          )
        }
      },

    ];

    return (
      <div className={styles.content}>
        {/* <p>员工管理</p> */}
        <div className={styles.content_search}>
          <Input placeholder="商家ID" onChange={this.changeStaffId} onChange={this.changeShopId}></Input>

          <Select placeholder="所属平台" style={{ width: 200, margin: "0.5em" }} onChange={this.handleChange}>
            <Option value="0">天猫</Option>

          </Select>
          <Select placeholder="店铺状态" style={{ width: 200 }} onChange={this.handleChange}>
            <Option value="0">待审核</Option>
            <Option value="1">审核通过</Option>
            <Option value="1">审核未通过</Option>
          </Select>
          <Button type="primary" onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
          <Table columns={columns} size="small" rowKey="id" pagination={{
            total: this.props.shop.total,
            pageSize: 6,
            onChange: this.pageChange
          }}
            dataSource={this.props.shop.ShopData}
          ></Table>
        </div>

      </div>
    )
  }

}

export default connect(state => state)(shopManage);