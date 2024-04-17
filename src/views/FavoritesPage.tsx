import { useMemo } from "react"
import { DrinkCard } from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function FavoritesPage() {

  const favorites = useAppStore(state => state.favourites)
  const hasFavorites = useMemo(() => favorites.length, [favorites])


  return (
    <>
      <h1 className=" text-4xl font-bold">
        Favorites
      </h1>

      {hasFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 sm:mx-16 sm:my-20 gap-12">
        {favorites.map((drink) => (
          <DrinkCard
            key={drink.idDrink}
            drink={drink} />
        ))}
      </div>) : (
        <p className=" my-10 text-center text-2xl">There are no favorites yet. Use the button to add recipes to your favorites</p>
      )}
    </>
  )
}
