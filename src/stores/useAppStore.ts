import { create } from 'zustand';
import { createRecipesSlice, type RecipeSliceType } from './recipeSlice';
import { devtools } from 'zustand/middleware';
import { createFavoritesSlice } from './favoritesSlice';
import type {FavoriteSliceType} from './favoritesSlice';
import { createNotificationSlice } from './notificationSlice';
import type {NotificationSliceType} from './notificationSlice';

export const useAppStore = create<RecipeSliceType & FavoriteSliceType & NotificationSliceType>()(devtools( (...a)=> ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    
})))
