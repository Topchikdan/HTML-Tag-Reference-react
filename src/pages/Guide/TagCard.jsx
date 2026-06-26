import React from 'react'
import { Favourites, TagBracket } from '../../assets/Icons/Icons'

const TagCard = ({ tag, isFavourite, onToggleFavourite, onOpenDetail }) => {
  return (
    <li className="tag-card">
      {/* Клик на основное тело карточки — открывает drawer */}
      <button
        type="button"
        className="tag-card__clickable"
        onClick={() => onOpenDetail(tag)}
        aria-label={`Подробнее о теге ${tag.name}`}
      >
        <div className="tag-card__bracket tag-card__bracket--open">
          <TagBracket />
        </div>

        <div className="tag-card__body">
          <div className="tag-card__head">
            <code className="tag-card__name">{tag.name}</code>
            {tag.single && <span className="tag-card__badge">одиночный</span>}
          </div>
          <p className="tag-card__desc">{tag.desc}</p>
        </div>

        <div className="tag-card__bracket tag-card__bracket--close">
          <TagBracket style={{ transform: 'rotate(180deg)' }} />
        </div>
      </button>

      {/* Кнопка избранного — отдельный элемент, не часть ссылки */}
      <button
        type="button"
        className={`tag-card__fav${isFavourite ? ' tag-card__fav--active' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          onToggleFavourite(tag.slug)
        }}
        aria-pressed={isFavourite}
        aria-label={isFavourite ? `Убрать ${tag.name} из избранного` : `Добавить ${tag.name} в избранное`}
      >
        <Favourites />
      </button>
    </li>
  )
}

export default TagCard
