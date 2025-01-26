"# VueNginxSampleDocker" 

## 参考
https://qiita.com/gaitou2048/items/d8a5c2682048ec911f48

## nginxからnuxtのあるコンテナに接続できなかった課題
https://github.com/vitejs/vite/issues/19242

## docker EC2からgit cloneする方法
https://qiita.com/kn_program/items/c41c62f465368f0b0152

## EC2でDockerのインストール
`sudo yum install -y docker`          # dockerのインストール  
`sudo service docker start`           # dockerの起動  
`sudo usermod -a -G docker ec2-user`  # ec2-userをdockerグループに入れる。これでec2-userがdockerコマンドを実行できる  
`sudo docker info`  

## EC2でDockerComposeのインストール
`sudo mkdir -p /usr/local/lib/docker/cli-plugins`  
`sudo curl -SL https://github.com/docker/compose/releases/download/v2.4.1/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose`  
`sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose`  
`docker compose version`  

`sudo chmod 666 /var/run/docker.sock` # docker.sockの読み取り・書き込み権限を666にしないとdocker-compose up -d できなかったため

## nuxt起動
`docker exec -it [コンテナ名] bash`  
`yarn install`  
`yarn run build`  
`yarn nuxt start` # 本番用にサーバーを起動  

