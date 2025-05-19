import mongoose from "mongoose";
import { TContact } from "./contact.interface";

const ContractSchema = new mongoose.Schema<TContact>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    }
})

export const Contract = mongoose.model('Contact', ContractSchema)