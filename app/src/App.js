import React, { Component } from 'react';
// import { HashRouter } from 'react-router-dom'
import { BrowserRouter, Switch, Link, Route, NavLink, HashRouter, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import { Layout, Menu, Icon } from 'antd';
import './App.css';
import CategroyManage from './pages/CategroyManage';
import infoManage from './pages/infoManage';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }

  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <HashRouter>
        <div>
          <Layout id="layout" style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <NavLink to="/CategroyManage" activeClassName="navActive" exact>
                    <Icon type="user" />
                    <span>栏目管理</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <NavLink to="/infoManage" activeClassName="navActive" exact>
                    <Icon type="read" />
                    <span>文章管理</span>
                  </NavLink>
                </Menu.Item>

              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
                <Switch>
                  <Redirect from="/#" to="CategroyManage"></Redirect>
                  <Route path="/CategroyManage" component={CategroyManage} exact>

                  </Route>
                  <Route path="/infoManage" component={infoManage} exact>

                  </Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </div>
      </HashRouter>
    );
  }

}

export default App;
