import { formatCurrency } from "@/src/lib/utils"
import { Product } from "@prisma/client"
import Image from "next/image"

type ProductCardProps = {
    product: Product
}
const ProductCard = ({product} : ProductCardProps) => {
  return (
    <div className="border bg-white ">
        <Image 
            width={400}
            height={500}
            src={`/products/${product.image}.jpg` }
            alt={`Imagen platillo ${product.name}`}
            quality={75}
        />
      <div className="p-5">
        <h3>{product.name}</h3>
        <p>{formatCurrency(product.price)}</p>
        <button 
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer">
                Agregar
        </button>
      </div>
    </div>
  )
}

export default ProductCard
