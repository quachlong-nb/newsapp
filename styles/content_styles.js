const heigtTitle__col3 = 24;
const heightList__news = 440 - heigtTitle__col3;
const content_style = {
    // global
    mybtn: {
        background: '#FFFFFF',
        color: '#034A82',
        fontSize: '16px',
        padding: '2px 12px',
        border: '1px solid #034A82',
        '&:hover': {
            background: '#FFFFFF',
            color: '#034A82'
        }
        
    },
    // news catgories style 
    grid__col3: {
        height: "440px",
        width: '100%',
        borderLeft: '1px solid #ABABAB',
        padding: '0px !important'
    },
    grid__col3__scroll: {
        overflowY: 'auto',
        height: heightList__news + "px"
    },
    grid__col3__flex: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    grid__col3__inner: {

    },
    grid__col3__title: {
        margin: '0px',
        padding: '0px 0px 0px 10px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#004E8C',
        textTransform: 'uppercase'
    },
    grid__col3__list: {
        padding: '0px'
    },
    grid__col3__item: {
        padding: '10px 10px 0px 10px',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
    },
    col3__item__atext: {
        color: '#4E4E4E'
    },
    col3__item__btext: {
        color: '#AFAFAF',
        paddingBottom: '10px',
        width: '100%',
        textAlign: 'end',
        borderBottom: '2px dotted #AFAFAF'
    },
    // wyckoff catgories style
    // economic style
    lt_2_lines : {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 2, /* number of lines to show */
        WebkitBoxOrient: "vertical",
    },
    lt_3_lines : {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 3, /* number of lines to show */
        WebkitBoxOrient: "vertical",
    },
    // Maketing Analystic
    market__cat__active : {
        borderBottom: '2px solid #FFA726'
    },
    //Class/trainning
    btn__viewm__class: {
        background: '#034A82',
        color: '#FFFFFF',
        fontSize: '16px',
        padding: '2px 12px',
        '&:hover': {
            background: '#034A82',
            color: '#FFFFFF'
        },
        marginBottom: '20px',
        width: '50%',
        position:'relative',
        left: '50%'
    }
}

export default content_style;