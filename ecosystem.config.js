module.exports = {
  apps: [
    {
      script: "npm run dev",
    },
  ],

  deploy: {
    production: {
      user: "ubuntu",
      host: "185.25.118.251",
      ref: "origin/main",
      repo: "https://github.com/op111111OP/aswo",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
