// Production startup script for Light Speed Logistics
// This script ensures the app runs in production mode with proper environment handling

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Light Speed Logistics in production mode...');

// Check if required environment variables are set
const requiredEnvVars = ['NEXT_PUBLIC_BASE_URL'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
    console.warn(`⚠️  Warning: Missing environment variables: ${missingEnvVars.join(', ')}`);
    console.log(`💡 Please set these in your .env.local file`);
}

// Start the Next.js production server
const server = spawn('npx', ['next', 'start'], {
    stdio: 'inherit',
    cwd: __dirname,
    env: { ...process.env, NODE_ENV: 'production' }
});

server.on('error', (err) => {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
});

server.on('close', (code) => {
    console.log(`\n📦 Server process exited with code ${code}`);
    process.exit(code);
});

console.log('✅ Light Speed Logistics production server started successfully!');
console.log('🌐 Access the application at http://localhost:3000');