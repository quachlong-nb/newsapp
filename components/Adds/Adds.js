import { Grid } from "@material-ui/core";
//img
import img1 from "assets/img/adds1.jpg";
import img2 from "assets/img/adds2.jpg";
function getAdds(type, page) {
    if (type == "horizontal") {
        return (
            <Grid item xs={12} style={{ margin: '20px 0px', display: 'flex', justifyContent: 'center' }}>
                <img src={img2} style={{ width: '80%', height: '278px' }} />
            </Grid>
        )
    }
    // ở trang nào?
    if (page == "lichkinhte") {
        return (
            <Grid item xs={3}>
                {/* adds - large */}
                <img src={img1} style={{ width: '100%', height: '400px' }} />
            </Grid>
        )
    }
    return (
        <Grid item xs={3}>
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
                // Theo chiều ngang-dọc, theo trang

                getAdds(props.type, props.page)
            }
        </>
    );
}

export default Adds;