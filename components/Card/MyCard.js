import { Card, makeStyles } from "@material-ui/core";
import CardBody from "components/Card/CardBody.js";
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
//img 
import img1 from "assets/img/aw_snap.jpg";
//style
const useStyles = makeStyles(presentationStyle);
import styles from "../../styles/styles";
function MyCards(props) {
    const classes = useStyles();
    const myContentClass = styles.useMyContentStyles();
    if (props.type == "card_banner") {
        return (
            <Card style={{ width: "100%", position: 'relative' }}>
                <img
                    style={{ width: "100%", height: '440px', display: "block" }}
                    className={classes.imgCardTop}
                    src={props.imgsrc ? props.imgsrc : img1}
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
                        {
                            props.pHead ? props.pHead :
                                "China is no longer just any emerging market - It has become its own beast"
                        }
                    </p>
                    <p style={{ fontSize: '14px', color: 'white', marginBottom: '5px' }}>
                        {
                            props.pDescription ? props.pDescription :
                                `BEIJING — China is no longer just another emerging market play. Now, the country is
                            becoming its own beast — with all the risks and rewards that come with being a world power.`
                        }
                    </p>
                </CardBody>
            </Card>
        )
    }
    if (props.type == "card_banner_post") {
        return (
            <Card style={{ width: "90%", marginLeft: 'auto', marginRight: 'auto', marginBottom: '30px', boxShadow: 'none', border: 'none' }}>
                <img
                    style={{ width: "100%", height: '440px', display: "block" }}
                    className={classes.imgCardTop}
                    src={props.imgsrc ? props.imgsrc : img1}
                />
                <CardBody style={{ padding: '0px' }}>
                    <p className="Picture_Detail" style={{ lineHeight: '1.2', fontWeight: 'bold', color: 'black', margin: '5px 0px 0px 0px' }}>
                        {
                            props.pHead ? props.pHead :
                                "China is no longer just any emerging market - It has become its own beast"
                        }
                    </p>
                    <p className="Description" style={{ lineHeight: '1.2', fontSize: '14px', color: 'black', margin: '5px 0px 0px 0px' }}>
                        {
                            props.pDescription ? props.pDescription :
                                `BEIJING — China is no longer just another emerging market play. Now, the country is
                            becoming its own beast — with all the risks and rewards that come with being a world power.`
                        }
                    </p>
                </CardBody>
            </Card>
        )
    }
    if (props.type == "card_sub") {
        return (
            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                <img
                    style={{ width: "100%", height: 'auto' }}
                    className={classes.imgCardTop}
                    src={props.imgsrc ? props.imgsrc : img1}
                />
                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                    <p className={
                        `Post_Title2 lt_${props.lt ? props.lt : 2}_lines`
                    } style={{ margin: '0px', fontWeight: 'bold' }}>
                        {
                            props.pHead ? props.pHead :
                                'The British pound traded 1.5% higher at $1.1269 during afternoon deals in London, before paring gains on robust U.S. inflation data.'
                        }
                    </p>
                    <p className={"Description " + myContentClass.lt_2_lines}>
                        {
                            props.pDescription ? props.pDescription :
                                'Karol Serewis - October 14, 2022'
                        }
                    </p>
                </CardBody>
            </Card>
        )
    }
    if (props.type == "card_market_featured_articles") {
        return (
            <Card style={{ width: "100%",boxShadow: 'none',borderRadius: '0px' }}>
                {
                    (
                        function () {
                            if (props.imgsrc) {
                                return (
                                    <img
                                        style={{ width: "372px", height: '250px', display: "block",margin: '17px' }}
                                        className={classes.imgCardTop}
                                        src={props.imgsrc}
                                    />
                                )
                            }
                        }
                    )()
                }
                <CardBody
                    style={{padding: '0px',margin: '0px 17px'}}
                >
                    <p className={"Post_Title3 "}
                        style={{ fontSize: '24px', lineHeight: '1.1em', fontWeight: 'bold', color: '#000000', marginBottom: '4px' }}>
                        {
                            props.pHead ? 
                            props.pHead :
                            ""
                        }
                    </p>
                    <p  
                        className={"Description "}
                        style={{borderBottom: '2px solid #D9D9D9',paddingBottom: '17px'}}
                    >
                        {
                            props.pDescription ? 
                            props.pDescription :
                            ""
                        }
                    </p>
                </CardBody>
            </Card>
        );
    }
    return (
        <Card style={{ width: "100%", position: 'relative' }}>
            <img
                style={{ width: "100%", height: '440px', display: "block" }}
                className={classes.imgCardTop}
                src={props.imgsrc ? props.imgsrc : img1}
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
    );
}

export default MyCards;