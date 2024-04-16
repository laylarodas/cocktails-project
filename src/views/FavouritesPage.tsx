import { useMemo } from "react"
import { DrinkCard } from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function FavouritesPage() {

  const favourites = useAppStore(state => state.favourites)
  const hasFavourites = useMemo(() => favourites.length, [favourites])


  return (
    <>
      <h1 className=" text-4xl font-bold">
        Favourites
      </h1>

      {hasFavourites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 sm:mx-16 sm:my-20 gap-12">
        {favourites.map((drink) => (
          <DrinkCard
            key={drink.idDrink}
            drink={drink} />
        ))}
      </div>) : (
        <p className=" my-10 text-center text-2xl">There are no favourites yet. Use the button to add recipes to your favourites</p>
      )}
    </>
  )
}
