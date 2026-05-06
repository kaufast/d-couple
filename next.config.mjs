/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Enable modern image formats
        formats: ['image/avif', 'image/webp'],

        // Device sizes for responsive images
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

        // Image sizes for different breakpoints
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

        // Minimum cache TTL in seconds
        minimumCacheTTL: 60,

        // Enable dangerouslyAllowSVG for SVG optimization
        dangerouslyAllowSVG: true,

        // Content security policy for SVG
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

        // Allow images from Supabase
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.supabase.co',
            },
            {
                protocol: 'https',
                hostname: '**.supabase.in',
            },
        ],
    },

    // Compression
    compress: true,

    // Remove X-Powered-By header
    poweredByHeader: false,

    // Security headers
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.vercel-insights.com https://www.googletagmanager.com https://www.google-analytics.com",
                            "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
                            "img-src 'self' data: https: blob:",
                            "font-src 'self' data: https://fonts.gstatic.com",
                            "connect-src 'self' https://*.supabase.co https://*.supabase.in wss://*.supabase.co wss://*.supabase.in https://vercel-insights.com https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://www.google.com",
                            "frame-ancestors 'none'",
                            "base-uri 'self'",
                            "form-action 'self'",
                        ].join('; '),
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                ],
            },
        ];
    },

    // Optimize package imports
    experimental: {
        optimizePackageImports: ['react-icons', 'lodash'],
    },
};

export default nextConfig;
