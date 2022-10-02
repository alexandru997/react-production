import React from 'react';
import { classNames } from 'shared/lib/classnNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>Home</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="about">About</AppLink>
        </div>
    </div>
);
