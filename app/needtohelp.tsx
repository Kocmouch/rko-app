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

export default function NeedToHelp() {

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <AppMenu title="Obowiązek pomocy" />
      <View style={styles.content}>
        <CustomH2>Jesteś świadkiem wypadku? Udziel pomocy, nie zastanawiaj się, działaj!</CustomH2>
        <ColoredText style={{marginTop: 10}}>
        Ludzki mózg bez dopływu tlenu zaczyna obumierać już po ok. |4 minutach| od chwili zatrzymania akcji serca. Dochodzi wówczas też do nieodwracalnych zmian w organiźmie.
        </ColoredText>
        <ColoredText style={{marginTop: 10}}>
        |Możesz temu zapobiec! Przypominamy też, że udzielenie pomocy to Twój prawny obowiązek.|
        </ColoredText>
        <CustomDivider />
        <CustomH2>Podstawa prawna</CustomH2>
        <CustomList style={{marginTop: 10}} coloredStyle={{textDecorationLine:'underline'}} coloredURL={'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20220001720'}>
        Ustawa z dnia 8 września 2006 r. o Państwowym Ratownictwie Medycznym z późniejszymi zmianami. Więcej w: |Dz. U. 2022 poz. 1720|
        </CustomList>
        <CustomList style={{marginTop: 10}} coloredStyle={{textDecorationLine:'underline'}} coloredURL={'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20210001285'}>
        Ustawa z dnia 27 sierpnia 2004 r. o świadczeniach opieki zdrowotnej finansowanych ze środków publicznych. Więcej w: |Dz. U. 2021 poz. 1285|
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