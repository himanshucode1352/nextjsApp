module.exports = {
  apps : [{
    script: './pages/_app.js',
    watch: '.'
  }, 
//   {
//     script: './service-worker/',
//     watch: ['./service-worker']
//   }
  ],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : '3000',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
