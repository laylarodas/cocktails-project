import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice";

export type FavouritesSliceType = {
    favourites: Recipe[],
    handleClickFavourite: (recipe: Recipe) => void,
    favouriteExists: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavouritesSlice : StateCreator<FavouritesSliceType & RecipesSliceType, [], [], FavouritesSliceType> = (set, get, api) => ({
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
        createRecipesSlice(set, get, api).closeModal()
        localStorage.setItem('favourites', JSON.stringify(get().favourites))
    },
    favouriteExists: (id) => {
        return get().favourites.some(favourite => favourite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavourites = localStorage.getItem('favourites')
        if (storedFavourites) {
            set({
                favourites: JSON.parse(storedFavourites)
            })
        }
    }
});

//Slice pattern