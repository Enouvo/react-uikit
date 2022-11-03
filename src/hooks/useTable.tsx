import { TablePaginationConfig } from "antd";
import { useMemo, useState } from "react";

export function useTable<T>(data: T[] = [], defaultPageSize = 10) {
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const formatData = useMemo(
    () => data.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [data, pageSize, currentPage]
  );

  const onChange = ({ current, pageSize }: TablePaginationConfig) => {
    setCurrentPage(current ?? 1);
    setPageSize(pageSize ?? 10);
  };

  return {
    currentPage,
    formatData,
    onChange,
    pageSize,
    setCurrentPage,
    setPageSize
  };
}
