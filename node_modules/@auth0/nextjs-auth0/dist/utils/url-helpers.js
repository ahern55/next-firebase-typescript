"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper which tests if a URL can safely be redirected to. Requires the URL to be relative.
 * @param dangerousRedirect
 * @param safeBaseUrl
 */
function toSafeRedirect(dangerousRedirect, safeBaseUrl) {
    var url;
    try {
        url = new URL(dangerousRedirect, safeBaseUrl);
    }
    catch (e) {
        return undefined;
    }
    if (url.origin === safeBaseUrl.origin) {
        return url.toString();
    }
    return undefined;
}
exports.default = toSafeRedirect;
//# sourceMappingURL=url-helpers.js.map