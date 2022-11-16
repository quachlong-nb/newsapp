// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//core components
import { Box,Grid, Typography } from "@material-ui/core";
//my component
import ItemNew from "../ItemNew/ItemNew";
import TableData from "components/TableData/TableData";
import MyButton from "../Button/Button";
//style
import styles from "../../styles/styles"
function EconomicNews() {
    // custtom styles New Page
    const myNewPageClass = styles.useMyNewPageStyles();
    return (
        <>
            {/* list item  */}
            <Grid item xs={8}>
                <List>
                    <ListItem>
                        <ItemNew />
                    </ListItem>
                    <ListItem>
                        <ItemNew />
                    </ListItem>
                    <ListItem>
                        <ItemNew />
                    </ListItem>
                </List>
            </Grid>
            {/* economic celendar  */}
            <Grid item xs={4}>
                <Grid item xs={12} style={{ padding: '0px' }}>
                    {/* title - economic celendar */}
                    <Grid item xs={12}>
                        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography className={"Type_Title"}
                                style={{
                                    color: '#004E8C',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    paddingBottom: '10px'
                                }}
                            >
                                Lịch kinh tế
                            </Typography>
                        </Box>
                    </Grid>
                    {/* table data */}
                    <Grid item xs={12}>
                        <TableData
                            tblHead={
                                [<div className={"tile"}>Time</div>,
                                <div className={"tile"}>Cur.</div>,
                                <div className={"tile"}>Imp.</div>,
                                <div className={"tile"}>Actual</div>]
                            }
                            tblData={
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
                                    [
                                        <div>1:00</div>,
                                        <div>JPY</div>,
                                        <div>1:00</div>,
                                        <div>5-Year JGB Auction</div>
                                    ],
                                    [
                                        <div>1:00</div>,
                                        <div>JPY</div>,
                                        <div>1:00</div>,
                                        <div>5-Year JGB Auction</div>
                                    ],
                                    [
                                        <div>1:00</div>,
                                        <div>JPY</div>,
                                        <div>1:00</div>,
                                        <div>5-Year JGB Auction</div>
                                    ],
                                    [
                                        <div>1:00</div>,
                                        <div>JPY</div>,
                                        <div>1:00</div>,
                                        <div>5-Year JGB Auction</div>
                                    ],
                                    [
                                        <div>1:00</div>,
                                        <div>JPY</div>,
                                        <div>1:00</div>,
                                        <div>5-Year JGB Auction</div>
                                    ],
                                    [
                                        <div>1:00</div>,
                                        <div>JPY</div>,
                                        <div>1:00</div>,
                                        <div>5-Year JGB Auction</div>
                                    ],
                                    [
                                        <div>1:00</div>,
                                        <div>JPY</div>,
                                        <div>1:00</div>,
                                        <div>5-Year JGB Auction</div>
                                    ],
                                    [
                                        <div>1:00</div>,
                                        <div>JPY</div>,
                                        <div>1:00</div>,
                                        <div>5-Year JGB Auction</div>
                                    ],
                                    [
                                        <div>1:00</div>,
                                        <div>JPY</div>,
                                        <div>1:00</div>,
                                        <div>5-Year JGB Auction</div>
                                    ],
                                    [
                                        <div>1:00</div>,
                                        <div>JPY</div>,
                                        <div>1:00</div>,
                                        <div>5-Year JGB Auction</div>
                                    ]
                                ]
                            }
                        />
                    </Grid>
                </Grid>
                {/* btn view detail  */}
                <Grid item xs={12} className={myNewPageClass.box__vd__economic} style={{ marginTop: '10px' }}>
                    <Box className={myNewPageClass.btn__vd__economic}>
                        <MyButton title="xem chi tiết >>"/>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default EconomicNews;