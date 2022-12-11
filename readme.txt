#Se der erro de SSL rodar o comando abaixo

$env:NODE_OPTIONS = "--openssl-legacy-provider"
npx react-native start

#para rodar no android
npx react-native run-android