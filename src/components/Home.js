import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('home')}</h2>
      <p>{t('greeting')}</p>
    </div>
  );
}

export default Home;
