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
// my component
import NewsCatgories from "components/NewsCatgories/NewsCatgories.js";
import EconomicCelendar from "components/EconomicCelendar/EconomicCelendar";
import MarketAnalytics from "components/MarketAnalytics/MarketAnalytics";
import WyckoffCatgories from "../components/WyckoffCatgories/WyckoffCatgories";
import ClassTrainning from "../components/ClassTrainning/ClassTrainning";
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../styles/styles";
//icon fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
//img
import Footer from "components/Footer/Footer.js";
import MyHeader from "components/Header/MyHeader.js";

//use style 
const useStyles = makeStyles(presentationStyle);
function HomePage() {
    // custom styles component
    const router = useRouter();
    const classes = useStyles();
    const myHeaderClass = styles.useMyHeaderStyles();
    const myContentClass = styles.useMyContentStyles();

    function newsOnclick(){
        router.push('/newpage')
    }
    return (
        <div style={{ background: 'white' }}>
            {/* header homepage */}
            <MyHeader newsOnclick={newsOnclick} type='homepage'/>
            {/* content homepage */}
            <div style={{ width: "1200px", marginTop: "105px", marginLeft: "auto", marginRight: "auto", minHeight: "100px" }}>
                <NewsCatgories />
                <WyckoffCatgories />
                <EconomicCelendar />
                <MarketAnalytics />
                <ClassTrainning />
            </div>
            {/* Footer */}
            <Footer/>
        </div >
    );
}

export default HomePage;