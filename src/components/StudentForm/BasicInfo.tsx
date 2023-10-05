import React from "react";
import FormDatePicker from "../Forms/FormDatePicker";
import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import { departmentOptions, genderOptions } from "@/constants/global";
import FormTextArea from "../Forms/FormTextArea";

const BasicInfo = () => {
  return (
    <div>
      <div>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Basic Information
        </p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="email"
              name="admin.email"
              size="large"
              label="Email"
            ></FormInput>
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="admin.contactNo"
              size="large"
              label="Contact Number"
            ></FormInput>
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="admin.emergencyContactNo"
              size="large"
              label="Emergency Contact Number"
            ></FormInput>
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormDatePicker
              name="admin.dateOfBirth"
              size="large"
              label="Date of Birth"
            ></FormDatePicker>
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelectField
              name="admin.gender"
              size="large"
              options={genderOptions}
              label="Gender"
              placeholder="Select"
            ></FormSelectField>
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelectField
              name="admin.managementDepartment"
              size="large"
              options={departmentOptions}
              label="Department"
              placeholder="Select"
            ></FormSelectField>
          </Col>

          <Col
            className="gutter-row"
            span={12}
            style={{ marginBottom: "10px" }}
          >
            <FormTextArea
              name="address.presentAddress"
              size="large"
              rows={4}
              label="Present Address"
            ></FormTextArea>
          </Col>
          <Col
            className="gutter-row"
            span={12}
            style={{ marginBottom: "10px" }}
          >
            <FormTextArea
              name="address.permanentAddress"
              size="large"
              rows={4}
              label="Permanent Address"
            ></FormTextArea>
          </Col>

          <Col
            className="gutter-row"
            span={12}
            style={{ marginBottom: "10px" }}
          >
            <FormDatePicker
              name="admin.dateOfBirth"
              size="large"
              label="Date of Birth"
            ></FormDatePicker>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BasicInfo;
