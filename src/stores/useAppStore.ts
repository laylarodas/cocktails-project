import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { RecipesSliceType, createRecipesSlice } from './recipeSlice'
import { FavouritesSliceType, createFavouritesSlice} from './favouritesSlice'
import { NotificationSliceType, createNotificationSlice } from './notificationsSlice'




export const useAppStore = create<RecipesSliceType & FavouritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavouritesSlice(...a),
    ...createNotificationSlice(...a)
})))