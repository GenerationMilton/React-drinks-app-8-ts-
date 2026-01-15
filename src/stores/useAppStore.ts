import { create } from 'zustand';
import { createRecipesSlice, type RecipeSliceType } from './recipeSlice';
import { devtools } from 'zustand/middleware';
import { createFavoritesSlice } from './favoritesSlice';
import type {FavoriteSliceType} from './favoritesSlice';


export const useAppStore = create<RecipeSliceType & FavoriteSliceType>()(devtools( (...a)=> ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    
})))
