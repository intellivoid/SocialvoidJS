import * as types from "../types.js";
import MethodBase from "./MethodBase.js";
export default class Session extends MethodBase {
    create(publicHash: string, privateHash: string, name?: string, version?: string, platform?: string): Promise<any>;
    get(): Promise<types.Session>;
    /**
     * Logs out of the account associated to the session nothing if not logged in.
     */
    logout(): Promise<any>;
    /**
     * Logs in to an account.
     *
     * @param username The username of the target account.
     * @param password The password of the target account.
     * @param otp An optional one-time password of the target account.
     */
    authenticateUser(username: string, password: string, otp?: string): Promise<any>;
    /**
     * Registers an account.
     *
     * @param termsOfServiceId ID of Terms of Services gained from `help.getTermsOfServices`.
     * @param username The username of the account.
     * @param password The password of the account.
     * @param firstName The first name of the account.
     * @param lastName An optional last name of the account.
     */
    register(termsOfServiceId: string, username: string, password: string, firstName: string, lastName?: string): Promise<types.Peer>;
}
