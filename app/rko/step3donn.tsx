import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { AppColors } from '@/constants/AppColors';
import { AppFonts } from '@/constants/AppFonts';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import CustomImage from '@/components/CustomImage';
import { CustomH2, CustomH3, ColoredText } from '@/components/CustomText';
import CustomDivider from '@/components/CustomDivider';
import CustomButton from '@/components/CustomButton';
import { AppWidgetColored } from '@/components/AppWidget';
import AppMenu from '@/components/AppMenu';

import React, { useState } from 'react';
import CustomEmbedYoutube from '@/components/CustomVideo';
import AudioController from '@/components/AudioController';

export default function RKO_Step3DoNN() {

  const navigation = useNavigation();

  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <AppMenu title="RKO u osoby dorosłej" />
      <View style={styles.content}>
        <CustomEmbedYoutube videoID="dc1t8kwLUfE" />
        <ColoredText style={{marginTop: 21}}>
            |RKO| czyli resuscytacja krążeniowo-oddechowa - wykonaj w celu przywrócenia krążenia u poszkodowanego z godnie z poniższym schematem:
        </ColoredText>
        <CustomH3>Sprawdź oddech:</CustomH3>
        <ColoredText>
        Jeśli poszkodowany nie oddycha, rozpocznij resuscytację krążeniowo-oddechową (RKO).
        </ColoredText>
        <CustomH2>Wykonaj RKO</CustomH2>
        <CustomH3>Pozycja poszkodowanego</CustomH3>
        <ColoredText>Ułóż poszkodowanego na plecach.</ColoredText>
        <CustomH3>Przystąp do uciskania klatki</CustomH3>
        <ColoredText>Ułóż dłonie na środku klatki piersiowej i wykonuj uciski w tempie 100-120 na minutę. Po 30 uciskach wykonaj 2 wdechy.</ColoredText>
        <CustomImage style={[styles.image, {marginVertical: 20}]} imageName='step3-donn-img1' />
        <AppWidgetColored 
            singleColor="#FBA3FF"
            title="Rytm masażu serca"
            message="Użyj tego rytmu w celu utrzymania właściwego tempa ucisku"
            onPress={() => handlePlay()}
            hideArrow={true}
            icon="play"
            isPlaying={isPlaying}
            coloredStyle={{fontFamily: AppFonts.interMedium.fontFamily, color: AppColors.colorText, fontWeight: '500'}}
            widgetStyle={{padding: 12, marginTop: 20}}
        />
        <AudioController soundName="rko" isPlaying={isPlaying} />
        <CustomH3>Wymieniaj się w uciskaniu</CustomH3>
        <ColoredText>Jeśli masz możliwość, wymieniaj się z inną osobą w czynnościach uciskania klatki piersiowej co 2 minuty.</ColoredText>        
        <CustomImage style={[styles.image, {marginVertical: 20}]} imageName='step3-donn-img2' />
        <CustomH3>Monitoruj stan poszkodowanego</CustomH3>
        <ColoredText>Kontynuuj RKO do przybycia służb ratunkowych lub do momentu, gdy poszkodowany zacznie oddychać.</ColoredText>
        <CustomH3>Zadbaj o komfort</CustomH3>
        <ColoredText>Jeśli poszkodowany odzyska przytomność, uspokój go i zapewnij komfort, aż przybędzie pomoc.</ColoredText>

        <CustomButton 
            title="Zadzwoń 112" 
            onPress={() => Linking.openURL('tel:112')}
            style={{marginTop: 20, marginBottom: 28}}
            icon={"call"}
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
  }
});