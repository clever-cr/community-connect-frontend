import {  useState } from 'react';
import type { DatePickerProps, FormProps } from 'antd';
import { Button, DatePicker, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createBookingAction } from '../../services/bookings/action';
type FieldType = {
  consumer?: string;
  provider?: string;
  service?: string;
};


const dateFormat = 'YYYY/MM/DD';


const CreateServicesForm = (props:any) =>{
  const formattedDate = new Date().toISOString().slice(0, 10);
  const { authentication,bookings} = useSelector((state: any) => state);
  const [enteredDate, setEnteredDate] = useState<any>(formattedDate);
  const dispatch=useDispatch();
  const onChangeDate: DatePickerProps["onChange"] = async (
    date: any,
    dateString: any
  ) => {
    setEnteredDate(dateString);
  };
  const onFinish: FormProps<FieldType>['onFinish'] =async (values:any) => {
   await createBookingAction({ 
      providers:authentication?.user?.data?._id,
    consumer:props?.data?.provider?._id,
    service:props?.data?._id,
    date:enteredDate
    })(dispatch)
    props?.closeModal()
    console.log('Success:', values,enteredDate);
  };
  console.log(props,'propsssdsss',props?.data?.provider?.name, props?.data?.name)

  return(
  <Form
    name="basic"
    style={{ maxWidth:"100%" }}
    initialValues={props?.data}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="User"
      name="consumer"
      initialValue={authentication?.user?.data?.email}
      rules={[{ required: true, message: 'Please input your consumer!' }]}
    >
      <Input className='h-12'/>
    </Form.Item>
    <Form.Item<FieldType>
      label="Provider"
      initialValue={props?.data?.provider?.name}
      name="providers"
      rules={[{ required: true, message: 'Please input your provider!' }]}
    >
      <Input className='h-12'/>
    </Form.Item>
    <Form.Item<FieldType>
      label="Service"
      initialValue={props?.data?.name}
      name="service"
      rules={[{ required: true, message: 'Please input your service!' }]}
    >
      <Input className='h-12'/>
    </Form.Item>
    <Form.Item<FieldType>
      label="Service"
      name="date"
      rules={[{ required: true, message: 'Please input your service!' }]}
    >
      <DatePicker  format={dateFormat} className='h-12 w-full' onChange={onChangeDate}/>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" className='px-6'>
      {bookings?.isLoading? 'booking':"Send" }
      </Button>
    </Form.Item>
  </Form> 
);}
export default CreateServicesForm;      