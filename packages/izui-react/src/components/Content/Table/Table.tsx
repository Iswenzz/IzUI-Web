import { useMemo, useState } from "react";
import DataGrid, { Column, DataGridProps, SortColumn } from "react-data-grid";
import { useTheme, Pagination } from "@mui/material";
import classNames from "classnames";

import { Loader } from "@/components";

import scss from "./Table.module.scss";

/**
 * Create rows.
 * @param data - The data.
 * @param keyGetter - The key getter for searching an element.
 * @param idGetter - The id getter for an element.
 * @returns
 */
export const createRows = <T,>(
	data: T[],
	keyGetter: (item: T) => string,
	idGetter?: (item: T) => string
): Row<T>[] =>
	data.map((item, index) => ({
		id: idGetter ? idGetter(item) : index.toString(),
		key: keyGetter(item),
		data: item,
		index
	}));

/**
 * Data grid table.
 */
const Table = <T,>({
	rows,
	rowsPage = 10,
	columns = [],
	loading,
	getComparator = defaultGetComparator,
	className,
	...rest
}: TableProps<T>) => {
	const { theme } = useTheme();

	const [page, setPage] = useState(1);
	const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
	const rowGetter = (row: Row<T>) => row.id;

	const sortedRows = useMemo((): readonly Row<T>[] => {
		const startIndex = (page - 1) * rowsPage;
		if (sortColumns.length === 0) {
			return rows;
		}
		return rows.slice(startIndex, startIndex + rowsPage).sort((a, b) => {
			for (const sort of sortColumns) {
				const comparator = getComparator(sort.columnKey);
				const compResult = comparator(a, b);
				if (compResult !== 0) {
					return sort.direction === "ASC" ? compResult : -compResult;
				}
			}
			return 0;
		});
	}, [rows, sortColumns, rowsPage, page]);

	const onPageChange = (_: React.ChangeEvent<unknown>, value: number) => setPage(value);

	return (
		<section className={classNames(scss.table, scss[theme], className)}>
			<DataGrid
				rowKeyGetter={rowGetter}
				columns={columns}
				rows={sortedRows}
				rowHeight={70}
				defaultColumnOptions={{ sortable: true }}
				sortColumns={sortColumns}
				onSortColumnsChange={setSortColumns}
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

export type Row<R> = {
	id: string;
	key: string;
	data: R;
	index: number;
};
export type { Column };

export type TableProps<T> = DataGridProps<Row<T>> & {
	name?: string;
	columns?: Column<Row<T>>[];
	rows: Row<T>[];
	rowsPage?: number;
	getComparator?: (column: string) => (a: Row<T>, b: Row<T>) => number;
	loading?: boolean;
};

const defaultGetComparator =
	() =>
	<T,>(a: Row<T>, b: Row<T>) =>
		a.key.localeCompare(b.key);

export default Table;
