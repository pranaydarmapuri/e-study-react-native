import useColorScheme from './useColorScheme'
import colors from '../constants/Colors'

const useTheme = () => {

  const theme = useColorScheme()

  return ({
    color: {
      primary: {
        default: colors[theme].tint,
        fade: (val: number): string => `rgba(${colors[theme].rgbaPrimary},${val})`
      },
      secondary: {
        default: colors[theme].secondary,
        fade: (val: number): string => `rgba(${colors[theme].rgbaSecondary},${val})`
      },
      background: {
        default: colors[theme].background,
        card: colors[theme].bgSecondary
      },
      text: colors[theme].text,
      textFade: (val: number): string => `rgba(${colors[theme].rgbaText},${val})`,
      header: colors[theme].bgColor
    },
    borderRadius: 7,
    spacing: (val: number): number => val * 4
  });
}

export default useTheme;