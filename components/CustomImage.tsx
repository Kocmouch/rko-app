import React from 'react';
import { View, ImageBackground, ImageSourcePropType, StyleSheet } from 'react-native';

interface CustomImageProps {
    imagePath?: string;
    style?: any;
    imageName?: string;
}

const imageMap: { [key: string]: ImageSourcePropType } = {
    'step1-img1': require('@/assets/images/czekaj_na_pomoc.png'),
    'step3-donn-img1': require('@/assets/images/uciskanie_klatki.png'),
    'step3-donn-img2': require('@/assets/images/oddechy_ratownicze.png'),
    'step3-dono-img1': require('@/assets/images/pozycja_boczna.png'),
    'step3-dono-img2': require('@/assets/images/udroznij_drogi_oddechowe.png'),
    'step3-dono-img3': require('@/assets/images/wezwij_pomoc.png'),
    'step3-dznn-img1': require('@/assets/images/uciskanie_niemowlat.png'),
    'step3-dznn-img2': require('@/assets/images/oddechy_ratownicze.png'),
    'defibrillator': require('@/assets/images/AED.png'),

};

const CustomImage: React.FC<CustomImageProps> = ({ imagePath, style, imageName }) => {
    let imageSource: ImageSourcePropType;
    if (imageName && imageMap[imageName]) {
        imageSource = imageMap[imageName];
    } else if (imagePath) {
        imageSource = { uri: imagePath };
    } else {
        imageSource = imageMap['default.png']; // Fallback image
    }

    return (
        <View style={style}>
            <ImageBackground source={imageSource} style={[styles.image, style]}></ImageBackground>
        </View>
    );
};


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomImage;