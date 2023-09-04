import theme from "../../theme";


export const mainStyles = {
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.purple,
        justifyContent:"center"
    },

    image: {
        marginTop: "10%",
    },
    contentWrapper: {
        width: "100%",
        alignItems: "center",
        marginBottom: 15
    },
    title: {
        width: "55%",
        fontFamily: theme.fonts.playfairDisplayBlack,
        color: theme.colors.black,
        textTransform: "capitalize",
        fontSize: 30,
        lineHeight: 40,
        marginBottom: 20,
        textAlign: "center",
        justifyContent: "center",
    },
    subtitle: {
        minWidth:"80%",
        height: "30%",
        fontFamily: theme.fonts.latoRegular,
        lineHeight: 20,
        fontSize: 16,
        textTransform: "capitalize",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    },
}
