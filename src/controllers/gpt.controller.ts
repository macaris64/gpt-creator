import {NextFunction, Request, Response} from 'express';

import GptInstanceManager from "../managers/gpt";
import {APIError} from "../utils/errors";

export const createGpt = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const gptManager = new GptInstanceManager();
        const {name, systemMessage} = req.body;
        if (!name || !systemMessage) {
            throw new APIError(400, "Missing required parameters");
        }
        let existingGptInstance = await gptManager.getGPTInstanceByName(name);
        if (existingGptInstance) {
            throw new APIError(400, "GPT instance with this name already exists");
        }
        let gptInstance = await gptManager.createGPTInstance(name, systemMessage);

        await gptManager.sendMessageToGpt(gptInstance.id, "Hello");
        res.status(200).json({gptInstance: gptInstance});
    } catch (e) {
        console.log(e)
        next(e);
    }
}

export const send = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const gptManager = new GptInstanceManager();
        const {id, message} = req.body;
        if (!id || !message) {
            throw new APIError(400, "Missing required parameters");
        }
        const response = await gptManager.sendMessageToGpt(parseInt(id), message);
        res.status(200).json({message: response});
    } catch (e) {
        next(e);
    }
}
