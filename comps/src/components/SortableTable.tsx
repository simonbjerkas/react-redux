import Table, { ITable } from "./Table";
import { TConfig } from "../pages/TablePage";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useState } from "react";

const SortableTable = <T,>(props: ITable<T>) => {
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const { config, data } = props;

  const handleClick = (label: string) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((col: TConfig) => {
    if (!col.sortValue) return col;

    return {
      ...col,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(col.label)}
        >
          <div className="flex items-center gap-1">
            {getIcons(col.label, sortBy, sortOrder)}
            {col.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy !== null) {
    const { sortValue } = config.find(
      (col: TConfig) => col.label === sortBy
    ) as TConfig;

    if (sortValue) {
      sortedData = [...data].sort((a, b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);

        const reverseOrder = sortOrder === "asc" ? 1 : -1;

        if (typeof valueA === "string" && typeof valueB === "string") {
          return valueA.localeCompare(valueB) * reverseOrder;
        } else if (typeof valueA === "number" && typeof valueB === "number") {
          return (valueA - valueB) * reverseOrder;
        } else
          throw new Error("Compare value is neither of type string nor number");
      });
    }
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

const getIcons = (
  label: string,
  sortBy: string | null,
  sortOrder: string | null
): React.ReactNode => {
  if (label !== sortBy)
    return (
      <div className="-space-y-2">
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  if (sortOrder === null)
    return (
      <div className="-space-y-2">
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  else if (sortOrder === "asc")
    return (
      <div>
        <GoTriangleUp />
      </div>
    );
  else if (sortOrder === "desc")
    return (
      <div>
        <GoTriangleDown />
      </div>
    );
};

export default SortableTable;
