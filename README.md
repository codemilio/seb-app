

# SEB App

## Sobre o Projeto

[Descreve o projeto aqui]

## Pré-Requisitos

Antes de começar, você precisará de alguns softwares essenciais dependendo do seu sistema operacional.

--- 

## Instalando o npm (Node package manager)

O `npm` é um gerenciador de pacotes para JavaScript e é necessário para instalar as dependências e executar scripts do projeto. Ele é distribuído com o Node.js, o que significa que ao instalar o Node.js, o npm também será instalado.

### Instalação do Node.js e npm

#### Para macOS e Windows

1. **Baixe o Node.js**: Acesse [nodejs.org](https://nodejs.org/) e baixe a versão recomendada para o seu sistema operacional.

2. **Instale o Node.js e npm**: Siga as instruções de instalação no instalador do Node.js.

3. **Verifique a Instalação**:
   Abra o terminal (macOS) ou o prompt de comando (Windows) e execute os seguintes comandos para verificar se o Node.js e o npm foram instalados corretamente:
   ```bash
   node -v
   npm -v
   ```
   Estes comandos devem mostrar as versões do Node.js e do npm, respectivamente.


### Para macOS (iOS e Android)

- **Xcode** (para emulação de iOS e construção de app)
- **Android Studio** (para emulação de Android)

### Para Windows (Android)

- **Android Studio** (para emulação de Android)

## Configuração do Ambiente de Desenvolvimento

### Instalando o Expo CLI

```bash
npm install -g expo-cli
# ou
yarn global add expo-cli
```

### Configuração do Emulador

#### Android Studio (macOS e Windows)

1. Instale o Android Studio e siga as instruções para instalar o Android SDK.
2. Use o AVD Manager para configurar um dispositivo virtual Android (AVD).

#### Xcode (macOS para iOS)

1. Instale o Xcode da Mac App Store.
2. Configure um simulador iOS no Xcode.

## Executando o Aplicativo

### Configurando o Projeto

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd seb
npm install
# ou
yarn install
```

### Iniciando o Projeto

Para iniciar com o Expo Go:

```bash
npm run start
# ou
yarn start
```

Para iniciar com o Expo Development Client:

```bash
npm run dev
# ou
yarn dev
```

### Executando no Emulador

**Para Android:**

- Tenha certeza de que o emulador Android está rodando.
- Execute `npm run android` ou `yarn android`.

**Para iOS (somente macOS):**

- Tenha certeza de que o simulador iOS está rodando.
- Execute `npm run ios` ou `yarn ios`.

### Executando em um Dispositivo Físico

Para rodar no dispositivo físico, escaneie o QR code gerado pelo Expo CLI com o aplicativo Expo Go.

## Problemas Comuns e Soluções

- **Espaço Insuficiente no Disco**: Certifique-se de ter espaço suficiente para instalação e emulação.
- **Dependências Desatualizadas**: Atualize suas dependências e ferramentas se enfrentar problemas.

## Links Úteis

- [Documentação do Expo](https://docs.expo.dev/)
- [Documentação do React Native](https://reactnative.dev/docs/getting-started)
