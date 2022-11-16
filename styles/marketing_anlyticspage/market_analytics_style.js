const market_analytics_style = {
    article__item: {
        marginBottom: '20px'
    },
    interactive__cmt: {
        backgroundColor: "rgb(217,217,217,0.2)",
        padding: '20px',
        borderRadius: '5px',
        "& > div": {
            marginBottom: '10px'
        }
    },
    interactive__comment: {
        "& span": {
            marginRight: '15px'
        }
    },
    interactive__cmt__icon: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '& img': {
            marginRight: '5px'
        }
    },
    interactive__comment_rep: {
        marginLeft: '90px',
        borderLeft: '2px solid #B0B0B0',
        paddingLeft: '10px',
        paddingTop: '2px',
    },
    tags__detail: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0px',
        '& a': {
            padding: '0px 10px',
            borderRadius: '10px',
            backgroundColor: '#CDCDCD',
            color: '#000000',
            marginLeft: '10px'
        }
    },
    //Interactive bar
    interactive__bar: {
        position: 'absolute',
        right: '170%',
        width: '30px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        '& img': {
            cursor: 'pointer'
        }
    },
    interactive___img__sub : {
        textAlign: 'center',
    }
}

export default market_analytics_style;