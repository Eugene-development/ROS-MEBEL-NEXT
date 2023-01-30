// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    // Uncomment the line below to enable basePath, pages and
    // redirects will then have a path prefix (`/app` in this case)
    //
    // basePath: '/app',

    async redirects() {
        return [
            {
                source: '/404',
                destination: '/',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
