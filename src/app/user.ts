import { Role } from "./role";

export interface User {
    id: number;
    username: string;
    password: string;
    jobTitle: string;
    roles: Set<Role>;
}