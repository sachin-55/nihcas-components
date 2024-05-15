import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import Checkbox from "../Checkbox";
import Loader from "../Loader";
import EmptyData from "../NoData";
import Typography from "../Typography";
import {
  HeaderTitleWrapper,
  LoadingStyled,
  NodataStyled,
  TableBody,
  TableContainer,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TableStyled,
} from "./style";
import TableCardView from "./TableCardView";

export type HeadingsType = Array<{
  key: string;
  label: string;
  style?: { [key: string]: string };
}>;
export type BodyType = Array<{
  id: string;
  pictureFile?: { URL: string; id: string }[];
  style?: {
    [key: string]: { [key: string]: string };
  };
  [key: string]: any;
}>;

export type TableDataType = {
  headings: HeadingsType;
  body: BodyType;
};

export interface ITableProps extends React.ComponentProps<"table"> {
  tableData: TableDataType;
  rowClick?: (id: string, record: any) => void;
  isLoading?: boolean;
  noData?: string | ReactNode;
  maxHeight?: string;
  ellipsis?: boolean;
  onCheck?: (data: Array<string>) => void;
  checkedData?: Array<string>;
  showCheckBox?: boolean;
  maxWidthForCardView?: string;
  headingBgColor?: string;
}

const Table = ({
  tableData,
  rowClick = undefined,
  isLoading = false,
  noData = <EmptyData message="No Data Available!!!" />,
  // noData = 'No data to display on Table.',
  maxHeight = "calc(100vh - 220px)",
  ellipsis = true,
  onCheck = undefined,
  checkedData = [],
  showCheckBox = true,
  maxWidthForCardView = "768px",
  headingBgColor,
  ...restProps
}: ITableProps) => {
  const isMaxWidthForCardView = useMediaQuery({
    query: `(max-width:${maxWidthForCardView})`,
  });

  const handleTableDataCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const { checked, value } = e.target;
    if (value === "all") {
      const allIds = checked ? tableData?.body?.map((x) => x.id) : [];
      if (onCheck) {
        onCheck(allIds);
      }
      return;
    }
    let allIds = [...checkedData];
    if (checked) {
      allIds = [...allIds, value];
    } else {
      allIds = allIds.filter((x) => x !== value);
    }
    if (onCheck) {
      onCheck(allIds);
    }
  };

  return isMaxWidthForCardView ? (
    <TableCardView
      tableData={tableData}
      rowClick={rowClick}
      isLoading={isLoading}
      noData={noData}
      maxHeight={maxHeight}
      ellipsis={ellipsis}
      checkedData={checkedData}
      showCheckBox={showCheckBox}
      handleTableDataCheck={handleTableDataCheck}
      {...restProps}
    />
  ) : (
    <TableContainer $maxHeight={maxHeight}>
      <TableStyled {...restProps}>
        <TableHead $bgColor={headingBgColor}>
          <TableRow className="header" $bgColor={headingBgColor}>
            {showCheckBox && (
              <TableHeadCell>
                <Checkbox
                  checked={tableData.body.length === checkedData.length}
                  onChange={handleTableDataCheck}
                  value="all"
                  style={{ marginRight: "5px" }}
                />
              </TableHeadCell>
            )}
            {tableData?.headings?.map((heading) => (
              <TableHeadCell
                key={heading.key}
                className={heading.key === "actions" ? "actions" : ""}
              >
                <HeaderTitleWrapper
                  style={{
                    ...(heading?.style ? heading?.style : {}),
                  }}
                  className={heading.key === "actions" ? "actions" : ""}
                >
                  <Typography
                    style={{
                      marginRight: "6px",
                    }}
                    inline
                    strong
                  >
                    {heading.label}
                  </Typography>
                  <MenuIcon className="menu-icon" />
                </HeaderTitleWrapper>
              </TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody
          style={{
            height: tableData?.body?.length === 0 ? "50vh" : "auto",
            overflowY: "auto",
          }}
        >
          {isLoading && (
            <TableRow>
              <TableDataCell colSpan={tableData?.headings?.length}>
                <LoadingStyled>
                  <Loader size={58} type="spinner" />
                </LoadingStyled>
              </TableDataCell>
            </TableRow>
          )}
          {tableData?.body?.length === 0 && !isLoading && (
            <TableRow>
              <TableDataCell colSpan={tableData?.headings?.length}>
                <NodataStyled>{noData}</NodataStyled>
              </TableDataCell>
            </TableRow>
          )}
          {tableData.body.map((body) => {
            return (
              <TableRow
                key={body.id}
                onClick={() => rowClick && rowClick(body?.id, body)}
                className={`data-row ${rowClick ? "row-clickable" : ""}`}
              >
                {showCheckBox && (
                  <TableDataCell>
                    <Checkbox
                      checked={checkedData.includes(body.id)}
                      value={body.id}
                      onChange={handleTableDataCheck}
                      style={{ marginRight: "5px" }}
                    />
                  </TableDataCell>
                )}
                {tableData?.headings.map((heading, index) => {
                  return (
                    <TableDataCell
                      key={`${body.id}-${index}`}
                      className={heading.key === "actions" ? "actions" : ""}
                      style={{
                        ...(body?.style ? body?.style[heading.key] : {}),
                      }}
                    >
                      {typeof body[heading.key] === "string" ? (
                        <Typography
                          ellipsis={ellipsis}
                          style={{ fontWeight: 500 }}
                        >
                          {body[heading.key]}
                        </Typography>
                      ) : (
                        body[heading.key]
                      )}
                    </TableDataCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </TableStyled>
    </TableContainer>
  );
};

export default Table;
