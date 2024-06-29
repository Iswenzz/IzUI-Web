import { FC, useMemo, useState } from "react";
import DataGrid, { Column, DataGridProps } from "react-data-grid";
import { useTheme, Pagination } from "@mui/material";

import { Loader } from "@/components";

import scss from "./Table.module.scss";
import classNames from "classnames";

/**
 * Data grid table.
 */
const Table: FC<TableProps> = ({
	rows,
	rowsPage = 10,
	columns = [],
	loading,
	sortCompare = defaultSortCompare,
	className,
	...rest
}) => {
	const { theme } = useTheme();

	const [page, setPage] = useState(1);
	const [[sortColumn, sortDirection], setSort] = useState<[string, SortDirection]>([
		"id",
		"NONE"
	]);

	/**
	 * Sorted rows data.
	 */
	const sortedRows = useMemo((): Row[] => {
		const startIndex = (page - 1) * rowsPage;
		if (sortDirection === "NONE") return rows.slice(startIndex, startIndex + rowsPage);
		let sortedRows: Row[] = [...rows];

		sortedRows = sortedRows.sort((a: Row, b: Row) => sortCompare(sortColumn, a, b));
		if (sortDirection === "DESC") sortedRows.reverse();

		return sortedRows.slice(startIndex, startIndex + rowsPage);
	}, [page, rowsPage, sortDirection, rows, sortCompare, sortColumn]);

	/**
	 * Callback on column sorting.
	 */
	const onSort = (columnKey: string, direction: SortDirection) => setSort([columnKey, direction]);

	/**
	 * Callback on page change.
	 */
	const onPageChange = (_: React.ChangeEvent<unknown>, value: number) => setPage(value);

	return (
		<section className={classNames(scss.table, scss[theme], className)}>
			<DataGrid
				columns={columns}
				rows={sortedRows}
				rowHeight={70}
				sortDirection={sortDirection}
				sortColumn={sortColumn}
				onSort={onSort}
				{...rest}
			/>
			{loading && <Loader className={scss.loader} />}
			<Pagination
				count={Math.ceil(rows.length / rowsPage)}
				page={page}
				onChange={onPageChange}
			/>
		</section>
	);
};

export type Row<R = any> = R;
export type SortDirection = "ASC" | "DESC" | "NONE";
export type { Column };

export type TableProps = DataGridProps<Row> & {
	name?: string;
	columns?: Column<Row>[];
	rows: Row[];
	rowsPage?: number;
	sortCompare?: (sortColumn: string, a: Row, b: Row) => number;
	loading?: boolean;
};

/**
 * Compare two string.
 * @param a - String A.
 * @param b - String B.
 * @returns
 */
const defaultSortCompare = (a: string, b: string) => a.localeCompare(b);

export default Table;
