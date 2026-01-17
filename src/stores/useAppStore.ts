import { create } from 'zustand';
import { createRecipesSlice, type RecipeSliceType } from './recipeSlice';
import { devtools } from 'zustand/middleware';
import { createFavoritesSlice } from './favoritesSlice';
import type {FavoriteSliceType} from './favoritesSlice';
import { createNotificationSlice } from './notificationSlice';
import type {NotificationSliceType} from './notificationSlice';
import { createAISlice, type AISlice } from './aiSlice';

export const useAppStore = create<RecipeSliceType & FavoriteSliceType & NotificationSliceType & AISlice>()(devtools( (...a)=> ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
    
})))
