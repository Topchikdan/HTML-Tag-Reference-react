import React from 'react'
import './Header.scss'
import { Favourites, Search, SunIcon, MoonIcon } from '../../assets/Icons/Icons'
import { useTheme } from '../../context/ThemeContext'

const Header = ({ searchValue, onSearchChange, favouritesCount, favouritesActive, onFavouritesClick }) => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <span className="header__eyebrow">HTML / справочник</span>
          <h1 className="header__title">Справочник по тегам HTML</h1>
        </div>

        <div className="header__search-wrap">
          <Search className="header__search-icon" />
          <input
            className="header__search"
            type="text"
            placeholder="Поиск тегов, например <table> или «таблица»"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="header__icons">
          <button
            type="button"
            className={`header__icon${favouritesActive ? ' header__icon--active' : ''}`}
            onClick={onFavouritesClick}
            aria-pressed={favouritesActive}
            aria-label="Показать только избранные теги"
          >
            <Favourites className="header__favourites" />
            <span className="header__icon-label">
              Избранное{favouritesCount > 0 ? ` · ${favouritesCount}` : ''}
            </span>
          </button>

          <button
            type="button"
            className="header__icon header__theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
            <span className="header__icon-label">{isDark ? 'Светлая' : 'Тёмная'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
