import React from 'react';
import { View, StyleSheet } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

interface CustomVideoProps {
    videoID: string;
    style?: any;
}

const CustomEmbedYoutube: React.FC<CustomVideoProps> = ({ videoID, style }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoID}`;
    return (
        <View style={[styles.videoContainer, style]}>
            <YoutubePlayer
                height={200}
                play={false}
                videoId={videoID}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    videoContainer: {
        borderRadius: 8,
        borderEndEndRadius: 8,
        borderEndStartRadius: 8,
        width: '100%',
        height: 175,
        overflow: 'hidden',
    }
});

export default CustomEmbedYoutube;