import { OrderFormValues } from "./orders";
import { UserFormValues } from "./user";

export interface FormValues extends UserFormValues, OrderFormValues {}
