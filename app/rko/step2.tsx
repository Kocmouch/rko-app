import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppWidget, AppBigWidget, AppWidgetColored } from '@/components/AppWidget';
import { AppColors } from '@/constants/AppColors';
import { AppFonts } from '@/constants/AppFonts';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '@/components/CustomButton';
import AppMenu from '@/components/AppMenu';

export default function RKO_Step2() {

  const navigation = useNavigation();
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null);
  const [navName, setNavName] = useState<string | null>(null);

  const handlePress = (title: string, navName: string) => {
    setSelectedWidget(title);
    setNavName(navName);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <AppMenu title="Stan poszkodowanego" />
      <View style={styles.content}>
        <AppWidgetColored
            singleColor={AppColors.colorPrimary}
            title="Nieprzytomny - nie oddycha"
            message='Dorosły'
            hideArrow={true}
            onPress={() => handlePress('Nieprzytomny - nie oddycha', 'rko/step3donn')}
            widgetStyle={[
              styles.widget,
              selectedWidget === 'Nieprzytomny - nie oddycha' && {
                borderColor: AppColors.colorPrimary,
                borderWidth: 2,
              },
            ]}
            icon="kc_donn"
          />
          <AppWidgetColored
            singleColor={AppColors.colorPrimary}
            title="Nieprzytomny - oddycha"
            message='Dorosły'
            hideArrow={true}
            onPress={() => handlePress('Nieprzytomny - oddycha', 'rko/step3dono')}
            widgetStyle={[
              styles.widget,
              selectedWidget === 'Nieprzytomny - oddycha' && {
                borderColor: AppColors.colorPrimary,
                borderWidth: 2,
              },
            ]}
            icon="kc_dono"
          />
          <AppWidgetColored
            singleColor={AppColors.colorPrimary}
            title="Przytomny - oddycha"
            message='Dorosły'
            hideArrow={true}
            onPress={() => handlePress('Przytomny - oddycha', 'getHelp')}
            widgetStyle={[
              styles.widget,
              selectedWidget === 'Przytomny - oddycha' && {
                borderColor: AppColors.colorPrimary,
                borderWidth: 2,
              },
            ]}
            icon="kc_dopo"
          />
          <AppWidgetColored
            singleColor={"#FBA3FF"}
            title="Nieprzytomne - nie oddycha"
            message='Dorosły'
            hideArrow={true}
            onPress={() => handlePress('Nieprzytomne - nie oddycha', 'rko/step3dznn')}
            widgetStyle={[
              styles.widget,
              selectedWidget === 'Nieprzytomne - nie oddycha' && {
                borderColor: "#FBA3FF",
                borderWidth: 2,
              },
            ]}
            icon="kc_dznn"
          />
        <CustomButton
          title="Następny krok"
          onPress={() => navName && navigation.navigate(navName)}
          style={[
            { position: 'absolute', bottom: 40 },
          ]}
          disabled={!selectedWidget}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 24,
    paddingTop: 56,
    backgroundColor: AppColors.colorBackground,

  },
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
  image: {
    height: 180,
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    paddingTop: 21,
    gap: 16,
  },
  widget: {
    borderColor: 'transparent',
    borderWidth: 2,
  },
});