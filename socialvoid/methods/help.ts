import { Request } from "../request.ts";
import { HelpDocument, ServerInformation } from "../types.ts";
import { MethodBase } from "./method_base.ts";

export class Help extends MethodBase {
  private cachedServerInformation?: ServerInformation;

  /**
   * Retrieves the Community Guidelines.
   */
  getCommunityGuidelines(): Promise<HelpDocument> {
    return this.client.invokeRequest(
      new Request("help.get_community_guidelines"),
    );
  }

  /**
   * Retrieves the Privacy Policy.
   */
  getPrivacyPolicy(): Promise<HelpDocument> {
    return this.client.invokeRequest(new Request("help.get_privacy_policy"));
  }

  /*
   * Retrieves server information.
   */
  async getServerInformation(force?: boolean): Promise<ServerInformation> {
    if (this.cachedServerInformation && !force) {
      return this.cachedServerInformation;
    }

    const serverInformation = await this.client.invokeRequest(
      new Request("help.get_server_information"),
    );

    this.cachedServerInformation = serverInformation;

    return serverInformation;
  }

  /*
   * Retrieves the Terms of Service.
   */
  getTermsOfService(): Promise<HelpDocument> {
    return this.client.invokeRequest(new Request("help.get_terms_of_service"));
  }
}
