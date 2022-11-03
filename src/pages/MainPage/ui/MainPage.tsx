import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
// import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {/* <BugButton /> */}
            {t('MAIN_PAGE')}
            {/* <Counter /> */}
        </div>
    );
};

export default MainPage;
