"use client";

import { Button, Col, Row } from "antd";
import loginImage from "../../assets/Loginsvg.svg";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login Image" />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1 style={{ margin: "15px 0px" }}>First login your account</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div style={{ margin: "15px 0px" }}>
              <FormInput name="id" type="text" size="large" label="user id" />
            </div>
            <div>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="user password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
