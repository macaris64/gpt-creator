import {OpenAI} from 'openai';
import {APIError} from "../utils/errors";

import {GPT} from "../models/gpt.model";

class GPTInstanceManager {
    private openai: OpenAI;
    constructor() {
        this.openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})
    }
    async createGPTInstance(name: string, systemMessage: string): Promise<GPT> {
        return await GPT.create({name, systemMessage});
    }

    async sendMessageToGpt(id: number, message: string): Promise<any> {
        const gptInstance = await GPT.findByPk(id);
        if (!gptInstance) {
            throw new APIError(404, "GPT instance not found");
        }
        return this.openai.chat.completions.create({
            messages: [
                {role: "system", content: gptInstance.systemMessage},
                {role: "user", content: message}
            ],
            model: "gpt-4",
            response_format: {"type": "text"},
            max_tokens: 3000,
        });
    }

    async getGPTInstanceByName(name: string): Promise<GPT | null> {
        return await GPT.findOne({where: {name}});
    }
}

export default GPTInstanceManager;
