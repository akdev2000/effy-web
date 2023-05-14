import React, { ReactElement, useEffect, useState } from "react";
import Modal from "./Modal";
import { usePost } from "@/hooks";

export enum TabTypes {
  COMPANIES = "COMPANIES",
  ALLUSERS = "ALLUSERS",
}

type Props = {
  children: React.ReactElement;
};
export function Root({ children }: Props) {
  const { data, fetchData, error, loading } = usePost(`/company/add`);
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [lattitude, setLattitude] = useState("");
  const [longtitude, setLongtitude] = useState("");

  useEffect(() => {
    if(data) {
      console.log("message"  , data)
      alert(data.message)
    }
  },[data])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        // height: typeof window != "undefined" ? window.innerHeight : "100%",
      }}
    >
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a
            href="/"
            className="btn btn-ghost normal-case text-xl bg-[#e5e7eb] rounded-[0.5rem]"
          >
            Companies - Admin Panel
          </a>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <label className="btn" htmlFor="add_new_company">
            Add New Company
          </label>
        </div>
      </div>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
      <Modal modalId="add_new_company" title="Add New Company">
        <div>
          <form
            onSubmit={async () => {
              await fetchData({
                name: companyName,
                lat: lattitude,
                long: longtitude,
                address: address,
              });
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
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered form-control"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
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
