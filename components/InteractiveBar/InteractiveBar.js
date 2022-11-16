import like from 'assets/svg/like.svg'
import zalo from 'assets/svg/zalo.svg'
import comment_grey from 'assets/svg/comment_grey.svg'
import twitter_grey from 'assets/svg/twitter_grey.svg'
import fb_grey from 'assets/svg/fb_grey.svg'
import styles from '../../styles/styles'
function InteractiveBar(props) {
    const myMarketStyles = styles.useMyMarketPageStyles();
    const myGlobalStyles = styles.useMyGlobalStyles();
    if (props.type == "hozirontal" && props.page == "daotao_t1") {
        return (
            <div>
                <div
                    className={myGlobalStyles.interactive__bar_t1}
                >
                    <div>
                        <div className={"Description " + myGlobalStyles.interactive___img__sub_t1}>2.1k View</div>
                    </div>
                    <div>
                        <img src={like} />
                        <div className={"Description " + myGlobalStyles.interactive___img__sub_t1}>17</div>
                    </div>
                    <div>
                        <img src={comment_grey} />
                        <div className={"Description " + myGlobalStyles.interactive___img__sub_t1}>23</div>
                    </div>
                </div>
            </div>
        )
    }
    if (props.type == "hozirontal" && props.page == "daotao_t2") {
        return (
            <div>
                <div
                    className={myGlobalStyles.interactive__bar}
                >
                    <div>
                        <img src={zalo} />
                    </div>
                    <div>
                        <img src={fb_grey} />
                    </div>
                    <div>
                        <img src={twitter_grey} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div
            style={{
                position: 'fixed',
                top: '400px',
                zIndex: '99',
                width: '100px',
                height: '500px',
                background: 'transparent'
            }}>
            <div
                className={myMarketStyles.interactive__bar}
            >
                <div>
                    <img src={like} width="40px" />
                    <div className={"Description " + myMarketStyles.interactive___img__sub}>21</div>
                </div>
                <div>
                    <img src={zalo} />
                </div>
                <div>
                    <img src={comment_grey} />
                    <div className={"Description " + myMarketStyles.interactive___img__sub}>21</div>
                </div>
                <div>
                    <img src={fb_grey} />
                </div>
                <div>
                    <img src={twitter_grey} />
                </div>
            </div>
        </div>
    );
}

export default InteractiveBar;