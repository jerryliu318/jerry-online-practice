## About The Project

這是練習 GitHub Api 及 infinite scroll 的 Porject

* 前端主要使用 react-hook, react-router, styled-components

* 使用 useReducer + useContext 取代 redux

* 專案建置使用 babel, webpack, eslint

* CI/CD 使用 GitHub + codepipeline + codebuild，將 build 後的 js, index 放到 S3

* 使用 S3 當作 static web host，連結：<http://infinite-scroll-by-react.s3-website-ap-northeast-1.amazonaws.com/>

PS: 因為是靜態檔案，在 `http://infinite-scroll-by-react.s3-website-ap-northeast-1.amazonaws.com/otehrs` 重新整理會找不到頁面

* 請點選 header 的 `Other Public Repo`，觀看 infinite scroll 效果

## Getting Started

### Prerequisites
nodejs 14

### Installation
```sh
cd infinite_scroll_by_react
npm install 
```

## Usage

### Start up local server
```sh
cd infinite_scroll_by_react
npm run local 
```

### Eslint check
```sh
cd infinite_scroll_by_react
npm run eslint 
```

### Build artifacts
```sh
cd infinite_scroll_by_react
npm run build 
```