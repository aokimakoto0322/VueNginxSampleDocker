FROM node:18.7-alpine

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# package.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションコードをコピー
COPY . .

# アプリケーションを公開するポート
EXPOSE 3001

# アプリケーションの起動
CMD ["npm", "start"]