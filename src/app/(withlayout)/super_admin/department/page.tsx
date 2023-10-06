import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import UMTable from "@/components/ui/UMTable";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Department = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
        ]}
      />

      <ActionBar title="Create Department">
        <Link href="/super_admin/department/create">
          <Button>Create Department</Button>
        </Link>
      </ActionBar>
      <UMTable></UMTable>
    </div>
  );
};

export default Department;
