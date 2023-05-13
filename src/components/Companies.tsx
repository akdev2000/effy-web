import Table, { ColumnType } from "@/components/Table";
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

export default function Companies() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Table columns={companyColumn} rows={data} tableType="companies" />
      <Modal modalId="add_new_user" title="Add New User">
        <div>
          <form>
            <div className="flex items-center m-2 justify-between">
              <input
                type="text"
                placeholder="First Name"
                className="input form-control input-bordered"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input form-control input-bordered"
              />
            </div>
            <div className="flex items-center m-2 justify-between">
              <input
                type="email"
                placeholder="Email"
                className="input form-control input-bordered"
              />
              <input
                type="text"
                placeholder="Designation"
                className="input form-control input-bordered"
              />
            </div>
            <div className="flex items-center m-2 justify-between">
              <div className="flex">
                <label className="text-gray-400 ml-4 m-2">DOB</label>
                <div className="relative max-w-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-bordered input-primary"
                    placeholder="Select date"
                  />
                </div>
              </div>
              <div
                className="form-control flex items-start"
                style={{ width: "40%" }}
              >
                <label className="flex items-center cursor-pointer  space-x-2">
                  <input type="checkbox" checked className="checkbox" />
                  <span className="label-text">Activate User</span>
                </label>
              </div>
            </div>
          </form>
          <div className="flex space-x-2 justify-end">
            <div className="modal-action">
              <label
                htmlFor="add_new_user"
                className="btn btn-error text-white"
              >
                Cancel
              </label>
            </div>
            <div className="modal-action">
              <label htmlFor="add_new_user" className="btn">
                Add User
              </label>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
