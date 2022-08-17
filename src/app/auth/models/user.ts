import { Role } from "./role"

export class User {
    id!: string
    username : string | null = null
    password : string | null = null
    email : string | null = null
    firstName : string | null = null 
    lastName: string | null = null 
    phone: string | null = null 
    roles: Role[] | null = null 
    resetPasswordToken: | null = null;

    public constructor(init?:Partial<User>) {
        Object.assign(this, init);
    }
}
