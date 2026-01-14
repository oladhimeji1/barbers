import React, { JSX, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthenticationScreen(): JSX.Element {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleCodeChange = (text: string, index: number): void => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ): void => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSend = (): void => {
    const authCode = code.join('');
    console.log('Authentication code:', authCode);
    // Add verification logic here
  };

  const handleResendCode = (): void => {
    console.log('Resending code to:', route.params?.email);
    // Add resend logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Authentication</Text>
        <Text style={styles.subtitle}>
          Please enter the authentication code that we have sent to your email
        </Text>

        <View style={styles.codeContainer}>
          {code.map((digit: string, index: number) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={[
                styles.codeInput,
                digit ? styles.codeInputFilled : null,
              ]}
              value={digit}
              onChangeText={(text: string) => handleCodeChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleResendCode}>
          <Text style={styles.resendText}>Have not receive code?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 30,
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3D3D7A',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 40,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  codeInput: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
  },
  codeInputFilled: {
    borderColor: '#3D3D7A',
    borderWidth: 2,
  },
  sendButton: {
    backgroundColor: '#3D3D7A',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  resendText: {
    color: '#3D3D7A',
    fontSize: 14,
    textAlign: 'center',
  },
});

