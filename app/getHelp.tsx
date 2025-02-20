import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { AppColors } from '@/constants/AppColors';
import { AppFonts } from '@/constants/AppFonts';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import CustomImage from '@/components/CustomImage';
import { CustomH2, CustomH3, ColoredText, CustomList } from '@/components/CustomText';
import CustomDivider from '@/components/CustomDivider';
import CustomButton from '@/components/CustomButton';
import AppMenu from '@/components/AppMenu';

export default function GetHelp() {

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <AppMenu title="Wezwij pomoc" />
      <View style={styles.content}>
        <CustomH2>Pogotowie ratunkowe wzywaj wyłącznie w sytuacjach zagrożenia życia!</CustomH2>
        <ColoredText style={{marginTop: 10}}>
            W celu wezwania pogotowia ratunkowego skorzystaj z ogólnego numeru alarmowego |(112)| lub numeru pogotowia ratunkowego |(999)|.
        </ColoredText>
        <ColoredText style={{marginTop: 10}}>
        Pogotowie ratunkowe wzywaj tylko w sytuacjach:
        </ColoredText>
        <CustomList style={{marginTop: 10}}>
        |Bezpośredniego zagrożenia życia|.\n
        |Sytuacjach nagłych, których skutkiem może być poważne uszkodzenie funkcji organizmu, uszkodzenie ciała lub utrata życia|.
        </CustomList>
        <ColoredText style={{marginTop: 10}}>
        Dyspozytor medyczny po ocenie sytuacji, może odmówić wysłania karetki, podając przyczynę odmowy oraz sposób dalszego postępowania.
        </ColoredText>
        <CustomDivider />
        <CustomH2>
        W tych sytuacjach zadzwoń pod nr alarmowy
        </CustomH2>
        <CustomList style={{marginTop: 10}}>
        nasilona duszność,\n
        zaburzenia świadomości,\n
        udar mózgu,\n
        ostry ból w klatce piersiowej,\n
        zatrzymanie akcji serca,\n
        zaburzenia rytmu serca,\n
        urazy powstałe w wyniku wypadku komunikacyjnego,\n
        bardzo wysoka gorączka z drgawkami i/lub nietypowymi objawami,\n
        ostry ból brzucha,\n
        drgawki,\n
        uporczywe wymioty, zwłaszcza z domieszką krwi,\n
        masywny krwotok z dolnego odcinka przewodu pokarmowego,\n
        masywny krwotok z dróg rodnych,\n
        gwałtownie postępujący poród,\n
        ostre i nasilone reakcje uczuleniowe (wysypka, duszność) będące efektem zażycia leku, ukąszenia lub użądlenia przez jadowite zwierzę,\n
        zatrucia lekami, środkami chemicznymi lub gazami,\n
        połknięcie środka żrącego,\n
        rozległe oparzenia,\n
        udar cieplny,\n
        wyziębienie organizmu,\n
        porażenie prądem,\n
        podtopienie lub utonięcie,\n
        zadławienie się,\n
        agresja spowodowana chorobą psychiczną,\n
        próba samobójcza,\n
        upadek z dużej wysokości,\n
        rozległa rana będąca efektem urazu,\n
        urazy kończyny dolnej uniemożliwiające samodzielne poruszanie się.
        </CustomList>
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