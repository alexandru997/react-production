import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val:string) => {
        setValue(val);
    };

    return (
        <div>
            {/* <BugButton /> */}
            {t('MAIN_PAGE')}
            {/* <Counter /> */}
            {/* <Input placeholder={t('TYPE_TEXT')} value={value} onChange={onChange} /> */}
        </div>
    );
};

export default MainPage;
