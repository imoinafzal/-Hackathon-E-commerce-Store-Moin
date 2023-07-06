import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import Hero from "@/components/view/Hero";
import ProductCarousel from "@/components/view/ProductCarousel";
import ProductsType from "@/components/view/ProductsType";

async function fetchAllProductsData(){
  // let res = await fetch(`${BASE_PATH_FORAPI}/api/products`)

  // if (!res.ok){
  //   throw new Error("Failed to fetch")
  // }
  // return res.json();
  return {response: "Hi"}
}

export default async function Home() {
  let {response} = await fetchAllProductsData();
  console.log("response :", response);

  return (
    <div>
      <Hero />
      <ProductsType />
      <ProductCarousel ProductData={response} />
    </div>
  )
}
