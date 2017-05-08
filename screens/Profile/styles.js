import Colors from '../../constants/Colors';

export default {
    container: {
        flex: 1,
    },
    profile: {
        width: undefined,
        height: 200,
    },
    avatar: {
        position: 'absolute',
        top: 150,
        zIndex: 10,
        left: '33%',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: Colors.light,
        borderWidth: 2,
    },
    info: {
        borderTopWidth: 1,
        borderTopColor: Colors.light,
        backgroundColor: Colors.primary,
        flex: 1,
        zIndex: 1,
        paddingTop: 68,
    },
    name: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center'
    },
    form: {
        marginTop: 10,
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        height: 200,
        padding: 10,
    },
    formGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'nowrap',
        marginBottom: 20,
    },
    inputGroup: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '80%',
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.light,
    },
    icon: {
        color: Colors.light,
        paddingLeft: 5,
        paddingRight: 15,
    },
    label: {
        color: Colors.light,
        fontSize: 18,
    },
    input: {
        color: Colors.white,
        width: '100%',
        height: 30,
        fontSize: 16,
    },
    textArea: {
        color: Colors.white,
        width: '100%',
        height: 60,
        fontSize: 16,
    }
};
