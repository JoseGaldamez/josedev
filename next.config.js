/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.radioprogresohn.net',
            },
            {
                protocol: 'https',
                hostname: 'play-lh.googleusercontent.com'
            }
        ],
    },
}

module.exports = nextConfig
