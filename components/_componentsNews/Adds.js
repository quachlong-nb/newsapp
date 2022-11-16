import { Grid } from "@material-ui/core";
//img
import img1 from "assets/img/news_col1.jpeg";
function getAdds(type) {
    if (type == "horizontal") {
        return (
            <Grid item xs={12} style={{ margin: '20px 0px', display: 'flex', justifyContent: 'center' }}>
                <img src={img1} style={{ width: '80%', height: '278px' }} />
            </Grid>
        )
    }
    return (
        <Grid item xs={4}>
            {/* adds - small  */}
            <img src={img1} style={{ width: '100%' }} />
            {/* adds - large */}
            <img src={img1} style={{ width: '100%', height: '600px', marginTop: '10px' }} />
        </Grid>
    )
}
function Adds(props) {
    return (
        <>
            {
                getAdds(props.type)
            }
        </>
    );
}

export default Adds;