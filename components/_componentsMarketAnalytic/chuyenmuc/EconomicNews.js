//nextjs
// import Image from 'next/image';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//core components
import CardBody from "components/Card/CardBody.js";
//my component
import ItemNew from "../../ItemNew/ItemNew";
import TableData from "components/TableData/TableData";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../../styles/styles"
import { Box, Button, Card, Grid, Typography } from "@material-ui/core";
import MyButton from "../../Button/Button";
import MyCards from "../../Card/MyCard";
// img
import featured_articles from "assets/img/featured_articles.jpg";
function EconomicNews(props) {
    // custtom styles New Page
    const myNewPageClass = styles.useMyNewPageStyles();
    return (
        <Grid container>
            {/* left  */}
            <Grid item xs={8}>
                <Grid container>
                    <Grid item xs={12} className={"Big_Title"} style={{ fontWeight: 'bold', color: '#004E8C' }}>
                        Bài viết theo chủ đề
                    </Grid>
                    <List>
                        <ListItem style={{padding : '8px 0px'}}>
                            <ItemNew type={props.type} />
                        </ListItem>
                        <ListItem style={{padding : '8px 0px'}}>
                            <ItemNew type={props.type} />
                        </ListItem>
                        <ListItem style={{padding : '8px 0px'}}>
                            <ItemNew type={props.type} />
                        </ListItem>
                    </List>
                    {/* btn view detail  */}
                    <Grid item className={myNewPageClass.box__vd__economic} xs={12} style={{minHeight: '40px' ,marginTop: '10px',marginRight: '16px' }}>
                        <Box className={myNewPageClass.btn__vd__economic}>
                            <MyButton title="xem thêm >>" />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {/* right  */}
            <Grid item xs={4}>
                <Grid item xs={12} style={{ padding: '0px' }}>
                    {/* title - economic celendar */}
                    <Grid item xs={12}>
                        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography className={"Big_Title"}
                                style={{
                                    color: '#004E8C',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    width: '100%'
                                }}
                            >
                                Bài viết nổi bật
                            </Typography>
                        </Box>
                    </Grid>
                    {/* List item */}
                    <Grid item xs={12}>
                        <MyCards
                            type="card_market_featured_articles"
                            imgsrc={featured_articles}
                            pHead={"UK’s Royal Mail reveals plans to cut up to 6,000 jobs "}
                            pDescription={"Mark Zuckerberg - 2 giờ trước"}
                        />
                        <MyCards
                            type="card_market_featured_articles"
                            pHead={"UK’s Royal Mail reveals plans to cut up to 6,000 jobs "}
                            pDescription={"Mark Zuckerberg - 2 giờ trước"}
                        />
                        <MyCards
                            type="card_market_featured_articles"
                            pHead={"UK’s Royal Mail reveals plans to cut up to 6,000 jobs "}
                            pDescription={"Mark Zuckerberg - 2 giờ trước"}
                        />
                        <MyCards
                            type="card_market_featured_articles"
                            pHead={"UK’s Royal Mail reveals plans to cut up to 6,000 jobs "}
                            pDescription={"Mark Zuckerberg - 2 giờ trước"}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default EconomicNews;