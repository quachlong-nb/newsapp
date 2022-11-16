import qr_android from 'assets/img/qr_android.png';
import qr_ios from 'assets/img/qr_ios.png';
import x from 'assets/svg/x.svg';

// core componet 
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogActions from "@material-ui/core/DialogActions";
//
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
// core components
import Button from "components/CustomButtons/Button.js";
//style
import styles from '../../styles/styles';
import javascriptStyles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/javascriptStyles.js";
const useStyles = makeStyles(javascriptStyles);
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
// img
import logopopup from '../../assets/img/logopopup.png'
import gg from '../../assets/img/googleplay.png';
import as from '../../assets/img/appstore.png';
Transition.displayName = "Transition";
import { Box } from '@material-ui/core';
//icon
import close from '../../assets/svg/close.svg'
// Ghi đè class MuiDialog-paper,MuiPaper-rounded ở app 
function Popup(props) {
    const classes = useStyles();
    const MyPopUpStyles = styles.useMyPopStyles();
    //
    return (
        <Dialog
            open={props.isOpenPopUp} //props.isOpenPopUp / true
            TransitionComponent={Transition}
            keepMounted
            onClose={() => props.handleCloseForm()}
            style={{
                minWidth: '625px !important',
            }}
            className="border-radius-50"
        >
            <Box
                style={{
                    // backgroundColor: 'red',
                    position: 'relative',
                    width: '100%',
                    height: '75vh',
                    minHeight: '75vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    padding: '30px 30px 10px 10px',
                    
                }}
            >
                <Box style={{
                    fontSize: '2.2em',
                    color: '#130063',
                    textAlign: 'center',
                    lineHeight: '33px',
                }}>Tải xuống app để đăng kí tài khoản ngay</Box>
                <Box style={{ display: 'flex', justifyItems: 'center', minHeight: '230px' }}>
                    <Box className={MyPopUpStyles.logopopup}>
                        <img width={"100%"} src={logopopup} />
                    </Box>
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '50%'
                        }}
                    >
                        <Button     //343 - 305
                            style={{
                                width: '24em',
                                backgroundColor: '#130063',
                                color: '#FFFFFF',
                                borderRadius: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px 35px',
                                cursor: 'pointer',

                            }}
                        >
                            <img src={gg} width={50} height={60} style={{ marginRight: '15px' }} />
                            <div>
                                <div className={MyPopUpStyles.buttonTextUp}>GET IT ON</div>
                                <div className={MyPopUpStyles.buttonTextDown}>GOOGLE PLAY</div>
                            </div>

                        </Button>
                        <Button
                            style={{
                                width: "21em",
                                backgroundColor: '#130063',
                                color: '#FFFFFF',
                                borderRadius: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px 35px',
                                cursor: 'pointer'
                            }}
                        >
                            <img src={as} width={50} style={{ marginRight: '15px' }} />
                            <div>
                                <div className={MyPopUpStyles.buttonTextUp}>GET IT ON</div>
                                <div className={MyPopUpStyles.buttonTextDown}>APP STORE</div>
                            </div>

                        </Button>

                    </Box>
                </Box>
                <Box width={"100%"} 
                style={{ 
                    position: 'absolute', 
                    right: '30px',
                    top: '30px'
                
                }}>
                    <Button
                        onClick={() => props.handleCloseForm()}
                        style={{
                            padding: '0px',
                            position: 'absolute',
                            right: '0px',
                            backgroundColor: 'transparent',
                            boxShadow: 'none'
                        }}
                    >
                        <img  src={close} height={20} />
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
}

export default Popup;