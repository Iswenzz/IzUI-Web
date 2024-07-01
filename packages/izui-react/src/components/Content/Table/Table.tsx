import { FC, useMemo, useState } from "react";
import DataGrid, { Column, DataGridProps, SortColumn } from "react-data-grid";
import { useTheme, Pagination } from "@mui/material";
import classNames from "classnames";

import { Loader } from "@/components";

import scss from "./Table.module.scss";

/**
 * Data grid table.
 */
const Table: FC<TableProps> = ({
	rows,
	rowsPage = 10,
	columns = [],
	loading,
	getComparator = defaultGetComparator,
	className,
	...rest
}) => {
	const { theme } = useTheme();

	const [page, setPage] = useState(1);
	const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
	const rowKeyGetter = (row: Row) => row.id;

	const sortedRows = useMemo((): readonly Row[] => {
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
				rowKeyGetter={rowKeyGetter}
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

export type Row<R = string> = {
	id: string;
	index: number;
	data: R;
};
export type { Column };

export type TableProps = DataGridProps<Row> & {
	name?: string;
	columns?: Column<Row>[];
	rows: Row[];
	rowsPage?: number;
	getComparator?: (column: string) => (a: Row, b: Row) => number;
	loading?: boolean;
};

const defaultGetComparator = () => (a: Row, b: Row) => a.data.localeCompare(b.data);

export default Table;
