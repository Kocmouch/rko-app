import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppColors } from '@/constants/AppColors';
import { AppFonts } from '@/constants/AppFonts';
import { Ionicons } from '@expo/vector-icons';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    style?: any;
    disabled?: boolean;
    icon?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, disabled, icon }) => {
    return (
        <TouchableOpacity
            onPress={disabled ? undefined : onPress}
            style={[styles.button, style, disabled && styles.disabledButton, icon && { flexDirection: 'row', gap: 7 }]}
            disabled={disabled}
        >
            {icon && <Ionicons name={icon} size={18} color={AppColors.colorIconSecondary} />}
            <Text style={[styles.text]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.colorPrimary,
        borderRadius: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignSelf: 'center',
    },
    disabledButton: {
        opacity: 0.8,
    },
    text: {
        color: AppColors.colorIconSecondary,
        fontFamily: AppFonts.interBold.fontFamily,
        fontSize: 14,
    },
});

export default CustomButton;