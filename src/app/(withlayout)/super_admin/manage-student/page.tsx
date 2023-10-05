"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudents = () => {
  const { role } = getUserInfo() as any;
  console.log(getUserInfo(), "student");
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: "student",
            link: `/${role}/student`,
          },
        ]}
      />
      <h1>Manage Students</h1>

      <ActionBar title="Admin List">
        <Link href="/super_admin/manage-student/create">
          <Button>Create Student</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageStudents;
