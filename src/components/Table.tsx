interface Props {
  columns: ColumnType[];
  rows: Record<string, any>[];
  onCreate?: (id: number) => void;
  onDelete?: (id: number) => void;
  tableType?: "companies" | "users";
}

export interface ColumnType {
  id: string;
  name: string;
}

export default function Table(props: Props) {
  function onDelete(id: number) {}
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head*/}
        <thead>
          <tr>
            {props.columns?.map((column, index) => {
              return <th key={index}>{column.name}</th>;
            })}
            <th>
              <p>Actions</p>
            </th>
            {props.tableType == "companies" && (
              <th>
                <p>Users</p>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {props.rows?.map((rows,rowIndex) => {
            return (
              <tr key={rowIndex} >
                {props.columns?.map((column,columnIndex) => {
                  return <td key={columnIndex}> {rows?.[column.id]} </td>;
                })}
                {props.tableType == "companies" && (
                  <>
                    <td>
                      <div className="flex flex-row items-center space-x-1">
                        <label className="btn" htmlFor="add_new_user">
                          Add New User
                        </label>
                        <button className="btn btn-error text-white">
                          Delete
                        </button>
                      </div>
                    </td>
                    <td>
                      <a
                        href={`/users?id=${rows}`}
                        className="flex flex-row items-center space-x-1"
                      >
                        <button className="btn">View Users</button>
                      </a>
                    </td>
                  </>
                )}

                {props.tableType == "users" && (
                  <td>
                    <div className="flex flex-row items-center space-x-1">
                      <label htmlFor="migrate_user" className="btn">
                        Migrate
                      </label>
                      <button className="btn btn-error text-white">
                        Delete
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
