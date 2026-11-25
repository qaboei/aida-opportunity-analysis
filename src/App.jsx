import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'
import { CHAPTERS, SLIDES } from './content.js'
import { SlideBody } from './Slides.jsx'

const STAGE_W = 1600
const STAGE_H = 900
const DURATION = 900 // ms, matches the CSS transition

const chapterOf = (i) => CHAPTERS.find((c) => c.id === SLIDES[i].chapter)
const readHash = () => {
  const n = parseInt(window.location.hash.replace(/\D/g, ''), 10)
  return Number.isFinite(n) ? Math.min(Math.max(n - 1, 0), SLIDES.length - 1) : 0
}

// Transition style, like PowerPoint: a "morph" zoom when entering a new chapter, a "push" inside one
const kindOf = (from, to) => (SLIDES[from].chapter !== SLIDES[to].chapter || SLIDES[to].type === 'divider' ? 'morph' : 'push')

function useStageScale() {
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / STAGE_W, window.innerHeight / STAGE_H))
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])
  return scale
}

// The background shader crossfades between chapter palettes
function Backdrop({ chapter }) {
  const [layers, setLayers] = useState([{ id: chapter.id, key: 0 }])
  const n = useRef(0)
  useEffect(() => {
    setLayers((ls) => (ls[ls.length - 1].id === chapter.id ? ls : [...ls.slice(-1), { id: chapter.id, key: ++n.current }]))
    const t = setTimeout(() => setLayers((ls) => ls.slice(-1)), 1400)
    return () => clearTimeout(t)
  }, [chapter.id])
  return (
    <div className="backdrop">
      {layers.map((l) => {
        const c = CHAPTERS.find((x) => x.id === l.id).palette
        return (
          <div key={l.key} className="backdrop-layer">
            <MeshGradient className="shader" colors={c} distortion={0.85} swirl={0.35} speed={0.18} grainOverlay={0.12} />
          </div>
        )
      })}
      <div className="veil" />
    </div>
  )
}

export default function App() {
  const scale = useStageScale()
  const [index, setIndex] = useState(readHash)
  const [prev, setPrev] = useState(null) // { index, dir, kind }
  const [menu, setMenu] = useState(false)
  const [idle, setIdle] = useState(false)
  const busy = useRef(false)
  const at = useRef(index)

  const go = useCallback((to) => {
    to = Math.min(Math.max(to, 0), SLIDES.length - 1)
    const from = at.current
    if (to === from || busy.current) return
    busy.current = true
    at.current = to
    setPrev({ index: from, dir: to > from ? 1 : -1, kind: kindOf(from, to) })
    setIndex(to)
    setTimeout(() => { setPrev(null); busy.current = false }, DURATION)
  }, [])

  useEffect(() => { history.replaceState(null, '', `#${index + 1}`) }, [index])
  useEffect(() => {
    const onHash = () => go(readHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [go])

  // keyboard, presentation clickers, wheel and swipe
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const k = e.key
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter', 'n'].includes(k)) { e.preventDefault(); go(index + 1) }
      else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace', 'p'].includes(k)) { e.preventDefault(); go(index - 1) }
      else if (k === 'Home') go(0)
      else if (k === 'End') go(SLIDES.length - 1)
      else if (k === 'f' || k === 'F') {
        if (document.fullscreenElement) document.exitFullscreen()
        else document.documentElement.requestFullscreen?.()
      } else if (k === 'm' || k === 'M' || k === 'o' || k === 'O') setMenu((m) => !m)
      else if (k === 'Escape') setMenu(false)
    }
    let wheelLock = 0
    const onWheel = (e) => {
      if (menu || Math.abs(e.deltaY) < 30 || Date.now() < wheelLock) return
      wheelLock = Date.now() + DURATION + 150
      go(index + (e.deltaY > 0 ? 1 : -1))
    }
    let x0 = null
    const onTouchStart = (e) => { x0 = e.touches[0].clientX }
    const onTouchEnd = (e) => {
      if (x0 === null) return
      const dx = e.changedTouches[0].clientX - x0
      if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1))
      x0 = null
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [index, go, menu])

  // hide the controls while presenting; show them again on mouse movement
  useEffect(() => {
    let t
    const wake = () => { setIdle(false); clearTimeout(t); t = setTimeout(() => setIdle(true), 2600) }
    wake()
    window.addEventListener('mousemove', wake)
    return () => { window.removeEventListener('mousemove', wake); clearTimeout(t) }
  }, [])

  const chapter = chapterOf(index)
  const renderSlide = (i, role) => {
    const p = prev
    const cls = role === 'in'
      ? p ? `slide enter ${p.kind} ${p.dir > 0 ? 'fwd' : 'back'}` : 'slide current'
      : `slide leave ${p.kind} ${p.dir > 0 ? 'fwd' : 'back'}`
    const c = chapterOf(i)
    return (
      <section key={`${i}-${role}`} className={`${cls} t-${SLIDES[i].type}`} style={{ '--accent': c.accent }} aria-hidden={role !== 'in'}>
        <div className="slide-inner"><SlideBody slide={SLIDES[i]} /></div>
      </section>
    )
  }

  return (
    <div className={`app ${idle && !menu ? 'idle' : ''}`} style={{ '--accent': chapter.accent }}>
      <Backdrop chapter={chapter} />
      <div className="logo" role="img" aria-label="AIDA, autonomous mobility solutions" style={{ '--logo': `url(${import.meta.env.BASE_URL}img/aida_logo_mask.png)` }} />

      <main
        className="stage"
        style={{ width: STAGE_W, height: STAGE_H, transform: `translate(-50%, -50%) scale(${scale})` }}
        onClick={(e) => { if (!e.target.closest('a,button')) go(index + 1) }}
      >
        {prev && renderSlide(prev.index, 'out')}
        {renderSlide(index, 'in')}
      </main>

      <nav className="chapters" aria-label="Chapters">
        <button className="menu-btn" onClick={() => setMenu(true)} aria-label="All slides">☰</button>
        {CHAPTERS.map((c) => {
          const first = SLIDES.findIndex((s) => s.chapter === c.id)
          const active = c.id === chapter.id
          return (
            <button key={c.id} className={`chip ${active ? 'on' : ''}`} style={{ '--accent': c.accent }} onClick={() => go(first)}>
              <span className="chip-t">{c.title}</span>
              <span className="chip-p">{c.presenter}</span>
            </button>
          )
        })}
      </nav>

      <button className="arrow left" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous slide">‹</button>
      <button className="arrow right" onClick={() => go(index + 1)} disabled={index === SLIDES.length - 1} aria-label="Next slide">›</button>
      <div className="progress"><div style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }} /></div>

      {menu && (
        <div className="menu" onClick={() => setMenu(false)}>
          <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="menu-head">
              <span>AIDA · Opportunity Analysis</span>
              <button onClick={() => setMenu(false)} aria-label="Close">✕</button>
            </div>
            <div className="menu-cols">
              {CHAPTERS.map((c) => (
                <div key={c.id} className="menu-col" style={{ '--accent': c.accent }}>
                  <div className="menu-ch">{c.title}<small>{c.presenter}</small></div>
                  {SLIDES.map((s, i) => s.chapter === c.id && (
                    <button key={i} className={`menu-item ${i === index ? 'on' : ''}`} onClick={() => { setMenu(false); go(i) }}>
                      {s.title || (s.type === 'title' ? 'Title' : s.type === 'divider' ? 'Chapter opener' : s.type === 'pitch' ? 'Elevator pitch' : 'Thank you')}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <div className="menu-keys">← → or space to move · F full screen · M this menu</div>
          </div>
        </div>
      )}
    </div>
  )
}
