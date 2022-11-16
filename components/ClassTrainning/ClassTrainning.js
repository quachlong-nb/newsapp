// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import CardBody from "components/Card/CardBody.js";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../styles/styles"
import { Button, Card, Grid, Typography } from "@material-ui/core";
//img
import img1 from "assets/img/news_col1.jpeg";
import img2 from "assets/img/news_col2.jpeg";
import MyButton from "../Button/Button";
//use style 
const useStyles = makeStyles(presentationStyle);
export default function ClassTrainning() {
    // custom styles component
    const classes = useStyles();
    const myContentClass = styles.useMyContentStyles();
    return (
        //  Class/Trainning : 2 column
        //  
        <Grid container spacing={2} style={{ paddingTop: '50px' }}>
            {/*(Line above) Title : News */}
            <Grid item xs={12} style={{ padding: '0px', marginBottom: '10px' }}>
                <div style={{ width: '100%', borderBottom: '1px solid #ABABAB' }}>
                    <h2 style={{ fontSize: '20px', textTransform: 'uppercase', color: '#004E8C', margin: '0px', fontWeight: 'bold' }}>Lớp học/trainning</h2>
                </div>
            </Grid>
            {/*(Line below) 3 column news */}
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {/* Column single video */}
                    <Grid item xs={9} style={{ padding: '0px' }}>
                        <div style={{ width: '100%' }}>
                            <Card style={{ width: "100%", position: 'relative' }}>
                                <iframe
                                    style={{
                                        width: "100%",
                                        height: '707px',
                                        display: "block",
                                    }}
                                    allowFullScreen
                                    className={classes.imgCardTop}
                                    src={"https://www.youtube.com/embed/_xdo7u7KoGg"}
                                >
                                </iframe>
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
                    {/* Column list video*/}
                    <Grid item xs={3} style={{ paddingTop: '0px' }}>
                    {/* style={{ display: 'flex', height: '707px', flexDirection: 'column', justifyContent: 'space-between' }} */}
                        <div style={{ display: 'flex', height: '707px', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div
                                style={{
                                    width: '100%', height: '210px', overflow: 'hidden'
                                }}
                            >
                                <Card style={{ width: "100%", position: 'relative' }}>
                                    <iframe
                                        style={{
                                            border: 'none',
                                            height: '210px',
                                            display: "block",
                                        }}
                                        allowFullScreen
                                        className={classes.imgCardTop}
                                        src={"https://www.youtube.com/embed/_xdo7u7KoGg"}
                                    >
                                    </iframe>
                                    <CardBody
                                        style={
                                            {
                                                position: 'absolute',
                                                padding: '0px 10px',
                                                bottom: '0',
                                                width: "100%",
                                                backgroundColor: 'rgb(0,0,0,24)'
                                            }}
                                        className={"news_col1_linear"}
                                    >
                                        <p className={"Post_Title1 "} style={{ fontSize: '24px', lineHeight: '1.1em', color: 'white', marginBottom: '4px' }}>
                                            SQUAWK BOX
                                        </p>
                                    </CardBody>
                                </Card>
                            </div>
                            <div
                                style={{
                                    width: '100%', height: '210px', overflow: 'hidden'
                                }}
                            >
                                <Card style={{ width: "100%", position: 'relative' }}>
                                    <iframe
                                        style={{
                                            border: 'none',
                                            width: "100%",
                                            height: '210px',
                                            display: "block",
                                        }}
                                        allowFullScreen
                                        className={classes.imgCardTop}
                                        src={"https://www.youtube.com/embed/_xdo7u7KoGg"}
                                    >
                                    </iframe>
                                    <CardBody
                                        style={
                                            {
                                                position: 'absolute',
                                                padding: '0px 10px',
                                                bottom: '0',
                                                width: "100%",
                                                backgroundColor: 'rgb(0,0,0,24)'
                                            }}
                                        className={"news_col1_linear"}
                                    >
                                        <p className={"Post_Title1 "} style={{ fontSize: '24px', lineHeight: '1.1em', color: 'white', marginBottom: '4px' }}>
                                            SQUAWK BOX
                                        </p>
                                    </CardBody>
                                </Card>
                            </div>
                            <div
                                style={{
                                    width: '100%', height: '210px', overflow: 'hidden'
                                }}
                            >
                                <Card style={{ width: "100%", position: 'relative' }}>
                                    <iframe
                                        style={{
                                            border: 'none',
                                            width: "100%",
                                            height: '210px',
                                            display: "block",
                                        }}
                                        allowFullScreen
                                        className={classes.imgCardTop}
                                        src={"https://www.youtube.com/embed/_xdo7u7KoGg"}
                                    >
                                    </iframe>
                                    <CardBody
                                        style={
                                            {
                                                position: 'absolute',
                                                padding: '0px 10px',
                                                bottom: '0',
                                                width: "100%",
                                                backgroundColor: 'rgb(0,0,0,24)'
                                            }}
                                        className={"news_col1_linear"}
                                    >
                                        <p className={"Post_Title1 "} style={{ fontSize: '24px', lineHeight: '1.1em', color: 'white', marginBottom: '4px' }}>
                                            SQUAWK BOX
                                        </p>
                                    </CardBody>
                                </Card>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    display: 'flex',justifyContent: 'end',
                                    
                                }}
                            >
                                <MyButton title="Xem chi tiết >>"/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
