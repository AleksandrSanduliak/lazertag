import cn from 'classnames';
import React from 'react';
import cl from './Docs.module.scss';

const DocsInfo = ({ variant }) => {
  return (
    <div className={cn(cl.docsInfo, variant)}>
      <h3 className={cl.docsInfoTitle}>УСТАВ ОРГАНИЗАЦИИ</h3>
      <p className={cl.docsInfoSubtitle}>
        Краткое описание устава организации с некоторыми подробностями для масштабности текста
      </p>
      <button className={cl.docsInfoButton}>ЧИТАТЬ ПОДРОБНЕЕ</button>
    </div>
  );
};

const Docs = () => {
  return (
    <div className={cl.docs}>
      <div className={cn('docs__container', cl.docsContainer)}>
        <div className={cl.docsInner}>
          <DocsInfo variant={cl.blueDocsInfo} />
          <DocsInfo variant={cl.whiteDocsInfo} />
        </div>
      </div>
    </div>
  );
};

export default Docs;
