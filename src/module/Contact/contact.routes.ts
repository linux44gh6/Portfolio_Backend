import { Router } from "express";
import { ContactController } from "./contact.controller";

const router=Router()
router.post('/',ContactController.sendMail)
router.get('/',ContactController.getAllContact)

export const ContactRoute=router