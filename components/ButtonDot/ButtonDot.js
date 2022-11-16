import dot from "assets/svg/dot.svg"
import dot_active from "assets/svg/dot_active.svg"
function ButtonDot(props) {
    return (
        <button key={props.key} onClick={(e) => handleBtnTopicClick(e)} className={"btn__dot__topic"} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '0px 15px 0px 0px' }}>
            <img width="15" height="15" src={dot_active} />
        </button>
    );
}

export default ButtonDot;