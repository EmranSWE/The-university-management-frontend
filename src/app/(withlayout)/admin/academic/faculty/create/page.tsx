"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";

import { Button, Col, Row, message } from "antd";

const CreateFacultyPage = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const base = "admin";
  const onSubmit = async (data: any) => {
    message.loading("creating......");
    try {
      const res = await addAcademicFaculty(data);
      if (!!res) {
        message.success("Faculty added successfully!");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}/academic/faculty` },
          { label: "academic-faculty", link: `/${base}/academic/faculty` },
        ]}
      />
      <h1>Create Faculty</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateFacultyPage;
