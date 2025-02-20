import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { AppColors } from '@/constants/AppColors';
import { AppFonts } from '@/constants/AppFonts';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import CustomImage from '@/components/CustomImage';
import { CustomH2, CustomH3, ColoredText, CustomList } from '@/components/CustomText';
import CustomDivider from '@/components/CustomDivider';
import CustomButton from '@/components/CustomButton';
import { AppWidgetColored } from '@/components/AppWidget';
import CustomEmbedYoutube from '@/components/CustomVideo';

import React, { useState } from 'react';
import AppMenu from '@/components/AppMenu';
import AudioController from '@/components/AudioController';

export default function RKO_Step3DzNN() {

  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <AppMenu title="RKO u dziecka" />
      <View style={styles.content}>
        <CustomEmbedYoutube videoID="dc1t8kwLUfE" />
        <ColoredText style={{marginTop: 21}}>
            |RKO| czyli resuscytacja krążeniowo-oddechowa - wykonaj w celu przywrócenia krążenia u poszkodowanego z godnie z poniższym schematem:
        </ColoredText>
        <CustomH3>Sprawdź oddech</CustomH3>
        <ColoredText>
        Upewnij się, że dziecko oddycha. Jeśli nie ma oddechu, rozpocznij RKO. Rozpocznij od |5 oddechów ratowniczych| - dotyczy tylko niemowląt.
        </ColoredText>
        <CustomH3>Wykonaj uciski klatki piersiowej</CustomH3>
        <ColoredText>
          Użyj dwóch palców (dla niemowląt) lub jednej ręki (dla starszych dzieci) i wykonuj uciski w środkowej części klatki piersiowej. Uciskaj na głębokość około 4-5 cm, w tempie 100-120 ucisków na minutę.
        </ColoredText>
        <CustomImage style={[styles.image, {marginVertical: 20}]} imageName='step3-dznn-img1' />
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
        <CustomH3>Wykonaj wdechy</CustomH3>
        <ColoredText>Po 30 uciskach wykonaj 2 wdechy. Zasłoń usta dziecka swoimi ustami, a następnie dmuchnij delikatnie, aby unieść klatkę piersiową.</ColoredText>
        <CustomImage style={[styles.image, {marginVertical: 20}]} imageName='step3-dznn-img2' />
        <CustomH3>Kontynuuj RKO</CustomH3>
        <ColoredText>Powtarzaj cykl 30 ucisków i 2 wdechy, aż przybędzie pomoc lub dziecko zacznie oddychać.</ColoredText>
        <CustomH3>Pamiętaj, że</CustomH3>
        <ColoredText>RKO u dzieci różni się od RKO u dorosłych, dlatego ważne jest, aby dostosować technikę do wieku i wielkości dziecka. Twoja pomoc może uratować życie!</ColoredText>
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