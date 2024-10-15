import React from 'react';
import type { FormProps } from 'antd';
import { Button, DatePicker, Form, Input } from 'antd';
import dayjs from 'dayjs';
type FieldType = {
  consumer?: string;
  provider?: string;
  service?: string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onFinish: FormProps<FieldType>['onFinish'] = (values:any) => {
  console.log('Success:', values);
};
const dateFormat = 'YYYY/MM/DD';
const CreateServicesForm: React.FC = () => (
  <Form
    name="basic"
    // labelCol={{ span: 8 }}
    // wrapperCol={{ span: 16 }}
    style={{ maxWidth:"100%" }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="User"
      name="consumer"
      rules={[{ required: true, message: 'Please input your consumer!' }]}
    >
      <Input className='h-12'/>
    </Form.Item>
    <Form.Item<FieldType>
      label="Provider"
      name="provider"
      rules={[{ required: true, message: 'Please input your provider!' }]}
    >
      <Input className='h-12'/>
    </Form.Item>
    <Form.Item<FieldType>
      label="Service"
      name="service"
      rules={[{ required: true, message: 'Please input your service!' }]}
    >
      <Input className='h-12'/>
    </Form.Item>
    <Form.Item<FieldType>
      label="Service"
      name="service"
      rules={[{ required: true, message: 'Please input your service!' }]}
    >
      <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} className='h-12 w-full'/>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" className='px-6'>
        Send
      </Button>
    </Form.Item>
  </Form>
);
export default CreateServicesForm;      