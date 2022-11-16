import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Table from "components/Table/Table.js";
// icon svg
import imp__svg from "assets/svg/Imp.svg";
import imp__svg_ from "assets/svg/Imp_.svg";
// style
import style from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/contentAreas.js";

const useStyles = makeStyles(style);

export default function TableData(props) {
    const classes = useStyles();
    const row = [
    <div className={"Detail"}>
        1:00
    </div>,
    <div className={"Detail"}>
        JPY
    </div>
        ,
    <div className="economic__list__icon">
        <img src={imp__svg} />
        <img src={imp__svg} />
        <img src={imp__svg_} />
    </div>
        , <div className={"Detail"}>
        5-Year JGB Auction
    </div>,
    <div style={{ fontWeight: "bold",color: '#000000' }}>
        0.081%
    </div>
        , <div className={"Detail"}>
        11.50%
    </div>,
    <div className={"Detail"}>
        0.040%
    </div>];
    return (
        <Table
            style={{ border: '1px solid black' }}
            // head
            tableHead={props.tblHead}
            // row 
            tableData={
                props.tblData ? props.tblData : 
            [
                {
                    mergeCell: true,
                    colspan: 7,
                    content: (
                        <div style={{ color: "white" }}>
                            Friday, October 14, 2022
                        </div>
                    ),
                    backgroundElement: '#B3B3B3'
                },
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row,
                row
            ]
            }
            customCellClasses={[
                classes.textCenter,
                classes.textCenter,
                classes.textCenter,
                classes.textCenter,
                classes.textCenter,
                classes.textCenter,
                classes.textCenter
            ]}
            customClassesForCells={[0,1,2,3,4,5,6]}
            // customHeadCellClasses={[
            //     classes.textCenter,
            //     classes.textCenter,
            //     classes.textCenter,
            //     classes.textCenter,
            //     classes.textCenter,
            //     classes.textCenter,
            //     classes.textCenter,
            // ]}
            // customHeadClassesForCells={[0, 1, 2,3,4,5,6]}
        />
    );
}