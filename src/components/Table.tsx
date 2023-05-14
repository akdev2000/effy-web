import Link from "next/link";

interface Props {
  columns: ColumnType[];
  rows: Record<string, any>[];
  onMigrate?: (id: number) => void;
  onDelete: (id: number) => void;
  tableType?: "companies" | "users";
}

export interface ColumnType {
  id: string;
  name: string;
}

export default function Table(props: Props) {
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
          {props.rows?.length > 0 &&
            props.rows?.map((rows, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {props.columns?.map((column, columnIndex) => {
                    if (column.id == "company") {
                      return <td key={columnIndex}> {rows?.Company?.name} </td>;
                    }
                    if (column.id == "id") {
                      return <td key={columnIndex}> {rowIndex + 1} </td>;
                    }
                    return <td key={columnIndex}> {rows?.[column.id]} </td>;
                  })}
                  {props.tableType == "companies" && (
                    <>
                      <td>
                        <div className="flex flex-row items-center space-x-1">
                          <button
                            onClick={() => props.onDelete(rows.id)}
                            className="btn btn-error text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                      <td>
                        <Link
                          href={{
                            pathname: `/users`,
                            query: { id: rows.id },
                          }}
                          className="flex flex-row items-center space-x-1"
                        >
                          <button className="btn">View Users</button>
                        </Link>
                      </td>
                    </>
                  )}

                  {props.tableType == "users" && (
                    <td>
                      <div className="flex flex-row items-center space-x-1">
                        <label
                          onClick={() =>
                            props?.onMigrate && props?.onMigrate(rows.id)
                          }
                          htmlFor="migrate_user"
                          className="btn"
                        >
                          Migrate
                        </label>
                        <button
                          className="btn btn-error text-white"
                          onClick={() => props.onDelete(rows.id)}
                        >
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
      {props.rows?.length <= 0 && (
        <div className="text-center text-gray-600 mt-2">No data found</div>
      )}
    </div>
  );
}
