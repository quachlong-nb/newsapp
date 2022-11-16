import styles from "../../styles/styles";
import { Button } from "@material-ui/core";
function MyButton(props) {
    const myContentClass = styles.useMyContentStyles();
    if (props.type == "type1") {
        return (
            <Button className={myContentClass.mybtn}>
                {
                    props.title ?
                        props.title :
                        "Xem chi tiết"
                }
            </Button>
        );
    }

    // VD: Google Play footer
    if (props.type == "type2") {
        return (
            <Button className={myContentClass.mybtn}
                onClick={()=>props.clickEvent()}
                style={{
                    background: "rgba(255, 255, 255, 0.25)",
                    border: "1px solid #FFFFFF",
                    borderRadius: "5px",
                    ...props.style
                }
                }
            >
                {
                    props.children
                }
            </Button >
        );
    }
    return (
        <Button className={myContentClass.mybtn}>
            {
                props.title ?
                    props.title :
                    "Xem chi tiết"
            }
        </Button>
    );
}

export default MyButton;