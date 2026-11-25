import { GrainGradient } from '@paper-design/shaders-react'
import { CHAPTERS, SLIDES, TEAM } from './content.js'

const asset = (p) => `${import.meta.env.BASE_URL}${p}`
const fmt = (n) => (n < 0 ? `(${Math.abs(n).toLocaleString('en-US')})` : n.toLocaleString('en-US'))

// r(i): a reveal class with a stagger index, so each element builds in like a PowerPoint animation
const r = (i) => ({ className: 'r', style: { '--i': i } })

function Head({ s, i = 0 }) {
  return (
    <header className="head">
      {s.kicker && <div className="kicker r" style={{ '--i': i }}>{s.kicker}</div>}
      {s.title && <h2 className="r title" style={{ '--i': i + 1 }}>{s.title}</h2>}
    </header>
  )
}

function Bullets({ list, start = 0 }) {
  return (
    <ul className="bullets">
      {list.map((t, k) => (
        <li key={k} className="r" style={{ '--i': start + k }}>{t}</li>
      ))}
    </ul>
  )
}

// ─────────────────────────────── slide types

function Title() {
  return (
    <div className="slide-title">
      <div className="title-copy">
        <div className="kicker r" style={{ '--i': 0 }}>Opportunity analysis · FWS310</div>
        <h1 className="wordmark r" style={{ '--i': 1 }}>AIDA</h1>
        <p className="tagline r" style={{ '--i': 2 }}>Lunch, on your own terms.</p>
        <p className="sub r" style={{ '--i': 3 }}>Fundamentals of Innovation and Entrepreneurship</p>
        <div className="team r" style={{ '--i': 4 }}>
          {TEAM.map((n) => <span key={n}>{n}</span>)}
        </div>
        <div className="uni r" style={{ '--i': 5 }}>Abu Dhabi University · Fall 2026–27</div>
      </div>
      <div className="title-art">
        <div className="halo" />
        <img className="chair r" style={{ '--i': 2 }} src={asset('img/01_hero.png')} alt="The AIDA smart wheelchair" />
      </div>
    </div>
  )
}

function Divider({ chapter }) {
  const idx = CHAPTERS.findIndex((c) => c.id === chapter.id)
  const titles = SLIDES.filter((s) => s.chapter === chapter.id && s.title).map((s) => s.title)
  if (chapter.id === 'closing') titles.push('Elevator pitch')
  const c = chapter.palette
  return (
    <div className="slide-divider">
      <GrainGradient
        className="divider-shader"
        colorBack={c[0]}
        colors={[c[2], c[3], c[1]]}
        softness={0.8}
        intensity={0.35}
        noise={0.18}
        shape="blob"
        speed={0.35}
      />
      <div className="divider-copy">
        <div className="divider-num r" style={{ '--i': 0 }}>{String(idx).padStart(2, '0')}</div>
        <h2 className="divider-title r" style={{ '--i': 1 }}>{chapter.title}</h2>
        <div className="divider-by r" style={{ '--i': 2 }}>Presented by <b>{chapter.presenter}</b></div>
      </div>
      <ol className="agenda">
        {titles.map((t, k) => (
          <li key={t} className="r" style={{ '--i': 3 + k }}><span>{String(k + 1).padStart(2, '0')}</span>{t}</li>
        ))}
      </ol>
    </div>
  )
}

function Cards({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="grid g3">
        {s.cards.map((c, k) => (
          <article key={c.head} className="card r" style={{ '--i': 2 + k }}>
            <div className="icon">{c.icon}</div>
            <h3>{c.head}</h3>
            {c.text && <p>{c.text}</p>}
            {c.list && <Bullets list={c.list} start={3 + k} />}
          </article>
        ))}
      </div>
    </>
  )
}

function Cards4({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="grid g4">
        {s.cards.map((c, k) => (
          <article key={c.head} className="card tall r" style={{ '--i': 2 + k }}>
            <div className="num">{String(k + 1).padStart(2, '0')}</div>
            <h3>{c.head}</h3>
            <p>{c.text}</p>
          </article>
        ))}
      </div>
      {s.source && <div className="source r" style={{ '--i': 7 }}>{s.source}</div>}
    </>
  )
}

function Research({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="split">
        <article className="card r" style={{ '--i': 2 }}>
          <div className="label">Primary · 6 empathy interviews</div>
          <Bullets list={s.primary} start={3} />
          <blockquote className="r" style={{ '--i': 7 }}>
            {s.quote}
            <cite>{s.quoteBy}</cite>
          </blockquote>
        </article>
        <div className="stats">
          <div className="label r" style={{ '--i': 3 }}>Secondary sources</div>
          {s.secondary.map((x, k) => (
            <div key={k} className="stat r" style={{ '--i': 4 + k }}>
              <div className="stat-n">{x.stat}</div>
              <div>
                <div>{x.text}</div>
                {x.src && <div className="src">{x.src}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function Profile({ s }) {
  return (
    <>
      <Head s={s} />
      <p className="lead r" style={{ '--i': 2 }}>{s.lead}</p>
      <div className="profile">
        <article className="card r" style={{ '--i': 3 }}>
          <div className="label">What we offer</div>
          <Bullets list={s.offer} start={4} />
        </article>
        <article className="card r" style={{ '--i': 4 }}>
          <div className="label">Core values</div>
          <div className="pills">
            {s.values.map((v, k) => <span key={v} className="pill r" style={{ '--i': 5 + k }}>{v}</span>)}
          </div>
        </article>
        <img className="profile-chair r" style={{ '--i': 5 }} src={asset('img/03_side.png')} alt="AIDA from the side" />
      </div>
    </>
  )
}

function Vision({ s }) {
  return (
    <>
      <Head s={s} />
      <p className="big-quote r" style={{ '--i': 2 }}>“{s.quote}”</p>
      <div className="grid g4 compact">
        {s.traits.map((t, k) => (
          <article key={t.head} className="card r" style={{ '--i': 3 + k }}>
            <h3>{t.head}</h3>
            <p>{t.text}</p>
          </article>
        ))}
      </div>
      <div className="goals r" style={{ '--i': 8 }}>
        <span className="label">Goals</span>
        {s.goals.map((g) => <span key={g} className="goal">{g}</span>)}
      </div>
    </>
  )
}

function Mission({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="mission">
        <div>
          <p className="lead r" style={{ '--i': 2 }}>{s.mission}</p>
          <div className="label r" style={{ '--i': 3 }}>We aim to</div>
          <Bullets list={s.aims} start={4} />
        </div>
        <article className="card mantra r" style={{ '--i': 6 }}>
          <div className="label">Mantra</div>
          <p className="mantra-line">{s.mantra}</p>
          {s.pillars.map((p, k) => (
            <div key={p.head} className="pillar r" style={{ '--i': 7 + k }}>
              <b>{p.head}</b><span>{p.text}</span>
            </div>
          ))}
        </article>
      </div>
    </>
  )
}

function Golden({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="golden">
        <svg viewBox="0 0 400 400" className="rings r" style={{ '--i': 2 }}>
          <circle cx="200" cy="200" r="190" className="ring ring-3" />
          <circle cx="200" cy="200" r="130" className="ring ring-2" />
          <circle cx="200" cy="200" r="70" className="ring ring-1" />
          <text x="200" y="208" className="ring-t strong">WHY</text>
          <text x="200" y="104" className="ring-t">HOW</text>
          <text x="200" y="45" className="ring-t">WHAT</text>
        </svg>
        <div className="golden-list">
          {s.rings.map((g, k) => (
            <article key={g.head} className="card r" style={{ '--i': 3 + k }}>
              <h3>{g.head}?</h3>
              <p>{g.text}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

function Swot({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="swot">
        {s.quads.map((q, k) => (
          <article key={q.head} className={`card quad ${q.tone} r`} style={{ '--i': 2 + k }}>
            <div className="quad-letter">{q.head[0]}</div>
            <h3>{q.head}</h3>
            <Bullets list={q.list} start={3 + k} />
          </article>
        ))}
      </div>
    </>
  )
}

function CustDev({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="custdev">
        {s.steps.map((st, k) => (
          <article key={st.head} className="card step r" style={{ '--i': 2 + k }}>
            <div className="num">{k + 1}</div>
            <h3>{st.head}</h3>
            <p className="q">{st.q}</p>
            <Bullets list={st.list} start={3 + k} />
          </article>
        ))}
        <div className="loop r" style={{ '--i': 7 }}>
          <svg viewBox="0 0 1000 40" preserveAspectRatio="none"><path d="M 980 4 V 26 H 20 V 4" /><path d="M 12 12 L 20 2 L 28 12" /></svg>
          <span>{s.loop}</span>
        </div>
      </div>
      <p className="footnote-quote r" style={{ '--i': 8 }}>{s.quote}</p>
    </>
  )
}

function Lean({ s }) {
  const parts = ['Build', 'Measure', 'Learn']
  return (
    <>
      <Head s={s} />
      <div className="lean">
        <div className="loop3 r" style={{ '--i': 2 }}>
          <svg viewBox="0 0 300 300">
            <circle cx="150" cy="150" r="110" className="loop-ring" />
            {parts.map((p, k) => {
              const a = (-90 + k * 120) * (Math.PI / 180)
              return (
                <g key={p}>
                  <circle cx={150 + 110 * Math.cos(a)} cy={150 + 110 * Math.sin(a)} r="38" className="loop-node" />
                  <text x={150 + 110 * Math.cos(a)} y={155 + 110 * Math.sin(a)} className="loop-t">{p}</text>
                </g>
              )
            })}
          </svg>
        </div>
        <div>
          <div className="hypo r" style={{ '--i': 3 }}><span className="label">Hypothesis</span>{s.hypothesis}</div>
          <div className="mvps">
            {s.mvps.map((m, k) => (
              <article key={m.head} className="card r" style={{ '--i': 4 + k }}>
                <h3>{m.head}</h3>
                <p>{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function Growth({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="grid g3 compact">
        {s.engines.map((e, k) => (
          <article key={e.head} className={`card r ${e.main ? 'main' : ''}`} style={{ '--i': 2 + k }}>
            <h3>{e.head} engine {e.main && <span className="tag">main engine</span>}</h3>
            <p>{e.text}</p>
          </article>
        ))}
      </div>
      <div className="pivot r" style={{ '--i': 5 }}>
        <div>
          <h3 className="pivot-title">{s.pivotTitle}</h3>
          <p>{s.baseline}</p>
        </div>
        <div className="pivots">
          {s.pivots.map((p, k) => (
            <div key={p.head} className="pv r" style={{ '--i': 6 + k }}>
              <span className="label">{p.head} pivot</span>
              <b>{p.text}</b>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function Bmc({ s }) {
  const b = s.blocks
  const Block = ({ k, name, area, i }) => (
    <div className="bmc-b r" style={{ gridArea: area, '--i': i }}>
      <div className="label">{name}</div>
      <ul>{b[k].map((t) => <li key={t}>{t}</li>)}</ul>
    </div>
  )
  return (
    <>
      <Head s={s} />
      <div className="bmc-wrap">
        <div className="bmc">
          <Block k="partners" name="Key partners" area="kp" i={2} />
          <Block k="activities" name="Key activities" area="ka" i={3} />
          <Block k="resources" name="Key resources" area="kr" i={4} />
          <Block k="value" name="Value propositions" area="vp" i={5} />
          <Block k="relationships" name="Customer relationships" area="cr" i={6} />
          <Block k="channels" name="Channels" area="ch" i={7} />
          <Block k="segments" name="Customer segments" area="cs" i={8} />
          <Block k="costs" name="Cost structure" area="co" i={9} />
          <Block k="revenue" name="Revenue streams" area="rs" i={10} />
        </div>
        <article className="card key-idea r" style={{ '--i': 11 }}>
          <div className="label">Key idea</div>
          <p>{s.keyIdea}</p>
        </article>
      </div>
    </>
  )
}

function Tam({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="golden">
        <svg viewBox="0 0 400 400" className="rings tam r" style={{ '--i': 2 }}>
          <circle cx="200" cy="200" r="190" className="ring ring-3" />
          <circle cx="200" cy="255" r="135" className="ring ring-2" />
          <circle cx="200" cy="315" r="75" className="ring ring-1" />
          <text x="200" y="45" className="ring-t">TAM</text>
          <text x="200" y="160" className="ring-t">SAM</text>
          <text x="200" y="322" className="ring-t strong">SOM</text>
        </svg>
        <div className="golden-list">
          {s.rings.map((g, k) => (
            <article key={g.head} className="card r" style={{ '--i': 3 + k }}>
              <h3>{g.head} <span className="muted">· {g.name}</span></h3>
              <p>{g.text}</p>
            </article>
          ))}
          <div className="source r" style={{ '--i': 6 }}>{s.source}</div>
        </div>
      </div>
    </>
  )
}

function Segment({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="segment">
        <div className="seg-list">
          {s.segments.map((g, k) => (
            <article key={g.head} className="card row r" style={{ '--i': 2 + k }}>
              <h3>{g.head}</h3>
              <p>{g.text}</p>
            </article>
          ))}
        </div>
        <article className="card best r" style={{ '--i': 5 }}>
          <div className="label">Our best customer</div>
          <p className="best-lead">A university that…</p>
          <Bullets list={s.best} start={6} />
        </article>
      </div>
    </>
  )
}

function Positioning({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="statement">
        {s.lines.map(([k, v], i) => (
          <div key={k} className={`st-row r ${k === 'AIDA is' ? 'hl' : ''}`} style={{ '--i': 2 + i }}>
            <span className="st-k">{k}</span>
            <span className="st-v">{v}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function PosMap({ s }) {
  const W = 760, H = 600, P = 40
  const X = (x) => P + ((x + 1) / 2) * (W - 2 * P)
  const Y = (y) => P + ((1 - y) / 2) * (H - 2 * P)
  return (
    <>
      <Head s={s} />
      <div className="map-wrap">
        <svg viewBox={`0 0 ${W} ${H}`} className="map r" style={{ '--i': 2 }}>
          <line x1={P} x2={W - P} y1={H / 2} y2={H / 2} className="axis" />
          <line y1={P} y2={H - P} x1={W / 2} x2={W / 2} className="axis" />
          <text x={W / 2} y={24} className="ax-t">High dietary safety</text>
          <text x={W / 2} y={H - 8} className="ax-t">Low dietary safety</text>
          <text x={P} y={H / 2 - 12} className="ax-t start">Needs help</text>
          <text x={W - P} y={H / 2 - 12} className="ax-t end">Fully independent</text>
          {s.points.map((p, k) => (
            <g key={p.name} className="pt r" style={{ '--i': 3 + k }}>
              <circle cx={X(p.x)} cy={Y(p.y)} r={p.us ? 16 : 7} className={p.us ? 'us' : 'them'} />
              <text x={X(p.x) + (p.us ? -26 : 0)} y={Y(p.y) + (p.us ? 6 : -14)} className={`pt-t ${p.us ? 'us-t' : ''}`}>{p.name}</text>
            </g>
          ))}
        </svg>
        <article className="card r" style={{ '--i': 10 }}>
          <div className="label">What it shows</div>
          <Bullets list={s.takeaways} start={11} />
        </article>
      </div>
    </>
  )
}

function Timeline({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="timeline">
        <div className="tl-line r" style={{ '--i': 2 }} />
        {s.steps.map((st, k) => (
          <div key={st.head} className="tl-step r" style={{ '--i': 3 + k }}>
            <div className="tl-dot">{k + 1}</div>
            <h3>{st.head}</h3>
            <p>{st.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

function Chasm({ s }) {
  // a bell curve split into the five adopter groups, with a gap after early adopters
  const W = 1400, H = 230
  const bell = (x) => Math.exp(-((x - 0.5) ** 2) / (2 * 0.17 ** 2))
  const cuts = [0, 0.16, 0.34, 0.5, 0.68, 1]
  const seg = (a, b, k) => {
    const shift = k >= 2 ? 26 : 0
    let d = `M ${a * W + shift} ${H}`
    for (let t = a; t <= b + 1e-9; t += 0.005) d += ` L ${t * W + shift} ${H - bell(t) * (H - 20)}`
    return d + ` L ${b * W + shift} ${H} Z`
  }
  return (
    <>
      <Head s={s} />
      <div className="chasm r" style={{ '--i': 2 }}>
        <svg viewBox={`0 0 ${W + 30} ${H}`} preserveAspectRatio="none">
          {cuts.slice(0, -1).map((a, k) => <path key={k} d={seg(a, cuts[k + 1] - 0.004, k)} className={`bell b${k}`} />)}
        </svg>
        <div className="chasm-gap"><span>The chasm</span></div>
      </div>
      <div className="adopters">
        {s.groups.map((g, k) => (
          <div key={g.head} className="adopter r" style={{ '--i': 3 + k }}>
            <b>{g.head}</b><span>{g.text}</span>
          </div>
        ))}
      </div>
      <div className="grid g4 compact strategies">
        {s.strategies.map((st, k) => (
          <article key={st.head} className="card r" style={{ '--i': 8 + k }}>
            <h3>{st.head}</h3>
            <p>{st.text}</p>
          </article>
        ))}
      </div>
    </>
  )
}

function Costs({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="costs">
        <div className="r" style={{ '--i': 2 }}>
          <p className="lead small">{s.lead}</p>
          <table className="table">
            <thead><tr><th>Item</th><th className="n">AED</th></tr></thead>
            <tbody>
              {s.rows.map(([k, v]) => <tr key={k}><td>{k}</td><td className="n">{fmt(v)}</td></tr>)}
              <tr className="total"><td>Total start-up capital</td><td className="n">{s.total}</td></tr>
            </tbody>
          </table>
        </div>
        <div className="costs-side">
          <article className="card r" style={{ '--i': 3 }}>
            <div className="label">Per chair</div>
            <Bullets list={s.perChair} start={4} />
          </article>
          <article className="card r" style={{ '--i': 5 }}>
            <div className="label">Pricing (assumption)</div>
            <Bullets list={s.pricing} start={6} />
          </article>
          <div className="source r" style={{ '--i': 8 }}>{s.note}</div>
        </div>
      </div>
    </>
  )
}

function Income({ s }) {
  const rev = s.rows.find((x) => x.label === 'Total revenue').v
  const net = s.rows.find((x) => x.net).v
  const max = Math.max(...rev)
  return (
    <>
      <Head s={s} />
      <div className="income">
        <table className="table r" style={{ '--i': 2 }}>
          <thead><tr><th />{s.years.map((y) => <th key={y} className="n">{y}</th>)}</tr></thead>
          <tbody>
            {s.rows.map((row) => (
              <tr key={row.label} className={`${row.strong ? 'strong' : ''} ${row.net ? 'net' : ''}`}>
                <td>{row.label}</td>
                {row.v.map((v, k) => <td key={k} className={`n ${v < 0 && row.net ? 'loss' : ''} ${v > 0 && row.net ? 'gain' : ''}`}>{row.plain ? v : fmt(v)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bars r" style={{ '--i': 3 }}>
          <div className="label">Revenue vs net profit</div>
          <div className="bar-chart">
            {rev.map((v, k) => (
              <div key={k} className="bar-col">
                <div className="bar-pos">
                  <div className="bar rev" style={{ height: `${(v / max) * 100}%` }} title={`Revenue ${fmt(v)}`} />
                  <div className="bar netp" style={{ height: `${Math.max(net[k], 0) / max * 100}%` }} />
                </div>
                <div className="bar-neg">
                  <div className="bar netn" style={{ height: `${Math.max(-net[k], 0) / max * 100 * 2.2}%` }} />
                </div>
                <div className="bar-x">Y{k + 1}</div>
              </div>
            ))}
          </div>
          <div className="legend"><span className="lg rev" />Revenue <span className="lg net" />Net profit / loss</div>
        </div>
      </div>
      <div className="source r" style={{ '--i': 4 }}>{s.note}</div>
    </>
  )
}

function Stairs({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="stairs">
        {s.stages.map((st, k) => (
          <article key={st.head} className="card stair r" style={{ '--i': 2 + k, '--h': `${46 + k * 18}%` }}>
            <div className="label">{st.head}</div>
            <div className="amount">{st.amount}</div>
            <p>{st.text}</p>
          </article>
        ))}
      </div>
      <div className="stairs-foot r" style={{ '--i': 6 }}>
        <span className="axis-arrow">{s.axis}</span>
        <span className="muted">{s.note}</span>
      </div>
    </>
  )
}

function Risks({ s }) {
  return (
    <>
      <Head s={s} />
      <div className="risks">
        {s.risks.map((rk, k) => (
          <article key={rk.head} className={`card risk r ${rk.star ? 'star' : ''}`} style={{ '--i': 2 + k }}>
            <h3>{rk.head} {rk.star && <span className="tag">most important now</span>}</h3>
            <p className="q">{rk.q}</p>
            <p className="a">→ {rk.a}</p>
          </article>
        ))}
      </div>
    </>
  )
}

function Pitch({ s }) {
  return (
    <div className="pitch">
      <div className="kicker r" style={{ '--i': 0 }}>{s.kicker}</div>
      {s.text.map((t, k) => <p key={k} className="r" style={{ '--i': 1 + k * 2 }}>{t}</p>)}
    </div>
  )
}

function End() {
  return (
    <div className="end">
      <img className="end-chair r" style={{ '--i': 0 }} src={asset('img/04_folded.png')} alt="AIDA folded" />
      <h1 className="r" style={{ '--i': 1 }}>Thank you</h1>
      <p className="r" style={{ '--i': 2 }}>Questions?</p>
      <div className="kicker r" style={{ '--i': 3 }}>AIDA · Lunch, on your own terms.</div>
    </div>
  )
}

const RENDER = {
  title: Title, cards: Cards, cards4: Cards4, research: Research, profile: Profile,
  vision: Vision, mission: Mission, golden: Golden, swot: Swot, custdev: CustDev, lean: Lean,
  growth: Growth, bmc: Bmc, tam: Tam, segment: Segment, positioning: Positioning, map: PosMap,
  timeline: Timeline, chasm: Chasm, costs: Costs, income: Income, stairs: Stairs, risks: Risks,
  pitch: Pitch, end: End,
}

export function SlideBody({ slide }) {
  const chapter = CHAPTERS.find((c) => c.id === slide.chapter)
  if (slide.type === 'divider') return <Divider chapter={chapter} />
  const C = RENDER[slide.type]
  return <C s={slide} />
}
