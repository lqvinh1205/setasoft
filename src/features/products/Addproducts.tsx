import React, { useState } from "react";
import { Button, Form, Input, Modal, notification } from "antd";
import { useAppDispatch } from "../../app/hooks";
import { createProducts } from "./ProductSlice";
import { useNavigate } from "react-router-dom";
type Props = {};

const Addproducts = (props: Props) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    Modal.confirm({
      title: "Xác nhận thêm",
      onOk: () => {
        dispatch(createProducts({ ...values, userId: 11 })).then(() => {
          notification.success({
            message: "Thêm thành công",
          });
		  navigate('/products')
        });
      },
    });
  };
  return (
    <div className="p-[80px] border flex justify-center">
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        className="w-[40%]"
      >
        <div className="w-full">
          <h2 className="text-[30px] text-center">Form add post</h2>
        </div>
        <Form.Item
          label="Title"
          name="name"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
          label="Body"
          name="body"
          rules={[{ required: true, message: "Please input your body!" }]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Addproducts;
