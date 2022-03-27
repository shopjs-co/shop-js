export const resizeImage = (url, height, width) => {
  if(!url) return; 
  let extension = url.split('.').pop()
  let filePath = url.split(`.${extension}`)[0]
  let resizedUrl = `${filePath}_${width}x${height}.${extension}`
  return resizedUrl
}

export const formatCurrency = (money, locale='en-US',currency='USD') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(money);
}
