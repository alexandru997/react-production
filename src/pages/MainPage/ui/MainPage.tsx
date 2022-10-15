import React from 'react';
import { useTranslation } from 'react-i18next';
// import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {/* <BugButton /> */}
            {t('MAIN_PAGE')}
        </div>
    );
};

export default MainPage;
