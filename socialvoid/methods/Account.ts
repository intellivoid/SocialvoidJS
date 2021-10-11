import Request from "../Request.ts";
import { Document } from "../types.ts";
import MethodBase from "./MethodBase.ts";

export default class Account extends MethodBase {
  /**
   * Removes the profile picture of the currently logged in account.
   */
  deleteProfilePicture(): Promise<boolean> {
    return this.client.invokeRequest(
      new Request("account.delete_profile_picture"),
      true,
    );
  }

  /**
   * Sets the profile picture of the currently logged in account.
   *
   * @param document The document ID or instance of the profile picture.
   */
  setProfilePicture(document: string | Document) {
    document = typeof document === "string" ? document : document.id;

    return this.client.invokeRequest(
      new Request("account.set_profile_picture", {
        document,
      }),
      true,
    );
  }

  /**
   * Removes the profile biography of the currently logged in account.
   */
  clearProfileBiography(): Promise<boolean> {
    return this.client.invokeRequest(
      new Request("account.clear_profile_biography"),
      true,
    );
  }

  /**
   * Removes the profile location of the currently logged in account.
   */
  clearProfileLocation(): Promise<boolean> {
    return this.client.invokeRequest(
      new Request("account.clear_profile_location"),
      true,
    );
  }
}
