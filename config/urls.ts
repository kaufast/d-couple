/**
 * External URLs Configuration
 * Centralized configuration for all external URLs used in the application
 */

export const EXTERNAL_URLS = {
    // Contact & Location
    GOOGLE_MAPS_LOCATION: "https://maps.app.goo.gl/EBrRJL69eUWH1PzG8",
    GOOGLE_MAPS_EMBED: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18917.178328898015!2d-81.87205212082073!3d36.244635574266084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850f355d556abbf%3A0x7fb25598fe987c21!2s1342%20Laurel%20Creek%20Rd%2C%20Sugar%20Grove%2C%20NC%2028679%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1752052708066!5m2!1svi!2s",

    // Documentation & Support
    DOCUMENTATION: "https://foks-html-docs.vercel.app/",
    SUPPORT_TICKSY: "https://alithemes.ticksy.com/",
    THEMEFOREST_FAQ: "https://themeforest.net/licenses/faq#main-differences-licenses-a",

    // Video/Media
    YOUTUBE_DEFAULT_VIDEO: "https://www.youtube.com/watch?v=k2kiyWu_XNc",
    YOUTUBE_DEFAULT_VIDEO_ID: "k2kiyWu_XNc",
} as const;

export type ExternalUrlKey = keyof typeof EXTERNAL_URLS;





