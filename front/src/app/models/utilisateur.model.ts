export interface Utilisateur{
    last_name: string;
    first_name: string;
    username: string;
    email: string;
    password?: string;
    password_confirm?: string;
}