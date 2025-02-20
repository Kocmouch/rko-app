import { Audio } from 'expo-av';
import React, { useState, useEffect } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

interface AudioControllerProps {
    soundName: string;
    isPlaying: boolean;
}

const soundMap: { [key: string]: any } = {
    'rko': require('@/assets/sounds/rko-tempo.mp3'),
};

const AudioController: React.FC<AudioControllerProps> = ({ soundName, isPlaying }) => {
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const navigation = useNavigation();

    const controlSound = async () => {
        if (isPlaying) {
            if (!sound) {
                const soundObject = new Audio.Sound();
                try {
                    await soundObject.loadAsync(soundMap[soundName]);
                    await soundObject.playAsync();
                    setSound(soundObject);
                } catch (error) {
                    console.error(error);
                }
            } else {
                await sound.playAsync();
            }
        } else {
            if (sound) {
                await sound.pauseAsync();
            }
        }
    };

    useEffect(() => {
        controlSound();
    }, [isPlaying]);

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                if (sound) {
                    sound.stopAsync();
                    sound.unloadAsync();
                }
            };
        }, [sound])
    );

    useEffect(() => {
        return () => {
            if (sound) {
                sound.stopAsync();
                sound.unloadAsync();
            }
        };
    }, [navigation]);

    return null;
};

export default AudioController;