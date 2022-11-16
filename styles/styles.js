import header from "./header_styles";
import content from "./content_styles";
import popup from "./popup";
import newspage from "./newpage/newpage_style";
import market_analytics_style from "./marketing_anlyticspage/market_analytics_style";
import global from "./global";
import daotao from "./daotao_page/daotao_styles";
import { makeStyles } from "@material-ui/core/styles";

//style page
const useMyHeaderStyles = makeStyles(header);
const useMyContentStyles = makeStyles(content);
const useMyNewPageStyles = makeStyles(newspage);
const useMyMarketingAnalyticStyle = makeStyles(market_analytics_style);
const useMyPopStyles= makeStyles(popup);
const useMyGlobalStyles = makeStyles(global);
const useMyTrainningStyles = makeStyles(daotao);

const styles = {
    useMyHeaderStyles : useMyHeaderStyles,
    useMyContentStyles : useMyContentStyles,
    useMyNewPageStyles : useMyNewPageStyles,
    useMyMarketPageStyles : useMyMarketingAnalyticStyle,
    useMyPopStyles : useMyPopStyles,
    useMyGlobalStyles : useMyGlobalStyles,
    useMyTrainningStyles : useMyTrainningStyles,
}
//export useStyles
export default styles;