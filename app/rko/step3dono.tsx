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
import CustomEmbedYoutube from '@/components/CustomVideo';

export default function RKO_Step3DoNO() {

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <AppMenu title="Pozycja boczna ustalona" />
      <View style={styles.content}>
        <CustomEmbedYoutube videoID="VezhuF8kZyk" />
        <ColoredText style={{marginTop: 21}}>
            |Pozycja boczna ustalona| to rodzaj ułożenia poszkodowanego zabezpieczający go przed ewentualnym zachłyśnięciem oraz ułatwiający oddychanie.
        </ColoredText>
        <CustomH3>Ułóż poszkodowanego</CustomH3>
        <ColoredText>Delikatnie obróć osobę na bok, tak aby leżała na boku, z jedną nogą zgiętą w kolanie, a drugą prostą.</ColoredText>
        <CustomImage style={[styles.image, {marginVertical: 20}]} imageName='step3-dono-img1' />
        <CustomH3>Zachowaj drożność dróg oddechowych</CustomH3>
        <ColoredText>Upewnij się, że głowa poszkodowanego jest lekko odchylona do tyłu, co pomoże utrzymać drożność dróg oddechowych.</ColoredText>
        <CustomImage style={[styles.image, {marginVertical: 20}]} imageName='step3-dono-img2' />
        <CustomH3>Monitoruj stan</CustomH3>
        <ColoredText>Obserwuj poszkodowanego, aby upewnić się, że oddycha i nie ma żadnych zmian w jego stanie.</ColoredText>
        <CustomImage style={[styles.image, {marginVertical: 20}]} imageName='step3-dono-img3' />
        <CustomH3>Czekaj na pomoc</CustomH3>
        <ColoredText>Pozostań z poszkodowanym, aż przybędą służby ratunkowe.</ColoredText>
        <CustomH3>Pamiętaj, że</CustomH3>
        <ColoredText>Pamiętaj, że pozycja boczna ustalona jest kluczowa dla bezpieczeństwa osoby nieprzytomnej, ponieważ zapobiega zadławieniu i utrzymuje drożność dróg oddechowych.</ColoredText>



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