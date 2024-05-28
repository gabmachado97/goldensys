/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  };
  
  if (process.env.NODE_ENV === 'production') {
    // Use "export" output target for production builds
    nextConfig.exportPathMap = function() {
      return {
        '/': { page: '/' },
        // Add other pages here if needed
      };
    };
  } else {
    // Use default output target for development
    // No need to specify anything here
  }
  
  module.exports = nextConfig;
  