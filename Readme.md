# 개요

Admin 페이지를 위한 퍼블리싱 페이지

## 소스 구조

- [html](./html) : 최종 결과물
  - [css](./html/css) : css
  - [font](./html/font) : 필요한 폰트 파일
  - [lib](./html/lib) : 필요한 라이브러리 패키지들
  - ui
    - [buttons](./html/ui/buttons.html) : 버튼 관련 설정 파일
- [.prettierrc](.prettierrc) : Prettier 설정 파일

## Development

### Extensions for Visual Studio Code

퍼블리싱에 사용한 확장 목록

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- scss
  - [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)
  - [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss) 
  - [SCSS Formatter](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter)

### Build

퍼블리싱에 필요한 필수 라이브러리 설치를 webpack으로 대체

```
# npm init
npm install

# webpack build
npm run build
```
