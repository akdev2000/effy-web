interface Props {
  columns: ColumnType[];
  rows: Record<string, any>[];
  onCreate?: (id: number) => void;
  onDelete?: (id: number) => void;
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
            {props.columns?.map((column) => {
              return <th>{column.name}</th>;
            })}
            <th>
              <p>Actions</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.rows?.map((rows) => {
            return (
              <tr>
                {props.columns?.map((column) => {
                  return <td> {rows?.[column.id]} </td>;
                })}
                <td>
                  <div className="flex flex-row items-center space-x-1">
                    <button className="btn">Add New User</button>
                    <button className="btn btn-error text-white">Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
