import Table, { ColumnType } from "@/components/Table";
import { useGet, usePost } from "@/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import AddUserModal from "./AddUserModal";
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

const rowsData = [
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
  const router = useRouter();
  const { data, error, loading, fetchData } = useGet(`/users`);
  const deleteUser = usePost(`/user/delete`);
  const migrateUser = usePost(`/user/migrate`);
  const companies = useGet("/companies");
  const [selectedCompanyToMigrate, setSelectedCompanyToMigrate] = useState(
    router.query.id
  );
  const [selectedUserId, setSelectedUserId] = useState(0);

  useEffect(() => {
    if (migrateUser.data) {
      if (migrateUser.data.status == "success") {
        toast.success(migrateUser.data.message);
      } else {
        toast.error(migrateUser.data.message);
      }
    }
  }, [migrateUser.data]);

  useEffect(() => {
    (async () => {
      await companies.fetchData();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await fetchData(`/${router.query.id}`);
    })();
  }, [router.isReady]);

  useEffect(() => {
    if (error) {
      console.log("error : ", error);
    }
  }, [error]);

  useEffect(() => {
    if (companies.data) {
      const defaultCompany = companies.data?.data.filter(
        (company: any) => company.id != router.query.id
      )[0];
      setSelectedCompanyToMigrate(defaultCompany.id);
    }
  }, [companies.data]);
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
      <div>
        <label className="btn" htmlFor="add_new_user">
          Add New User
        </label>
      </div>
      {!loading && data?.data?.length > 0 && (
        <Table
          columns={companyColumn}
          rows={
            data?.data &&
            data?.data?.map((user: any) => {
              return {
                ...user,
                dob: new Date(user.dob).toLocaleDateString(),
                is_active: user.is_active ? "Yes" : "No",
              };
            })
          }
          tableType="users"
          onDelete={async (id) => {
            await deleteUser.fetchData({}, `/${id}`);
            await fetchData(`/${router.query.id}`);
          }}
          onMigrate={async (id) => {
            setSelectedUserId(id);
          }}
        />
      )}
      <Modal modalId="migrate_user" title="Migrate">
        <div>
          <form>
            <div className="flex items-center m-2 justify-between">
              {companies.data?.data && (
                <select
                  onChange={(event) =>
                    setSelectedCompanyToMigrate(event.target.value)
                  }
                  className="select select-bordered w-full max-w-xs"
                  value={selectedCompanyToMigrate}
                >
                  {companies.data?.data?.map((company: any) => {
                    return (
                      company.id != router.query.id && (
                        <option value={company.id} id={company.id}>
                          {company.name}
                        </option>
                      )
                    );
                  })}
                </select>
              )}
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
              <label
                onClick={async () => {
                  await migrateUser.fetchData({
                    id: selectedUserId,
                    company_id: selectedCompanyToMigrate,
                  });
                  await fetchData(`/${router.query.id}`);
                }}
                htmlFor="migrate_user"
                className="btn btn-warning"
              >
                Migrate
              </label>
            </div>
          </div>
        </div>
      </Modal>
      <AddUserModal
        refetch={() => {
          fetchData(`/${router.query.id}`);
        }}
        company_id={Number(router.query.id) || 0}
      />
    </div>
  );
}
