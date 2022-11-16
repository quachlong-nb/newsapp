// nextjs
import { useRouter } from 'next/router'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from './Header.js'
import GridContainer from "../Grid/GridContainer.js";
import GridItem from '../Grid/GridItem.js'
import Button from "../CustomButtons/Button.js";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../styles/styles";
//icon
import icon__home from 'assets/svg/icon__home.svg';
import icon__home__active from 'assets/svg/icon__home__active.svg';
import search from 'assets/svg/search.svg';
import user from 'assets/svg/user.svg';
import { Grid, Icon } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
//use style 
const useStyles = makeStyles(presentationStyle);
// image
import gg from '../../assets/img/googleplay.png';
import as from '../../assets/img/appstore.png';
function MyHeader(props) {
    console.log(props.type)
    // custom styles component
    const classes = useStyles();
    const myHeaderClass = styles.useMyHeaderStyles();
    const MyPopUpStyles = styles.useMyPopStyles();
    //state
    const [searchVal, setSearchVal] = useState("");
    //router
    const router = useRouter();
    //effect
    useEffect(() => {
        console.log(searchVal);
    }, [searchVal])
    // handle catgories select
    function handleHeaderCatgoriesClick(src) {
        router.push(src);
    }
    function handleDownloadAppClick() {
        props.handleOpenForm();
    }
    //Bấm vào icon tìm kiếm sẽ mở lên ô nhập
    function handleSearchButtonClick() {
        let inputSearch = document.querySelector('.' + myHeaderClass.header__input__search);
        inputSearch.style.display = inputSearch.style.display == "block" ? "none" : "block";
        //Khi ô nhập bật lên thì focus luôn vào input nếu không sẽ không dùng được onBlur
        inputSearch.querySelector('input').focus();
    }
    // Người dùng click ra khỏi input thì tắt form search
    function handleBlurInput() {
        let inputSearch = document.querySelector('.' + myHeaderClass.header__input__search);
        inputSearch.style.display = "none"
    }
    // Người dùng dừng nhập khoảng 1s mới thực hiện setValueSearch
    var typingTimer;
    function hanldeKeyUpInput() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, 1000);
    }
    function handleKeyDownInput() {
        clearTimeout(typingTimer);
    }
    function doneTyping() {
        let inputSearch = document.querySelector('.' + myHeaderClass.header__input__search);
        setSearchVal(inputSearch.querySelector('input').value);
    }
    return (
        <Header
            fixed
            brand="AHVSA"
            links={
                <div style={{ width: "100%" }}>
                    <GridContainer>
                        {/*line above */}
                        <GridItem >
                            <List className={classes.list + " " + classes.mlAuto + " " + myHeaderClass.list}>
                                <ListItem className={myHeaderClass.listItem}>
                                    <Button
                                        className={myHeaderClass.button + " " + myHeaderClass.btn__login}
                                        onClick={e => e.preventDefault()}
                                        color="transparent"
                                    >
                                        <img src={user} className={myHeaderClass.icon__circle__user} />
                                        <span style={{ textTransform: 'none' }}>Đăng nhập</span>
                                    </Button>
                                </ListItem>
                                <ListItem className={myHeaderClass.listItem} 
                                    style={{
                                        marginRight: "10px"
                                    }}
                                >
                                    <Button
                                        className={
                                            myHeaderClass.button + " " +
                                            myHeaderClass.button__dowload
                                        }
                                        color="transparent"
                                        onClick={handleDownloadAppClick}
                                    >
                                        <div style={{ height: '16px' }}>
                                            <img width="18px" height="18px" src={gg} />
                                            <span>Google Play</span>
                                        </div>
                                    </Button>
                                </ListItem>
                                <ListItem className={myHeaderClass.listItem}>
                                    <Button
                                        className={
                                            myHeaderClass.button + " " +
                                            myHeaderClass.button__dowload
                                        }
                                        color="transparent"
                                        onClick={handleDownloadAppClick}
                                    >
                                        <div style={{ height: '16px' }}>
                                            <img width="18px" height="18px" src={as} />
                                            <span>App Store</span>
                                        </div>
                                    </Button>
                                </ListItem>
                            </List>
                        </GridItem>
                        {/*line below */}
                        <GridItem className={
                            myHeaderClass.gridItemBelow
                        }>
                            <List className={classes.list + " " + classes.mlAuto + " " + myHeaderClass.list}>
                                <ListItem className={myHeaderClass.listItem + " svg__btn__bottom--hover"}>
                                    <Button
                                        className={
                                            myHeaderClass.button + " " +
                                            myHeaderClass.button__bottom + " " +
                                            myHeaderClass.header__btn__home +
                                            ((props.type == "trangchu") ? " btn_bottom_active" : "")
                                        }
                                        onClick={() => { handleHeaderCatgoriesClick('/trangchu') }}
                                        color="transparent"
                                    >
                                        <img className={myHeaderClass.header__icon__home + " svg__btn__bottom--hover"} src={((props.type == "trangchu") ? icon__home__active : icon__home)} />
                                        
                                    </Button>
                                </ListItem>
                                <ListItem className={myHeaderClass.listItem}>
                                    <Button

                                        className={
                                            "header__btn__bottom--hover " +
                                            myHeaderClass.button + " " +
                                            myHeaderClass.button__bottom +
                                            ((props.type == "tintuc") ? " btn_bottom_active" : "")
                                        }
                                        color="transparent"
                                        onClick={() => { handleHeaderCatgoriesClick('/tintuc') }}
                                    >
                                        tin tức
                                    </Button>
                                </ListItem>
                                <ListItem className={myHeaderClass.listItem}>
                                    <Button
                                        className={
                                            "header__btn__bottom--hover " +
                                            myHeaderClass.button + " " +
                                            myHeaderClass.button__bottom +
                                            ((props.type == "wyckoff") ? " btn_bottom_active" : "")
                                        }
                                        color="transparent"
                                        onClick={() => { handleHeaderCatgoriesClick('/wyckoff') }}
                                    >
                                        Wyckoff
                                    </Button>
                                </ListItem>
                                <ListItem className={myHeaderClass.listItem}>
                                    <Button

                                        className={
                                            "header__btn__bottom--hover " +
                                            myHeaderClass.button + " " +
                                            myHeaderClass.button__bottom + " " +
                                            ((props.type == "lichkinhte") ? " btn_bottom_active" : "")
                                        }
                                        onClick={() => { handleHeaderCatgoriesClick('/lichkinhte') }}
                                        color="transparent"
                                    >
                                        Lịch kinh tế
                                    </Button>
                                </ListItem>
                                <ListItem className={myHeaderClass.listItem}>
                                    <Button
                                        className={
                                            "header__btn__bottom--hover " +
                                            myHeaderClass.button + " " +
                                            myHeaderClass.button__bottom + " " +
                                            ((props.type == "phantichthitruong") ? " btn_bottom_active" : "")
                                        }
                                        onClick={() => { handleHeaderCatgoriesClick('/phantichthitruong') }}
                                        color="transparent"

                                    >
                                        Phân tích thị trường
                                    </Button>
                                </ListItem>
                                <ListItem className={myHeaderClass.listItem}>
                                    <Button

                                        className={
                                            "header__btn__bottom--hover " +
                                            myHeaderClass.button + " " +
                                            myHeaderClass.button__bottom + " " +
                                            ((props.type == "daotao") ? " btn_bottom_active" : "")
                                        }
                                        onClick={() => { handleHeaderCatgoriesClick('/daotao') }}
                                        color="transparent"
                                    >
                                        Đào tạo
                                    </Button>
                                </ListItem>
                                <ListItem className={myHeaderClass.listItem}>
                                    <Button
                                        onClick={handleSearchButtonClick}
                                        className={
                                            myHeaderClass.button + " " +
                                            myHeaderClass.button__bottom + " " +
                                            myHeaderClass.button__bottom__search
                                        }
                                        color="transparent"
                                    >
                                        <img src={search} />
                                    </Button>
                                </ListItem>
                            </List>
                            <Grid item xs={12} className={myHeaderClass.header__input__search}>
                                <input onKeyUp={hanldeKeyUpInput} onKeyDown={handleKeyDownInput} onBlur={handleBlurInput} type={'search'} placeholder={"Nhập để tìm kiếm"} className={"shadow-4"} />
                                <List className={myHeaderClass.input__search__result + " list__lnews_scroll shadow-4"}>
                                    <ListItem className={myHeaderClass.search__result__item}>
                                        <a href="#" className={myHeaderClass.search__result__inner}>
                                            <div> Result 1</div>
                                            <div>Description</div>
                                        </a>
                                    </ListItem>
                                    <ListItem className={myHeaderClass.search__result__item}>
                                        <a href="#" className={myHeaderClass.search__result__inner}>
                                            <div> Result 1</div>
                                            <div>Description</div>
                                        </a>
                                    </ListItem>
                                    <ListItem className={myHeaderClass.search__result__item}>
                                        <a href="#" className={myHeaderClass.search__result__inner}>
                                            <div> Result 1</div>
                                            <div>Description</div>
                                        </a>
                                    </ListItem>
                                    <ListItem className={myHeaderClass.search__result__item}>
                                        <a href="#" className={myHeaderClass.search__result__inner}>
                                            <div> Result 1</div>
                                            <div>Description</div>
                                        </a>
                                    </ListItem>
                                    <ListItem className={myHeaderClass.search__result__item}>
                                        <a href="#" className={myHeaderClass.search__result__inner}>
                                            <div> Result 1</div>
                                            <div>Description</div>
                                        </a>
                                    </ListItem>
                                </List>
                            </Grid>
                        </GridItem>
                    </GridContainer>
                </div>
            }
        ></Header>
    );
}

export default MyHeader;