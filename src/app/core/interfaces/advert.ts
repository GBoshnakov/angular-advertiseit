import { IUser } from "./user";

export interface IAd {
    subscribers: string[];
    _id: string;
    adName: string;
    userId: IUser;
    created_at: string;
    updatedAt: string;
    __v: number;
}