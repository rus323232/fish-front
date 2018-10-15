# Рыбная карта

### Установка стандартная

    npm i

### Режим разработки

    npm run dev

### Сборка

    npm run build

### Запуск тестов

    npm jest

### Запуск Storybook

    npm run storybook

### Сборка

Сборка осуществляется на webpack v.4

### Технологии

Разработка ведётся на [TypeScript](https://www.typescriptlang.org)

WEB framework React 16.4

state managment Redux, middleware - [Redux-Saga](https://github.com/redux-saga/redux-saga)

Рутинг [React-Router v.4](https://reacttraining.com/react-router/web/guides/philosophy) здесь не используется

В данном конфиге используется архитектура [Redux Duck](https://github.com/erikras/ducks-modular-redux)

### Стили

Стили на SCSS, с последующей обработкой PostCSS, мимификация [CSSO](https://github.com/css/csso), [postcss-preset-env](https://github.com/csstools/postcss-preset-env)

### Storybook

Все компоненты предварительно верстаются в [Storybook](https://storybook.js.org), с несколькими addon-ами

Конфиги Storybook лежат в папке _**.storybook**_
