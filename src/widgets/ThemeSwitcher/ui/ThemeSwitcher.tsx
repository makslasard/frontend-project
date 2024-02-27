import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import React from "react";
import {Theme, useTheme} from "@/app/providers/ThemeProvider";
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "@/shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {/* `FIXME` Иконка наследует текущий цвет и не использует свой - исправить! */}
            {theme === Theme.LIGHT ? <DarkIcon fill={'#fff'}/> : <LightIcon />}
            Change theme
        </Button>
    );
};
