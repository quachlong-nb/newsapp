import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import CardBody from "components/Card/CardBody.js";
// my component
import TableData from "components/TableData/TableData";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../styles/styles"
import { Box, Button, Card, Grid } from "@material-ui/core";
//img
import img1 from "assets/img/marketing.jpg";
import img2 from "assets/img/adds.jpg";
import img3 from "assets/img/adds1.jpg";
// svg (icon)
import svg_clock from "assets/svg/Vector.svg"
//use style 
const useStyles = makeStyles(presentationStyle);
export default function MarketAnalytics(props) {
    // custom styles component
    const classes = useStyles();
    const myContentClass = styles.useMyContentStyles();
    return (
        //  
        //  - MarketAnalytics:
        //  + line 1: title
        //  + line 2: news(9 col) + adds(3 col)
        //      * news: item1(8 col), item2(4),item3(4),...
        //      * adds
        //    
        <Grid container spacing={2} style={{ marginTop: '30px' }}>
            {/*(Line above) Title : MarketAnalytics */}
            <Grid item xs={12} style={{ padding: '0px', marginBottom: '20px' }}>
                <div style={{ width: '100%', borderBottom: '1px solid #ABABAB',display: 'flex',alignItems: 'center' }}>
                    <h2 style={{display:'inline' ,fontSize: '20px',width: 'fit-content',paddingRight: '15px',textTransform: 'uppercase', color: '#004E8C', margin: '0px', fontWeight: 'bold' }}>
                        Phân tích thị trường
                    </h2>
                    <span className={"devider-v-2 devider__market-15"}  />
                    <span>
                        <Button className={"tile btn__cat__market"} style={{color : '#004E8C',padding: '5px 28px',textTransform: 'none'}}>
                            <span className={myContentClass.market__cat__active}>
                                Forex
                            </span>
                        </Button>
                    </span>
                    <span className={"devider-v-2 devider__market-15"}  />
                    <span>
                        <Button className={"tile btn__cat__market"} style={{color : '#004E8C',padding: '5px 28px',textTransform: 'none'}}>
                            <span >
                                Stocke
                            </span>
                        </Button>
                    </span>
                    <span className={"devider-v-2 devider__market-15"}  />
                    <span>
                        <Button className={"tile btn__cat__market"} style={{color : '#004E8C',padding: '5px 28px',textTransform: 'none'}}>
                            <span >
                                Gypto
                            </span>
                        </Button>
                    </span>
                </div>
            </Grid>
            {/*(Line below) MarketAnalytics */}
            <Grid item xs={12} style={{ padding: '0px' }}>
                <Grid container spacing={2} >
                    {/* Left  */}
                    <Grid item xs={9}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                    <img
                                        style={{ width: "100%", height: '330px' }}
                                        className={classes.imgCardTop}
                                        src={img1}
                                    />
                                    <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                        <p className={"Post_Title3 " + myContentClass.lt_2_lines} style={{ lineHeight: "30px", fontWeight: 'bold' }}>
                                            The case for a ‘powerful rally’ in the stock market is building, MKM Partners says
                                        </p>
                                        <p className={"Description"}>
                                            Karol Serewis - October 14, 2022
                                        </p>
                                    </CardBody>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                    <img
                                        style={{ width: '200%', height: '330px' }}
                                        className={classes.imgCardTop}
                                        src={img1}
                                    />
                                    <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                        <p className={"Post_Title3 " + myContentClass.lt_2_lines} style={{ lineHeight: "30px", fontWeight: 'bold' }}>
                                            The case for a ‘powerful rally’ in the stock market is building, MKM Partners says
                                        </p>
                                        <p className={"Description"}>
                                            Karol Serewis - October 14, 2022
                                        </p>
                                    </CardBody>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                    <img
                                        style={{ width: "100%", height: 'auto' }}
                                        className={classes.imgCardTop}
                                        src={img1}
                                    />
                                    <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                        <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                            The British pound traded 1.5% higher at $1.1269 during
                                            afternoon deals in London, before paring gains on robust U.S. inflation data.
                                        </p>
                                        <p className={"Description"}>
                                            Karol Serewis - October 14, 2022
                                        </p>
                                    </CardBody>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                    <img
                                        style={{ width: "100%", height: 'auto' }}
                                        className={classes.imgCardTop}
                                        src={img1}
                                    />
                                    <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                        <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                            The British pound traded 1.5% higher at $1.1269 during
                                            afternoon deals in London, before paring gains on robust U.S. inflation data.
                                        </p>
                                        <p className={"Description"}>
                                            Karol Serewis - October 14, 2022
                                        </p>
                                    </CardBody>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                    <img
                                        style={{ width: "100%", height: 'auto' }}
                                        className={classes.imgCardTop}
                                        src={img1}
                                    />
                                    <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                        <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                            The British pound traded 1.5% higher at $1.1269 during
                                            afternoon deals in London, before paring gains on robust U.S. inflation data.
                                        </p>
                                        <p className={"Description"}>
                                            Karol Serewis - October 14, 2022
                                        </p>
                                    </CardBody>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Right */}
                    <Grid item xs={3}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card style={{ width: "100%", position: 'relative', boxShadow: 'none' }}>
                                    <img
                                        style={{ width: "100%", height: '270px' }}
                                        className={classes.imgCardTop}
                                        src={img2}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card style={{ width: "100%", position: 'relative', boxShadow: 'none' }}>
                                    <img
                                        style={{ width: "100%", height: '450px' }}
                                        className={classes.imgCardTop}
                                        src={img3}
                                    />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
