import React from 'react';
import styles from './Market.less';
import { Input, Button, Table, Icon, Modal } from 'antd';
import { connect } from 'dva';
import dataParse from '../../zhuyijiao/index';
import MarketForm from './MarketForm'
import { reloadAuthorized } from '@/utils/Authorized';
import router from 'umi/router';
class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      putForm: {},
      form: {
        page: 0,
        pageSize: 6,
        // siteId: 2
      }
    }
  }

  componentWillMount() {
    this.props.dispatch({ type: 'Market/fetchLoadMarket', payload: this.state.form })
  }
  //模态
  state = { visible: false };

  showModal = (record) => {
    this.setState({
      visible: true,
      form: {
        ...this.state.form,
        id: record.id
      }
    });
  };
  getForm = (form) => {
    this.MarketForm = form;
  }
  handleOk = e => {
    // console.log(e);
    e.preventDefault();
    this.MarketForm.validateFields((err, values) => {
      if (!err) {
        values.roleId = 3;
        // var one = values.receiver.toString()
        // values.receiver = one;
        console.log('Received values of form: ', values);
        this.props.dispatch({ type: "Market/fetchChangeMarket", payload: { forms: values, page: this.state.form } })
      }
    });
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  //查找
  changeUserId = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        id: e.target.value
      }
    })
  }
  search = (value) => {
    this.props.dispatch({ type: 'Market/fetchLoadMarket', payload: this.state.form })
  }
  //修改信息
  toEdit = (record) => {
    if (record.enabled == false) {
      record.status = '停用'
    } else {
      record.status = '正常'
    }
    // console.log(record)
    this.setState({
      visible: true,
      putForm: record
    })
  }
  pageChange = (page, pageSize) => {
    this.props.dispatch({ type: 'Market/fetchLoadMarket', payload: { page: page - 1, pageSize: 6 } });
    this.setState({
      form: {
        ...this.state.form,
        page: page - 1
      }
    })
  }
  toDetail = (record) => {
    router.push({
      pathname: '/market/MarketDetails',
      params: record
    })
  }
  render() {
    const columns = [
      {
        title: '推广员ID',
        width: 80,
        // dataIndex: 'id',
        key: 'id',
        fixed: 'left',
        render: (text, record) => <a onClick={this.toDetail.bind(this, record)}>{record.id}</a>
      },

      { title: '用户名', dataIndex: 'username', key: '1' },
      { title: '手机号', dataIndex: 'telephone', key: '2' },
      { title: 'QQ', dataIndex: 'qq', key: '3' },
      { title: '微信', dataIndex: 'wxid', key: '4' },
      { title: '推广商家数', dataIndex: 'sifuId', key: '5' },
      { title: '账户余额', dataIndex: 'accountCapital', key: '6' },
      { title: '累计分成金额', dataIndex: 'address', key: '7' },
      { title: '订单分成比例', dataIndex: 'ratio', key: '8' },
      { title: '上次登录时间', dataIndex: 'lastLoginTime', key: '9' },
      {
        title: '状态', key: '10', render: (text, record) => {
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
      { title: '备注', dataIndex: 'sifuId', key: '11' },

      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 80,
        render: (text, record) => {
          return (
            <div>
              <Icon type="edit" style={{ color: "green", margin: "5px", cursor: "pointer" }} title="修改基本信息" onClick={this.toEdit.bind(this, record)} />

              <Icon type="money-collect" style={{ color: "red", margin: "5px", cursor: "pointer" }} title="结算" />
            </div>
          )
        }
      },
    ];

    return (

      <div className={styles.content}>
        {/* {JSON.stringify(this.props.Logs.LogsData)} */}
        <div className={styles.title}>
          {/* {JSON.stringify(this.props.market)} */}
        </div>
        <div className={styles.content_search}>

          <Input placeholder="推广员ID" onChange={this.changeLogsId} onChange={this.changeUserId}></Input>
          <Input placeholder="手机号" onChange={this.changeLogsId}></Input>
          <Input placeholder="用户名" onChange={this.changeLogsId}></Input>
          <Input placeholder="QQ" onChange={this.changeLogsId}></Input>
          <Input placeholder="微信" onChange={this.changeLogsId}></Input>
          <Button type="primary" onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
          <Table columns={columns} scroll={{ x: 1300 }} pagination={{
            total: this.props.Market.total,
            pageSize: 6,
            onChange: this.pageChange
          }}
            dataSource={this.props.Market.marketData} />
        </div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <MarketForm ref={this.getForm} initData={this.state.putForm}></MarketForm>
        </Modal>
      </div>
    )
  }
}

export default connect(state => state)(Market);