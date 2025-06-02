import { useState } from 'react';

export const useMessageInput = () => {
    const [text, setText] = useState("");
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);

    const validateMessage = (message: string) => {
        const isValid = message.trim() !== "";
        setError(!isValid);
        return isValid;
    };

    const clearInput = () => {
        setText("");
        setError(false);
    };

    const handleFocus = () => {
        setError(false);
    };

    const handleBlur = () => {
        validateMessage(text);
    };

    return {
        text,
        setText,
        sending,
        setSending,
        error,
        setError,
        validateMessage,
        clearInput,
        handleFocus,
        handleBlur,
    };
};
