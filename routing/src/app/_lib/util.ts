export const getProduct = async (productId: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await res.json();
  return product;
};
