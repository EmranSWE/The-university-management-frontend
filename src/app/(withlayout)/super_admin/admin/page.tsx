import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageAdmin = () => {
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

      <ActionBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button>Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdmin;
