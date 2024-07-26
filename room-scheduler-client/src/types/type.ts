export enum Paths {
    HomePage = '/',
    SchedulePage = '/schedule',
    LoginPage = '/login',
    RegistrationPage = '/registration',
    NotFoundPage = '*'
}

export interface LoginFormProps {
    typeForm: string;
}