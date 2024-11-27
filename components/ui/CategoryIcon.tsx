"use client"
import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type CategoryIconProps = {
    category: Category
}

const CategoryIcon = ({category} : CategoryIconProps) => {
  const params = useParams<{algomas:string}>();
  console.log(params);
  
  return (
    <div >
        <div className="w-48, h-48 relative">
            <Image src={`/icon_${category.slug}.svg`} alt="categoria_img" 
           fill
            />
        </div>
        <Link className="text-xl font-bold " href={`/order/${category.slug}`}>
            {category.name}
        </Link>
    </div>
  )
}

export default CategoryIcon
