import Table, { ColumnType } from "@/components/Table";
import { Root } from "../components/Root";

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
        <Table columns={companyColumn} rows={data} />
      </div>
    </Root>
  );
}
