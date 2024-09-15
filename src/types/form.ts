import { OrderFormValues } from "./orders";
import { Product } from "./products";
import { UserFormValues } from "./user";

export interface FormValues extends UserFormValues, OrderFormValues, Product {}
