// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import CardBody from "components/Card/CardBody.js";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../styles/styles"
import {Card, Grid, Typography } from "@material-ui/core";
//img
import img1 from "assets/img/news_col1.jpeg";
import img2 from "assets/img/news_col2.jpeg";
//use style 
const useStyles = makeStyles(presentationStyle);
export default function NewsCatgories(props) {
    // custom styles component
    const classes = useStyles();
    const myContentClass = styles.useMyContentStyles();
    return (
        <Grid container spacing={2} style={{paddingTop: '50px'}}>
            {/*(Line above) Title : News */}
            <Grid item xs={12} style={{ padding: '0px', marginBottom: '10px' }}>
                <div style={{ width: '100%', borderBottom: '1px solid #ABABAB' }}>
                    <h2 style={{ fontSize: '20px', textTransform: 'uppercase', color: '#004E8C', margin: '0px', fontWeight: 'bold' }}>News</h2>
                </div>
            </Grid>
            {/*(Line below) 3 column news */}
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {/* banner news  */}
                    <Grid item xs={6} style={{padding: '0px'}}>
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
                    {/* news (img) */}
                    <Grid item xs={3} style={{paddingTop: '0px'}}>
                        <div style={{ display: 'flex', height: '440px', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div
                                style={{
                                    width: '100%', height: '134px', overflow: 'hidden', borderRadius: '4px',
                                    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px' +
                                        'rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                    position: 'relative'
                                }}
                            >
                                <Card style={{ width: "100%", borderRadius: '0px' }}>
                                    <img
                                        style={{ width: "100%", display: "block" }}
                                        src={img2}
                                    />
                                    <CardBody
                                        style={{ position: 'absolute', padding: '0px 5px', bottom: '0' }}
                                        className={"news_col2_linear"}
                                    >
                                        <p style={{ fontSize: '12px', color: 'white', marginBottom: '5px' }}>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </p>
                                    </CardBody>
                                </Card>
                            </div>
                            <div style={{
                                width: '100%', height: '134px', overflow: 'hidden', borderRadius: '4px',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
                                , position: 'relative'
                            }}>
                                <Card style={{ width: "100%", borderRadius: '0px' }}>
                                    <img
                                        style={{ width: "100%", display: "block" }}
                                        src={img2}
                                    />
                                    <CardBody
                                        style={{ position: 'absolute', padding: '0px 5px', bottom: '0' }}
                                        className={"news_col2_linear"}
                                    >
                                        <p style={{ fontSize: '12px', color: 'white', marginBottom: '5px' }}>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </p>
                                    </CardBody>
                                </Card>
                            </div>
                            <div style={{
                                width: '100%', height: '134px', overflow: 'hidden', borderRadius: '4px',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
                                , position: 'relative'
                            }}>
                                <Card style={{ width: "100%", borderRadius: '0px' }}>
                                    <img
                                        style={{ width: "100%", display: "block" }}
                                        src={img2}
                                    />
                                    <CardBody
                                        style={{ position: 'absolute', padding: '0px 5px', bottom: '0' }}
                                        className={"news_col2_linear"}
                                    >
                                        <p style={{ fontSize: '12px', color: 'white', marginBottom: '5px' }}>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </p>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                    {/* news (not img) */}
                    <Grid item xs={3} className={myContentClass.grid__col3}>
                        <div className={"Type_Title " + myContentClass.grid__col3__title}>tin tức mới nhất</div>
                        <div className={"list__lnews_scroll" + " " + myContentClass.grid__col3__scroll}>
                            <div className={myContentClass.grid__col3__flex}>
                                <div className={myContentClass.grid__col3__inner}>
                                    <List className={myContentClass.grid__col3__list}>
                                        <ListItem className={myContentClass.grid__col3__item}>
                                            <Typography className={"Post_Title2" + " " + myContentClass.col3__item__atext}>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s
                                                {/* , when an unknown printer took a galley of type and scrambled it
                                                 to make a type specimen book. */}
                                            </Typography>
                                            <Typography className={myContentClass.col3__item__btext + " Description"}>
                                                35 minute agos
                                            </Typography>
                                        </ListItem>
                                        <ListItem className={myContentClass.grid__col3__item}>
                                            <Typography className={"Post_Title2" + " " + myContentClass.col3__item__atext}>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s
                                                {/* , when an unknown printer took a galley of type and scrambled it
                                                 to make a type specimen book. */}
                                            </Typography>
                                            <Typography className={myContentClass.col3__item__btext + " Description"} >
                                                35 minute agos
                                            </Typography>
                                        </ListItem>
                                        <ListItem className={myContentClass.grid__col3__item}>
                                            <Typography className={"Post_Title2" + " " + myContentClass.col3__item__atext}>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s
                                                {/* , when an unknown printer took a galley of type and scrambled it
                                                 to make a type specimen book. */}
                                            </Typography>
                                            <Typography className={myContentClass.col3__item__btext + " Description"} >
                                                35 minute agos
                                            </Typography>
                                        </ListItem>
                                        <ListItem className={myContentClass.grid__col3__item}>
                                            <Typography className={"Post_Title2" + " " + myContentClass.col3__item__atext}>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s
                                                {/* , when an unknown printer took a galley of type and scrambled it
                                                 to make a type specimen book. */}
                                            </Typography>
                                            <Typography className={myContentClass.col3__item__btext + " Description"} >
                                                35 minute agos
                                            </Typography>
                                        </ListItem>
                                        <ListItem className={myContentClass.grid__col3__item}>
                                            <Typography className={"Post_Title2" + " " + myContentClass.col3__item__atext}>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s
                                                {/* , when an unknown printer took a galley of type and scrambled it
                                                 to make a type specimen book. */}
                                            </Typography>
                                            <Typography className={myContentClass.col3__item__btext + " Description"} >
                                                35 minute agos
                                            </Typography>
                                        </ListItem>
                                        <ListItem className={myContentClass.grid__col3__item}>
                                            <Typography className={"Post_Title2" + " " + myContentClass.col3__item__atext}>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s
                                                {/* , when an unknown printer took a galley of type and scrambled it
                                                 to make a type specimen book. */}
                                            </Typography>
                                            <Typography className={myContentClass.col3__item__btext + " Description"} >
                                                35 minute agos
                                            </Typography>
                                        </ListItem>
                                        <ListItem className={myContentClass.grid__col3__item}>
                                            <Typography className={"Post_Title2" + " " + myContentClass.col3__item__atext}>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s
                                                {/* , when an unknown printer took a galley of type and scrambled it
                                                 to make a type specimen book. */}
                                            </Typography>
                                            <Typography className={myContentClass.col3__item__btext + " Description"} >
                                                35 minute agos
                                            </Typography>
                                        </ListItem>
                                        <ListItem className={myContentClass.grid__col3__item}>
                                            <Typography className={"Post_Title2" + " " + myContentClass.col3__item__atext}>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s
                                                {/* , when an unknown printer took a galley of type and scrambled it
                                                 to make a type specimen book. */}
                                            </Typography>
                                            <Typography className={myContentClass.col3__item__btext + " Description"} >
                                                35 minute agos
                                            </Typography>
                                        </ListItem>
                                        <ListItem className={myContentClass.grid__col3__item}>
                                            <Typography className={"Post_Title2" + " " + myContentClass.col3__item__atext}>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s
                                                {/* , when an unknown printer took a galley of type and scrambled it
                                                 to make a type specimen book. */}
                                            </Typography>
                                            <Typography className={myContentClass.col3__item__btext + " Description"} >
                                                35 minute agos
                                            </Typography>
                                        </ListItem>
                                        <ListItem className={myContentClass.grid__col3__item}>
                                            <Typography className={"Post_Title2" + " " + myContentClass.col3__item__atext}>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s
                                                {/* , when an unknown printer took a galley of type and scrambled it
                                                 to make a type specimen book. */}
                                            </Typography>
                                            <Typography className={myContentClass.col3__item__btext + " Description"} >
                                                35 minute agos
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
