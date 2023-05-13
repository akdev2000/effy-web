import React, { ReactElement } from "react";

type Props = {
  children: React.ReactElement;
  selectedNav?: "companies" | "allusers";
};
export function Root({ children, selectedNav = "companies" }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: typeof window != "undefined" ? window.innerHeight : "100%",
      }}
    >
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            Admin Panel - Effy
          </a>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li className={selectedNav == "companies" ? "btn" : ""}>
                <a>Companies</a>
              </li>
              <li className={selectedNav == "allusers" ? "bg-neutral" : ""}>
                <a>All Users</a>
              </li>
            </ul>
          </div>
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
    </div>
  );
}
