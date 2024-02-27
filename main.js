/*
Webpack - фундоментальный от А до Я
    План курса:
        1. Введение. Инициализация проекта и обозначение проблемы
        2. Базовая конфигурация
        3. Опции конфигурации. Переменные окружения. Prod / Dev сборка
        4. HTML и скрипты. Плагины
        5. Лоадеры. Поддержка TypeScript. Регулярные выражения
        6. Webpack config на ts
        7. DevServer. Watch режим. SourceMap
        8. React JSX
        9. Стили. css + препроцессоры (scss)
        10. Декомпозиция. Переиспользуемая конфигурация
        11. Изоляция стилей. СSS Modules
        12. Роутинг. Ленивые чанки. Размер бандла и код сплитинг
        13. Алиасы и резолвинг модулей
        14. Научимся работать с assets (картинки, шрифты, иконки и тд)
        15. Глобальные переменные сборки. Tree shaking
        16. Ускорение сборки. Вынос проверки типов в отдельный процесс
        17. HMR (Hot Module Replacement)
        18. Favicon + copy plagin
        19. Babel. Создаем свой плагин
        20. SourceMap детальный разбор с примером
        21. Монорепозиторий. Конфигурация проекта + workspaces
        22. Конфигурация микросервисов. Module federation
        23. Работа с shared кодом


env vars (переменные окружения)

module.exports = (env) => {
    return {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true
        },
    }
};

с помощью переменных окружения можно передавать информацию из вне
    которые нужны для конфигурации

source-map - используеться для упращения работы с ошибками
devtool: isDev && 'inline-source-map',


    module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},

Из каробки ts-loader умеет работать с React.JSX
Если бы TS не было, нужно было бы использовать Babel-loader и его конфигурировать
    чтобы обрабатывать jsx


Стили sass-loader + 2 лоадера
Порядок loader - ов очень важен

Алиасы для абсолютных путей через @

PublicApi - это index.ts файл в каждой папке

Компоненты которые не требуют ассинхронного чанка мы будем экспортировать не по default exports,
    а как именнованный export

Создание своих собственных сниппетов (готовых кусков кода) с помощью WebStorm
Заранее нужный кусок кода нужно скопировать
Setting -> Live Template -> + Добавляем группу -> + Добавляем шаблон -> Define TypeScript (В каких файлах будет работать данный шаблон)

const {to, className, children, ...otherProps} = props
    Вытаскивание значений из props для большей читабельности
    ...otherProps - позволяет вытаскивать остальные props

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, ...otherProps} = props - деструктуризация props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className])}
            {...otherProps} - передача остальных пропсов в link
        >
            {children}
        </Link>
    );
};

flex-grow: 1 - задействует 100% оставшегося пространства не сдвигая
    другой блок в отличии от width: 100%

transition: width 0.5s; - плавная анимация sidebar

Все оснавные размеры по типу шрифтов, размеров navbar, sidebar и тд
    нужно выносить в переменные для удобства работы

i18n - интернализация (добавление новых языков в проект)



































*/
