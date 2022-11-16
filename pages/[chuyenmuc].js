// nextjs
import {useRouter} from 'next/router';
// my component
import MyHeader from "components/Header/MyHeader.js";
import ContentMarketAnalytics from "components/_componentsMarketAnalytic/chuyenmuc/ContentMarketAnalytics.js";
import InteractiveBar from "components/InteractiveBar/InteractiveBar.js";
// icon svg
//img
import Footer from "../components/Footer/Footer";
//use style 
function MarketAnalytics() {
    // custom styles component
    const router = useRouter();
    function handleHeaderCatgoriesClick(src){
        router.push(src)
    }
    return (
        <div style={{ background: 'white' }}>
            {/* header newpage */}
            <MyHeader handleHeaderCatgoriesClick={handleHeaderCatgoriesClick} type="phantichthitruong"/>
            {/* content newpage */}
            <div style={{ 
                width: "1200px",
                minHeight: '100px', 
                marginTop: "100px", 
                marginLeft: "auto", 
                marginRight: "auto", 
                minHeight: "100px",
                position: 'relative'
            }}>
                <InteractiveBar />
                <ContentMarketAnalytics>
                </ContentMarketAnalytics>
            </div>
            {/* Footer */}
            <Footer/>
        </div >
    );
}

export default MarketAnalytics;