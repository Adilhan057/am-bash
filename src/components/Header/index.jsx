import React from 'react'
import s from './Header.module.scss'
import { Input } from './Input'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__logo}>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="" />
            </div>
            <Input />
            <div className={s.header__menu}>
                <div className={s.header__link}>Home</div>
                <div className={s.header__link}>Adout</div>
                <div className={s.header__link}>More</div>
            </div>
        </div>
    )
}
