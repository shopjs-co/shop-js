export const SHOP_NAME = process.env.NEXT_PUBLIC_SHOP_NAME || 'ShopJS.co'
export const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN
export const SHOPIFY_STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN
export const PRODUCT_IMAGE_RESIZE = 800

// Material UI breakpoints are editable in theme/breakpoints
export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 3,
    partialVisibilityGutter: 50
  },
  desktop: {
    breakpoint: { max: 1280, min: 960 },
    items: 3,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 960, min: 600 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 20
  }
};
