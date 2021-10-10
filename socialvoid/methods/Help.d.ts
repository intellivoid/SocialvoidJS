import { HelpDocument, ServerInformation } from "../types.js";
import MethodBase from "./MethodBase.js";
export default class Help extends MethodBase {
    private cachedServerInformation?;
    /**
     * Retrieves the Community Guidelines.
     */
    getCommunityGuidelines(): Promise<HelpDocument>;
    /**
     * Retrieves the Privacy Policy.
     */
    getPrivacyPolicy(): Promise<HelpDocument>;
    getServerInformation(force?: boolean): Promise<ServerInformation>;
    getTermsOfService(): Promise<HelpDocument>;
}
