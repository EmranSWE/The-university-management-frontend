"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrum";

import { useAddAcademicDepartmentMutation } from "@/redux/api/academic/departmentApi";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";
import { Button, Col, Row, message } from "antd";

const CreateAcademicDepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const { data, isLoading } = useAcademicFacultiesQuery({
    total: 100,
    limit: 10,
  });
  const facultyData = data?.academicFaculties;
  const meta = data?.meta;

  const facultyOptions = facultyData?.map((faculty) => {
    return {
      label: faculty?.title,
      value: faculty?.id,
    };
  });

  const base = "admin";
  const onSubmit = async (data: any) => {
    message.loading("creating......");
    try {
      console.log(data);
      const res = await addAcademicDepartment(data);
      if (!!res) {
        message.success("Department added successfully!");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <h1>Create Department</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              size="large"
              name="academicFacultyId"
              options={facultyOptions as SelectOptions[]}
              label="Academic Faculty"
              placeholder="Select"
            />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateAcademicDepartment;
