// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//my component
import ItemNew from "../ItemNew/ItemNew";
//style 
import styles from "../../styles/styles"
import { Box, Button,Grid } from "@material-ui/core";
import MyButton from "../Button/Button";
function ViewNews() {
    // custtom styles New Page
    const myNewPageClass = styles.useMyNewPageStyles();
    return (
        <>
            {/* list item  */}
            <Grid item xs={8}>
                <List style={{ paddingTop: '0px' }} className={myNewPageClass.list__news}>
                    <ListItem >
                        <ItemNew style={{ paddingTop: '0px' }} />
                    </ListItem>
                    <ListItem>
                        <ItemNew />
                    </ListItem>
                    <ListItem>
                        <ItemNew />
                    </ListItem>
                    <ListItem>
                        {/* btn view detail  */}
                        <Grid item xs={12} className={myNewPageClass.box__vd__economic} style={{ marginTop: '10px' }}>
                            <Box className={myNewPageClass.btn__vd__economic}>
                                <MyButton title="xem chi tiết >>" />
                            </Box>
                        </Grid>
                    </ListItem>
                </List>
            </Grid>
        </>
    );
}

export default ViewNews;