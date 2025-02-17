import { Router } from "express";
import { ContactController } from "./contact.controller";

const router=Router()
router.post('/',ContactController.sendMail)

export const ContactRoute=router