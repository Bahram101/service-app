import { Alert, Linking } from 'react-native'

export const open2GIS = async () => {
  const twoGisUrl =
    'dgis://2gis.ru/routeSearch/rsType/car/to/76.840962,43.226181'
  // const webUrl = 'https://2gis.kz/almaty/search/76.84302,43.212172'
  const supported = await Linking.canOpenURL(twoGisUrl) 

  // if (supported) {
  //   await Linking.openURL(twoGisUrl)
  // } else {
  await Linking.openURL(twoGisUrl).catch(() => {
    Alert.alert('Ошибка', 'Не удалось открыть карту')
  })
  // }
}
