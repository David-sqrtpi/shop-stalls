import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Product } from "./Product";
import { Purchase } from "./purchase";

export class PurchaseItem {
    id?: number;
    purchase?: Purchase;
    product: Product;
    quantity?: number;
    price?: number;
}