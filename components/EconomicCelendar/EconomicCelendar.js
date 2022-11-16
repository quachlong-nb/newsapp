import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import CardBody from "components/Card/CardBody.js";
import { Box, Button, Card, Grid } from "@material-ui/core";
// my component
import TableData from "components/TableData/TableData";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../styles/styles"
//img
import img1 from "assets/img/wyckoff.jpeg";
// svg (icon)
import svg_clock from "assets/svg/Vector.svg"
import MyButton from "../Button/Button";
//use style 
const useStyles = makeStyles(presentationStyle);
export default function EconomicCelendar(props) {
    // custom styles component
    const classes = useStyles();
    const myContentClass = styles.useMyContentStyles();
    return (
        // Economic Celandar
        //  - EconomicCelendar:
        //  + Line 1 : title
        //  + Line 2 : 2 column
        //    * column 1: title table + table
        //    * column 2: news
        <Grid container spacing={2} style={{ marginTop: '30px' }}>
            {/*(Line above) Title : EconomicCelendar */}
            <Grid item xs={12} style={{ padding: '0px', marginBottom: '20px' }}>
                <div 
                    style={
                        {   width: '100%', 
                            borderBottom: '1px solid #ABABAB' 
                        }
                }>
                    <h2 
                        style={
                            {   fontSize: '20px', 
                                textTransform: 'uppercase', 
                                color: '#004E8C', 
                                margin: '0px', 
                                fontWeight: 'bold' 
                            }
                        }>Lịch kinh tế</h2>
                </div>
            </Grid>
            {/*(Line below)EconomicCelendar */}
            <Grid item xs={12} style={{ padding: '0px' }}>
                <Grid container spacing={2} >
                    {/* Left  */}
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src={svg_clock}
                                            style={{ paddingRight: '10px' }}
                                        />
                                        <span className={" Detail"}>
                                            Current time 10:03 A.M (GMS + 7)
                                        </span>
                                    </Box>
                                    <Box style={{marginBottom: '20px'}}>
                                        <MyButton title="Xem chi tiết >>"/>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <TableData
                                    tblHead={
                                        [<div className={"tile"}>Time</div>,
                                        <div className={"tile"}>Cur.</div>,
                                        <div className={"tile"}>Imp.</div>,
                                        <div className={"tile"}>Event</div>,
                                        <div className={"tile"}>Actual</div>,
                                        <div className={"tile"}>Forecast</div>,
                                        <div className={"tile"}>Previous</div>]
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Right */}
                    <Grid item xs={3}>
                        <Card style={{ width: "100%", position: 'relative', boxShadow: 'none' }}>
                            <img
                                style={{ width: "100%", height: '185px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title1 " + myContentClass.lt_3_lines}>
                                    Stocks in this key market are outperforming the S&P 500 — and it’s not where you
                                    Stocks in this key market are outperforming the S&P 500 — and it’s not where you
                                </p>
                                <p className={"Description"} style={{ marginBottom: '0px' }}>
                                    Alex Harring - 2 hour ago
                                </p>
                            </CardBody>
                        </Card>
                        <Card style={{ width: "100%", position: 'relative', boxShadow: 'none' }}>
                            <img
                                style={{ width: "100%", height: '185px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title1 " + myContentClass.lt_3_lines}>
                                    Stocks in this key market are outperforming the S&P 500 — and it’s not where you
                                    Stocks in this key market are outperforming the S&P 500 — and it’s not where you
                                </p>
                                <p className={"Description"} style={{ marginBottom: '0px' }}>
                                    Alex Harring - 2 hour ago
                                </p>
                            </CardBody>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
