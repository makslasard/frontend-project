import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className ,
        theme,
        children,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
/**
 По умолчанию в React у элемента Button куча разных props
    Это различные слушатели событий, disabled и т.д

    В React для всех подобных элементов есть специальный тип который называеться
        ButtonHTMLAttributes и мы наследуемся от этого типа чтобы все props которые
        по умолчанию есть у кнопки передать в наш компонент



 **/