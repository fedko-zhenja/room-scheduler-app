import { userModel } from "../models/user-model.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import { mailService } from "./mail-service.js";
import { tokenService } from "./token-service.js";
import { UserDto } from "../dtos/user-dto.js";
import { ApiError } from "../exceptions/api-error.js";

class UserService {
    // static SALT = 3;

    async registration(email, password) {
        
        const candidate = await userModel.findOne({email});
        
        if (candidate) {
            throw ApiError.BadRequest(`The user with email addresses ${email} already exists`)
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuidv4();

        const user = await userModel.create({email, password: hashPassword, activationLink});

        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async activate(activationLink) {
        const user = await userModel.findOne({activationLink});

        if (!user) {
            throw ApiError.BadRequest("Incorrect activation link");
        }

        user.isActivated = true;
        await user.save();
    }

    async login(email, password) {
        const user = await userModel.findOne({email});

        if (!user) {
            throw ApiError.BadRequest('User with this email was not found');
        }

        const isPassEquals = await bcrypt.compare(password, user.password);

        if (!isPassEquals) {
            throw ApiError.BadRequest('Incorrect password');
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto};
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);

        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await userModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

    async getAllUsers() {
        const users = await userModel.find();
        
        return users;
    }
}

export const userService = new UserService();