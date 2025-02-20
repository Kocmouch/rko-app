import { View, StyleSheet } from 'react-native';
import { AppColors } from '@/constants/AppColors';

const CustomDivider = () => {
    return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: AppColors.colorText,
        marginTop: 20,
        marginBottom: 20,
    },
});

export default CustomDivider;