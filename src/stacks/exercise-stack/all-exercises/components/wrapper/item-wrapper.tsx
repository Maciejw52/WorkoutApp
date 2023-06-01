import React, { ReactNode } from 'react';
import RenderItem from '../render-item/render-item';
import { Exercise } from '../../../../../app.interface';

const ItemWrapper = ({ item }: { item: Exercise }) => {
  return <RenderItem item={item} />;
};

export default ItemWrapper;
