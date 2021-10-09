import Request from "../Request.ts";
import * as types from "../types/mod.ts";
import MethodBase from "./MethodBase.ts";
import { NAME, PLATFORM, VERSION } from "../constants.ts";

export default class Session extends MethodBase {
  /*
   * Creates a session.
   *
   * **Usage:**
   * ```js
   * client.session.create("Fridgevoid", "1.0.1", "Samsung Smart Fridge")
   * ```
   *
   * **Note:** this method does not save the session in the client, it is recommended to use `client.newSession` instead.
   */
  create(
    publicHash: string,
    privateHash: string,
    name = NAME,
    version = VERSION,
    platform = PLATFORM,
  ) {
    return this.client.invokeRequest(
      new Request("session.create", {
        public_hash: publicHash,
        private_hash: privateHash,
        name,
        version,
        platform,
      }),
    );
  }

  /*
   * Gets information about the current session
   */
  async get() {
    return types.Session.fromObject(
      await this.client.invokeRequest(new Request("session.get"), true),
    );
  }

  /**
   * Logs out of the account associated to the session nothing if not logged in.
   */
  logout() {
    return this.client.invokeRequest(new Request("session.logout", true), true);
  }

  /**
   * Logs in to an account.
   *
   * @param username The username of the target account.
   * @param password The password of the target account.
   * @param otp An optional one-time password of the target account.
   */
  authenticateUser(username: string, password: string, otp?: string) {
    return this.client.invokeRequest(
      new Request("session.authenticate_user", {
        username,
        password,
        otp,
      }),
      true,
    );
  }

  /**
   * Registers an account.
   *
   * @param termsOfServiceId ID of Terms of Services gained from `help.getTermsOfServices`.
   * @param username The username of the account.
   * @param password The password of the account.
   * @param firstName The first name of the account.
   * @param lastName An optional last name of the account.
   */
  async register(
    termsOfServiceId: string,
    username: string,
    password: string,
    firstName: string,
    lastName?: string,
  ) {
    return types.Peer.fromObject(
      await this.client.invokeRequest(
        new Request("session.register", {
          terms_of_service_id: termsOfServiceId,
          terms_of_service_agree: true,
          username,
          password,
          first_name: firstName,
          last_name: lastName,
        }),
        true,
      ),
    );
  }
}
