import Footer from "../Footer/Footer";
import MyHeader from "../Header/MyHeader";
import Head from 'next/head';
import Popup from "../_Popup/Popup";
import icon from "../../assets/img/icon.ico";
import { useState } from "react";

function Page(props) {
    function handleHeaderCatgoriesClick(src) {
        router.push(src);
    }
    
    const [isOpenPopUp,setOpenPopUp] = useState(false);
    function handleOpenForm(){
        setOpenPopUp(true);
    }

    function handleCloseForm(){
        setOpenPopUp(false);
    }
    return (
        <div style={{ background: 'white' }}>
            <Head>
                <title>AKVSA</title>
                <link rel="shortcut icon" href={icon} />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
            </Head>
            <div style={{ background: 'white', position: 'relative' }}>
                <MyHeader handleHeaderCatgoriesClick={handleHeaderCatgoriesClick} 
                            handleOpenForm={handleOpenForm} type={props.title} />
                {props.children}
                <Popup isOpenPopUp={isOpenPopUp} handleCloseForm={handleCloseForm}  />
            </div>
            <Footer handleOpenForm={handleOpenForm}  />
        </div>
    );
}

export default Page;