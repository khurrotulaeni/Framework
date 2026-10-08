import { UserService } from './users.service.js';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): {
        id: number;
        name: string;
        email: string;
        password: string;
    }[];
    findOne(id: string): {
        id: number;
        name: string;
        email: string;
        password: string;
    } | undefined;
    create(name: string, email: string, password: string): {
        message: string;
        user: {
            id: number;
            name: string;
            email: string;
        };
    };
    update(id: string, password: string): {
        id: number;
        name: string;
        email: string;
        password: string;
    } | null;
    remove(id: string): {
        message: string;
    };
}
