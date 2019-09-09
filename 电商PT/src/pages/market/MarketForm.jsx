import { Form, Icon, Input, Button, Checkbox, Radio } from 'antd';
const { TextArea } = Input;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class MarketForm extends React.Component {

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //         }
    //     });
    // };
    onChange = (e) => {
        console.log(e.target.value);
    }
    render() {
        const plainOptions = [true, false];

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        getFieldDecorator('id');
        getFieldDecorator('status');
        // Only show error after a field is touched.
        // const usernameError = isFieldTouched('username') && getFieldError('username');
        // const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit} style={{ height: "100%" }}>
                <Form.Item label="用户名" style={{ float: "right" }}>
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                required: true, message: 'Please input your username!'
                            }
                        ],
                    })(<Input style={{ width: "350px" }} />)}
                </Form.Item>
                <br></br>
                <Form.Item label="微信号" style={{ float: "right" }}>
                    {getFieldDecorator('wxid')(
                        <Input style={{ width: "350px" }} />,
                    )}
                </Form.Item>
                <br></br>
                <Form.Item label="手机号" style={{ float: "right" }}>
                    {getFieldDecorator('telephone', {
                        rules: [
                            {
                                required: true, message: 'Please input your username!'
                            }
                        ],
                    })(<Input style={{ width: "350px" }} />)}
                </Form.Item>
                <br></br>

                <Form.Item label="QQ" style={{ float: "right" }}>
                    {getFieldDecorator('qq', {
                        rules: [
                            {
                                required: true, message: 'Please input your username!'
                            }
                        ],
                    })(<Input style={{ width: "350px" }} />)}
                </Form.Item>
                <br></br>
                <Form.Item label="登录密码" style={{ float: "right" }}>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true, message: 'Please input your username!'
                            }
                        ],
                    })(<Input style={{ width: "350px" }} type="password" />)}
                </Form.Item>
                <br></br>
                <Form.Item label="抽成比例" style={{ float: "right" }}>
                    {getFieldDecorator('ratio', {
                        rules: [
                            {
                                required: true, message: 'Please input your username!'
                            }
                        ],
                    })(<Input style={{ width: "350px" }} />)}
                </Form.Item>
                <br></br>
                <Form.Item style={{ marginLeft: "10px" }} label="状态">
                    {getFieldDecorator('enabled')(
                        <Radio.Group onChange={this.onChange} >
                            <Radio value={true}>
                                正常
                        </Radio>
                            <Radio value={false}>
                                停用
                        </Radio>
                        </Radio.Group>
                        //如果用和newscenter一样的方法的话，string无法对应bool
                    )}
                </Form.Item>
                <br></br>
                <Form.Item label="备注" style={{ marginLeft: "50px" }}>
                    {getFieldDecorator('note')(
                        <TextArea placeholder="请输入备注" style={{ width: "360px" }} />
                    )}
                </Form.Item>

            </Form >
        );
    }
}
const mapPropsToFields = (props) => {
    // console.log(props.initData)
    var obj = {}
    for (var key in props.initData) {
        var val = props.initData[key]
        obj[key] = Form.createFormField({ value: val })
    }
    return obj
}

export default Form.create({ mapPropsToFields })(MarketForm);