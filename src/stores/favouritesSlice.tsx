import { StateCreator } from "zustand";
import { Recipe } from "../types";


export type FavouritesSliceType = {
    favourites: Recipe[],
    handleClickFavourite: (recipe: Recipe) => void,
    favouriteExists: (id: Recipe['idDrink']) => boolean
}

export const createFavouritesSlice : StateCreator<FavouritesSliceType> = (set, get) => ({
    favourites: [],
    handleClickFavourite: (recipe) => {

        if (get().favouriteExists(recipe.idDrink)) {
            set((state) => ({
                favourites: state.favourites.filter(favourite => favourite.idDrink !== recipe.idDrink)
            }))
        } else {
            set({
                favourites: [...get().favourites, recipe]
            })
        }
    },
    favouriteExists: (id) => {
        return get().favourites.some(favourite => favourite.idDrink === id)
    }
});

//Slice pattern