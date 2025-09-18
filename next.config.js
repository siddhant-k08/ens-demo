const { default: next } = require("next");

const nextConfig = {
    reactStrictMode: true,
    webpack: config => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        config.externals.push('pino-pretty', 'lookjs', 'encoding');
        return config;
    }
};

module.exports = nextConfig;