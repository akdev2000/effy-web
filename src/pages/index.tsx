import Table, { ColumnType } from "@/components/Table";
import { Root, TabTypes } from "../components/Root";
import { useState } from "react";
import Companies from "@/components/Companies";
import Users from "@/components/Users";

const companyColumn: ColumnType[] = [
  {
    id: "id",
    name: "Id",
  },
  {
    id: "name",
    name: "Company Name",
  },
  {
    id: "address",
    name: "Company Address",
  },
  // {
  //   id: "add_user",
  //   name: () => {

  //   },
  // },
];

const data = [
  {
    id: 1,
    name: "test",
    address: "address",
  },
];

export default function Index() {
  return (
    <Root>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Companies />
      </div>
    </Root>
  );
}
