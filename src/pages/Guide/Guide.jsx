import React, { useEffect, useMemo, useState, useCallback } from 'react'
import './Guide.scss'
import TagCard from './TagCard'
import TagDrawer from '../../components/TagDrawer/TagDrawer'
import { categories, totalTagsCount } from '../../data/tags'
import { ChevronDown } from '../../assets/Icons/Icons'

const FAVOURITES_KEY = 'html-guide-favourites'

const normalize = (str) => str.toLowerCase().replace(/[<>]/g, '').trim()

const Guide = ({ searchValue, showOnlyFavourites, onFavouritesCountChange }) => {
  const [favourites, setFavourites] = useState(() => {
    try {
      const saved = window.localStorage.getItem(FAVOURITES_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [collapsed, setCollapsed] = useState({})

  // Тег, открытый в drawer (null = закрыт)
  const [activeTag, setActiveTag] = useState(null)

  useEffect(() => {
    window.localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites))
    onFavouritesCountChange?.(favourites.length)
  }, [favourites])

  const toggleFavourite = (slug) => {
    setFavourites((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  const toggleCollapsed = (id) => {
    setCollapsed((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const openDetail = useCallback((tag) => {
    setActiveTag(tag)
  }, [])

  const closeDetail = useCallback(() => {
    setActiveTag(null)
  }, [])

  const query = normalize(searchValue || '')

  const filteredCategories = useMemo(() => {
    return categories
      .map((category) => {
        let tags = category.tags

        if (showOnlyFavourites) {
          tags = tags.filter((t) => favourites.includes(t.slug))
        }

        if (query) {
          tags = tags.filter(
            (t) =>
              normalize(t.name).includes(query) ||
              normalize(t.desc).includes(query) ||
              normalize(category.title).includes(query)
          )
        }

        return { ...category, tags }
      })
      .filter((category) => category.tags.length > 0)
  }, [query, showOnlyFavourites, favourites])

  const resultsCount = filteredCategories.reduce((sum, c) => sum + c.tags.length, 0)
  const isFiltering = Boolean(query) || showOnlyFavourites

  return (
    <>
      <main className="guide">
        <div className="guide__inner">
          <div className="guide__intro">
            <p className="guide__intro-text">
              {totalTagsCount} тегов HTML, собранных по смысловым разделам — от каркаса документа
              до форм и медиа. Нажмите на любой тег, чтобы увидеть подробное описание, атрибуты
              и примеры кода.
            </p>
            {isFiltering && (
              <p className="guide__results-count">
                Найдено: <strong>{resultsCount}</strong>
                {showOnlyFavourites ? ' в избранном' : ''}
              </p>
            )}
          </div>

          {filteredCategories.length === 0 ? (
            <div className="guide__empty">
              {showOnlyFavourites ? (
                <>
                  <p className="guide__empty-title">В избранном пока пусто</p>
                  <p className="guide__empty-text">
                    Нажимайте на значок «Избранное» рядом с тегом, чтобы он появился здесь.
                  </p>
                </>
              ) : (
                <>
                  <p className="guide__empty-title">Ничего не найдено по запросу «{searchValue}»</p>
                  <p className="guide__empty-text">
                    Попробуйте искать по названию тега, например <code>div</code> или по смыслу,
                    например «таблица».
                  </p>
                </>
              )}
            </div>
          ) : (
            filteredCategories.map((category) => {
              const isCollapsed = collapsed[category.id] && !isFiltering
              return (
                <section className="guide__category" key={category.id} id={category.id}>
                  <button
                    type="button"
                    className="guide__category-head"
                    onClick={() => toggleCollapsed(category.id)}
                    aria-expanded={!isCollapsed}
                  >
                    <div className="guide__category-heading">
                      <h2 className="guide__category-title">{category.title}</h2>
                      <p className="guide__category-desc">{category.description}</p>
                    </div>
                    <div className="guide__category-meta">
                      <span className="guide__category-count">{category.tags.length}</span>
                      <ChevronDown
                        className={`guide__category-chevron${isCollapsed ? ' guide__category-chevron--collapsed' : ''}`}
                      />
                    </div>
                  </button>

                  {!isCollapsed && (
                    <ul className="guide__tag-list">
                      {category.tags.map((tag) => (
                        <TagCard
                          key={tag.slug}
                          tag={tag}
                          isFavourite={favourites.includes(tag.slug)}
                          onToggleFavourite={toggleFavourite}
                          onOpenDetail={openDetail}
                        />
                      ))}
                    </ul>
                  )}
                </section>
              )
            })
          )}
        </div>
      </main>

      {/* Боковая панель с подробной информацией */}
      <TagDrawer tag={activeTag} onClose={closeDetail} />
    </>
  )
}

export default Guide
