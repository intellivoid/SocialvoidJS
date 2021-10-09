import Request from "../Request.ts";
import { HelpDocument, ServerInformation } from "../types/mod.ts";
import MethodBase from "./MethodBase.ts";

export default class Help extends MethodBase {
  private cachedServerInformation?: ServerInformation;

  /**
   * Retrieves the Community Guidelines.
   */
  async getCommunityGuidelines() {
    return HelpDocument.fromObject(
      await this.client.invokeRequest(
        new Request("help.get_community_guidelines"),
      ),
    );
  }

  /**
   * Retrieves the Privacy Policy.
   */
  async getPrivacyPolicy() {
    return HelpDocument.fromObject(
      await this.client.invokeRequest(new Request("help.get_privacy_policy")),
    );
  }

  /*
   * Retrieves server information.
   */
  async getServerInformation(force?: boolean) {
    if (this.cachedServerInformation && !force) {
      return this.cachedServerInformation;
    }

    return ServerInformation.fromObject(
      await this.client.invokeRequest(
        new Request("help.get_server_information"),
      ),
    );
  }

  /*
   * Retrieves the Terms of Service.
   */
  async getTermsOfService() {
    return HelpDocument.fromObject(
      await this.client.invokeRequest(new Request("help.get_terms_of_service")),
    );
  }
}
