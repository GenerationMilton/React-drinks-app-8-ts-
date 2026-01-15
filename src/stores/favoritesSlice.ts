import { StateCreator} from 'zustand'
import type { Recipe } from '../types'

export type FavoriteSliceType ={
    favorites: Recipe[]
}

export const createFavoritesSlice : StateCreator<FavoriteSliceType> = () => ({
    favorites:[]
})