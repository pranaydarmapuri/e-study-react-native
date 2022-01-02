import useTheme from './useTheme'
import dimensions from '../constants/Layout'
import { StyleSheet } from 'react-native'



const useStyles = () => {

  const theme = useTheme()

  const rootPadding = theme.spacing(4)
  const iconSize = theme.spacing(12)

  const login = StyleSheet.create({
    form: {
      padding: rootPadding,
    },
    input: {
      marginHorizontal: theme.spacing(2),
      color: theme.color.text,
      marginVertical: theme.spacing(2),
      backgroundColor: theme.color.background.card,
      height: theme.spacing(12.5)
    },
    loginPaper: {
      maxHeight: 80 * dimensions.window.height / 100,
      backgroundColor: theme.color.background.card,
      borderTopLeftRadius: rootPadding,
      borderTopEndRadius: rootPadding
    },
    loginBtnContainer: {
      marginHorizontal: theme.spacing(2),
      backgroundColor: theme.color.secondary.default
    },
    modal: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
      flexDirection: 'column-reverse'
    },
    placeHolder: {
      color: theme.color.textFade(0.7)
    },
    title: {
      marginLeft: theme.spacing(2),
      color: theme.color.textFade(0.9),
      fontSize: theme.spacing(12),
      letterSpacing: theme.spacing(0.15),
      marginBottom: rootPadding,
      fontFamily: 'nunito-700'
    },
    checkbox: {
      color: theme.color.secondary.default,
      borderColor: theme.color.textFade(0.2)
    },
    checkboxLable: {
      color: theme.color.textFade(0.8),
      marginLeft: theme.spacing(0.5)
    }
  })

  const welcome = StyleSheet.create({
    root: {
      backgroundColor: theme.color.background.default,
      flex: 1,
      flexDirection: 'column-reverse',
    },
    container: {
      margin: rootPadding,
      paddingVertical: rootPadding * 3.5,
      paddingHorizontal: rootPadding * 1.15
    },
    logo: {
      alignSelf: 'center',
      height: theme.spacing(18.75),
      aspectRatio: 4.075203252,
      marginBottom: theme.spacing(7)
    },
    buttonContainer: {
      backgroundColor: theme.color.primary.default,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borderRadius,
      flexDirection: 'row'
    },
    buttonText: {
      color: theme.color.background.default,
      fontSize: theme.spacing(4.5),
      fontWeight: '700',
      letterSpacing: theme.spacing(0.1),
      marginVertical: theme.spacing(2),
      textTransform: 'capitalize'
    },
    icon: {
      color: theme.color.background.default,
      fontSize: theme.spacing(6.5),
      fontWeight: '700',
      marginLeft: theme.spacing(3)
    },
    caption: {
      textTransform: 'capitalize',
      color: theme.color.textFade(0.7),
      textAlign: 'center',
      fontSize: theme.spacing(5.5),
      marginBottom: theme.spacing(7)
    },
    link: {
      alignItems: 'center',
      marginTop: theme.spacing(7)
    },
    linkText: {
      textTransform: 'uppercase',
      fontSize: theme.spacing(4),
      textDecorationLine: 'underline'
    }
  })

  const styles = StyleSheet.create({
    classInfoCard: {
      flexDirection: 'row',
      backgroundColor: theme.color.background.card,
      padding: rootPadding / 1.5,
      borderRadius: theme.borderRadius,
      marginVertical: rootPadding / 1.75,
      alignItems: 'center'
    },
    classInfoCardBtnCont: {
      backgroundColor: theme.color.secondary.fade(0.2),
      borderWidth: theme.spacing(0.35),
      borderColor: theme.color.secondary.fade(0.25),
      paddingVertical: theme.spacing(3.15),
      paddingHorizontal: theme.spacing(3.25),
      borderRadius: theme.spacing(999),
      marginTop: theme.spacing(7.5),
      justifyContent: 'center', alignItems: 'center',
    },
    classInfoCardBtnText: {
      color: theme.color.secondary.default,
      textTransform: 'uppercase',
      fontWeight: '700',
      letterSpacing: theme.spacing(0.15)
    },
    classInfoCardDesc: {
      color: theme.color.textFade(0.75),
      fontSize: theme.spacing(4),
      flexWrap: 'wrap'
    },
    classInfoCardTime: {
      color: theme.color.textFade(0.65),
      backgroundColor: theme.color.textFade(0.1),
      paddingHorizontal: theme.spacing(3.5),
      paddingVertical: theme.spacing(1),
      borderRadius: theme.spacing(999),
      borderWidth: theme.spacing(0.25),
      borderColor: theme.color.textFade(0.15),
      marginBottom: theme.spacing(2.5)
    },
    classInfoCardTitle: {
      color: theme.color.text,
      fontWeight: '700',
      fontSize: theme.spacing(6),
      marginVertical: theme.spacing(0.75)
    },
    classInfoModal: {
      flex: 1,
      width: dimensions.window.width,
      height: dimensions.window.height,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.35)'
    },
    classInfoModalCard: {
      width: '100%',
      maxHeight: '65%',
      borderTopLeftRadius: rootPadding,
      borderTopRightRadius: rootPadding,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      margin: 0,
      padding: rootPadding,
      paddingBottom: rootPadding * 3,
      backgroundColor: theme.color.background.card,
      flexDirection: 'column'
    },
    classesInfoCardContainer: {
      marginLeft: 10, paddingLeft: 10, borderLeftWidth: 1, borderLeftColor: theme.color.textFade(0.1)
    },
    homeContainer: {
      marginHorizontal: rootPadding / 2
    },
    homeHeader: {
      color: theme.color.secondary.default
    },
    homeHeaderContainer: {
      flexDirection: 'row', marginVertical: rootPadding / 1.25,
      marginHorizontal: rootPadding / 1.75,
      alignItems: 'center'
    },
    homeHeaderDivider: {
      flex: 1,
      height: theme.spacing(0.8),
      backgroundColor: theme.color.secondary.fade(0.75),
      marginLeft: rootPadding / 1.25,
      marginTop: theme.spacing(1),
      borderRadius: theme.spacing(1)
    },
    navCardLeft: {
      width: '50%',
      padding: rootPadding / 2,
      paddingLeft: 0
    },
    navCardRight: {
      width: '50%',
      padding: rootPadding / 2,
      paddingRight: 0
    },
    navCardContainer: {
      backgroundColor: theme.color.background.card,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borderRadius,
      paddingBottom: rootPadding / 2,
      overflow: 'hidden',
      position: 'relative'
    },
    navCardIcon: {
      color: theme.color.textFade(0.75),
      fontSize: iconSize
    },
    navCardIconContainer: {
      width: iconSize + rootPadding / 1.15,
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start'
    },
    navCardIconUnderlay: {
      color: theme.color.textFade(0.07),
      fontSize: iconSize * 2.1,
      position: 'absolute',
      right: '-12%',
      top: '-12%'
    },
    navCardIconUnderlay2: {
      position: 'absolute',
      left: '-60%',
      top: '-125%',
      backgroundColor: theme.color.secondary.fade(0.65),
      borderRadius: theme.spacing(999),
      width: theme.spacing(63),
      aspectRatio: 1,
      borderWidth: theme.spacing(15),
      borderColor: theme.color.secondary.fade(0.25)
    },
    navCardIconUnderlay3: {
      backgroundColor: theme.color.background.card,
      borderWidth: theme.spacing(15),
      borderColor: theme.color.background.card
    },
    navCardText: {
      color: theme.color.text,
      fontSize: theme.spacing(5),
      marginTop: rootPadding / 2,
      marginLeft: rootPadding / 1.5,
      alignSelf: 'flex-start'
    },
    profileCard: {
      backgroundColor: theme.color.background.card,
      padding: rootPadding,
      borderRadius: theme.borderRadius,
      marginBottom: rootPadding / 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },
    profileCardButton: {
      backgroundColor: theme.color.textFade(0.1),
      paddingHorizontal: theme.spacing(3),
      paddingVertical: theme.spacing(1.35),
      borderRadius: theme.borderRadius,
      borderWidth: theme.spacing(0.3),
      borderColor: theme.color.textFade(0.175)
    },
    profileCardBtnContainer: {
      flexDirection: 'row'
    },
    profileCardBtnText: {
      color: theme.color.textFade(0.8),
      fontSize: theme.spacing(3.75)
    },
    root: {
      flex: 1,
      padding: rootPadding
    },
    welcomeHeader: {
      position: 'relative',
      flexDirection: 'column-reverse',
      padding: rootPadding / 1.15
    },
    welcomeHeaderAvatar: {
      width: 70,
      aspectRatio: 1,
      borderRadius: 70 / 2,
      overflow: 'hidden'
    },
    welcomeHeaderAvatarContainer: {
      marginRight: theme.spacing(3)
    },
    welcomeHeaderCard: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    welcomeHeaderGreeting: {
      color: theme.color.textFade(0.5),
      fontSize: theme.spacing(4)
    },
    welcomeHeaderName: {
      color: theme.color.text,
      fontSize: theme.spacing(6)
    },
    welcomeHeaderId: {
      color: theme.color.textFade(0.7),
      fontSize: theme.spacing(4.25)
    }

  })


  return ({
    ...styles,
    welcome: { ...welcome, login }
  })

}

export default useStyles;