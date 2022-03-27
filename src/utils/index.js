
export const resizeImage = (url, width=640, height=480) => {
  if(!url){
    return "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
  }
  let isShopify = /(cdn\.shopify\.com)/i.test(url)
  let resizedUrl = url
  if(isShopify){
    let extension = url.split('.').pop()
    let filePath = url.split(`.${extension}`)[0]
    resizedUrl = `${filePath}_${width}x${height}.${extension}`    
  }    
  return resizedUrl
}

export const formatCurrency = (money, locale='en-US',currency='USD') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(money);
}
