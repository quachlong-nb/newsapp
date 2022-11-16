// nextjs
import { useRouter } from 'next/router';
// my component
import ContentMarketAnalytics from "components/_componentsMarketAnalytic/ContentMarketAnalytics.js";
//use style 
import Page from "../components/_Page/Page";

function MarketAnalytics() {
    // custom styles component
    const router = useRouter();
    return (
        <Page title="phantichthitruong">
            {/* content newpage */}
            <div style={{ width: "1200px", minHeight: '100px', marginTop: "95px", marginLeft: "auto", marginRight: "auto", minHeight: "100px" }}>
                <ContentMarketAnalytics>
                </ContentMarketAnalytics>
            </div>
        </Page>
    );
}

export default MarketAnalytics;