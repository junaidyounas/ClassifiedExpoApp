import { AppStateType } from "./app/appStateType";
import { AuthStateType } from "./auth/authStateType";

export interface IAppState {
     app: AppStateType;
     auth: AuthStateType
}
