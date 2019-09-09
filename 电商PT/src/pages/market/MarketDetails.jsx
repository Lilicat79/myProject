import React, { Component } from 'react';
import { Menu, Icon, Input, Button, Table } from 'antd';
import styles from './Details.less'
class MarketDetails extends Component {
    state = {
        current: 'mail',
    };

    render() {
        return (

            <div className={styles.content}>
                {/* {JSON.stringify(this.props.location.params)} */}
                {/* <p>员工管理</p> */}
                <div className={styles.content_search}>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="mail">
                            <Icon type="mail" />
                            推广员详情
                        </Menu.Item>


                    </Menu>

                </div>
                <div className={styles.content_content}>
                    <div style={{ fontSize: "20px", fontWeight: "700", margin: "20px" }}>
                        【基本信息】
                    </div>
                    <table style={{ fontSize: "20px", position: "relative", left: "30%" }}>
                        <tr>
                            <td style={{ width: "300px", textAlign: "left" }}>推广员ID：<span style={{ fontSize: "20px" }}>{this.props.location.params.id}</span></td>
                            <td style={{ width: "300px", textAlign: "left" }}>用户名：<span style={{ fontSize: "20px" }}>{this.props.location.params.username}</span></td>
                        </tr>
                        <tr>
                            <td style={{ width: "300px", textAlign: "left" }}>QQ：<span style={{ fontSize: "20px" }}>{this.props.location.params.qq}</span></td>
                            <td style={{ width: "300px", textAlign: "left" }}>手机号：<span style={{ fontSize: "20px" }}>{this.props.location.params.telephone}</span></td>
                        </tr>
                        <tr>
                            <td style={{ width: "300px", textAlign: "left" }}>微信号：<span style={{ fontSize: "20px" }}>{this.props.location.params.wxid}</span></td>
                            <td style={{ width: "300px", textAlign: "left" }}>注册时间：<span style={{ fontSize: "20px" }}>{this.props.location.params.registerTime}</span></td>
                        </tr>
                        <tr>
                            {/* lastLoginTime */}
                            <td style={{ width: "300px", textAlign: "left" }}>上次登录时间：<span style={{ fontSize: "20px" }}>{this.props.location.params.lastLoginTime}</span></td>
                            <td style={{ width: "300px", textAlign: "left" }}>状态：<span style={{ fontSize: "20px" }}>{this.props.location.params.enabled == false ? '停用' : '正常'}</span></td>
                        </tr>
                        <tr>
                            <td style={{ width: "300px", textAlign: "left" }}>备注：<span style={{ fontSize: "20px" }}>{this.props.location.params.note}</span></td>

                        </tr>
                    </table>

                </div>

            </div>
        );
    }
}

export default MarketDetails;