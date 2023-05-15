import React from "react";
import { Toaster } from "react-hot-toast";

export enum TabTypes {
  COMPANIES = "COMPANIES",
  ALLUSERS = "ALLUSERS",
}

type Props = {
  children: React.ReactElement;
};
export function Root({ children }: Props) {
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
      </div>
      <Toaster position="top-right" />
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
