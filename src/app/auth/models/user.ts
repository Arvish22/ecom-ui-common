import { Role } from "./role"

export interface User {
    id: string,
    username : string | null,
    password : string | null,
    email : string | null,
    firstName : string | null,
    lastName: string | null,
    phone: string | null,
    roles: Role[],
    resetPasswordToken: | null,
    business: string | null
}
