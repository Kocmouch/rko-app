import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppColors } from '@/constants/AppColors';
import { AppFonts } from '@/constants/AppFonts';
import { Ionicons } from '@expo/vector-icons';
import CustomIcon from './Icons';
import { ColoredText } from './CustomText';
// import { useAudioPlayer } from 'expo-audio';



interface AppWidgetProps {
  imageSource?: any;
  gradientColors?: string[];
  singleColor?: string;
  title: string;
  message?: string;
  titleStyle?: any;
  hideArrow?: boolean;
  onPress: () => void;
  widgetStyle?: any;
  icon?: any;
  iconStyle?: any;
  coloredStyle?: any;
  iconAction?: () => void;
  isPlaying?: boolean;
  soundName?: any;
  style?: any;
}

const AppWidget: React.FC<AppWidgetProps> = ({ imageSource, gradientColors, singleColor, icon, title, onPress }) => {
    return (
      <TouchableOpacity style={[styles.container, styles.containerSmall]} onPress={onPress}>
        {imageSource ? (
          <Image source={imageSource} style={styles.background} />
        ) : (
          gradientColors ? (
            <LinearGradient colors={gradientColors} style={styles.background} />
          ) : (
              <View style={[styles.background, { backgroundColor: singleColor, display: 'flex', justifyContent: 'center', alignItems: 'center' }]}>
                {icon && icon.includes('kc_') ? (
                    <CustomIcon name={icon} />
                ) : (
                  <Ionicons name={icon} size={24} color={AppColors.colorIcon} />
                )}
              </View>
              )
        )}
      <Text style={styles.text}>{title}</Text>
      <Ionicons name="chevron-forward-outline" size={24} color={AppColors.colorIcon} />
      </TouchableOpacity>
    );
  };

  let activeSounds: { [key: string]: Audio.Sound } = {};

  const AppWidgetColored: React.FC<AppWidgetProps> = ({ imageSource, widgetStyle, gradientColors, coloredStyle, singleColor, icon, soundName, iconStyle, title, message, hideArrow, titleStyle, onPress, iconAction, isPlaying }) => {
    const pulseAnim = useRef(new Animated.Value(1)).current;
    // const soundRef = useRef<Audio.Sound | null>(null);

    // console.log(`Sound name: ${soundName}`);
  
    useEffect(() => {
      // const configureAudio = async () => {
      //   await Audio.setAudioModeAsync({
      //     allowsRecordingIOS: false,
      //     interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      //     playsInSilentModeIOS: true,
      //     shouldDuckAndroid: true,
      //     interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      //     playThroughEarpieceAndroid: false,
      //     staysActiveInBackground: true,
      //   });
      // };
    
      // configureAudio();
      // const loadSound = async () => {
      //   if (soundName && soundMap[soundName]) {
      //       console.log(`Loading sound: ${soundName}`);
      //       const { sound } = await Audio.Sound.createAsync(soundMap[soundName]);
      //       soundRef.current = sound;
      //       console.log(`Sound loaded: ${soundName}`);
      //   } else {
      //       console.log(`Sound not found in soundMap: ${soundName}`);
      //   }
      // };

      // loadSound();
      if (isPlaying) {
        Animated.loop(
          Animated.sequence([
            Animated.timing(pulseAnim, {
              toValue: 1.2,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(pulseAnim, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
          ])
        ).start();
        // if (soundRef.current) {
        //   console.log(`Playing sound: ${soundName}`);
        //   soundRef.current.playAsync();
        // }
      } else {
        pulseAnim.setValue(1);
        // if (soundRef.current) {
        //   console.log(`Pausing sound: ${soundName}`);
        //   soundRef.current.pauseAsync();
        // }
      }

      // return () => {
      //   if (soundRef.current) {
      //     console.log(`Unloading sound: ${soundName}`);
      //       // soundRef.current.unloadAsync();
      //   }
      // };
    }, [isPlaying]);
  
    return (
      <TouchableOpacity style={[styles.container, styles.containerSmall, hideArrow ? { justifyContent: 'flex-start' } : null, widgetStyle]} onPress={onPress}>
        {imageSource ? (
          <Image source={imageSource} style={styles.background} />
        ) : (
          gradientColors ? (
            <View style={[styles.background, { backgroundColor: gradientColors[0], display: 'flex', justifyContent: 'center', alignItems: 'center' }]}>
              <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                {icon && icon.includes('kc_') ? (
                    <CustomIcon name={icon} />
                ) : (
                  <Ionicons name={icon} size={24} color={title?AppColors.colorIconSecondary:AppColors.colorIcon} />
                )}
              </Animated.View>
            </View>
          ) : (
            <View style={[styles.background, { backgroundColor: singleColor, display: 'flex', justifyContent: 'center', alignItems: 'center' }]}>
              <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                {icon && icon.includes('kc_') ? (
                    <CustomIcon name={icon} />
                ) : (
                  <Ionicons name={icon} size={24} color={title?AppColors.colorIconSecondary:AppColors.colorIcon} />
                )}
              </Animated.View>
            </View>
          )
        )}
        <View style={[message ? styles.smallContent : null, hideArrow ? { maxWidth: '80%' } : null]}>
          <Text style={[styles.text, titleStyle]}>{title}</Text>
          {message && <Text style={[styles.message, singleColor ? { color: singleColor } : null, { fontWeight: 'bold', display: 'flex', flexWrap: 'wrap' }, coloredStyle]}>{message}</Text>}
        </View>
        {hideArrow ? null : <Ionicons name="chevron-forward-outline" size={24} color={AppColors.colorIcon} />}
      </TouchableOpacity>
    );
  };

const AppBigWidget: React.FC<AppWidgetProps> = ({ gradientColors, title, message, onPress }) => {
    return (
      <TouchableOpacity style={[styles.container, styles.containerBig]} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.iconBig}>
            <Ionicons name="chevron-forward-outline" size={24} color={AppColors.colorIconSecondary}/>
        </View>
      </TouchableOpacity>
    );
};

const AppExpandableWidget2: React.FC<AppWidgetProps> = ({ style, imageSource, widgetStyle, gradientColors, coloredStyle, singleColor, icon, soundName, iconStyle, title, message, hideArrow, titleStyle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
      setIsExpanded(!isExpanded);
  };

  return (
      <TouchableOpacity onPress={handlePress} style={style}>
        <View style={[styles.container, styles.containerSmall, hideArrow ? { justifyContent: 'flex-start' } : null, widgetStyle]}>
          <View style={[styles.background, { backgroundColor: singleColor, display: 'flex', justifyContent: 'center', alignItems: 'center' }]}>
              {icon && icon.includes('kc_') ? 
                  icon.includes('kc_ctext_') ?
                  <Text style={{ color: AppColors.colorBackground, fontSize: 16 }}>{icon.replace('kc_ctext_', '')}</Text>
                  :
                  (
                    <CustomIcon name={icon} />
                  )
               : (
                  <Ionicons name={icon} size={24} color={title ? AppColors.colorIconSecondary : AppColors.colorIcon} />
              )}
            </View>
            <View style={hideArrow ? { maxWidth: '80%' } : null}>
                <Text style={[styles.text, titleStyle]}>{title}</Text>
            </View>
            {hideArrow ? null : <Ionicons name="chevron-forward-outline" size={24} color={AppColors.colorIcon} />}
          </View>
          {isExpanded && message && (
              <View style={{marginTop:20}}>
                <ColoredText style={coloredStyle}>{message}</ColoredText>
              </View>
          )}
      </TouchableOpacity>
  );
};

const AppExpandableWidget: React.FC<AppWidgetProps> = ({ imageSource, gradientColors, singleColor, icon, title, message, coloredStyle, onPress, style }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
      setIsExpanded(!isExpanded);
  };
  
  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <View style={[styles.container, styles.containerSmall]}>
        <View style={[styles.background, { backgroundColor: singleColor, display: 'flex', justifyContent: 'center', alignItems: 'center' }]}>
            {icon && icon.includes('kc_') ? 
                icon.includes('kc_ctext_') ?
                <Text style={{ color: AppColors.colorBackground, fontSize: 16 }}>{icon.replace('kc_ctext_', '')}</Text>
                :
                (
                  <CustomIcon name={icon} />
                )
              : (
                <Ionicons name={icon} size={24} color={title ? AppColors.colorIconSecondary : AppColors.colorIcon} />
            )}
          </View>
        <Text style={styles.text}>{title}</Text>
        <Ionicons name="chevron-forward-outline" size={24} color={AppColors.colorIcon} />
      </View>
      {isExpanded && message && (
        <View style={{marginTop:20}}>
          <ColoredText style={coloredStyle}>{message}</ColoredText>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: AppColors.colorWidgetBackground,
    display: 'flex',
    width: '100%'
  },
  smallContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  containerSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    gap: 16,
  },
  containerBig: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 24,
    paddingBottom: 36,
    paddingRight: 56,
    gap: 6,
    width: '100%',
  },
  background: {
    width: 48,
    height: 48,
    borderRadius: 12,
  },
  iconBig: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.colorPrimary,
    borderRadius: 50,
    width: 40,
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 12,

  },
  text: {
    flex: 1,
    fontSize: 16,
    fontFamily: AppFonts.interSemiBold.fontFamily,
    color: AppColors.colorText,
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 18,
    fontFamily: AppFonts.interSemiBold.fontFamily,
    color: AppColors.colorText,
  },
  message: {
    fontSize: 14,
    fontFamily: AppFonts.interRegular.fontFamily,
    color: AppColors.colorText,
  }
});

export { AppWidget, AppBigWidget, AppWidgetColored, AppExpandableWidget };