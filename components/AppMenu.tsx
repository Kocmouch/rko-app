import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '@/constants/AppColors';
import { AppFonts } from '@/constants/AppFonts';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface AppMenuProps {
    title: string;
    hideBack?: boolean;
}

export default function AppMenu({ title, hideBack }: AppMenuProps) {

    const navigation = useNavigation();
  
    return (
        <View style={styles.pageIntro}>
        {hideBack ? null : (
        <Ionicons
            name="arrow-back-outline"
            size={24}
            color={AppColors.colorIcon}
            onPress={() => navigation.goBack()}
          />
        )}
          <Text style={[styles.pageName, styles.text]}>{title}</Text>
          <Ionicons
            name="settings"
            size={24}
            color={AppColors.colorIcon}
            onPress={() => navigation.navigate('settings')}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      color: AppColors.colorText,
    },
    pageIntro: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    pageName: {
      fontSize: 18,
      fontFamily: AppFonts.poppinsSemiBold.fontFamily,
    },
  });