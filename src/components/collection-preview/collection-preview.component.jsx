import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const PREVIEW_LENGTH = 4;

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items.slice(0, PREVIEW_LENGTH).map(({ id, ...otherProps }) => (
        <CollectionItem key={id} {...otherProps} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
