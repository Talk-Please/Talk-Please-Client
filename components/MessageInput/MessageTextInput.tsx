import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

interface MessageTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  disabled: boolean;
  error: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

export const MessageTextInput: React.FC<MessageTextInputProps> = ({
  value,
  onChangeText,
  disabled,
  error,
  onFocus,
  onBlur,
}) => {

  const color = useTheme().colors;

  return (
    <TextInput
      label=""
      mode='outlined'
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      multiline
      numberOfLines={10}
      placeholder="Type your message here..."
      placeholderTextColor={color.onSurfaceVariant}
      selectionColor={color.primary}
      activeOutlineColor={color.primary}
      outlineColor={color.outline}
      textColor={color.onSurface}
      underlineColor="transparent"
      disabled={disabled}
      error={error}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        borderRadius: 8,
    }
});