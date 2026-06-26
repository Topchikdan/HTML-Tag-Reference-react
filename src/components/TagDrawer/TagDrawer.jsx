import React, { useEffect, useRef } from 'react'
import './TagDrawer.scss'
import { tagDetails } from '../../data/tagDetails'

const TagDrawer = ({ tag, onClose }) => {
  const drawerRef = useRef(null)
  const detail = tag ? tagDetails[tag.slug] : null

  // Закрытие по Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Блокировка скролла страницы
  useEffect(() => {
    if (tag) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [tag])

  // Фокус на панели при открытии
  useEffect(() => {
    if (tag && drawerRef.current) {
      drawerRef.current.focus()
    }
  }, [tag])

  if (!tag) return null

  return (
    <>
      <div
        className={`drawer-overlay${tag ? ' drawer-overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`drawer${tag ? ' drawer--open' : ''}`}
        role="complementary"
        aria-label={`Подробнее о теге ${tag.name}`}
        ref={drawerRef}
        tabIndex={-1}
      >
        <div className="drawer__inner">
          {/* Шапка */}
          <div className="drawer__header">
            <div className="drawer__title-row">
              <code className="drawer__tag-name">{tag.name}</code>
              {tag.single && (
                <span className="drawer__badge">одиночный</span>
              )}
            </div>
            <button
              type="button"
              className="drawer__close"
              onClick={onClose}
              aria-label="Закрыть панель"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Короткое описание */}
          <p className="drawer__short-desc">{tag.desc}</p>

          {detail ? (
            <div className="drawer__content">
              {/* Развёрнутое описание */}
              <section className="drawer__section">
                <h3 className="drawer__section-title">Описание</h3>
                <p className="drawer__full-desc">{detail.fullDesc}</p>
              </section>

              {/* Атрибуты */}
              {detail.attrs && detail.attrs.length > 0 && (
                <section className="drawer__section">
                  <h3 className="drawer__section-title">Атрибуты</h3>
                  <ul className="drawer__attrs">
                    {detail.attrs.map((attr) => (
                      <li key={attr.name} className="drawer__attr">
                        <code className="drawer__attr-name">{attr.name}</code>
                        <span className="drawer__attr-desc">{attr.desc}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Пример кода */}
              <section className="drawer__section">
                <h3 className="drawer__section-title">Пример использования</h3>
                <div className="drawer__code-wrap">
                  <button
                    type="button"
                    className="drawer__copy-btn"
                    onClick={() => copyCode(detail.example)}
                    aria-label="Скопировать код"
                  >
                    <CopyIcon />
                    <span className="drawer__copy-label">Копировать</span>
                  </button>
                  <pre className="drawer__code"><code>{detail.example}</code></pre>
                </div>
              </section>

              {/* Советы */}
              {detail.notes && detail.notes.length > 0 && (
                <section className="drawer__section">
                  <h3 className="drawer__section-title">На заметку</h3>
                  <ul className="drawer__notes">
                    {detail.notes.map((note, i) => (
                      <li key={i} className="drawer__note">{note}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Ссылка на MDN */}
              {detail.mdn && (
                <a
                  href={detail.mdn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drawer__mdn-link"
                >
                  <MdnIcon />
                  Открыть на MDN Web Docs
                  <ExternalIcon />
                </a>
              )}
            </div>
          ) : (
            <div className="drawer__no-detail">
              <p>Подробное описание для этого тега пока не добавлено.</p>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}

function copyCode(text) {
  navigator.clipboard?.writeText(text).catch(() => {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  })
}

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const MdnIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default TagDrawer
