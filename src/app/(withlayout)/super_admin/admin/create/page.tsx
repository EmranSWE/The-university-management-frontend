"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import { genderOptions } from "@/constants/global";
import { Button, Col, Row } from "antd";

import React from "react";

const CreateAdmin = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: `admin`,
            link: `/super_admin/admin`,
          },
        ]}
      />
      <h1>Create Admin</h1>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
        }}
      >
        <Form submitHandler={onSubmit}>
          <div>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="First name"
                ></FormInput>
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle name"
                ></FormInput>
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  size="large"
                  label="Last name"
                ></FormInput>
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                ></FormInput>
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelectField
                  name="admin.gender"
                  size="large"
                  options={genderOptions}
                ></FormSelectField>
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdmin;
