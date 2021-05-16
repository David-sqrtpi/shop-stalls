import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Product } from "./Product";
import { Purchase } from "./purchase";

export class PurchaseItem {
    id?: number;
    purchase?: Purchase;
    product: Product;
    quantity?: number;
    price?: number;
    subtotal?:number;

    static asFormGroup(item: PurchaseItem): FormGroup {
        const fg = new FormGroup({
            purchase: new FormControl(''),
            product: new FormControl(),
            quantity: new FormControl('', [Validators.required, Validators.min(1)]),
            price: new FormControl('', [Validators.required, Validators.min(1)]),
            //subtotal: new FormControl(''),
        });
        return fg;
    }
}