import React from 'react';
import styles from './newsCenter.less';
import { Input, Button, Table, Icon, DatePicker, Select, Pagination, Modal } from 'antd';
const { Option } = Select;
const { RangePicker } = DatePicker;
import { connect } from 'dva';
import NewsForm from './newsForm'
import dataParse from '../../zhuyijiao/index'
class NewsCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      putForm: {},
      form: {
        page: 0,
        pageSize: 6,
        siteId: 2
      }
    }
  }
  componentWillMount() {
    this.props.dispatch({ type: "news/fetchLoadNews", payload: this.state.form })
  }
  //模态框
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  //查找
  changeNoticeId = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        title: e.target.value
      }
    })
  }
  search = () => {
    this.props.dispatch({ type: "news/fetchLoadNews", payload: this.state.form })
  }
  statusChange = (value) => {
    this.setState({
      form: {
        ...this.state.form,
        status: value
      }
    })
  }
  handleChange = (value) => {
    this.setState({
      form: {
        ...this.state.form,
        receiver: value
      }
    })
  }
  //新增
  handleOk = e => {
    console.log(e);
    e.preventDefault();
    this.NewsForm.validateFields((err, values) => {
      if (!err) {
        values.siteId = 2;
        var one = values.receiver.toString()
        values.receiver = one;
        console.log('Received values of form: ', values);
        this.props.dispatch({ type: "news/fetchAddNews", payload: { forms: values, page: this.state.form } })
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
  changeNewsStatus = (record) => {
    // console.log(1)
    if (record.status == '未发布') {
      this.props.dispatch({ type: "news/fetchChangeNewsState", payload: { page: this.state.form, form: { id: record.id, status: '已发布' } } })
      // console.log(record.status)
    }
    else if (record.status == '已发布') {
      this.props.dispatch({ type: "news/fetchChangeNewsState", payload: { page: this.state.form, form: { id: record.id, status: '未发布' } } })
      // console.log(record.status)
    }

  }
  deleNotice = (record) => {
    // console.log(record.id)
    this.props.dispatch({ type: "news/fetchDeleNews", payload: { page: this.state.form, form: { id: record.id } } })
  }
  getForm = (form) => {
    this.NewsForm = form
  }
  pageChange = (page, pageSize) => {
    this.props.dispatch({ type: "news/fetchLoadNews", payload: { page: page - 1, pageSize: 6, siteId: 2 } });
    this.setState({
      form: {
        ...this.state.form,
        page: page - 1
      }
    })

  }
  toEdit = (record) => {
    console.log(record)
    var two = record.receiver.split(',');
    record.receiver = two;
    this.setState({
      visible: true,
      putForm: record
    });
  }
  render() {
    function onChange(date, dateString) {
      console.log(date, dateString);
    }
    const columns = [
      {
        title: '标题',
        dataIndex: 'title',
        align: 'center',

      },
      {
        title: '状态',
        dataIndex: 'status',
        align: 'center',

      },
      {
        title: '通知人群',
        align: 'center',
        dataIndex: 'receiver',
      },
      {
        title: '创建时间',
        align: 'center',
        dataIndex: 'createTime',
        render: (text, record) => {
          return (
            <div>
              {dataParse(text)}
            </div>
          )


        }
      },
      {
        title: '发布时间',
        align: 'center',
        dataIndex: 'publishTime',
        render: (text, record) => {
          return (
            <div>
              {dataParse(text)}
            </div>
          )


        }
      },
      {
        title: '操作',
        align: 'center',
        render: (text, record) => {

          if (record.status == '未发布') {
            return (
              <div>
                <Icon type="edit" style={{ color: "green" }} onClick={this.toEdit.bind(this, record)} />
                <Icon type="check" style={{ color: "green", margin: "0 5px" }} onClick={this.changeNewsStatus.bind(this, record)} />
                <Icon type="delete" style={{ color: "red" }} onClick={
                  this.deleNotice.bind(this, record)
                } />
              </div>
            )
          }
          else if (record.status == '已发布') {
            return (
              <div>
                <Icon type="edit" style={{ color: "green" }} onClick={this.toEdit.bind(this, record)} />
                <Icon type="close" style={{ color: "red", margin: "0 5px" }} onClick={this.changeNewsStatus.bind(this, record)} />
                <Icon type="delete" style={{ color: "red" }} onClick={
                  this.deleNotice.bind(this, record)
                } />
              </div>
            )
          }
        }
      },
    ];

    return (
      <div className={styles.content}>
        {/* {JSON.stringify(this.props)} */}
        <div className={styles.title}>
          日志管理
        </div>

        <div className={styles.content_search}>
          {/* <RangePicker onChange={onChange} style={{ paddingBottom: "15px" }} /> */}

          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <NewsForm ref={this.getForm} initData={this.state.putForm}></NewsForm>
          </Modal>
          <Input placeholder="公告" onChange={this.changeNoticeId}></Input>

          <Select placeholder="状态" style={{ width: 200 }} onChange={this.statusChange}>
            <Option value="未发布">未发布</Option>
            <Option value="已发布">已发布</Option>
          </Select>

          <Select placeholder="通知人群" style={{ width: 200 }} onChange={this.handleChange}>
            <Option value="推广员">推广员</Option>
            <Option value="商家">商家</Option>
          </Select>
          <Button type="primary" onClick={this.search}>搜索</Button>
          <Button className="toAdd" type="success" onClick={this.showModal}>新增</Button>
        </div>
        <div className={styles.content_content}>
          <Table columns={columns} size="small" rowKey="id"
            dataSource={this.props.news.NewsData} pagination={{
              total: this.props.news.total,
              pageSize: 6,
              onChange: this.pageChange
            }}
          ></Table>
          {/* <span>共有7条</span> */}
          {/* 分页 */}

        </div>
      </div>
    )
  }
}

export default connect(state => state)(NewsCenter);