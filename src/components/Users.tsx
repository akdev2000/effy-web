import Table, { ColumnType } from "@/components/Table";
import { Root, TabTypes } from "../components/Root";
import { useState } from "react";

const companyColumn: ColumnType[] = [
  {
    id: "id",
    name: "Id",
  },
  {
    id: "first_name",
    name: "First Name",
  },
  {
    id: "last_name",
    name: "Last Name",
  },
  {
    id: "email",
    name: "Email",
  },
  {
    id: "company",
    name: "Company",
  },
  {
    id: "dob",
    name: "Date of Birth",
  },
  {
    id: "is_active",
    name: "Active User",
  },
];

const data = [
  {
    id: 1,
    first_name: "test",
    last_name: "address",
    email: "ak@g.com",
    company: "effy",
    dob: "12/12/2012",
    is_active: "yes",
  },
];

export default function Users() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Table columns={companyColumn} rows={data} tableType="users" />
    </div>
  );
}
