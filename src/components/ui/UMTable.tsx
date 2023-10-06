"use client";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";

const UMTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
    },
  ];

  const onAgeSizeChange = (page: number, pageSize: number) => {
    console.log(page, pageSize);
  };
  return (
    <Table
      loading={false}
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 5,
        total: 10,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: true,
        onChange: onAgeSizeChange,
      }}
    />
  );
};

export default UMTable;
