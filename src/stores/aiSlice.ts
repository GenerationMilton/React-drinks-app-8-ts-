
import { StateCreator } from "zustand";

export type AISlice ={
    recipe: string
    generateRecipe: (promt: string) => Promise<void>
}

export const createAISlice : StateCreator<AISlice, [], [], AISlice> = () => ({
    recipe: '',
    generateRecipe: async (prompt) => {
        console.log(prompt)
    }
})