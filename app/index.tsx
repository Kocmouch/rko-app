import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppWidget, AppBigWidget, AppWidgetColored } from '@/components/AppWidget';
import { AppColors } from '@/constants/AppColors';
import { AppFonts } from '@/constants/AppFonts';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AppMenu from '@/components/AppMenu';
import CustomIcon from '@/components/Icons';


export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <AppMenu title="Pierwsza pomoc" hideBack={true} />
      <Text style={[styles.pageTitle, styles.text]}>Twoja pomoc w pomaganiu 🤝</Text>
      <View style={styles.firstStep}>
        <AppBigWidget
          gradientColors={['#FFA177', '#FF6060']}
          title="Udziel pierwszej pomocy"
          message="Sprawdź jak to zrobić. Wskażemy Ci kolejne działania, zgodne z zapoznanym stanem"
          onPress={() => navigation.navigate('rko/step1')}
        />
      </View>
      <View style={styles.mainMenu}>
        <AppWidget
          singleColor="#246BFD"
          title="Inne wypadki i zdarzenia"
          onPress={() => navigation.navigate('getHelp')}
          icon="kc_medPlus"
        />
        <AppWidget
          singleColor="#246BFD"
          title="Defibrylatory AED"
          onPress={() => navigation.navigate('aed')}
          icon="kc_medDefiblirator"
        />
        <AppWidget
          singleColor="#246BFD"
          title="Rozmowa z dyspozytorem"
          onPress={() => navigation.navigate('operator')}
          icon="kc_medSOSPhone"
        />
        <AppWidget
          singleColor="#FBA3FF"
          title="Obowiązek pomocy"
          onPress={() => navigation.navigate('needtohelp')}
          icon="kc_medScale"
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
  pageTitle: {
    fontSize: 36,
    fontFamily: AppFonts.poppinsBold.fontFamily,
  },
  mainMenu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 16,
    width: '100%',
  },
  firstStep: {
    width: '100%',
  }
});