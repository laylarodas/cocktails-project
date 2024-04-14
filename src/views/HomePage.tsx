import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import { DrinkCard } from "../components/DrinkCard"

export const HomePage = () => {

  const drinks = useAppStore(state => state.drinks)

  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])

  
  return (
    <>
        <h1 className="mx-16 text-4xl font-bold">Recipes</h1>

        {hasDrinks ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 mx-16 my-20 gap-12">
            {drinks.drinks.map((drink) => (
                <DrinkCard 
                    key={drink.idDrink}
                    drink={drink}
                />
            ))}
          </div>
        ) : (
            <p className=" my-10 text-center text-2xl">There are no drink. Use the form to get recipes </p>
   
        )}
    </>
 )

}

