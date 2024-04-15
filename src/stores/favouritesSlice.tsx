import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice";

export type FavouritesSliceType = {
    favourites: Recipe[],
    handleClickFavourite: (recipe: Recipe) => void,
    favouriteExists: (id: Recipe['idDrink']) => boolean
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
    },
    favouriteExists: (id) => {
        return get().favourites.some(favourite => favourite.idDrink === id)
    }
});

//Slice pattern