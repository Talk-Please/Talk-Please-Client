import { useMessageInput } from '@/hooks/useMessageInput';
import { MessageService } from '@/services/MessageService';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HelperText } from 'react-native-paper';
import { MessageTextInput } from '../../components/MessageInput/MessageTextInput';
import { SendButton } from '../../components/MessageInput/SendButton';
export default function index(){

    const {
    text,
    setText,
    sending,
    setSending,
    error,
    validateMessage,
    clearInput,
    handleFocus,
    handleBlur,
    } = useMessageInput();

    const handleSend = async () => {
    if (!validateMessage(text)) {
        console.log("Cannot send empty message");
        return;
    }
    try {
        setSending(true);
        await MessageService.sendMessage(text);
        clearInput();
        console.log("Message sent successfully:", text);
    } catch (error) {
        console.error("Error sending message:", error);
    } finally {
        setSending(false);
    }
    };

    return (
        <SafeAreaView style={styles.container}>
            <HelperText type="error" visible={error}>
                Please enter a message before sending.
            </HelperText>

            <MessageTextInput
                value={text}
                onChangeText={setText}
                disabled={sending}
                error={error}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            <SendButton
                onPress={handleSend}
                disabled={false}
                loading={sending}
            />
        </SafeAreaView>
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
