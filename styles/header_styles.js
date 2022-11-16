const header_style = {
    list: {
        width: '100%',
        display: 'flex',
        justifyContent: 'end'
    },
    listItem: {
        width: 'auto',
        justifyContent: 'end',
        padding: 0
    },
    button: {
        margin: '0px',
        textTransform: 'uppercase',
        color: '#3A3A3A'
    },
    button__dowload: {
        padding: "4px 10px 6px 10px !important",
        background: "#D9D9D9 !important",
        fontSize: '12px !important',
        color: "#3A3A3A !important",
        borderRadius: "5px !important",
        textTransform: 'none !important',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        '& img': {
            marginBottom : '1px',
            marginRight: '5px'
        },
        '&:hover,&:active,&:visited,&:link': {
            background: "#D9D9D9 !important",
            color: "#3A3A3A !important"
        }
    },
    gridItemBelow: {
        position: 'relative'
    },
    gridContainer: {
        width: "100%"
    },
    btn__login: {
        textTransform: 'capitalize !important',
        fontSize: '13px !important',
        display: 'flex !important',
        alignItem: 'center !important'
    },
    icon__btn: {
        fontSize: "18px !important"
    },
    header__icon: {
        fontSize: '20px',
        color: '#0A04FA'
    },
    button__bottom: {
        position: 'relative !important',
        padding: "8px 10px !important",
        fontWeight: "bold !important",
        fontSize: "16px !important",
        margin: '0px !important'
    },
    header__btn__home: {
        paddingTop: "13px!important",
        paddingBottom: "13px!important"
    },
    header__icon__home: {
        width: '21px !important',
        height: '21px !important',
        marginRight: '0px !important'
    },
    button__bottom__search: {
        paddingTop: '4px !important',
        marginLeft: '100px !important'
    },
    icon__circle__user: {
        width: '23px !important',
        height: '23px !important',
        paddingRight: '5px'
    },
    header__input__search: {
        display: 'none',
        zIndex: '1500',
        position: 'absolute',
        top: '56%',
        right: '30px',
        '& input': {
            fontSize: '15px',
            width: '500px',
            padding: '16px',
            border: '1px solid #ABABAB',
            borderRadius: '5px',
            fontWeight: 'bold'
        }
    },
    input__search__result: {
        display: 'none',
        position: 'absolute',
        top: '120%',
        width: '100%',
        height: '208px',
        overflow: 'hidden',
        overflowY: 'auto',
        background: 'white',
        border: '1px solid #ABABAB',
        borderRadius: '5px',
    },
    search__result__item: {
        fontSize: '12px',
        cursor: 'pointer',
        paddingTop: '0'
    },
    search__result__inner: {
        width: '100%',
        borderBottom: '1px solid #C0C0C0',
        color: 'black',
        '&:hover,&:active,&:link,&:visited': {
            color: 'black',
        },
        '& div:first-child': {
            fontWeight: 'bold'
        },
        '& div': {
            lineHeight: '14px',
            paddingBottom: '6px'
        }
    }
}

export default header_style;