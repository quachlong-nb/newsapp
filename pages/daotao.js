// nodejs library that concatenates classes
import classNames from "classnames";
// nextjs
import { useRouter } from 'next/router';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// my component
import MyHeader from "components/Header/MyHeader.js";
import ViewNews from "../components/ViewNews/ViewNews";
import Adds from "../components/Adds/Adds";
import TableData from "components/TableData/TableData";
import Page from "../components/_Page/Page";
import Footer from "components/Footer/Footer.js";
import TitlePage from "../components/_componentsTitlePage/TitlePage";
import SectionSelect from "../components/SectionSelect/SectionSelect";
import { Box, Card, Grid, Typography } from "@material-ui/core";
import CardBody from "../components/Card/CardBody";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../styles/styles";
//img
import img1 from "assets/img/new_daotao.jpg";
import img2 from "assets/img/water.jpg";
//svg
import svg_clock from "assets/svg/Vector.svg"
import comment from "assets/svg/comment.svg";
import like from "assets/svg/like.svg";
import reply from "assets/svg/reply.svg";
import send from "assets/svg/send.svg";
import smile from "assets/svg/smile.svg";
import user from "assets/svg/user.svg"
import InteractiveBar from "../components/InteractiveBar/InteractiveBar";
import MyButton from "../components/Button/Button";
//use style 
const useStyles = makeStyles(presentationStyle);
function ClassTrainning() {
    // custom styles component
    const router = useRouter();
    const classes = useStyles();
    const myContentClass = styles.useMyContentStyles();
    const myTrainningClass = styles.useMyTrainningStyles();
    const myMarketStyles = styles.useMyMarketPageStyles();

    function handleHeaderCatgoriesClick(src) {
        router.push(src);
    }
    return (
            <Page title="daotao">
                {/* content homepage */}
                <div style={{ width: "1200px", marginTop: "95px", marginLeft: "auto", marginRight: "auto", minHeight: "100px" }}>
                    {/* Ti??u ????? trang  */}
                    <TitlePage title="????o t???o" />
                    <Grid item xs={12} className={"Big_Title"} style={{ fontWeight: 'bold', color: '#004E8C', padding: '0px 0px 40px 10px' }}>
                        Lastest video
                    </Grid>
                    {/* B??i vi???t ch??nh + c??c b??i vi???t ph??? */}
                    <Grid container spacing={3} style={{ borderBottom: '2px solid #CACACA', marginBottom: '20px', paddingBottom: '20px' }}>
                        {/* B??i vi???t ch??nh */}
                        <Grid item xs={9}>
                            <img src={img1} style={{ width: '100%' }} />
                            {/* T????ng t??c  */}
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <InteractiveBar
                                    type="hozirontal"
                                    page="daotao_t1"
                                />
                                <InteractiveBar
                                    type="hozirontal"
                                    page="daotao_t2"
                                />
                            </div>
                            {/* Ti??u ????? b??i vi???t  */}
                            <h1 className={"Big_Title " + myTrainningClass.title__post} >Jan. 6 committee votes to subpoena Trump</h1>
                            <div className={"Detail"} style={{ marginTop: '10px' }}>
                                The January 6th Committee closed out its grand finale with an extraordinary and historic move: an unanimous vote to subpoena none other than former President Trump himself. CNBC???s Shepard Smith reports on more details on the Committee???s 9th public hearing.
                            </div>
                            {/* t??c gi??? */}
                            <Grid item xs={12}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0px', borderBottom: '2px solid #CACACA' }}>
                                    <Box style={{ width: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img src={user} width="18px" height="18px" />
                                            <span className={"tile"} style={{ paddingLeft: '10px', fontWeight: 'bold' }}>Mark Zurkerbeg</span>
                                        </div>
                                    </Box>
                                    <span className={"Post_Title1"} style={{ width: '800px', textAlign: 'right', marginRight: '10px', fontWeight: '400' }}>Th??? b???y, 15/10/2022, 5:56 PM ( GMT + 7 )</span>
                                </div>
                            </Grid>
                            {/* B??nh lu???n  */}
                            <div>
                                <Typography
                                    className={"content " + myMarketStyles.article__item}
                                    style={{
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: '20px 0px',
                                        fontWeight: 'bold',
                                        color: '#004E8C'
                                    }}
                                >
                                    <img src={comment} style={{ width: '22px', height: '22px', marginRight: '5px' }} />
                                    B??nh lu???n
                                </Typography>
                                {/* N??t nh???p b??nh lu???n
                                    padding b??n ph???i input nh???p = ????? r???ng c???a icon m???t c?????i + 10px
                                */}
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <div style={{ position: 'relative', width: 'calc(100% - 35px)' }}>
                                        <input style={{
                                            padding: '10px 35px 10px 15px',
                                            borderRadius: '5px',
                                            border: '2px solid #CACACA',
                                            width: '100%',
                                            fontStyle: 'italic',
                                            fontSize: '20px'
                                        }}
                                            placeholder="????ng nh???p ????? b??nh lu???n..."
                                        ></input>
                                        <img src={smile} style={{
                                            width: '25px',
                                            height: '25px',
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px'
                                        }} />
                                    </div>
                                    <img src={send} style={{
                                        width: '35px',
                                        height: '31px',
                                        marginLeft: '10px',
                                        cursor: 'pointer'
                                    }} />
                                </div>
                                {/* B??nh lu???n  */}
                                <div className={myMarketStyles.interactive__cmt + " " +
                                    myTrainningClass.interactive__cmt + " " +
                                    "trainning__post__comment"
                                }>
                                    {/* Hi???n th??? b??nh lu???n ch??nh*/}
                                    <div >
                                        <div style={{ display: 'flex' }}>
                                            <img src={user} style={{ width: '28px', height: '28px' }} />
                                            <div style={{ marginLeft: '15px' }}>
                                                <div className={"Post_Title1"} style={{ fontWeight: 'bold' }}>Tran Ha Bac</div>
                                                <div className={"Detail"}>The aim is for the ???agricultural emissions-pricing system??? to come into force in 2025. A consultation looking at how levies are set, transition assistance and sequestration ??? which the document defines as ???the process of removing carbon dioxide.</div>
                                                <div className={"Description " + myMarketStyles.interactive__comment}
                                                    style={{ display: 'flex', color: '#9C9C9C' }}>
                                                    <span color="#000000" className={myMarketStyles.interactive__cmt__icon}>
                                                        <img src={like} style={{ width: '18px', height: '18px' }} />
                                                        17
                                                    </span>
                                                    <span className={myMarketStyles.interactive__cmt__icon}>
                                                        Tr??? l???i
                                                    </span>
                                                    <span className={myMarketStyles.interactive__cmt__icon}>
                                                        Chia s???
                                                    </span>
                                                    <span className={myMarketStyles.interactive__cmt__icon}>
                                                        6h tr?????c
                                                    </span>
                                                </div>
                                                <div className={"Description " + myMarketStyles.interactive__cmt__icon}
                                                    color="#9C9C9C"
                                                >
                                                    <img src={reply} style={{ width: '10px', height: '10px' }} />
                                                    <span>1 tr??? l???i</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Hi???n th??? b??nh lu???n ph??? c?? th??m class: myMarketStyles.interactive__comment_rep*/}
                                    <div className={myMarketStyles.interactive__comment_rep}>
                                        <div style={{ display: 'flex' }}>
                                            <img src={user} style={{ width: '28px', height: '28px' }} />
                                            <div style={{ marginLeft: '15px' }}>
                                                <div className={"Post_Title1"} style={{ fontWeight: 'bold' }}>Tran Ha Bac</div>
                                                <div className={"Detail"}>The aim is for the ???agricultural emissions-pricing system??? to come into force in 2025. A consultation looking at how levies are set, transition assistance and sequestration ??? which the document defines as ???the process of removing carbon dioxide.</div>
                                                <div className={"Description " + myMarketStyles.interactive__comment}
                                                    style={{ display: 'flex', color: '#9C9C9C' }}>
                                                    <span color="#000000" className={myMarketStyles.interactive__cmt__icon}>
                                                        <img src={like} style={{ width: '18px', height: '18px' }} />
                                                        17
                                                    </span>
                                                    <span>
                                                        Tr??? l???i
                                                    </span>
                                                    <span>
                                                        Chia s???
                                                    </span>
                                                    <span>
                                                        6h tr?????c
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={myMarketStyles.interactive__comment_rep}>
                                        <div style={{ display: 'flex' }}>
                                            <img src={user} style={{ width: '28px', height: '28px' }} />
                                            <div style={{ marginLeft: '15px' }}>
                                                <div className={"Post_Title1"} style={{ fontWeight: 'bold' }}>Tran Ha Bac</div>
                                                <div className={"Detail"}>The aim is for the ???agricultural emissions-pricing system??? to come into force in 2025. A consultation looking at how levies are set, transition assistance and sequestration ??? which the document defines as ???the process of removing carbon dioxide.</div>
                                                <div className={"Description " + myMarketStyles.interactive__comment}
                                                    style={{ display: 'flex', color: '#9C9C9C' }}>
                                                    <span color="#000000" className={myMarketStyles.interactive__cmt__icon}>
                                                        <img src={like} style={{ width: '18px', height: '18px' }} />
                                                        17
                                                    </span>
                                                    <span>
                                                        Tr??? l???i
                                                    </span>
                                                    <span>
                                                        Chia s???
                                                    </span>
                                                    <span>
                                                        6h tr?????c
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={myMarketStyles.interactive__comment_rep}>
                                        <div style={{ display: 'flex' }}>
                                            <img src={user} style={{ width: '28px', height: '28px' }} />
                                            <div style={{ marginLeft: '15px' }}>
                                                <div className={"Post_Title1"} style={{ fontWeight: 'bold' }}>Tran Ha Bac</div>
                                                <div className={"Detail"}>The aim is for the ???agricultural emissions-pricing system??? to come into force in 2025. A consultation looking at how levies are set, transition assistance and sequestration ??? which the document defines as ???the process of removing carbon dioxide.</div>
                                                <div className={"Description " + myMarketStyles.interactive__comment}
                                                    style={{ display: 'flex', color: '#9C9C9C' }}>
                                                    <span color="#000000" className={myMarketStyles.interactive__cmt__icon}>
                                                        <img src={like} style={{ width: '18px', height: '18px' }} />
                                                        17
                                                    </span>
                                                    <span>
                                                        Tr??? l???i
                                                    </span>
                                                    <span>
                                                        Chia s???
                                                    </span>
                                                    <span>
                                                        6h tr?????c
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* Danh s??ch tags b??i vi???t */}
                                <div className={"Detail " + myMarketStyles.tags__detail}>
                                    Tags:
                                    <a href="#">Economic</a>
                                    <a href="#">Economic</a>
                                    <a href="#">Economic</a>
                                    <a href="#">Economic</a>
                                    <a href="#">Economic</a>
                                    <a href="#">Economic</a>
                                    <a href="#">Economic</a>
                                </div>
                            </div>
                        </Grid>
                        {/* B??i vi???t ph??? */}
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', marginBottom: '20px' }}>
                                <img
                                    style={{ width: "100%", }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 0px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_3_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"} style={{ marginBottom: '0px', fontWeight: '400' }}>
                                        Alex Harring - 2 hour ago
                                    </p>
                                </CardBody>
                            </Card>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', marginBottom: '20px' }}>
                                <img
                                    style={{ width: "100%", }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 0px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_3_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"} style={{ marginBottom: '0px', fontWeight: '400' }}>
                                        Alex Harring - 2 hour ago
                                    </p>
                                </CardBody>
                            </Card>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', marginBottom: '20px' }}>
                                <img
                                    style={{ width: "100%", }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 0px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_3_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"} style={{ marginBottom: '0px', fontWeight: '400' }}>
                                        Alex Harring - 2 hour ago
                                    </p>
                                </CardBody>
                            </Card>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', marginBottom: '20px' }}>
                                <img
                                    style={{ width: "100%", }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 0px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_3_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"} style={{ marginBottom: '0px', fontWeight: '400' }}>
                                        Alex Harring - 2 hour ago
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                    </Grid>
                    {/* H?????ng d???n cho ng?????i m???i b???t ?????u */}
                    <Grid container spacing={2} style={{ borderBottom: '2px solid #CACACA', marginBottom: '20px', paddingBottom: '20px' }}>
                        <Grid item xs={12} className={"Big_Title"} style={{ fontWeight: 'bold', color: '#004E8C', padding: '30px 0px' }}>
                            H?????ng d???n cho ng?????i m???i b???t ?????u
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                <img
                                    style={{ width: "100%", height: 'auto' }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"}>
                                        Christina Falso - 2 gi??? tr?????c
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                <img
                                    style={{ width: "100%", height: 'auto' }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"}>
                                        Christina Falso - 2 gi??? tr?????c
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                <img
                                    style={{ width: "100%", height: 'auto' }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"}>
                                        Christina Falso - 2 gi??? tr?????c
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                <img
                                    style={{ width: "100%", height: 'auto' }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"}>
                                        Christina Falso - 2 gi??? tr?????c
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'end' }}>
                            <MyButton title="Xem th??m >>" />
                        </Grid>
                    </Grid>
                    {/* H?????ng d???n cho ng?????i m???i b???t ?????u */}
                    <Grid container spacing={2} style={{ marginBottom: '20px', paddingBottom: '20px' }}>
                        <SectionSelect 
                            sections={["Trainning","Type 1","Type 2","Type 3"]}
                            indexSelect={1}
                        />
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                <img
                                    style={{ width: "100%", height: 'auto' }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"}>
                                        Christina Falso - 2 gi??? tr?????c
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                <img
                                    style={{ width: "100%", height: 'auto' }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"}>
                                        Christina Falso - 2 gi??? tr?????c
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                <img
                                    style={{ width: "100%", height: 'auto' }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"}>
                                        Christina Falso - 2 gi??? tr?????c
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                <img
                                    style={{ width: "100%", height: 'auto' }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"}>
                                        Christina Falso - 2 gi??? tr?????c
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                <img
                                    style={{ width: "100%", height: 'auto' }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"}>
                                        Christina Falso - 2 gi??? tr?????c
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                <img
                                    style={{ width: "100%", height: 'auto' }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"}>
                                        Christina Falso - 2 gi??? tr?????c
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                <img
                                    style={{ width: "100%", height: 'auto' }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"}>
                                        Christina Falso - 2 gi??? tr?????c
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', background: 'transparent' }}>
                                <img
                                    style={{ width: "100%", height: 'auto' }}
                                    className={classes.imgCardTop}
                                    src={img2}
                                />
                                <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                    <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: 'bold' }}>
                                        Could the Middle East run out of water? How the UAE gets around the problem
                                    </p>
                                    <p className={"Description"}>
                                        Christina Falso - 2 gi??? tr?????c
                                    </p>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'end' }}>
                            <MyButton title="Xem th??m >>" />
                        </Grid>
                    </Grid>
                </div>
            </Page>
    );
}

export default ClassTrainning;