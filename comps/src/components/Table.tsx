import { Fragment } from "react";
import { TConfig } from "../pages/TablePage";

export interface ITable<T> {
  data: T[];
  config: TConfig[];
  keyFn(obj: T): string;
}

const Table = <T,>({ data, config, keyFn }: ITable<T>) => {
  const renderedHeaders = config.map((col: TConfig) => {
    if (col.header) {
      return <Fragment key={col.label}>{col.header()}</Fragment>;
    }
    return <th key={col.label}>{col.label}</th>;
  });

  const renderedRows = data.map((rowData: T) => {
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {config.map((col: TConfig) => {
          return (
            <td className="p-2" key={col.label}>
              {col.render(rowData)}
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
