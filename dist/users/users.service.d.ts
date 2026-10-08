export declare class UserService {
    private users;
    findByEmail(email: string): {
        id: number;
        name: string;
        email: string;
        password: string;
    } | undefined;
    findAll(): {
        id: number;
        name: string;
        email: string;
        password: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
        password: string;
    } | undefined;
    create(data: {
        name: string;
        email: string;
        password: string;
    }): {
        message: string;
        user: {
            id: number;
            name: string;
            email: string;
        };
    };
    update(id: number, data: {
        password?: string;
    }): {
        id: number;
        name: string;
        email: string;
        password: string;
    } | null;
    remove(id: number): boolean;
}
