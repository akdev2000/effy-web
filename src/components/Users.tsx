import Table, { ColumnType } from "@/components/Table";
import Modal from "./Modal";

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
      <Modal modalId="migrate_user" title="Migrate">
        <div>
          <form>
            <div className="flex items-center m-2 justify-between">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </form>
          <div className="flex space-x-2 justify-end">
            <div className="modal-action">
              <label
                htmlFor="migrate_user"
                className="btn btn-error text-white"
              >
                Cancel
              </label>
            </div>
            <div className="modal-action">
              <label htmlFor="migrate_user" className="btn btn-warning">
                Migrate
              </label>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
