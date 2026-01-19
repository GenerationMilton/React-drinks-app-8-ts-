import { streamText } from 'ai'
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export default {
    
    async generateRecipe(promt: string) {
        console.log(promt);
        
        const openrouter = createOpenRouter({
            apiKey: import.meta.env.VITE_OPENROUTER_KEY,
        });
        
        const result = streamText({
            model: openrouter.chat('meta-llama/llama-3.2-3b-instruct:free'),
            prompt: promt,
            system: 'Eres un bartender que tiene 50 años de experiencia y le sirvio una bebida a James Bond',
            temperature: 0.2
        });
    
        console.log(result.textStream);
        return result.textStream;
    } 
}
