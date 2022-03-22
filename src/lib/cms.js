import { fetch } from 'whatwg-fetch';

const origin = 'https://layer0-docs-layer0-examples-api-default.layer0.link';

function getApiUrl() {
  let apiUrl;

  if (typeof window !== 'undefined') {
    apiUrl = window.location.protocol + '//' + window.location.host + '/api';
  } else {
    apiUrl = origin;
  }

  return apiUrl;
}

export function getOptimizedImageUrl(path) {
  const apiPath = encodeURIComponent(origin + path);
  let optPath = `https://opt.moovweb.net?quality=30&height=250&width=250&img=${apiPath}`;

  return optPath;
}

/**
 * Gets all categories
 *
 * @return {Array}
 */
export async function getCategories() {
  const ret = { categories: [] };

  try {
    const res = await fetch(`${getApiUrl()}/category`).catch((e) => ({
      error: e.message,
    }));
    ret.categories = await res.json();
  } catch (e) {
    console.error('API Error', e);
  }

  return ret;
}

/**
 * Gets a category by ID
 * @param {String} categoryId
 *
 * @return {Object}
 */
export async function getCategory(categoryName) {
  const ret = { products: [] };

  const res = await fetch(`${getApiUrl()}/category/${categoryName}`).catch(
    (e) => (ret.error = e.message)
  );

  ret.products = await res.json();
  // ret.products.forEach((item) => (item.picture = getOptimizedImageUrl(item.picture)));

  return ret;
}

/**
 * Gets a product by ID
 * @param {String} productId
 *
 * @return {Object}
 */
export async function getProductById(productId) {
  const ret = { product: {} };

  const res = await fetch(`${getApiUrl()}/product/${productId}`).catch(
    (e) => (ret.error = e.message)
  );

  ret.product = await res.json();
  ret.product.picture = getOptimizedImageUrl(ret.product.picture);

  return ret;
}
