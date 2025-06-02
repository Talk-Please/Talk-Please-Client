import React from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, IconButton, useTheme } from 'react-native-paper';

interface SendButtonProps {
    onPress: () => void;
    disabled: boolean;
    loading: boolean;
    }

export const SendButton: React.FC<SendButtonProps> = ({
    onPress,
    disabled,
    loading,
    }) => {
    const color = useTheme().colors;

    if (loading) {
        return (
        <ActivityIndicator
            animating={true}
            color={color.onSurfaceVariant}
            style={styles.button}
            size={40}
        />
        );
    }

    return (
        <IconButton
        accessibilityLabel="Send message"
        icon="send"
        size={40}
        mode="contained"
        style={styles.button}
        disabled={disabled}
        onPress={onPress}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        margin: 20,
    },
    input: {
        marginBottom: 20,
        borderRadius: 8,
    },
    button: {
        alignSelf: 'center',
        marginTop: 20,
    },
});
