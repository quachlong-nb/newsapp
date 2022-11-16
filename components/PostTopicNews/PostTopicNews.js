//nextjs
// import Image from 'next/image';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//core components
import CardBody from "components/Card/CardBody.js";
//my component
import ItemNew from "../ItemNew/ItemNew";
import TableData from "components/TableData/TableData";
import EconomicNews from "../EconomicNews/EconomicNews";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../styles/styles"
import { Box, Button, Card, Grid, Typography } from "@material-ui/core";
//img
import img1 from "assets/img/news_col1.jpeg";
import img2 from "assets/img/news_col2.jpeg";
// svg (icon)
import dot from "assets/svg/dot.svg"
import dot_active from "assets/svg/dot_active.svg"
import { useEffect, useState } from "react";
//use style 
const useStyles = makeStyles(presentationStyle);
function PostTopicNews() {
    const [dotSelect, setDotSelect] = useState(0);
    const [listDot, setListDot] = useState(["dot_active","dot","dot"]);
    // init component
    useEffect(() => {
        let listDotNew = [];
        for (let i = 0; i < 3; i++) {
            if (i == dotSelect) {
                listDotNew.push("dot_active")
            } else {
                listDotNew.push("dot")
            }
        }
        setListDot(listDotNew);
        //animations
        const posTopic = "-"+(parseInt(dotSelect)*1212) + "px";
        document.querySelector(".list__topic").style["transform"] = "translateX("+(posTopic)+")";
    }, [dotSelect])
    // custom styles component
    const classes = useStyles();
    const myContentClass = styles.useMyContentStyles();
    // custtom styles New Page
    const myNewPageClass = styles.useMyNewPageStyles();
    // handle Click
    function handleBtnTopicClick(index) {
        setDotSelect(index);
        
    }
    return (
        <>
            <Grid item xs={12} className={myNewPageClass.title__p__topic + " Big_Title"} style={{ fontWeight: 'bold', color: '#004E8C' }}>
                Bài viết theo chủ đề
            </Grid>
            <Grid item xs={12} style={{ overflow: "hidden" }}>
                <Box className={" list__topic"}>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box
                        style={
                            {
                                width: '202px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid #D9D9D9',
                            }
                        }
                        className={"item__topic"}
                    >
                        <Card style={
                            {
                                width: "100%",
                                position: 'relative',
                                boxShadow: 'none',
                                background: 'transparent',
                            }
                        }>
                            <img
                                style={{ width: "182px", height: '182px' }}
                                className={classes.imgCardTop}
                                src={img1}
                            />
                            <CardBody style={{ padding: '10px 0px 3px 0px' }}>
                                <p className={"Post_Title2 " + myContentClass.lt_2_lines} style={{ fontWeight: '450' }}>
                                    Học chơi Forex CFD với tài khoản dùng thử miễn phí
                                </p>
                                <p className={"Description"} style={{ marginBottom: '-7px' }}>
                                    IC Markets
                                </p>
                            </CardBody>
                        </Card>
                    </Box>

                </Box>
            </Grid>
            <Grid item className={" list__dot__topic"} xs={12} style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '40px 0px'}}>
                    {
                        listDot.map((btn,index) => {
                            if (btn == "dot")
                                return (
                                    <button key={index} onClick={() => { handleBtnTopicClick(index) }} className={"btn__dot__topic"} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0px 15px 0px 0px' }}>
                                        <img width="15" height="15" src={dot} />
                                    </button>
                                )
                            return (
                                <button key={index} onClick={() => { handleBtnTopicClick(index) }} className={"btn__dot__topic"} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0px 15px 0px 0px' }}>
                                     <img width="15" height="15" src={dot_active} />
                                </button>
                            )
                                
                        })
                    }
                </Grid>
        </>
    );
}

export default PostTopicNews;