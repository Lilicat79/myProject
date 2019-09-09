import React from 'react';
import styles from './logs.less';
import { Input, Button, Table } from 'antd';
import { connect } from 'dva';
import dataParse from '../../zhuyijiao/index'
class Logs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        page: 0,
        pageSize: 7
      }
    }
  }
  componentWillMount() {
    this.props.dispatch({ type: "logs/fetchLoadLogs", payload: this.state.form })
  }
  changeLogsId = (e) => {
    // console.log(e.target.value);
    this.setState({
      form: {
        ...this.state.form,
        userId: e.target.value
      }
    })
    console.log(this.state.form)
  }
  search = () => {
    this.props.dispatch({ type: 'logs/fetchLoadLogs', payload: this.state.form })
  }
  pageChange = (page, pageSize) => {
    this.props.dispatch({ type: 'logs/fetchLoadLogs', payload: { page: page - 1, pageSize: 6 } })
  }
  render() {
    const columns = [
      {
        title: '日志',
        dataIndex: 'id',
        align: 'center',

      },
      {
        title: '操作者ID',
        dataIndex: 'userId',
        align: 'center',

      },
      {
        title: '内容',
        align: 'center',
        dataIndex: 'actionContent',
      },
      {
        title: '操作时间',
        align: 'center',
        dataIndex: 'actionTime',
        render: (text, record) => {
          return (
            <div>
              {dataParse(text)}
            </div>
          )


        }
      },

    ];

    return (
      <div className={styles.content}>
        {/* {JSON.stringify(this.props.Logs.LogsData)} */}
        <div className={styles.title}>
          日志管理
        </div>
        <div className={styles.content_search}>
          <Input placeholder="操作者ID" onChange={this.changeLogsId}></Input>
          <Button type="primary" onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
          <Table columns={columns} size="small" rowKey="id" pagination={{
            total: this.props.logs.total,
            pageSize: 6,
            onChange: this.pageChange
          }}
            dataSource={this.props.logs.LogsData}
          ></Table>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Logs);