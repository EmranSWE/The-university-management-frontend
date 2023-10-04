"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import {
  acDepartmentOptions,
  acSemesterOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import UploadImage from "../ui/UploadImages";

const StudentInfo = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
        }}
      >
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Student Information
        </p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.name.firstName"
              size="large"
              label="First name"
            ></FormInput>
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.name.middleName"
              size="large"
              label="Middle name"
            ></FormInput>
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="admin.name.lastName"
              size="large"
              label="Last name"
            ></FormInput>
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="password"
              name="password"
              size="large"
              label="Password"
            ></FormInput>
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelectField
              name="student.academicDepartment"
              size="large"
              options={acDepartmentOptions}
              label="Gender"
              placeholder="Academic Department"
            ></FormSelectField>
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelectField
              name="student.academicFaculty"
              size="large"
              options={facultyOptions}
              label="Academic Faculty"
              placeholder="Select"
            ></FormSelectField>
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelectField
              name="student.academicSemester"
              size="large"
              options={acSemesterOptions}
              label="Academic Semester"
              placeholder="Select"
            ></FormSelectField>
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelectField
              name="student.gender"
              size="large"
              options={genderOptions}
              label="Student Gender"
              placeholder="Select"
            ></FormSelectField>
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <UploadImage></UploadImage>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudentInfo;
