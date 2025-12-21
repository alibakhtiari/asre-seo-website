/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://asreseo.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: 'out',
}
