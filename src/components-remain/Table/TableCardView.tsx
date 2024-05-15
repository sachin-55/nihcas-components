import React from "react";

import Checkbox from "../Checkbox";
import Divider from "../Divider";
import Loader from "../Loader";
import Typography from "../Typography";
import { ITableProps } from ".";
import {
  IndividualTableRow,
  LoadingStyled,
  NodataStyled,
  TableCardRow,
  TableCardViewContainer,
} from "./style";

interface ITableViewCardProps extends ITableProps {
  handleTableDataCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableCardView = ({
  tableData,
  rowClick = undefined,
  isLoading = false,
  noData = "No data to display on Table.",
  ellipsis = true,
  checkedData = [],
  showCheckBox = true,
  handleTableDataCheck,
}: ITableViewCardProps) => {
  return (
    <TableCardViewContainer>
      {isLoading && (
        <LoadingStyled>
          <Loader size={58} type="spinner" />
        </LoadingStyled>
      )}

      {tableData?.body?.length === 0 && !isLoading && (
        <NodataStyled>{noData}</NodataStyled>
      )}

      <div>
        {tableData?.body?.map((body) => (
          <IndividualTableRow
            key={body.id}
            onClick={() => rowClick && rowClick(body.id, body)}
            className={`data-row ${rowClick ? "row-clickable" : ""}`}
          >
            {showCheckBox && (
              <>
                <Checkbox
                  checked={checkedData.includes(body.id)}
                  value={body.id}
                  onChange={handleTableDataCheck}
                />
                <Divider spaceY="10px" />
              </>
            )}
            {tableData?.headings.map((heading, index) => {
              if (heading.key === "actions") {
                return (
                  <TableCardRow className="actions" key={`${body.id}-${index}`}>
                    {body[heading.key]}
                  </TableCardRow>
                );
              }
              return (
                <TableCardRow key={`${body.id}-${index}`}>
                  <Typography className="heading" strong>
                    {heading.label}
                  </Typography>
                  <Typography
                    style={{ fontWeight: 500 }}
                    className={ellipsis ? "ellipsis" : ""}
                  >
                    {body[heading.key]}
                  </Typography>
                </TableCardRow>
              );
            })}
          </IndividualTableRow>
        ))}
      </div>
    </TableCardViewContainer>
  );
};

export default TableCardView;
