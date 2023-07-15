import CartComponent from "@/components/view/CartParent/cartChild";
import ContextWrapper from "@/global/context";

async function fetchAllStoreProducts() {
  let res = await fetch(
    `https://crirwfkz.api.sanity.io/v2023-07-06/data/query/production?query=*[_type == 'products']`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return res.json();
}

const Cart = async () => {
  let allProductsOfStore = await fetchAllStoreProducts();
  return (

      <CartComponent allProductsOfStore={allProductsOfStore.result} />

  );
};

export default Cart;
