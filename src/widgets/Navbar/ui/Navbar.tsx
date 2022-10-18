import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classnNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('ENTRY')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    + ' Ab asperiores deserunt illo incidunt quo!')}
            </Modal>
        </div>
    );
};
