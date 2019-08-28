import React, { Component } from 'react';
// import { Button } from 'antd';
import { Table, Button, Modal, Form, Input, Select, Radio } from 'antd';
import config from '../utils/config';
import axios from '../utils/axios';
// import qs from 'qs';
const { Option } = Select;
const { TextArea } = Input;
export class CategroyManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            currentPage: 1,
            pagination: {
                pageSize: config.pageSize,
                total: 0
            },
            ids: [], //批量删除的id数组
            categoryData: [],
            //表单数据对象
            form: {},
            modalTitle: {}
        }
    }
    componentDidMount() {
        this.findArticleByPage();
    }
    pageChange = (pagination) => {
        // console.log(pagination.current);
        this.setState({
            currentPage: pagination.current
        }, () => {
            this.findArticleByPage();
        })
    }
    toBatchDele = () => {
        axios.post('/manager/article/batchDeleteArticle', { ids: this.state.ids.toString() }).then((res) => {
            // console.log(res);

            this.findArticleByPage();
        }).catch((error) => {
            console.log(error);
        })
    }
    findArticleByPage = () => {
        axios.get('/manager/article/findArticle', { params: { page: this.state.currentPage - 1, pageSize: this.state.pagination.pageSize } }).then((res) => {
            //res是封装过后的数据
            // console.log(res.data);
            this.setState({
                tableData: res.data.list,
                pagination: { ...this.state.pagination, total: res.data.total },
                // ids: [],
            })
            //             page: 0
            // ​
            // pageSize: 10
            // ​
            // total: 19
        }).catch((err) => {
            console.log(err);
        });
    }
    //
    showModal = () => {
        this.setState({
            form: {}
        })
        this.findAllcategory()
        this.setState({
            visible: true,
            modalTitle: '新增'
        });
    };
    tobianji = (record) => {
        console.log(record);
        let { form } = this.state;
        form = {
            ...form,
            id: record.id,
            title: record.title,
            listStyle: record.listStyle,
            content: record.content,
            categoryId: record.category ? record.category.id : '',
            publishtime: config.parseDate(),
            readtimes: 0
        }
        this.setState({
            form,
            modalTitle: '编辑'
        })
        // this.setState({
        //     form: {}
        // })
        this.findAllcategory()
        this.setState({
            visible: true,
        });
    }
    //模态框点击确定
    handleOk = (e) => {
        // console.log(e);
        axios.post('/manager/article/saveOrUpdateArticle', this.state.form).then((res) => {
            console.log(res);
            this.findArticleByPage()
        }).catch((error) => {
            console.log(error);
        })
        this.setState({
            visible: false,
        });
    };
    //模态框点击取消
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    toDele = (id) => {
        axios.get('/manager/article/deleteArticleById', { params: { id } }).then((res) => {
            console.log(res);
            this.findArticleByPage();
        }).catch((error) => {
            console.log(error);
        })

    }
    //查找所有栏目信息
    findAllcategory = () => {
        axios.get('/manager/category/findAllCategory').then((res) => {
            console.log(res);
            this.setState({
                categoryData: res.data
            })
        }).catch((error) => {
            console.log(error);
        })
    }
    toChange = (attr, e) => {
        let { form } = this.state;
        form[attr] = e.target.value;
        this.setState({
            form
        })
    }
    seleChange = (value) => {
        let { form } = this.state;
        form.categoryId = value;
        this.setState({
            form
        })
    }
    render() {
        // const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const columns = [
            {
                title: '文章标题',
                dataIndex: 'title',
                // render: text => <a>{text}</a>,
            },
            {
                title: '所属栏目',
                dataIndex: 'category.name',
            },
            {
                title: '排列方式',
                dataIndex: 'liststyle',
            },
            {
                title: '作者',
                dataIndex: 'author',
            },
            {
                title: '发布时间',
                dataIndex: 'publishtime',
            },
            {
                title: '阅读次数',
                dataIndex: 'readtimes',
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => {
                    //record是一行记录，表格对象
                    return (
                        <div>
                            <Button type="primary" onClick={this.tobianji.bind(this, record)}>编辑</Button>

                            <Button type="danger" onClick={this.toDele.bind(this, record.id)} >删除</Button>

                        </div>
                    )

                }
            },

        ];


        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                selectedRows.forEach((item, index) => {
                    this.setState({
                        ids: item.id
                    })
                })
                // this.setState({
                //     ids: selectedRowKeys
                // })
            },
            // getCheckboxProps: record => ({
            //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
            //     name: record.name,
            // }),
        };
        const { form } = this.state;
        return (
            <div>
                <div className="article-manage">
                    <Button type="primary" onClick={this.showModal}>
                        新增
                    </Button>
                    <Modal
                        title={this.state.modalTitle}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        {/* {
                            JSON.stringify(form)
                        } */}
                        <Form {...formItemLayout}>
                            <Form.Item label="标题">
                                <Input value={form.title} onChange={this.toChange.bind(this, 'title')}>
                                </Input>
                            </Form.Item>
                            <Form.Item label="栏目">
                                <Select value={form.categoryId} onChange={this.seleChange}>
                                    {

                                        this.state.categoryData.map((item, index) => {
                                            return (
                                                <Option value={item.id} key={index}>
                                                    {item.name}

                                                </Option>
                                            )
                                        })
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item label="排列方式">
                                <Radio.Group>
                                    <Radio value="style-one" checked={form.listStyle === 'style-one'} onChange={this.toChange.bind(this, 'liststyle')}>style-one</Radio>
                                    <Radio value="style-two" checked={form.listStyle === 'style-two'} onChange={this.toChange.bind(this, 'liststyle')}>style-two</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="栏目">
                                <TextArea value={form.content} onChange={this.toChange.bind(this, 'content')}></TextArea>
                            </Form.Item>
                        </Form>
                    </Modal>
                    <Button type="danger" onClick={this.toBatchDele}>
                        批量删除
                    </Button>
                </div>

                <div className="table-div">
                    <Table rowKey="id" rowSelection={rowSelection} columns={columns} dataSource={this.state.tableData} pagination={this.state.pagination} onChange={this.pageChange} />,

                </div>
            </div>
        );
    }
}

export default CategroyManage;
