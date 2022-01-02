import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Animated } from 'react-native'
import * as React from 'react'
import useTheme from '../hooks/useTheme';
import useStyles from '../hooks/useStyles';

const HEADER_HEIGHT = 125
const HEADER_MIN_HEIGHT = 56

const AnimatedHeader = ({ animatedValue }: any) => {

  const insets = useSafeAreaInsets();
  const theme = useTheme()
  const styles = useStyles()

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + HEADER_MIN_HEIGHT],
    extrapolate: 'clamp'
  });
  const headerColor = animatedValue.interpolate({
    inputRange: [0, (HEADER_HEIGHT - insets.top - HEADER_MIN_HEIGHT)],
    outputRange: [theme.color.background.default, theme.color.header],
    extrapolate: 'clamp'
  });
  const headerContent = animatedValue.interpolate({
    inputRange: [0, (HEADER_HEIGHT - insets.top - HEADER_MIN_HEIGHT)],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });
  const headerTitle = animatedValue.interpolate({
    inputRange: [0, (HEADER_HEIGHT - insets.top - HEADER_MIN_HEIGHT)],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });
  const headerElavation = animatedValue.interpolate({
    inputRange: [0, (HEADER_HEIGHT - insets.top - HEADER_MIN_HEIGHT)],
    outputRange: [0, 3],
    extrapolate: 'clamp'
  });

  const Text = Animated.Text
  const View = Animated.View
  const Avatar = Animated.Image


  return (
    <View
      style={[
        { height: headerHeight, backgroundColor: headerColor, elevation: headerElavation },
        styles.welcomeHeader
      ]}
    >
      <View style={[{ opacity: headerContent }, styles.welcomeHeaderCard]} >
        <Avatar
          style={styles.welcomeHeaderAvatar}
          source={{ uri: 'https://i.ebayimg.com/images/g/L5oAAOSwCd9dRWZc/s-l500.jpg' }}
        />
        <View style={styles.welcomeHeaderAvatarContainer}>
          <Text style={styles.welcomeHeaderGreeting}>Greetings...</Text>
          <Text style={styles.welcomeHeaderName}>Pranay kumar</Text>
          <Text style={styles.welcomeHeaderId}>177R1A0574</Text>
        </View>
      </View>
      <View style={{ flex: 1, height: HEADER_MIN_HEIGHT, position: 'absolute', bottom: 0, right: 0, left: 0, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: theme.color.text, fontSize: 20, opacity: headerTitle }}>Home</Text>
      </View>
    </View>
  )
};

export default AnimatedHeader