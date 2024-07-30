import { $api } from "../http/http";
import { AxiosResponse } from "axios";
// import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../types/models/IUser";

export class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users');
    }
}