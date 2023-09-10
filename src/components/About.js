import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('about')}</h2>
      <p>{t('greeting')}</p>
    </div>
  );
}

export default About;
