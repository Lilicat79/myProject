import { Form, Icon, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class newsForm extends React.Component {

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

    render() {
        const plainOptions = ['商家', '推广员'];

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        getFieldDecorator('id');
        getFieldDecorator('status');
        // Only show error after a field is touched.
        // const usernameError = isFieldTouched('username') && getFieldError('username');
        // const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input placeholder="标题" />,
                    )}
                </Form.Item>
                <br></br>
                <Form.Item>
                    {getFieldDecorator('receiver', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Checkbox.Group options={plainOptions} style={{ width: "400px" }} />
                    )}
                </Form.Item>
                <br></br>
                <Form.Item>
                    {getFieldDecorator('content', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <TextArea placeholder="请输入内容" style={{ width: "400px" }} />
                    )}
                </Form.Item>

            </Form>
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

export default Form.create({ mapPropsToFields })(newsForm);