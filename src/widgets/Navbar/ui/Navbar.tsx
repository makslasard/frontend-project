import React from 'react';
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "@/widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls.mainLink}>
                    О сайте
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'} className={cls.mainLink}>
                    RED
                </AppLink>
            </div>
        </div>
    );
};

