import { User } from "firebase/auth";

export interface AuthStateType {
          user: Partial<User>
}