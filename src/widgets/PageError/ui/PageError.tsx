import { classNames } from 'shared/lib/classnNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
};

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('SOMETHING_WENT_WRONG')}</p>
            <Button onClick={reloadPage}>
                {t('UPDATE_PAGE')}
            </Button>
        </div>
    );
};
