"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import UMModal from "@/components/ui/UMModal";
import UMTable from "@/components/ui/UMTable";
import { useDeleteAdminMutation } from "@/redux/api/adminApi";
import { useFacultiesQuery } from "@/redux/api/facultyApi";

import {
  EditOutlined,
  ReloadOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const ManageFaculty = () => {
  const [deleteAdmin] = useDeleteAdminMutation();
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // const [deleteDepartment] = useDeleteDepartmentMutation();

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  // const debouncedTerm = useReduxDebounced({
  //   searchQuery: searchTerm,
  //   delay: 600,
  // });
  // if (!!debouncedTerm) {
  //   query["searchTerm"] = debouncedTerm;
  // }
  const { data, isLoading } = useFacultiesQuery({ ...query });
  const faculties = data?.academicFaculties;
  const meta = data?.meta;
  console.log(faculties);
  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");

    try {
      await deleteAdmin(id);
      message.success("Admin Deleted successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "fullName",
      render: (text: string, record: any) => {
        const fullName = `${record?.firstName} ${record?.middleName} ${record?.lastName}`;
        return fullName;
      },
    },
    {
      title: "Department",
      dataIndex: "academicDepartment",
      render: function (data: any) {
        const deptName = `${data.title}`;
        return deptName;
      },
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Designation",
      dataIndex: "designation",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      //   render: function (data: any) {
      //     return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      //   },
      sorter: true,
    },
    {
      title: "Contact no.",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/super_admin/admin/view/${data?.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            {/* Edit button */}
            <Link href={`/super_admin/admin/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            {/* Delete Button */}
            {/* <Button
              onClick={() => deleteHandler(data.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button> */}
            <UMModal
              title="Are you sure you want to delete this department?"
              initialContent=""
              onConfirm={() => deleteHandler(data?._id)}
              confirmButtonText="Delete"
              triggerButtonText=""
              cancelButtonText={"Cancel"}
            />
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `admin`,
            link: `/admin`,
          },
        ]}
      />

      <ActionBar title="Admin List">
        <Link href="/admin/manage-faculty/create">
          <Button>Create Admin</Button>
        </Link>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={faculties}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageFaculty;
