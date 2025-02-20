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
import {AppExpandableWidget} from '@/components/AppWidget';

export default function Operator() {

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <AppMenu title="Obowiązek pomocy" />
      <View style={styles.content}>
        <ColoredText style={{marginTop: 10}}>
        |Uwaga!| Czekając na karetkę, staraj się nie korzystać z telefonu, z którego było zgłoszenie. Do chwili przyjazdu karetki jest to jedyna możliwość kontaktu. Dyspozytor lub zespół karetki może próbować skontaktować się z Tobą, by uzyskać dodatkowe informacje. Połączenia na numery alarmowe są bezpłatne - nie zapłacisz za tę rozmowę bez względu na długość jej trwania.
        </ColoredText>
        
        <AppExpandableWidget 
            title="Powiedz, gdzie jesteś?" 
            message='|Gdzie to się stało?| \nPodaj dokładny adres: pełną nazwę miejscowości, ulicę, numer domu, gminę, powiat, województwo, ponieważ nazwy miejscowości się powtarzają. Podaj miejsca charakterystyczne (szkoła, kościół, kapliczka itp.). Nigdy nie wiadomo, czy połączenie nie zostanie nagle zerwane. Bateria w telefonie może paść, zasięg komórkowy się zgubić, a jeśli sam jesteś osobą poszkodowaną - możesz zasłabnąć. \n|Dokładna informacja o położeniu jest najważniejszą informacją, jaką należy przekazać dyspozytorowi pogotowia.|'
            singleColor='#246BFD'
            icon="kc_ctext_1"
            coloredStyle={{marginBottom: 10}}
            onPress={() => {}}
            style={{marginTop: 20}}
        />
        <AppExpandableWidget 
            title="Wyjaśnij, co się stało" 
            message='|Co się stało?| \nOpisz krótko sytuację od ogółu do szczegółu, przechodząc do informacji o osobach poszkodowanych i ich stanie. Okoliczności wydarzenia także mają znaczenie, będą informacją dla dyspozytora, czy nie trzeba powiadomić innych służb, np. policji w celu zapewnienia bezpieczeństwa ratownikom.'
            singleColor='#246BFD'
            icon="kc_ctext_2"
            coloredStyle={{marginBottom: 10}}
            onPress={() => {}}
            style={{marginTop: 20}}
        />
        <AppExpandableWidget 
            title="Opisz stan poszkodowanego" 
            message='|Ile osób jest poszkodowanych?|\n|Jaki jest stan osoby poszkodowanej?|\n|Czy się rusza?|\n|Czy oddycha?|\n|Jaki jest przybliżony wiek poszkodowanego?|'
            singleColor='#246BFD'
            icon="kc_ctext_3"
            coloredStyle={{marginBottom: 10}}
            onPress={() => {}}
            style={{marginTop: 20}}
        />
        <AppExpandableWidget 
            title="Podaj swoje dane" 
            message='|Jak się nazywasz?|\nPodaj swoje imię i nazwisko. Zachowuj spokój, nie krzycz, nie poganiaj dyspozytora, odpowiadaj na pytania i stosuj się do poleceń. Nie odkładaj słuchawki, nie rozłączaj się, dopóki dyspozytor nie zakończy rozmowy.\n|Podaj swój numer telefonu|\nDyspozytor przekaże go zespołowi karetki. Kontakt z Tobą może im ułatwić znalezienie adresu lub najkrótszej drogi dojazdu.'
            singleColor='#246BFD'
            icon="kc_ctext_4"
            coloredStyle={{marginBottom: 10}}
            onPress={() => {}}
            style={{marginTop: 20}}
        />
        <AppExpandableWidget 
            title="Zaczekaj na przyjazd pogotowia ratunkowego" 
            message='|Czy ktoś będzie czekał na karetkę?|\nDyspozytor może Cię poinformować, jakie czynności możesz lub powinieneś wykonać do czasu przyjazdu pogotowia ratunkowego.'
            singleColor='#246BFD'
            icon="kc_ctext_5"
            coloredStyle={{marginBottom: 10}}
            onPress={() => {}}
            style={{marginTop: 20}}
        />
        <AppExpandableWidget 
            title="Podaj swoje dane"
            message='|Jak się nazywasz?|\nPodaj swoje imię i nazwisko. Zachowuj spokój, nie krzycz, nie poganiaj dyspozytora, odpowiadaj na pytania i stosuj się do poleceń. Nie odkładaj słuchawki, nie rozłączaj się, dopóki dyspozytor nie zakończy rozmowy.\n|Podaj swój numer telefonu|\nDyspozytor przekaże go zespołowi karetki. Kontakt z Tobą może im ułatwić znalezienie adresu lub najkrótszej drogi dojazdu.'
            singleColor='#246BFD'
            icon="kc_ctext_4"
            coloredStyle={{marginBottom: 10}}
            onPress={() => {}}
            style={{marginTop: 20}}
        />

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