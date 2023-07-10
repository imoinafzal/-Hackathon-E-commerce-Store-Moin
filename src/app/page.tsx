import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import Hero from "@/components/view/Hero";
import Jewelery from "@/components/view/Jewelery";
import Newsletter from "@/components/view/NewsLetter";
import ProductCarousel from "@/components/view/ProductCarousel";
import ProductsType from "@/components/view/ProductsType";

async function fetchAllProductsData(){
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`, {
    next: {
      revalidate: 60
    }
  });
  
  if (!res.ok){
    throw new Error("Failed to fetch")
  }
  return res.json();
  
}

export default async function Home() {
  let {result} = await fetchAllProductsData();

  return (
    <div>
      <Hero />
      <ProductsType />
      <ProductCarousel ProductData={result}/>
      <Jewelery />
      <Newsletter />
    </div>
  )
}
