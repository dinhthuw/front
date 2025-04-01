const getBaseUrl = () => {
    // Check if we're in development or production
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // Return appropriate API URL based on environment
    return isDevelopment ? "https://back-ot4d.onrender.com" : "https://api.yourproductionsite.com";
}

export default getBaseUrl;