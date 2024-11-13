import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";

const getCategories = async() => {
  return await prisma.category.findMany();
  // console.log(categories);
  
}
export default async function OrderSideBar() {

  const categories = await getCategories()
  console.log("categories",categories);
    
  return (
    <nav>
      {categories.map(category =>(
        <CategoryIcon  key={category.id}
        category={category}/>
      ))}
    </nav>
  )
}

