import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import {
  oneProductType,
  responseType,
} from "@/components/utils/ProductsDataArrayAndType";
import ProductDetail from "@/components/view/ProductDetail";
import ContextWrapper from "@/global/context";
import { Metadata } from "next";


// Metdata Generator

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  // fetch data
  const product = await fetch(
    `https://crirwfkz.api.sanity.io/v2023-07-06/data/query/production?query=*[_type == 'products']`
  ).then((res: any) => res.json());
  const titleToSet: oneProductType = product.result.find(
    (item: oneProductType) => item.slug.current == slug
  );
  return {
    title: titleToSet.productName,
    description: titleToSet.description,
  };
}

// Fetch particular data of product using slug
async function fetchPreviewData(slug: string) {
  let res = await fetch(
    `https://crirwfkz.api.sanity.io/v2023-07-06/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+slug.current+%3D%3D+%22${slug}%22%5D`
  );
  return res.json();
}

// Generating static pages for every product
export async function generateStaticParams() {
  let res = await fetch(
    `https://crirwfkz.api.sanity.io/v2023-07-06/data/query/production?query=*[_type == 'products']`
  ).then((res: any) => res.json());
  return res.result.map((item: oneProductType) => {
    slug: item.slug;
  });
}

const Catalog = async ({ params }: { params: { slug: string } }) => {
  let data: responseType = await fetchPreviewData(params.slug);
  return (
    <ContextWrapper>
      <ProductDetail item={data.result[0]} />
    </ContextWrapper>
  );
};

export default Catalog;
