import SortableTable from "../components/SortableTable";

export type TFruits = {
  name: string;
  color: string;
  score: number;
};
export type TConfig = {
  label: string;
  render(obj: unknown): React.ReactNode;
  header?(): React.ReactNode;
  sortValue?(obj: unknown): number | string;
};

const TablePage = () => {
  const data: TFruits[] = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config: TConfig[] = [
    {
      label: "Fruits",
      render: (col: (typeof data)[number]) => col.name,
      sortValue: (col: (typeof data)[number]) => col.name,
    },
    {
      label: "Color",
      render: (col: (typeof data)[number]) => (
        <div className={`m-3 p-2 ${col.color}`} />
      ),
    },
    {
      label: "Score",
      render: (col: (typeof data)[number]) => col.score,
      sortValue: (col: (typeof data)[number]) => col.score,
    },
  ];

  const keyFn = (key: (typeof data)[number]) => {
    return key.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
