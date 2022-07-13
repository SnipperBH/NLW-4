import { Router } from "express";
import { SurveysController } from "./controllers/SurveyController";
import { UserController } from "./controllers/UserController";
import { SendMailController } from "./controllers/SendMailController";
import { AnswerController } from "./controllers/AnswerController";

const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();

// Rotas de usuários
router.post("/users", userController.create)

//Rotas de pesquisa
router.post("/surveys", surveyController.create)
router.get("/surveys", surveyController.show)

//Envio de Email
router.post("/sendmail", sendMailController.execute);

router.get("/answers/:value", answerController.execute)

export { router };