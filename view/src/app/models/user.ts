import { Company } from "./Company";
import { Role } from "./Role";

export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    age: number,
    state: string,
    company:Company,
    roles:Role []
}
