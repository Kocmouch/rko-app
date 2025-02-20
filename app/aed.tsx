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

export default function AED() {

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <AppMenu title="Defibrylatory AED" />
      <View style={styles.content}>
        <ColoredText style={{marginTop: 10}}>
        |AED| to Automatyczny Elektryczny Defibrylator. Urządzenie automatycznie rozpoznaje zaburzenie/zatrzymanie rytmu serca i podpowiada osobie ratującej, co zrobić. Szybka defibrylacja, tj. przywrócenie akcji serca, może uratować czyjeś życie.
        </ColoredText>
        <CustomDivider />
        <CustomH2>Gdzie znajdziesz AED?</CustomH2>
        <ColoredText style={{marginTop: 10}}>Szukaj urządzenia oznaczonego symbolem AED w:</ColoredText>
        <CustomList style={{marginTop: 10}}>
        instytucjach publicznych,\n
        zakładach pracy,\n
        dworcach kolejowych i autobusowych,\n
        lotniskach,\n
        stacjach metra,\n
        niektórych środkach transportu publicznego,\n
        galeriach handlowych,\n
        hotelach i biurowcach,\n
        pływalniach i ośrodkach sportu,\n
        niektórych stacjach benzynowych,
        </CustomList>
        <CustomImage style={[{marginVertical:20}, styles.image]} imageName='defibrillator' />
        <ColoredText style={{marginTop: 10}} coloredStyle={{textDecorationLine:'underline'}}>
        W przypadku prowadzenia |RKO (resuscytacji krążeniowo-oddechowej)| poproś osobę z otoczenia o znalezienie i dostarczenie AED,
        </ColoredText>
        <CustomH2>Jeżeli udzielasz pomocy sam i masz dostęp do AED:</CustomH2>
        <ColoredText style={{marginTop: 10}}>
        |W przypadku dzieci| - najpierw wykonuj RKO przez 2 min, a następnie użyj AED,
        </ColoredText>
        <ColoredText style={{marginTop: 10}}>
        |W przypadku dorosłych| - najpierw użyj AED i rozpocznij RKO.
        </ColoredText>
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