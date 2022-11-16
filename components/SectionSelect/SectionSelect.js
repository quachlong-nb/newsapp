// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//core components
import { Grid, Button } from "@material-ui/core";
//my component
//style 
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import styles from "../../styles/styles"
//use style 
const useStyles = makeStyles(presentationStyle);
function SectionSelect(props) {
    const myContentClass = styles.useMyContentStyles();
    const myGlobalClass = styles.useMyGlobalStyles();
    if (props.type == "type__grey")
        return (
            <Grid item xs={12} className={myGlobalClass.sectionSelect}>
                {
                    props.sections.map((section, index) => {
                        return (
                            <span key={index} className={myGlobalClass.sectionSelectCell}>
                                <span>
                                    <Button
                                        className={"Big_Title btn__cat__market " + myGlobalClass.sectionSelectButton}
                                        style={{ padding: (index == 0) ? "5px 28px 5px 0px" : "" }}
                                    >
                                        <span className={(props.indexSelect == index ? myGlobalClass.sectionAvtive : "") + myGlobalClass.sectionTextGrey + " Post_Title1"}>
                                            {section}
                                        </span>
                                    </Button>
                                </span>
                                {index != props.sections.length - 1 ?
                                    <span className={"devider-v-2 devider__market-22 " + myGlobalClass.sectionDevider} />
                                    : ""
                                }
                            </span>
                        )
                    })
                }
            </Grid>
        );
    return (
        <Grid item xs={12} className={myGlobalClass.sectionSelect}>
            {/* <span>
                <Button className={"Big_Title btn__cat__market " + myGlobalClass.sectionSelectButton} style={{ padding: '5px 28px 5px 0px' }}>
                    <span>
                        Forex
                    </span>
                </Button>
            </span>
            <span className={"devider-v-2 devider__market-22"} />
            <span>
                <Button className={"Big_Title btn__cat__market " + myGlobalClass.sectionSelectButton}>
                    <span className={myContentClass.market__cat__active}>
                        Stocke
                    </span>
                </Button>
            </span>
            <span className={"devider-v-2 devider__market-22"} />
            <span>
                <Button className={"Big_Title btn__cat__market " + myGlobalClass.sectionSelectButton} >
                    <span >
                        Gypto
                    </span>
                </Button>
            </span> */}

            {
                props.sections.map((section, index) => {
                    return (
                        <span key={index} className={myGlobalClass.sectionSelectCell}>
                            <Button 
                                className={"Big_Title btn__cat__market " + myGlobalClass.sectionSelectButton}
                                style={{ padding: (index==0 ? '5px 28px 5px 0px' : "") }}
                            >
                                <span className={(index == props.indexSelect)? myContentClass.market__cat__active : ""}
                                >
                                    {section}
                                </span>
                            </Button>
                            {(index != props.sections.length-1) ? <span className={"devider-v-2 devider__market-22"} /> : ""}
                        </span>
                    )
                })
            }
        </Grid>
    );
}

export default SectionSelect;