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
                hostname: 'res.cloudinary.com'
            },
            {
                protocol: 'https',
                hostname: 'play-lh.googleusercontent.com'
            },
            {
                protocol: 'https',
                hostname: "img-c.udemycdn.com"
            }
        ],
    },
}

module.exports = nextConfig
