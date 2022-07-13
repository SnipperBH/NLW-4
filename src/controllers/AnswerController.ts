import { Request, response, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysUsersRepository } from '../repositories/ServeysUsersRepository';

class AnswerController {

    async execute(request: Request, Response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveysUserRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUserRepository.findOne({
            id: String(u)
        });

        if(!surveyUser) {
            return response.status(400).json({
                error: "Survey User does nost exists"
            })
        }

        surveyUser.value = Number(value);

        await surveysUserRepository.save(surveyUser);

        return response.json(surveyUser)
    }
}

export { AnswerController };
