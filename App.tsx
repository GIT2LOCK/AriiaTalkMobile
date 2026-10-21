import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const colors = {
  background: '#F5F6F9',
  foreground: '#080A3D',
  card: '#FFFFFF',
  primary: '#00005C',
  primaryForeground: '#FFFFFF',
  secondary: '#6199F2',
  muted: '#EEF0F5',
  mutedForeground: '#5C647A',
  border: '#D9DDE8',
};

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" backgroundColor={colors.background} />
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <View style={styles.brand}>
              <Image
                source={require('./assets/2lock-logo.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />

            </View>

            <View style={styles.card}>
              <Text style={styles.eyebrow}>BEM-VINDO DE VOLTA</Text>
              <Text style={styles.title}>Entre na sua conta</Text>
              <Text style={styles.description}>
                Acesse suas conversas e continue seus atendimentos.
              </Text>

              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="seu@email.com"
                placeholderTextColor={colors.mutedForeground}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="emailAddress"
              />

              <Text style={styles.label}>Senha</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={senha}
                  onChangeText={setSenha}
                  placeholder="Digite sua senha"
                  placeholderTextColor={colors.mutedForeground}
                  secureTextEntry={!mostrarSenha}
                  autoCapitalize="none"
                  textContentType="password"
                />
                <TouchableOpacity
                  onPress={() => setMostrarSenha(!mostrarSenha)}
                  accessibilityRole="button"
                  accessibilityLabel={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  <Text style={styles.showPassword}>
                    {mostrarSenha ? 'Ocultar' : 'Mostrar'}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => {}}
              >
                <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.loginButton}
                activeOpacity={0.8}
                onPress={() => {}}
              >
                <Text style={styles.loginButtonText}>Entrar na conta</Text>
                <Text style={styles.loginArrow}>→</Text>
              </TouchableOpacity>

              <View style={styles.secureNote}>
                <View style={styles.secureDot} />
                <Text style={styles.secureText}>
                  Acesso à central de atendimento 2LOCK
                </Text>
              </View>
            </View>

            <Text style={styles.footer}>ARIIATALK MOBILE · 2LOCK</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboard: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  brand: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoImage: {
    width: 190,
    height: 76,
    marginBottom: 14,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  logoText: {
    color: colors.primaryForeground,
    fontSize: 34,
    fontWeight: '800',
  },
  brandName: {
    color: colors.foreground,
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  brandAccent: {
    color: colors.secondary,
  },
  brandSubtitle: {
    color: colors.mutedForeground,
    fontSize: 13,
    marginTop: 7,
  },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: 24,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  title: {
    color: colors.foreground,
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  description: {
    color: colors.mutedForeground,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 9,
    marginBottom: 25,
  },
  label: {
    color: colors.foreground,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 9,
  },
  input: {
    height: 50,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.input,
    borderRadius: 10,
    paddingHorizontal: 14,
    color: colors.foreground,
    fontSize: 14,
    marginBottom: 20,
  },
  passwordContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.input,
    borderRadius: 10,
    paddingHorizontal: 14,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    color: colors.foreground,
    fontSize: 14,
  },
  showPassword: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600',
    paddingLeft: 8,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    paddingVertical: 17,
  },
  forgotText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600',
  },
  loginButton: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop: 2,
  },
  loginButtonText: {
    color: colors.primaryForeground,
    fontSize: 15,
    fontWeight: '700',
  },
  loginArrow: {
    color: colors.primaryForeground,
    fontSize: 21,
    marginLeft: 10,
    marginTop: -2,
  },
  secureNote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
  secureDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.secondary,
    marginRight: 8,
  },
  secureText: {
    color: colors.mutedForeground,
    fontSize: 10,
    textAlign: 'center',
    flexShrink: 1,
  },
  footer: {
    color: colors.mutedForeground,
    opacity: 0.8,
    fontSize: 10,
    letterSpacing: 1.4,
    textAlign: 'center',
    marginTop: 26,
  },
});



