// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//core components
import { Grid } from "@material-ui/core";
//my component
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../styles/styles"
//use style 
function TitlePage(props) {
    const myGlobalClass = styles.useMyGlobalStyles();
    return (
        <>
            <Grid item xs={12} className={myGlobalClass.titlePage}>
                <div className={myGlobalClass.titlePageContainer}>
                    <h2 className={"Big_Title " + myGlobalClass.titlePageText} >
                        {props.title ? props.title : "Title Page" }
                    </h2>
                </div>
            </Grid>
        </>
    );
}

export default TitlePage;