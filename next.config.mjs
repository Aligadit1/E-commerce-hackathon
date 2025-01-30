import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
    
        return config;
      },
      images: {
        remotePatterns:[
          {
          hostname:"cdn.sanity.io"
      }],
      },
};

export default nextConfig;
