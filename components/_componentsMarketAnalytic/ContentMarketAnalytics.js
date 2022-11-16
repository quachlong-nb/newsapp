//nextjs
// import Image from 'next/image';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//core components
import { Grid, Card, Button } from "@material-ui/core";
//my component
import EconomicNews from "./EconomicNews";
import Adds from "../Adds/Adds";
import ViewNews from "./ViewNews";
import TitlePage from "../_componentsTitlePage/TitlePage";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../styles/styles"
//img
import img1 from "assets/img/phantichthitruong_banner.jpeg";
import imgadds1 from "assets/img/adds1.jpg";
import imgadds2 from "assets/img/adds2.jpg";
import MyCards from "../Card/MyCard";
//use style 
const useStyles = makeStyles(presentationStyle);
function ContentMarketAnalytics() {
    // custom styles component
    const classes = useStyles();
    const myContentClass = styles.useMyContentStyles();
    return (
        <Grid container>
            {/*(Group 1: ) Title : Phân tích thị trường  */}
            <Grid item xs={12} style={{ padding: '0px', marginBottom: '10px' }}>
                <TitlePage title="Phân tích thị trường" />
            </Grid>
            <Grid item xs={12} style={{display: 'flex',alignItems: 'center'}}>
                <span>
                    <Button className={"Big_Title btn__cat__market"} style={{ color: '#004E8C', padding: '5px 28px 5px 0px', textTransform: 'none' }}>
                        <span>
                            Forex
                        </span>
                    </Button>
                </span>
                <span className={"devider-v-2 devider__market-22"} />
                <span>
                    <Button className={"Big_Title btn__cat__market"} style={{ color: '#004E8C', padding: '5px 28px', textTransform: 'none' }}>
                        <span className={myContentClass.market__cat__active}>
                            Stocke
                        </span>
                    </Button>
                </span>
                <span className={"devider-v-2 devider__market-22"} />
                <span>
                    <Button className={"Big_Title btn__cat__market"} style={{ color: '#004E8C', padding: '5px 28px', textTransform: 'none' }}>
                        <span >
                            Gypto
                        </span>
                    </Button>
                </span>
            </Grid>
            {/*(Group 2: ) 2 column news */}
            <Grid container spacing={2} style={{ marginTop: '15px' }}>
                <Grid item xs={12} style={{ padding: '0px' }}>
                    <Grid container spacing={2} >
                        {/* Left  */}
                        <Grid item xs={9}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <div style={{ width: '100%' }}>
                                        <MyCards
                                            type="card_banner"
                                            imgsrc={img1}
                                            pHead={"Europe is still quietly importing Russian nuclear energy"}
                                            pDescription={`Russia’s nuclear fuel industry remains conspicuously 
                                            untouched by European sanctions more than seven months into the Kremlin’s 
                                            war in Ukraine — much to the dismay of Kyiv officials and environmental campaigners.`}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <MyCards
                                        type="card_sub"
                                        imgsrc={img1}
                                        pHead={"Could the British pound hit parity with the dollar? Here’s what the bulls and bears say  the bulls and bears"}
                                        pDescription={`Alex Harring - 2 giờ trước`}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <MyCards
                                        type="card_sub"
                                        imgsrc={img1}
                                        pHead={"Could the British pound hit parity with the dollar? Here’s what the bulls and bears say  the bulls and bears"}
                                        pDescription={`Alex Harring - 2 giờ trước`}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <MyCards
                                        type="card_sub"
                                        imgsrc={img1}
                                        pHead={"Could the British pound hit parity with the dollar? Here’s what the bulls and bears say  the bulls and bears"}
                                        pDescription={`Alex Harring - 2 giờ trước`}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Right */}
                        <Grid item xs={3}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Card style={{ width: "100%", position: 'relative', boxShadow: 'none' }}>
                                        <img
                                            style={{ width: "100%", height: '300px' }}
                                            className={classes.imgCardTop}
                                            src={imgadds1}
                                        />
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card style={{ width: "100%", position: 'relative', boxShadow: 'none' }}>
                                        <img
                                            style={{ width: "100%", height: '450px' }}
                                            className={classes.imgCardTop}
                                            src={imgadds2}
                                        />
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*(Group 3: ) list ỉtem news */}
            <Grid container style={{ marginTop: '50px' }} spacing={2}>
                <EconomicNews />
                {/* show adds (paragraph 1) */}
                <Adds type="horizontal" />
                {/* // */}
                <Grid item xs={12}>
                    <Grid container spacing={2} style={{ boxSizing: 'content-box' }}>
                        <Grid item xs={12} className={"Big_Title"} style={{ fontWeight: 'bold', color: '#004E8C', marginLeft: '-8px' }}>
                            Forex
                        </Grid>
                        <ViewNews />
                        {/* show adds (paragraph 2) */}
                        <Adds type="verhical" />
                    </Grid>
                </Grid>
                <Grid item xs={9} style={{ paddingLeft: '0px' }}>
                    <hr style={{ height: '2px', width: '100%', backgroundColor: '#D9D9D9' }} />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2} style={{ boxSizing: 'content-box' }}>
                        <Grid item xs={12} className={"Big_Title"} style={{ fontWeight: 'bold', color: '#004E8C', marginLeft: '-8px' }}>
                            Gypto
                        </Grid>
                        <ViewNews />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ContentMarketAnalytics;