import React from 'react'
import s from './CountryItem.module.scss'

export const CountryItem = ({title, flag}) => {
  return (
      <div className={s.item}>
        <div className={s.item__img}>
          <img src={flag} alt="fing" />
        </div>
        <div className={s.item__title}>{title}</div>
      </div>
    )
}
