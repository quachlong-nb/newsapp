//nextjs
// import Image from 'next/image';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//core components
import CardBody from "components/Card/CardBody.js";
import { Grid, Card, Button, List, ListItem, Typography, Box, rgbToHex } from "@material-ui/core";
//my component
import EconomicNews from "./EconomicNews.js";
import PostTopicNews from "../../PostTopicNews/PostTopicNews";
import Adds from "../../Adds/Adds";
import ViewNews from "../ViewNews";
import MyCards from "../../Card/MyCard";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../../styles/styles"
//img
import img1 from "assets/img/phantichthitruong_banner.jpeg";
import user from "assets/svg/user.svg";
import comment from "assets/svg/comment.svg";
import send from "assets/svg/send.svg";
import reply from "assets/svg/reply.svg";
import like from "assets/svg/like.svg";
import smile from "assets/svg/smile.svg";
import imgadds1 from "assets/img/adds1.jpg";
import imgadds2 from "assets/img/adds2.jpg";
import post from "assets/img/post.jpeg";
//use style 
const useStyles = makeStyles(presentationStyle);
function ContentMarketAnalytics() {
    // custom styles component
    const classes = useStyles();
    const myContentClass = styles.useMyContentStyles();
    const myMarketStyles = styles.useMyMarketPageStyles();
    return (
        <Grid container style={{ paddingTop: '30px' }}>
            {/*(Group 1: ) Tiều đề : Phân tích thị trường/ Forex  */}
            <Grid item xs={9} style={{ padding: '0px', marginBottom: '10px' }}>
                <Grid item xs={12}>
                    <div style={{ width: 'fit-content' }}>
                        <h2 style={
                            {
                                textTransform: 'uppercase',
                                color: '#004E8C',
                                fontWeight: 'bold',
                                width: 'fit-content',
                            }}
                            className={"Type_Title "}
                        >
                            Phân tích thị trường / 	&nbsp;
                            <span
                                className={"Post_Title1"}
                                style={{ textTransform: 'none', fontWeight: 'lighter' }}
                            >
                                Forex
                            </span>
                        </h2>
                    </div>
                </Grid>
                {/* tiêu đề bài viết  */}
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#000000', lineHeight: '72px' }}>New Zealand plans to tax emissions from livestock burps and dung
                    </h1>
                </Grid>
                {/* tác giả + ngày tạo  */}
                <Grid item xs={12}>
                    <div style={{ display: 'flex', justifyContent: 'space-between',marginBottom: '30px' }}>
                        <Box style={{ width: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={user} width="18px" height="18px" />
                                <span style={{ paddingLeft: '10px', fontWeight: 'bold' }}>Mark Zurkerbeg</span>
                            </div>
                        </Box>
                        <span className={"Post_Title1"} style={{ width: '800px', textAlign: 'right', marginRight: '10px',fontWeight: '400' }}>Thứ bảy, 15/10/2022, 5:56 PM ( GMT + 7 )</span>
                    </div>
                </Grid>
                {/* Ảnh chính của bài viết  */}
                <MyCards
                    imgsrc={post}
                    type={"card_banner_post"}
                    pHead={"Cattle photographed in New Zealand. Agriculture plays a major role in New Zealand’s economy, especially when it comes to exports."}
                    pDescription={"Nguồn: David Clapp | Stone | Getty Images"}
                />
                {/* Chi tiết bài viết */}
                <div>
                    <Typography className={"content " + myMarketStyles.article__item}>
                        New Zealand plans to tax agricultural emissions — including those related to the burps, urine and dung from livestock like cows and sheep — in a move its government hopes will help the country meet climate change goals.
                    </Typography>
                    <Typography className={"content " + myMarketStyles.article__item}>
                        The aim is for the “agricultural emissions-pricing system” to come into force in 2025. A consultation looking at how levies are set, transition assistance and sequestration — which the document defines as “the process of removing carbon dioxide from the atmosphere” — was launched this week, and will run until Nov. 18.
                    </Typography>
                    <Typography className={"content " + myMarketStyles.article__item}>
                        The government said revenue from the levy would be “recycled back into [the] agriculture sector through new technology, research and incentive payments to farmers.”
                    </Typography>
                    <Typography className={"content " + myMarketStyles.article__item}>
                        The idea of introducing such a system by the middle of this decade was contained within an emissions reduction plan published in May 2022, as well as a recommendation published in June by the He Waka Eke Noa – Primary Sector Climate Action Partnership.
                    </Typography>
                    <Typography className={"content " + myMarketStyles.article__item}>
                        New Zealand plans to tax agricultural emissions — including those related to the burps, urine and dung from livestock like cows and sheep — in a move its government hopes will help the country meet climate change goals.
                    </Typography>
                    <Typography className={"content " + myMarketStyles.article__item}>
                        The aim is for the “agricultural emissions-pricing system” to come into force in 2025. A consultation looking at how levies are set, transition assistance and sequestration — which the document defines as “the process of removing carbon dioxide from the atmosphere” — was launched this week, and will run until Nov. 18.
                    </Typography>
                    <Typography className={"content " + myMarketStyles.article__item}>
                        The government said revenue from the levy would be “recycled back into [the] agriculture sector through new technology, research and incentive payments to farmers.”
                    </Typography>
                    <Typography className={"content " + myMarketStyles.article__item}>
                        The idea of introducing such a system by the middle of this decade was contained within an emissions reduction plan published in May 2022, as well as a recommendation published in June by the He Waka Eke Noa – Primary Sector Climate Action Partnership.
                    </Typography>
                    <MyCards
                        imgsrc={post}
                        type={"card_banner_post"}
                        pHead={"Cattle photographed in New Zealand. Agriculture plays a major role in New Zealand’s economy, especially when it comes to exports."}
                        pDescription={"Nguồn: David Clapp | Stone | Getty Images"}
                    />
                    <Typography className={"content " + myMarketStyles.article__item}>
                        New Zealand plans to tax agricultural emissions — including those related to the burps, urine and dung from livestock like cows and sheep — in a move its government hopes will help the country meet climate change goals.
                    </Typography>
                </div>
                {/* Nguồn  */}
                <Typography
                    className={"content " + myMarketStyles.article__item}
                    style={{
                        width: '100%',
                        textAlign: 'right',
                        borderBottom: '2px solid #D9D9D9',
                        paddingBottom: '5px'
                    }} >
                    Nguồn: <span>http//cbnc.com</span>
                </Typography>
                {/* Bình luận  */}
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
                        Bình luận
                    </Typography>
                    {/* Nút nhập bình luận
                        padding bên phải input nhập = độ rộng của icon mặt cười + 10px
                    */}
                    <div style={{ display: 'flex', alignItems: 'center',marginBottom: '10px' }}>
                        <div style={{ position: 'relative', width: 'calc(100% - 35px)' }}>
                            <input style={{
                                padding: '10px 35px 10px 15px',
                                borderRadius: '5px',
                                border: '2px solid #CACACA',
                                width: '100%',
                                fontStyle: 'italic',
                                fontSize: '20px'
                            }}
                                placeholder="Đăng nhập để bình luận..."
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
                    {/* Bình luận  */}
                    <div className={myMarketStyles.interactive__cmt}>
                        {/* Hiển thị bình luận chính*/}
                        <div >
                            <div style={{ display: 'flex' }}>
                                <img src={user} style={{ width: '28px', height: '28px' }} />
                                <div style={{ marginLeft: '15px' }}>
                                    <div className={"Post_Title1"} style={{ fontWeight: 'bold' }}>Tran Ha Bac</div>
                                    <div className={"Detail"}>The aim is for the “agricultural emissions-pricing system” to come into force in 2025. A consultation looking at how levies are set, transition assistance and sequestration — which the document defines as “the process of removing carbon dioxide.</div>
                                    <div className={"Description " + myMarketStyles.interactive__comment}
                                        style={{ display: 'flex', color: '#9C9C9C' }}>
                                        <span color="#000000" className={myMarketStyles.interactive__cmt__icon}>
                                            <img src={like} style={{ width: '18px', height: '18px' }} />
                                            17
                                        </span>
                                        <span>
                                            Trả lời
                                        </span>
                                        <span>
                                            Chia sẻ
                                        </span>
                                        <span>
                                            6h trước
                                        </span>
                                    </div>
                                    <div className={"Description " + myMarketStyles.interactive__cmt__icon}
                                        color="#9C9C9C"
                                    >
                                        <img src={reply} style={{ width: '10px', height: '10px' }} />
                                        <span>1 trả lời</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Hiển thị bình luận phụ có thêm class: myMarketStyles.interactive__comment_rep*/}
                        <div className={myMarketStyles.interactive__comment_rep}>
                            <div style={{ display: 'flex' }}>
                                <img src={user} style={{ width: '28px', height: '28px' }} />
                                <div style={{ marginLeft: '15px' }}>
                                    <div className={"Post_Title1"} style={{ fontWeight: 'bold' }}>Tran Ha Bac</div>
                                    <div className={"Detail"}>The aim is for the “agricultural emissions-pricing system” to come into force in 2025. A consultation looking at how levies are set, transition assistance and sequestration — which the document defines as “the process of removing carbon dioxide.</div>
                                    <div className={"Description " + myMarketStyles.interactive__comment}
                                        style={{ display: 'flex', color: '#9C9C9C' }}>
                                        <span color="#000000" className={myMarketStyles.interactive__cmt__icon}>
                                            <img src={like} style={{ width: '18px', height: '18px' }} />
                                            17
                                        </span>
                                        <span>
                                            Trả lời
                                        </span>
                                        <span>
                                            Chia sẻ
                                        </span>
                                        <span>
                                            6h trước
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
                                    <div className={"Detail"}>The aim is for the “agricultural emissions-pricing system” to come into force in 2025. A consultation looking at how levies are set, transition assistance and sequestration — which the document defines as “the process of removing carbon dioxide.</div>
                                    <div className={"Description " + myMarketStyles.interactive__comment}
                                        style={{ display: 'flex', color: '#9C9C9C' }}>
                                        <span color="#000000" className={myMarketStyles.interactive__cmt__icon}>
                                            <img src={like} style={{ width: '18px', height: '18px' }} />
                                            17
                                        </span>
                                        <span>
                                            Trả lời
                                        </span>
                                        <span>
                                            Chia sẻ
                                        </span>
                                        <span>
                                            6h trước
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
                                    <div className={"Detail"}>The aim is for the “agricultural emissions-pricing system” to come into force in 2025. A consultation looking at how levies are set, transition assistance and sequestration — which the document defines as “the process of removing carbon dioxide.</div>
                                    <div className={"Description " + myMarketStyles.interactive__comment}
                                        style={{ display: 'flex', color: '#9C9C9C' }}>
                                        <span color="#000000" className={myMarketStyles.interactive__cmt__icon}>
                                            <img src={like} style={{ width: '18px', height: '18px' }} />
                                            17
                                        </span>
                                        <span>
                                            Trả lời
                                        </span>
                                        <span>
                                            Chia sẻ
                                        </span>
                                        <span>
                                            6h trước
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Danh sách tags bài viết */}
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
            {/*Cột tin tức mới nhất*/}
            <Grid item xs={3}>
                <Grid item xs={12} className={myContentClass.grid__col3}>
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
            {/* Bài viết theo chủ đề */}
            <Grid item xs={12}>
                <EconomicNews type="postByTopic" title="Bài viết theo chủ đề" />
            </Grid>
        </Grid>
    )
}

export default ContentMarketAnalytics;