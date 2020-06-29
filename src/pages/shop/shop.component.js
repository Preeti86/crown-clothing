import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { selectCollections } from '../../redux/Shop/shop.selectors';

const shopPage = ({ collections }) => (
  <div className='shop-Page'>
      {collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key= {id} {...otherCollectionProps} />
        ))}
    </div>
    );

  const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  });

export default connect(mapStateToProps)(shopPage);