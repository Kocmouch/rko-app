import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { AppColors } from '@/constants/AppColors';
import { AppFonts } from '@/constants/AppFonts';

interface CustomTextProps {
    children: string;
    style?: any;
    coloredStyle?: any;
    coloredURL?: any;
}

const processText = (text: string, coloredStyle?: any, coloredURL?: any) => {
    const parts = text.split(/(\|.*?\|)/g);
    return parts.map((part, index) => {
        if (part.startsWith('|') && part.endsWith('|')) {
            const content = part.slice(1, -1);
            if (coloredURL) {
                return (
                    <Text
                        key={index}
                        style={[styles.coloredText, coloredStyle]}
                        onPress={() => {
                            if (isValidURL(coloredURL)) {
                                Linking.openURL(coloredURL).catch(err => console.error("Failed to open URL:", err));
                            } else {
                                console.error("Invalid URL", "The URL provided is not valid. URL:", coloredURL);
                            }
                        }}
                    >
                        {content}
                    </Text>
                );
            }
            return (
                <Text key={index} style={[styles.coloredText, coloredStyle]}>
                    {content}
                </Text>
            );
        }
        return part;
    });
};

const CustomH2: React.FC<CustomTextProps> = ({ children, style, coloredStyle }) => {
    return (
        <Text style={[styles.text, styles.h2, styles.heading, style]}>
            {processText(children, coloredStyle)}
        </Text>
    );
};

const CustomH3: React.FC<CustomTextProps> = ({ children, style, coloredStyle }) => {
    return (
        <Text style={[styles.text, styles.h3, styles.heading, style]}>
            {processText(children, coloredStyle)}
        </Text>
    );
};

const ColoredText: React.FC<CustomTextProps> = ({ children, style, coloredStyle}) => {
    return (
        <View>
            {children.split(/\\n|\n/).map((item, index) => (
                <Text key={index} style={[styles.text, style]}>
                    {processText(item, coloredStyle)}
                </Text>
            ))}
        </View>
    );
};

const CustomList: React.FC<CustomTextProps> = ({ children, style, coloredStyle, coloredURL }) => {
    return (
        <View>
            {children.split(/\\n|\n/).map((item, index) => (
                <Text key={index} style={[styles.text, style]}>
                    {'\u2022'} {processText(item, coloredStyle, coloredURL)}
                </Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: AppColors.colorTextSecondary,
        fontFamily: AppFonts.interRegular.fontFamily,
        fontSize: 13,
        lineHeight: 18,
    },
    heading: {
        marginTop: 20,
        fontFamily: AppFonts.interBold.fontFamily,
        color: AppColors.colorText,
    },
    h2: {
        fontSize: 14,
        lineHeight: 20,
    },
    h3: { 
        fontSize: 13,
        lineHeight: 24,
    },
    coloredText: {
        color: AppColors.colorTextAccent,
        fontFamily: AppFonts.interBold.fontFamily,
    }
});

const isValidURL = (url: string) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
};

export { CustomH2, CustomH3, ColoredText, CustomList };