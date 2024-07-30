import { ReactNode } from 'react';

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

export interface ErrorBoundaryProps {
    children: ReactNode;
}
  
export interface ErrorBoundaryState {
    hasError: boolean;
}