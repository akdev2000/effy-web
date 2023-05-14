import Table, { ColumnType } from "@/components/Table";
import { useGet, usePost } from "@/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "./Modal";

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
];

export default function Companies() {
  const companies = useGet("/companies");
  const { data, fetchData, error, loading } = usePost(`/company/add`);
  const deleteCompany = usePost(`/company/delete`);
  const [companyName, setCompanyName] = useState("");
  // const [address, setAddress] = useState("");
  const [lattitude, setLattitude] = useState("");
  const [longtitude, setLongtitude] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (data) {
      console.log("message", data);
      alert(data.message);
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      await companies.fetchData();
    })();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
      className="space-y-2"
    >
      <div className="flex flex-row items-center space-x-1">
        <label className="btn" htmlFor="add_new_company">
          Add New Company
        </label>
      </div>
      <Table
        columns={companyColumn}
        rows={companies.data?.data}
        tableType="companies"
        onDelete={async (id) => {
          await deleteCompany.fetchData({}, `/${id}`);
          await companies.fetchData();
        }}
      />
      <Modal modalId="add_new_company" title="Add New Company">
        <div>
          <form
            onSubmit={async () => {
              await fetchData({
                name: companyName,
                lat: lattitude,
                long: longtitude,
                // address: address,
              });
              await companies.fetchData();
              router.push("/");
            }}
          >
            <div className="flex items-center m-2 justify-between">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered form-control"
                value={companyName}
                onChange={(event) => {
                  setCompanyName(event.target.value);
                }}
                required
              />
              {/* <input
                type="text"
                placeholder="Address"
                className="input input-bordered form-control"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              /> */}
            </div>
            <div className="flex items-center m-2 justify-between">
              <input
                type="text"
                placeholder="Latitute"
                className="input input-bordered form-control"
                value={lattitude}
                onChange={(event) => {
                  setLattitude(event.target.value);
                }}
                required
              />
              <input
                type="text"
                placeholder="Logntitude"
                className="input input-bordered form-control"
                value={longtitude}
                onChange={(event) => {
                  setLongtitude(event.target.value);
                }}
                required
              />
            </div>
            <div className="flex space-x-2 justify-end">
              <div className="modal-action">
                <label
                  htmlFor="add_new_company"
                  className="btn btn-error text-white"
                >
                  Cancel
                </label>
              </div>
              <button type="submit" className="modal-action btn">
                Add Company
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
