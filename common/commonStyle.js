import color from './color'
//Commonly used styles 
export default commonStyle = {

    normalButtonStyle: {
        borderColor: color.Black,
        borderRadius: 4,
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        borderWidth: 1,
    },
    selectedButtonStyle: {
        borderColor: color.AppColor,
        borderRadius: 4,
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        borderWidth: 1,
    },

    textStyleBlack: {
        color: color.Black, textAlign: 'center', fontSize: 14,
    },

    textStyleWhite: {
        color: color.White, textAlign: 'center', fontSize: 14,

    },

    buttonStyle: {
        backgroundColor: color.AppColor,
        borderRadius: 4,
        margin: 10,
        width: '90%',
        padding: 10,
        justifyContent: 'center',
    }
    ,

    buttonTextStyle: {
        color: color.White, textAlign: 'center', fontSize: 16,

    },
}