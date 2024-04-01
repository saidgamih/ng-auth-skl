import {IUser} from "./IUser";

export interface IAuthInfo {
  accessToken: string,
  payload: IUser
}
