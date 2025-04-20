module.exports = {
  apps: [
    {
      name: 'synvra-backend',
      cwd: './backend',
      script: 'npm',
      args: 'run dev',
      watch: true,
      env: {
        PORT: 3002,
        NODE_ENV: 'development'
      }
    },
    {
      name: 'synvra-payment',
      cwd: './payment-webhook',
      script: 'npm',
      args: 'run dev',
      watch: true,
      env: {
        PORT: 3001,
        NODE_ENV: 'development'
      }
    }
  ]
}; 