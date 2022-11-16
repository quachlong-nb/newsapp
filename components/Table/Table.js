import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import styles from "assets/jss/nextjs-material-kit-pro/components/tableStyle.js";
import styleTable from "./styleTable";

const useStyles = makeStyles(styles);
export default function CustomTable(props) {
  const {
    tableHead,
    tableData,
    tableHeaderColor,
    hover,
    colorsColls,
    coloredColls,
    customCellClasses,
    customClassesForCells,
    striped,
    tableShopping,
    customHeadCellClasses,
    customHeadClassesForCells
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor] }>
            <TableRow className={classes.tableRow + " " + styleTable.pad}>
              {tableHead.map((prop, key) => {
                const tableCellClasses =
                  classes.tableHeadCell +
                  " " +
                  classes.tableCell +
                  " " +
                  cx({
                    [customHeadCellClasses[customHeadClassesForCells.indexOf(key)
                    ]]: customHeadClassesForCells.indexOf(key) !== -1,
                    [classes.tableShoppingHead]: tableShopping
                  });
                return (
                  <TableCell className={tableCellClasses + " " + styleTable.pad} style={{color : '#000000'}} key={key}>
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((propRow, key) => {
            var rowColor = "";
            var rowColored = false;
            const tableRowClasses = cx({
              [classes.tableRowHover]: hover,
              [classes[rowColor + "Row"]]: rowColored,
              [classes.tableStripedRow]: striped && key % 2 === 0
            });
            
            if (propRow.mergeCell) {
              const colSpanVal = (props.tableHead.length>=propRow.colspan)? propRow.colspan : props.tableHead.length;
              const tableCellClasses =
                    classes.tableCell +
                    " " +
                    cx({
                      [classes[colorsColls[coloredColls.indexOf(key)]]]:
                        coloredColls.indexOf(key) !== -1,
                      [customCellClasses[customClassesForCells.indexOf(key)]]:
                        customClassesForCells.indexOf(key) !== -1
                    });
              return (
                <TableRow
                  key={key}
                  hover={hover}
                  className={classes.tableRow + " " + tableRowClasses}
                >
                  <TableCell  colSpan={colSpanVal} className={tableCellClasses} key={key} style={{background: propRow.backgroundElement}}>
                    {propRow.content}
                  </TableCell>
                </TableRow>
              )
            }
            return (
              <TableRow
                key={key}
                hover={hover}
                className={classes.tableRow + " " + tableRowClasses}
              >
                {propRow.map((valueCell, key) => {
                  const tableCellClasses =
                    classes.tableCell +
                    " " 
                    cx({
                      [classes[colorsColls[coloredColls.indexOf(key)]]]:
                        coloredColls.indexOf(key) !== -1,
                      [customCellClasses[customClassesForCells.indexOf(key)]]:
                        customClassesForCells.indexOf(key) !== -1
                    }
                    );
                  return (
                    <TableCell key={key} className={tableCellClasses}>
                      {valueCell}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "primary",
  hover: false,
  colorsColls: [],
  coloredColls: [],
  striped: false,
  customCellClasses: [],
  customClassesForCells: [],
  customHeadCellClasses: [],
  customHeadClassesForCells: []
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.object),
  // Of(PropTypes.arrayOf(PropTypes.node)) || Of(PropTypes.object),
  tableData: PropTypes.array,
  hover: PropTypes.bool,
  coloredColls: PropTypes.arrayOf(PropTypes.number),
  // Of(["warning","primary","danger","success","info","rose","gray"]) - colorsColls
  colorsColls: PropTypes.array,
  customCellClasses: PropTypes.arrayOf(PropTypes.string),
  customClassesForCells: PropTypes.arrayOf(PropTypes.number),
  customHeadCellClasses: PropTypes.arrayOf(PropTypes.string),
  customHeadClassesForCells: PropTypes.arrayOf(PropTypes.number),
  striped: PropTypes.bool,
  // this will cause some changes in font
  tableShopping: PropTypes.bool
};
