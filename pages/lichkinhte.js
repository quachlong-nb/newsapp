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
import { Box, Card, Grid } from "@material-ui/core";
import CardBody from "../components/Card/CardBody";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../styles/styles";
//img
import img1 from "assets/img/wyckoff.jpeg";
//svg
import svg_clock from "assets/svg/Vector.svg"
//use style 
const useStyles = makeStyles(presentationStyle);
function EconomicCenlandar() {
    // custom styles component
    const router = useRouter();
    const classes = useStyles();
    const myContentClass = styles.useMyContentStyles();

    function handleHeaderCatgoriesClick(src) {
        router.push(src);
    }
    return (
        <Page title="lichkinhte">
            {/* content homepage */}
            <div style={{ width: "1200px", marginTop: "95px", marginLeft: "auto", marginRight: "auto", minHeight: "100px" }}>
                {/* Tiêu đề trang  */}
                <TitlePage title="Lịch kinh tế" />
                <SectionSelect
                    type="type__grey"
                    sections={["Hôm qua", "Hôm nay", "Ngày mai", "Tuần này"]}
                    indexSelect={1} // 0,1,2,3,...sections.length    
                />
                <Grid container style={{ borderBottom: '2px solid #CACACA', marginBottom: '20px', paddingBottom: '20px' }}>
                    <Grid item xs={12} style={{ padding: '0px' }}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box style={{ display: 'flex', alignItems: 'center', margin: '15px 0px' }}>
                                    <img
                                        src={svg_clock}
                                        style={{ paddingRight: '10px' }}
                                    />
                                    <span className={" Detail"}>
                                        Current time 10:03 A.M (GMS + 7)
                                    </span>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} >
                            {/* Left  */}
                            <Grid item xs={9}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <TableData
                                            tblHead={
                                                [<div className={"tile"}>Giờ</div>,
                                                <div className={"tile"}>Hiện tại</div>,
                                                <div className={"tile"}>Mức độ</div>,
                                                <div className={"tile"}>Sự kiện</div>,
                                                <div className={"tile"}>Thực tế</div>,
                                                <div className={"tile"}>Dự báo</div>,
                                                <div className={"tile"}>Trước</div>]
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/* Right */}
                            <Grid item xs={3}>
                                <div className={"Type_Title "} style={{ color: "#004E8C", textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '20px' }}>
                                    phân tích thị trường
                                </div>
                                <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', marginBottom: '20px' }}>
                                    <img
                                        style={{ width: "100%", height: '185px' }}
                                        className={classes.imgCardTop}
                                        src={img1}
                                    />
                                    <CardBody style={{ padding: '10px 0px 0px 0px' }}>
                                        <p className={"Post_Title1 " + myContentClass.lt_3_lines} style={{ fontWeight: 'bold' }}>
                                            Stocks in this key market are outperforming the S&P 500 — and it’s not where you
                                            Stocks in this key market are outperforming the S&P 500 — and it’s not where you
                                        </p>
                                        <p className={"Description"} style={{ marginBottom: '0px', fontWeight: '400' }}>
                                            Alex Harring - 2 hour ago
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', marginBottom: '20px' }}>
                                    <img
                                        style={{ width: "100%", height: '185px' }}
                                        className={classes.imgCardTop}
                                        src={img1}
                                    />
                                    <CardBody style={{ padding: '10px 0px 0px 0px' }}>
                                        <p className={"Post_Title1 " + myContentClass.lt_3_lines} style={{ fontWeight: 'bold' }}>
                                            Stocks in this key market are outperforming the S&P 500 — and it’s not where you
                                            Stocks in this key market are outperforming the S&P 500 — and it’s not where you
                                        </p>
                                        <p className={"Description"} style={{ marginBottom: '0px', fontWeight: '400' }}>
                                            Alex Harring - 2 hour ago
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card style={{ width: "100%", position: 'relative', boxShadow: 'none', marginBottom: '20px' }}>
                                    <img
                                        style={{ width: "100%", height: '185px' }}
                                        className={classes.imgCardTop}
                                        src={img1}
                                    />
                                    <CardBody style={{ padding: '10px 0px 0px 0px' }}>
                                        <p className={"Post_Title1 " + myContentClass.lt_3_lines} style={{ fontWeight: 'bold' }}>
                                            Stocks in this key market are outperforming the S&P 500 — and it’s not where you
                                            Stocks in this key market are outperforming the S&P 500 — and it’s not where you
                                        </p>
                                        <p className={"Description"} style={{ marginBottom: '0px', fontWeight: '400' }}>
                                            Alex Harring - 2 hour ago
                                        </p>
                                    </CardBody>
                                </Card>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Tin chính trị mới */}
                <Grid container spacing={2} style={{ width: '100%', boxSizing: 'content-box' }}>
                    <Grid item xs={12} className={"Big_Title"} style={{ fontWeight: 'bold', color: '#004E8C', marginLeft: '-8px' }}>
                        Tin chính trị mới
                    </Grid>
                    <ViewNews type={"lichkinhte"} />
                    <Adds type={"verhical"} page={"lichkinhte"} />
                </Grid>

            </div>
        </Page>
    );
}

export default EconomicCenlandar;