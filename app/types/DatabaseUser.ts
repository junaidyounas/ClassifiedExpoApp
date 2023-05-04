import { DateTime } from "i18n-js/typings";

export type DatabaseUser = {
     countryCode: string;
     createdAt: string | number | Date;
     email: string;
     isActive: boolean;
     isEmailVerified: boolean;
     isPhoneVerified: boolean;
     isoCountryCode: string;
     name: string;
     phone: string;
     profilePicture: string;
     updatedAt: string | number | Date;
};