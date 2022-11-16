// @material-ui/core components
// core components
// my component
import NewsCatgories from "components/NewsCatgories/NewsCatgories.js";
import EconomicCelendar from "components/EconomicCelendar/EconomicCelendar";
import MarketAnalytics from "components/MarketAnalytics/MarketAnalytics";
import WyckoffCatgories from "../components/WyckoffCatgories/WyckoffCatgories";
import ClassTrainning from "../components/ClassTrainning/ClassTrainning";
import Page from "../components/_Page/Page";
function HomePage() {
    return (
        <Page title="trangchu">
            {/* content homepage */}
            <div style={{ width: "1200px", marginTop: "100px", marginLeft: "auto", marginRight: "auto", minHeight: "100px" }}>
                <NewsCatgories />
                <WyckoffCatgories />
                <EconomicCelendar />
                <MarketAnalytics />
                <ClassTrainning />
            </div>
        </Page>
    );
}

export default HomePage;