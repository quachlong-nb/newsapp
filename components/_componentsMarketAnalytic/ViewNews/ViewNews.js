// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//my component
import ItemNew from "../ItemNew/ItemNew";
//img
import img1 from 'assets/img/viewnew.jpeg'
//style 
import styles from "../../styles/styles"
import { Box, Button, Grid } from "@material-ui/core";
import MyButton from "../Button/Button";
import MyCards from "../Card/MyCard";
function ViewNews() {
    // custtom styles New Page
    const myNewPageClass = styles.useMyNewPageStyles();
    return (
        <>
            {/* list item  */}
            <Grid item xs={9} style={{marginLeft: '-8px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <MyCards type="card_sub" imgsrc={img1} lt={3} />
                    </Grid>
                    <Grid item xs={4}>
                        <MyCards type="card_sub" imgsrc={img1} lt={3} />
                    </Grid>
                    <Grid item xs={4}>
                        <MyCards type="card_sub" imgsrc={img1} lt={3} />
                    </Grid>
                    <Grid item xs={4}>
                        <MyCards type="card_sub" imgsrc={img1} lt={3} />
                    </Grid>
                    <Grid item xs={4}>
                        <MyCards type="card_sub" imgsrc={img1} lt={3} />
                    </Grid>
                    <Grid item xs={4}>
                        <MyCards type="card_sub" imgsrc={img1} lt={3} />
                    </Grid>
                    <Grid item xs={4}>
                        <MyCards type="card_sub" imgsrc={img1} lt={3} />
                    </Grid>
                    <Grid item xs={4}>
                        <MyCards type="card_sub" imgsrc={img1} lt={3} />
                    </Grid>
                    <Grid item xs={4}>
                        <MyCards type="card_sub" imgsrc={img1} lt={3} />
                    </Grid>
                </Grid>
                {/* btn view detail  */}
                <Grid item xs={12} style={{ marginTop: '10px' }}>
                    <Box style={{height: '50px'}} className={myNewPageClass.box__vd__economic}>
                        <Box className={myNewPageClass.btn__vd__economic}>
                            <MyButton  title="xem chi tiết >>" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default ViewNews;