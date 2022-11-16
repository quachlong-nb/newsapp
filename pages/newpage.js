// nodejs library that concatenates classes
import classNames from "classnames";
// nextjs
import {useRouter} from 'next/router';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import CardBody from "components/Card/CardBody.js";
// my component
import MyHeader from "components/Header/MyHeader.js";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../styles/styles";
//icon fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// icon svg
import svg__fb from "assets/svg/fb.svg";
import svg__instagram from "assets/svg/instagram.svg";
import svg__twitter from "assets/svg/twitter.svg";
import svg__youtube from "assets/svg/youtube.svg";
//img
import logo__white from "assets/img/logo/logo__white.png";
import Footer from "../components/Footer/Footer";
import { Box, Grid } from "@material-ui/core";
import HeadingNews from "../components/_componentsNews/HeadingNews";

//use style 
const useStyles = makeStyles(presentationStyle);
function HomePage() {
    // custom styles component
    const classes = useStyles();
    const myHeaderClass = styles.useMyHeaderStyles();
    const myContentClass = styles.useMyContentStyles();
    const router = useRouter();
    function homepageOnClick(){
        router.push('/homepage')
    }
    return (
        <div style={{ background: 'white' }}>
            {/* header newpage */}
            <MyHeader homepageOnClick={homepageOnClick} type="newspage"/>
            {/* content newpage */}
            <div style={{ width: "1200px",minHeight: '100px', marginTop: "105px", marginLeft: "auto", marginRight: "auto", minHeight: "100px" }}>
                <HeadingNews>
                </HeadingNews>
            </div>
            {/* Footer */}
            <Footer/>
        </div >
    );
}

export default HomePage;