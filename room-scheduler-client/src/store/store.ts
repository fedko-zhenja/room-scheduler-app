/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "../types/models/IUser";
import { makeAutoObservable } from "mobx";
import { AuthService } from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../types/models/response/AuthResponse";
import { API_URL } from "../http/http";

export class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(email: string, password: string, redirectFunc: () => void) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            console.log(response);

            this.setAuth(true);
            this.setUser(response.data.user);

            redirectFunc();
        } catch(err: any) {
            console.log(err.response?.data?.message);
        }
    }

    async registration(email: string, password: string, redirectFunc: () => void) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);

            this.setAuth(true);
            this.setUser(response.data.user);

            redirectFunc();
        } catch(err: any) {
            console.log(err.response?.data?.message);
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');

            this.setAuth(false);
            this.setUser({} as IUser);
        } catch(err: any) {
            console.log(err.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);

        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch(err: any) {
            console.log(err.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}