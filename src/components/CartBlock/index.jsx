import React from 'react';
import styles from './CartBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Корзина</h1>
      <p className={styles.description}>Ваши товары идите нахуй</p>
    </div>
  );
};

export default NotFoundBlock;
