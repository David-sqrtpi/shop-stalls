import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Product } from "./Product";
import { Purchase } from "./purchase";

export class PurchaseItem {
    id?: number;
    purchase?: Purchase;
    product: Product;
    quantity?: number;
    price?: number;
    subtotal?: number;

    static asFormGroup(): FormGroup {
        const fg = new FormGroup({
            quantity: new FormControl('', [Validators.required, Validators.min(1)]),
            price: new FormControl('', [Validators.required, Validators.min(1)]),
        });
        return fg;
    }
}