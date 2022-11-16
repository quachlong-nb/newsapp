const global = {
    //title page
    titlePage: {
        padding: '50px 0px 0px 0px',
        marginBottom: '10px'
    },
    titlePageContainer: {
        width: '100%',
        borderBottom: '1px solid #CACACA',
        marginBottom: '30px'
    },
    titlePageText: {
        textTransform: 'uppercase',
        color: '#004E8C',
        margin: '0px auto 30px auto',
        fontWeight: 'bold',
        width: 'fit-content',
    },
    // SectionSelect
    sectionSelect: {
        display: 'flex',
        alignItems: 'center'
    },
    sectionSelectButton : {
        color: '#004E8C', 
        padding: '5px 28px', 
        textTransform: 'none',
    },
    sectionSelectCell : {
        display: 'flex',
        alignItems: 'center'
    },
    sectionAvtive : {
        borderBottom: 'none',
        fontWeight: 'bold'
    },
    sectionTextGrey : {
        color: '#9B9B9B',
        fontWeight: '400'
    },
    sectionDevider : {
        background : '#9B9B9B'
    },
    //Interactive bar
    // t1 :  type="hozirontal" page="daotao_t1"
    interactive__bar_t1: {
        display: 'flex',
        width: 'fit-content',
        justifyContent: 'space-around',
        margin: '20px 0px',
        '& img': {
            width: '18px',
            marginRight: '5px'
        },
        '& div' : {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            marginRight: '10px'
        }
    },
    interactive___img__sub_t1 : {
        textAlign: 'center',
    },
    // default :  type="hozirontal" page="daotao_t2"
    interactive__bar: {
        display: 'flex',
        width: 'fit-content',
        justifyContent: 'space-around',
        margin: '20px 0px',
        '& img': {
            width: '30px',
            marginRight: '5px'
        },
        '& div' : {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            marginRight: '10px'
        }
    },
    interactive___img__sub : {
        textAlign: 'center',
    }
}

export default global;