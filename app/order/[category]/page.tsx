import ProductCard from "@/components/products/ProductCard";
import { prisma } from "@/src/lib/prisma";

async function getProducts(category:string){
  const products = await prisma.product.findMany({
    where: {
      category:{
        slug: category
      }
    }
  })
  return products
}

export default async function page({ params }: { params: { category: string } }) {
  const category = params?.category; // Asigna `params.category` a una variable para evitar el acceso directo

  const products = await getProducts(category); // Usa la variable `category`
  // console.log(products);

  return (
    <>
      <div className="grid grids-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 imtes-start">
        {products.map(product =>(
          <ProductCard key={product.id}
          product={product}/>
        ))}
      </div>
    </>
  );
}
