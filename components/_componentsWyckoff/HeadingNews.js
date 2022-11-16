//nextjs
// import Image from 'next/image';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//core components
import CardBody from "components/Card/CardBody.js";
//my component
import TitlePage from "../_componentsTitlePage/TitlePage";
import EconomicNews from "./EconomicNews";
import PostTopicNews from "./PostTopicNews";
import Adds from "./Adds";
import ViewNews from "./ViewNews";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../styles/styles"
import {Card, Grid} from "@material-ui/core";
//img
import img1 from "assets/img/news_col1.jpeg";
import img2 from "assets/img/news_col2.jpeg";
//use style 
const useStyles = makeStyles(presentationStyle);
export default function NewsCatgories() {
    // custom styles component
    const classes = useStyles();
    const myContentClass = styles.useMyContentStyles();
    return (
        <Grid container spacing={2}>
            {/*(Group 1: ) Title : News */}
            <Grid item xs={12} style={{ padding: '0px', marginBottom: '10px' }}>
                {/* <div style={{ width: '100%', borderBottom: '1px solid #ABABAB', marginBottom: '40px' }}>
                    <h2 style={
                        {
                            textTransform: 'uppercase',
                            color: '#004E8C',
                            margin: '0px auto 40px auto',
                            fontWeight: 'bold',
                            width: 'fit-content',
                        }}
                        className={"Big_Title "}
                    >
                        wyckoff
                    </h2>
                </div> */}
                <TitlePage title="wyckoff"/>
            </Grid>
            {/*(Group 2: ) 2 column news */}
            <Grid container spacing={2} style={{ marginTop: '30px' }}>
                <Grid item xs={12} style={{ padding: '0px' }}>
                    <Grid container spacing={2} >
                        {/* Left  */}
                        <Grid item xs={9}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <div style={{ width: '100%' }}>
                                        <Card style={{ width: "100%", position: 'relative' }}>
                                            <img
                                                style={{ width: "100%", height: '440px', display: "block" }}
                                                className={classes.imgCardTop}
                                                src={img1}
                                            />
                                            <CardBody
                                                style={
                                                    {
                                                        position: 'absolute',
                                                        padding: '0px 10px',
                                                        bottom: '0',

                                                    }}
                                                className={"news_col1_linear"}
                                            >
                                                <p style={{ fontSize: '24px', lineHeight: '1.1em', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>
                                                    China is no longer just any emerging market - It has become its own beast
                                                </p>
                                                <p style={{ fontSize: '14px', color: 'white', marginBottom: '5px' }}>
                                                    BEIJING — China is no longer just another emerging market play. Now, the country is
                                                    becoming its own beast — with all the risks and rewards that come with being a world power.
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </div>
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
                                            src={img1}
                                        />
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*(Group 3: ) list ỉtem news */}
            <Grid container style={{ marginTop: '50px' }}>
                <EconomicNews/>
                {/* post by topics */}
                {/* btn remote post by topic  */}
                <PostTopicNews />
                {/* show adds (paragraph 1) */}
                <Adds type="horizontal" />
                {/* // */}
                <Grid item xs={12} className={"Big_Title"} style={{ fontWeight: 'bold', color: '#004E8C' }}>
                    Xem trong nhiều ngày
                </Grid>
                <ViewNews />
                {/* show adds (paragraph 2) */}
                <Adds type="verhical" />
            </Grid>
        </Grid>
    );
}
