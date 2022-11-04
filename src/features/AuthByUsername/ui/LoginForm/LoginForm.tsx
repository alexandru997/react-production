import { classNames } from 'shared/lib/classnNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps{
    className?:string
}

export const LoginForm = ({ className }:LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                type="text"
                className={cls.input}
                placeholder={t('USERNAME')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('PASSWORD')}
            />
            <Button className={cls.loginBtn}>
                {t('Entry')}
            </Button>
        </div>
    );
};
