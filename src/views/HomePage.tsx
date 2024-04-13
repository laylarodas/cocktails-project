import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import { DrinkCard } from "../components/DrinkCard"

export const HomePage = () => {

  const drinks = useAppStore(state => state.drinks)

  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])

  
  return (
    <>
        <h1 className=" text-4xl font-bold">Recipes</h1>

        {hasDrinks ? (
          <>
            {drinks.drinks.map((drink) => (
                <DrinkCard 
                    key={drink.idDrink}
                    drink={drink}
                />
            ))}
          </>
        ) : (
            <p className=" my-10 text-center text-2xl">There are no drink. Use the form to get recipes </p>
   
        )}
    </>
 )

}

