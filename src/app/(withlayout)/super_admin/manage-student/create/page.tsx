"use client";
import StepperForm from "@/components/StepperForm/StepperForm";
import BasicInfo from "@/components/StudentForm/BasicInfo";
import GuardianInfo from "@/components/StudentForm/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForm/LocalGuardinInfo";
import StudentInfo from "@/components/StudentForm/StudentInfo";
import React from "react";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Info",
      content: <BasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentOnSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error?.message);
    }
  };
  return (
    <div>
      <h1>Create student</h1>
      <StepperForm
        submitHandler={(value) => handleStudentOnSubmit(value)}
        steps={steps}
      ></StepperForm>
    </div>
  );
};

export default CreateStudentPage;
