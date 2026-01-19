import { streamText } from 'ai'
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export default {
    
    async generateRecipe(promt: string) {
        console.log(promt);
        //console.log("👉 KEY:", import.meta.env.VITE_OPENROUTER_KEY);
    
        const openrouter = createOpenRouter({
            apiKey: import.meta.env.VITE_OPENROUTER_KEY,
        });
        
        const result = streamText({
            model: openrouter.chat('meta-llama/llama-3.2-3b-instruct:free'),
            prompt: promt
        });
    
        console.log(result.textStream);
        return result.textStream;
    } 
}
