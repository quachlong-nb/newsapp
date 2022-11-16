import { Grid, Typography } from '@material-ui/core';
import img from 'assets/img/newpage.png';
function ItemNew(props) {
    return ( 
        <>
            <Grid container style={{padding: '20px 0px',borderBottom: '1px solid #D9D9D9'}}>
                <Grid item xs={4} >
                    <img src={img} style={{width : "100%",height: '100%'}} />
                </Grid>
                <Grid item xs={8} >
                    <div style={{paddingLeft: '20px'}}>
                        <h2 className={"Post_Title3"} style={{fontWeight: (((props.type != 'postByTopic')? "bold" : "400")),marginTop: '0px'}}>Pro Picks: Watch all of Thursday’s big stock calls on CNBC</h2>
                        <div className={"Description"}>Stocks staged a massive comeback Thursday, with the Dow Jones Industrial Average surging 1,500 points from its lows to the highest level, as traders shook off another hot inflation report.</div>
                        <div className={"Description"}>Christina Falso - 2 giờ trước</div>
                    </div>
                </Grid>
            </Grid>
        </>
     );
}

export default ItemNew;