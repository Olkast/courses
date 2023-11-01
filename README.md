#Гайд и правила проекта
###Сборка с bootstrap5
##Как работаем с картинками
+ Исходники картинок распологаем по пути `app/images/`
+ Далее когда распологаем их в html коде дописываем в пути `dest` :`app/images/dest`
+ Там же будут распологаться и картинки в формате `.webp`
+ Кроме картинок формата `.svg`
  Пример:
  Исходник картинки лежит по адресу `images/dest/bot.png`

`<picture>`<br>`
<source srcset="images/dest/bot.png" type="image/webp">`<br>`
<img class="fast-img" src="images/bot.png" alt="">`<br>`
</picture>`
Тоесть другими словами, мы загружаем одну картику, а на выходе получаем две, которые лежат в другой папке
***
##Как развернуть проект
1. установим пакеты `cd корень проекта && npm i`
2. Запустим сборщик проекта `cd корень проекта && gulp`
***
##Как сбилдить проект
+ Билдим `cd корень проекта && gulp build`
  Билд проекта находится в папке `dist`
##Правила разработки
+ изучить файл reset.scss
+ HTML файл каждой новой страницы распологается в корне проекта
+ Каждой странице соответствует отдельный `.scss` файл, который распологается:<br>
+ `app/scss/имя страницы`
+ Цвета используем только из переменных `app/scss/variables/variables.scss`
+ Проект имеет сброс стилей css `app/reset_css/reset.scss/`
+ Библиотеки подключаем через `gulpfile.js`
+ Классы именуем согласно `BEM`
+ Используя препроцессор scss мы не используем его возможность глубоких вложенностей,<br>
  максимум это вложенность типа: <br>
  `.main-page-btn { `<br>`
  border: 1px solid transparent;`<br>`
  &:hover {`<br>`
  border: 1px solid var(--primary-2);`<br>`
  }`<br>
  или <br>
  ` .main-page-btn {`<br>`
  &.registration {`<br>`
  margin: 0;`<br>`
  }`<br>`
  }`
+ Медиазапросы пишем в конкретном файле соответствующем странице, снизу!
+ файлы называем через тире `-`
+ папки называем через нижнее подчеркивание `_`
+ не удаляем чужие комментарии и задокументированные <br>
  куски кода
+ не пишем стили в html-коде
+ используем для разработки дефолтный контейнер класс `.container` (если не используется bootstrap), <br>
  он имеет стили для мобильной версии
+ используем bootstrap 4.0.0

100: Thin;
200: Extra Light (Ultra Light);
300: Light;
400: Normal;
500: Medium;
600: Semi Bold (Demi Bold);
700: Bold;
800: Extra Bold (Ultra Bold);
900: Black (Heavy).
