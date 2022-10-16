import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { classNames } from 'shared/lib/classnNames/classNames';

interface LangSwitcherProps {
    className?: string;
    short?:boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ro' : 'en');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'SHORT_LANG' : 'LANG')}
        </Button>
    );
};
