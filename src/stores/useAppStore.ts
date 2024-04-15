import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { RecipesSliceType, createRecipesSlice } from './recipeSlice'
import { FavouritesSliceType, createFavouritesSlice} from './favouritesSlice'

export const useAppStore = create<RecipesSliceType & FavouritesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavouritesSlice(...a)
})))