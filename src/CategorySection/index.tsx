import { Category } from "@/interfaces/categories";
import { categoriesMock } from "@/mocks/categories"
import { useEffect, useState } from "react"
export default  function CategorySection(){
    const  [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        async function fetchCategories(){
            setCategories(categoriesMock)
        }
        fetchCategories
    }, [])

    return(
        <section className="py-8">
            <h2 className=" text-2xl font-bold mb-6">
                Categorias Populares
            </h2>
            <div className="grid grid-cols-6 max-md:grid-cols-3 max-sm:grid-cols-2
            gap-4">
                {categories.map( (category) => {
                    return(
                      <div className="group"></div>
                    )
                })}
            </div>
        </section>
    )
}