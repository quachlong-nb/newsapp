
const style = {
    body : {
        color : "red"
    },
    box__vd__economic : {
        position: 'relative'
    },
    btn__vd__economic : {
        position: 'absolute',
        right: '0',
        top: '0',
        marginBottom: '20px'
    },
    //list item post
    title__p__topic : {
        marginBottom: '10px'
    },
    list__post: {
        marginBottom: '10px'
    },
    list__news: {
        '& li:first-child' : {
            paddingTop: '0px'
        }
    },
    '@global' : {
        // add paragraph 1
        '.list__topic' : {
            display: 'flex',
            width: 'calc(100% - 10px)',
            position: 'relative',
            transition: 'transform 0.2s ease-in-out'
        },
        '.list__topic .item__topic:last-child' : {
            borderRight: '0px !important'
        },
        // 'ul li:first-child' : {
        //     paddingTop: '0px',
        //     paddingLeft: '0px'
        // }
    }
}

export default style;