import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppColors } from '@/constants/AppColors';
import { AppFonts } from '@/constants/AppFonts';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import CustomImage from '@/components/CustomImage';
import { CustomH2, CustomH3, ColoredText } from '@/components/CustomText';
import CustomDivider from '@/components/CustomDivider';
import CustomButton from '@/components/CustomButton';
import AppMenu from '@/components/AppMenu';

export default function RKO_Step1() {

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <AppMenu title="Udziel pierwszej pomocy" />
      <View style={styles.content}>
        <CustomH2 style={{ marginTop: 0 }}>
        Jesteś świadkiem wypadku? Udziel pomocy, nie zastanawiaj się, działaj!
        </CustomH2>
        <CustomDivider />
        <CustomImage style={styles.image} imageName='step1-img1' />
        <CustomH3>Zachowaj spokój</CustomH3>
        <ColoredText>Upewnij się, że jesteś w bezpiecznej sytuacji, zanim przystąpisz do pomocy.</ColoredText>
        <CustomH3>Sprawdź reakcję poszkodowanego</CustomH3>
        <ColoredText>Delikatnie potrząśnij osobą i zapytaj, czy wszystko w porządku. Jeśli nie reaguje, przejdź do następnego kroku.</ColoredText>
        <CustomH3>Wezwij pomoc</CustomH3>
        <ColoredText>Obserwuj klatkę piersiową i brzuch poszkodowanego przez ok. 10s poszukując ruchów świadczących o prawidłowym oddechu, w tym czasie powinienieś zaobserwować 2-3 prawidłowe wdechy.</ColoredText>
        <ColoredText style={{marginTop: 10}}>Zadzwoń pod numer alarmowy (112) i zapewnij sobie pomoc innego świadka zdarzenia.</ColoredText>
        <CustomButton title="Następny krok" onPress={() => navigation.navigate('rko/step2')} style={{marginTop: 20, marginBottom: 28}} />
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