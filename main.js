// @ts-ignore

/**
 * Webpack - фундаментальный от А до Я
 *     План курса:
 *         1. Введение. Инициализация проекта и обозначение проблемы
 *         2. Базовая конфигурация
 *         3. Опции конфигурации. Переменные окружения. Prod / Dev сборка
 *         4. HTML и скрипты. Плагины
 *         5. Лоадеры. Поддержка TypeScript. Регулярные выражения
 *         6. Webpack config на ts
 *         7. DevServer. Watch режим. SourceMap
 *         8. React JSX
 *         9. Стили. css + препроцессоры (scss)
 *         10. Декомпозиция. Переиспользуемая конфигурация
 *         11. Изоляция стилей. СSS Modules
 *         12. Роутинг. Ленивые чанки. Размер бандла и код сплитинг
 *         13. Алиасы и резолвинг модулей
 *         14. Научимся работать с assets (картинки, шрифты, иконки и тд)
 *         15. Глобальные переменные сборки. Tree shaking
 *         16. Ускорение сборки. Вынос проверки типов в отдельный процесс
 *         17. HMR (Hot Module Replacement)
 *         18. Favicon + copy plagin
 *         19. Babel. Создаем свой плагин
 *         20. SourceMap детальный разбор с примером
 *         21. Моно репозиторий. Конфигурация проекта + workspaces
 *         22. Конфигурация микросервисов. Module federation
 *         23. Работа с shared кодом
 *
 * env vars (переменные окружения)
 *
 * module.exports = (env) => {
 *     return {
 *         mode: env.mode ?? 'development',
 *         entry: path.resolve(__dirname, 'src', 'index.js'),
 *         output: {
 *             path: path.resolve(__dirname, 'build'),
 *             filename: '[name].[contenthash].js',
 *             clean: true
 *         },
 *     }
 * };
 *
 * с помощью переменных окружения можно передавать информацию из вне
 *     которые нужны для конфигурации
 *
 * source-map - используеться для упращения работы с ошибками
 * devtool: isDev && 'inline-source-map',
 *
 *     module: {
 * 			rules: [
 * 				{
 * 					test: /\.tsx?$/,
 * 					use: 'ts-loader',
 * 					exclude: /node_modules/,
 * 				},
 * 			],
 * 		},
 *
 * Из каробки ts-loader умеет работать с React.JSX
 * Если бы TS не было, нужно было бы использовать Babel-loader и его конфигурировать
 *     чтобы обрабатывать jsx
 *
 * Стили sass-loader + 2 лоадера
 * Порядок loader - ов очень важен
 *
 * Алиасы для абсолютных путей через @
 *
 * PublicApi - это index.ts файл в каждой папке
 *
 * Компоненты которые не требуют ассинхронного чанка мы будем экспортировать не по default exports,
 *     а как именнованный export
 *
 * Создание своих собственных сниппетов (готовых кусков кода) с помощью WebStorm
 * Заранее нужный кусок кода нужно скопировать
 * Setting -> Live Template -> + Добавляем группу -> + Добавляем шаблон -> Define TypeScript (В каких файлах будет работать данный шаблон)
 *
 * const {to, className, children, ...otherProps} = props
 *     Вытаскивание значений из props для большей читабельности
 *     ...otherProps - позволяет вытаскивать остальные props
 *
 * export const AppLink: FC<AppLinkProps> = (props) => {
 *     const {to, className, children, ...otherProps} = props - деструктуризация props
 *
 *     return (
 *         <Link
 *             to={to}
 *             className={classNames(cls.AppLink, {}, [className])}
 *             {...otherProps} - передача остальных пропсов в link
 *         >
 *             {children}
 *         </Link>
 *     );
 * };
 *
 * flex-grow: 1 - задействует 100% оставшегося пространства не сдвигая
 *     другой блок в отличии от width: 100%
 *
 * transition: width 0.5s; - плавная анимация sidebar
 *
 * Все основные размеры по типу шрифтов, размеров navbar, sidebar и тд
 *     нужно выносить в переменные для удобства работы
 *
 * i18n - интернализация (добавление новых языков в проект)
 *     Используется библиотека react-i18next
 *
 * i18next-http-backend - помощью данного пакеты мы можем ассинхронно чанками подгружать
 *     язык который нам нужен и не тянуть все переводы в сборку
 *
 * В папке i18n - мы будем хранить кофигурацию наших переводов
 *
 * import i18n from 'i18next';
 * import { initReactI18next } from 'react-i18next';
 *
 * import Backend from 'i18next-http-backend';
 * import LanguageDetector from 'i18next-browser-languagedetector';
 *
 * i18n
 *     .use(Backend) - .use используеться для подключения плагинов
 *     .use(LanguageDetector)
 *     .use(initReactI18next)
 *     .init({
 *         fallbackLng: 'en', - язык по умолчанию
 *         // eslint-disable-next-line max-len
 *         debug: true, - свойство которое будет спамить в консоль подгрузку переводов, отсутствующие ключи
 *
 *         interpolation: {
 *             escapeValue: false, // not needed for react as it escapes by default
 *         }
 *     });
 *
 * export default i18n;
 *
 * new webpack.DefinePlugin - плагин webpack который позволяет прокидывать глобальные переменные
 *
 * const Component = () => {
 * 	const {t, i18n} = useTranslation()
 *
 * 	const toggle = () => {
 * 		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
 * 	}
 *
 * 	return (
 * 	<div>
 * 		<button onClick={toggle}>{t("Перевод")}</button>
 * 		{t("Тестовый пример")}
 * 	</div>
 * 	)
 * }
 *
 * Webpack Hot Module Replacement
 *     - Технология которая позволяет обновить приложение после изменений в коде и при этом
 *         не обновлять страницу
 *
 *         Например: Мы поменяли размер шрифта, автоматически во всем приложении он меняется, но
 *             при этом страницу не перезапускаем
 *
 * i18n - интернализация
 *
 *     Hello <strong title={t('nameTitle')}>{{name}}</strong>
 *
 *     С помощью конструкций {t('nameTitle')} будет происходить заменя перевода слова на
 *        другой язык. Эта переменная определяется в файле с локализацией языка locales
 *        где для каждой страницы приложения находится перевод слов
 *
 * import Backend from 'i18next-http-backend';
 *     С помощью данного пакеты мы можем подгружать переводы ассинхронно чанками
 *         по мере необходимости
 *
 * .use(initReactI18next)
 *     Конструкция .use() используется для подключения плагинов
 *
 *     fallbackLng: 'ru', - язык по умолчанию
 *     debug: __ENV__ === 'development', - будет спамить в консоль подгруздку переводов,
 *         отсутствующие ключи. В общем все что связано с дебагом
 *
 *         В данном случае debug будет работать только в режиме разработки
 *
 * const { t, i18n } = useTranslation();
 *     Компоненты использующие переводы нужно оборачивать в <Suspense fallback={<div>Loading...</div>}>
 *
 *     Поскольку переводы будут ассинхронно подключаться чанками
 *
 * !!! ВАЖНО
 *         Достаточно обернуть все приложение в Suspense 1 раз
 *
 * const Component = () => {
 * 	const {t, i18n} = useTranslation()
 *
 * 	return (
 * 		<div>{t("Тестовый перевод")}</div>
 * 		// "Тестовый перевод" - это ключ который мы указываем для перевода
 * 	)
 * }
 *
 *     Очень важно делать декомпозицию переводов для каждой отдельной страницы
 *         т.к переводы могут много весить
 *
 * Babel. Extra plugin
 *     https://github.com/gilbsgilbs/babel-plugin-i18next-extract - РЕПОЗИТОРИЙ GITHUB
 *
 *     Позволяет автоматически при сборке вытаскивать ключи из переводов в отдельный файл
 *
 *     Babel - это транспилятор который позволяет преобразовывать JavaScript код
 *         из одних стандартов в другие (из новой версии в старую)
 *
 *     Добавим файл babel.config.json
 *         {
 *           "presets": ["@babel/preset-env"],
 *           "plugins": ["i18next-extract"]
 *         }
 *
 *     Доработаем buildBabelLoader
 *     plugins: [
 *        [
 *         "i18next-extract",
 *         {
 *           locales: ['ru', 'en'],
 *           keyAsDefaultValue: true
 *         }
 *        ]
 *      ]
 *
 * Настройка ESLint
 *
 *     Установка:
 *         Можно сделать через автоматический config
 *         Настроить самостоятельно в курсе есть базовый конфиг
 *
 * Настройка Stylelint для контроля стилей
 *  Есть config стандартный, а есть сразу для scss
 *  npm install --save-dev stylelint stylelint-config-standard-scss@3.0.0 (С версией курса)
 *
 *  Создать файл в котором будет находится конфигурация
 *  .stylelintrc.json
 *
 *  {
 *   "extends": "stylelint-config-standard-scss"
 *  }
 *
 *  Расширяем конфиг для работы с scss
 *
 *  Команда для линтинга ошибок scss
 *  "lint:scss:fix" - исправление ошибок
 *  "lint:scss" - поиск ошибок
 *
 *  Чтобы stylelint работал нужно его включить в IDE
 *  Поставить галочку в enable
 *  Поправить регулярку с css на scss
 *
 *  Ждем пока IDE проснется и можем исправлять файлы
 *  Можно добавить большое кол-во правил
 *
 *  eslint-plugin-i18next - плагин проверяет наличие переводов в jsx
 *      Весь текс в JSX должен быть с переводом
 *      Нужна настройка по документации
 *
 *
 * Подключаем тестовую среду JEST для тестирования приложения
 *  Устанавливаем пакет для JEST
 *  Конфигурируем базовый файл для JEST: npm init jest@latest
 *
 * !!! ВАЖНО
 *  В файле declaration.d.ts НЕ ДОЛЖНО БЫТЬ ИМПОРТОВ И ЭКСПОРТОВ
 *      ИНАЧЕ TYPESCRIPT не поймет расширение файлов .scss, .svg и т.д
 *
 *
 *  При первом запуске тесов в среде тестирования у нас будет ошибка
 *      потому-что TypeScript не знает про Jest
 *
 *      Для этого нужно установить babel preset который умеет работать с TS
 *      npm install --save-dev @babel/preset-typescript
 *
 *      Добавить пакет в config
 *      "presets": ["@babel/preset-env", "@babel/preset-typescript"],
 *
 *
 *
 *
 *
 *
 *
 *  ErrorBoundary - в нашем случае это будет глобальный провайдер который будет оборачивать все
 *      наше приложение. Это едеинственный классовый компонент в нашем приложении
 *
 *      index.ts - это public api
 *
 *  class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
 *
 *  В Generic первым указывается типизация Props, вторым типизация State
 *
 */
