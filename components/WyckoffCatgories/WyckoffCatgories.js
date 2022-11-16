// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import CardBody from "components/Card/CardBody.js";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../styles/styles"
import { Card, Grid, Typography } from "@material-ui/core";
//img
import img1 from "assets/img/wyckoff.jpeg";
//use style 
const useStyles = makeStyles(presentationStyle);
export default function WyckoffCatgories(props) {
    // custom styles component
    const classes = useStyles();
    const myContentClass = styles.useMyContentStyles();
    return (
        // {/* Content 
        //  - Wyckoff:
        //  + : 3 grid item, độ cao 1 rid fix cứng là 440px
        //     */}
        <Grid container spacing={2} style={{marginTop: '30px'}}>
            {/*(Line above) Title : Wyckoff */}
            <Grid item xs={12} style={{ padding: '0px', marginBottom: '10px' }}>
                <div style={{ width: '100%', borderBottom: '1px solid #ABABAB' }}>
                    <h2 style={{ fontSize: '20px', textTransform: 'uppercase', color: '#004E8C', margin: '0px', fontWeight: 'bold' }}>Wyckoff</h2>
                </div>
            </Grid>
            {/*(Line below) 3 column card Wyckoff */}
            <Grid item xs={12} style={{padding: '0px'}}>
                <Grid container spacing={2} >
                    <Grid item xs={4}>
                        <Card style={{ width: "100%", position: 'relative',boxShadow : 'none',background: 'transparent'}}>
                            <img
                                style={{ width: "100%",height: '250px'}}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{padding: '10px 0px 3px 0px'}}>
                                <p className={"Post_Title1"} style={{fontWeight: 'bold'}}>
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
                        <Card style={{ width: "100%", position: 'relative',boxShadow : 'none' }}>
                            <img
                                style={{ width: "100%",height: '250px'}}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{padding: '10px 0px 3px 0px'}}>
                                <p className={"Post_Title1"} style={{fontWeight: 'bold'}}>
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
                        <Card style={{ width: "100%", position: 'relative',boxShadow : 'none' }}>
                            <img
                                style={{ width: "100%",height: '250px'}}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{padding: '10px 0px 3px 0px'}}>
                                <p className={"Post_Title1"} style={{fontWeight: 'bold'}}>
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
        </Grid>
    );
}
