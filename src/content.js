// Every slide of the AIDA opportunity analysis, grouped by the team member who presents it.
// Each chapter has its own palette, which drives the shader background.

export const CHAPTERS = [
  {
    id: 'opening',
    title: 'Opening',
    presenter: 'Abbas',
    palette: ['#1c1714', '#3a2a22', '#e07a4f', '#5b4636'],
    accent: '#e07a4f',
  },
  {
    id: 'strategy',
    title: 'Vision & Strategy',
    presenter: 'Momen',
    palette: ['#171a12', '#2f3a22', '#8a9a5b', '#4a5536'],
    accent: '#a9b878',
  },
  {
    id: 'lean',
    title: 'Customers & Lean Startup',
    presenter: 'Faisal',
    palette: ['#10181a', '#1f3436', '#3f7a7e', '#2b4a4c'],
    accent: '#6fb3b6',
  },
  {
    id: 'market',
    title: 'Business Model & Positioning',
    presenter: 'Matthew',
    palette: ['#1a1418', '#36232e', '#b0657f', '#4d3440'],
    accent: '#d48aa3',
  },
  {
    id: 'gtm',
    title: 'Go-to-Market',
    presenter: 'Abdulla',
    palette: ['#19160f', '#3a301c', '#c9a24a', '#54452a'],
    accent: '#dcb862',
  },
  {
    id: 'capital',
    title: 'Capital, Risk & Legal',
    presenter: 'Fadel',
    palette: ['#13141b', '#262a3d', '#6c7bd0', '#383d5a'],
    accent: '#929ee6',
  },
  {
    id: 'closing',
    title: 'Closing',
    presenter: 'Abbas',
    palette: ['#1c1714', '#3a2a22', '#e07a4f', '#5b4636'],
    accent: '#e07a4f',
  },
]

export const SLIDES = [
  // ───────────── Opening · Abbas
  { chapter: 'opening', type: 'title' },
  {
    chapter: 'opening', type: 'cards', kicker: 'Overview', title: 'Introduction',
    cards: [
      { icon: '◎', head: 'Focus', text: "Students and professors who are People of Determination (PoD) can't reach campus food on their own, and the food often doesn't suit their dietary needs." },
      { icon: '⌂', head: 'Target segments', list: ['Buyers: university chairmen and the office of student affairs', 'Users: PoD students and professors'] },
      { icon: '⌕', head: 'Objective', text: 'Assess demand, market, competition, capital, risks and legal needs before scaling the business.' },
    ],
  },
  {
    chapter: 'opening', type: 'research', kicker: 'Research', title: 'Data downloading',
    primary: ['PoD students skip meals 2–3 times a week', 'Getting food takes an extra 20–30 minutes', "They can't push a wheelchair and carry a tray", "Some can't tell what's inside a meal"],
    quote: '“…makes me choose food based on what is easiest to access rather than what I actually want.”',
    quoteBy: 'Kyle, empathy interview',
    secondary: [
      { stat: '~49,000', text: 'People of Determination in the UAE', src: 'Ministry of Family, 2026' },
      { stat: '16%', text: 'of people worldwide have a significant disability', src: 'WHO, 2023' },
      { stat: 'Policy', text: 'UAE National Policy for PoD prioritises accessible buildings' },
      { stat: 'Proven', text: 'App-called wheelchair fleets already run in airports and hospitals', src: 'IEEE Spectrum' },
    ],
  },
  {
    chapter: 'opening', type: 'profile', kicker: 'Who we are', title: 'Company profile',
    lead: 'AIDA is an AI-driven smart wheelchair fleet and app that lets People of Determination on campus reach food that suits their diet, independently.',
    offer: ['Shared self-driving chairs', 'AI matching of diet to campus menus', 'Pre-order and pickup', 'Fold-out meal tray', 'Maintenance and free updates'],
    values: ['Independence', 'Dignity', 'Safety', 'Inclusion', 'Continuous improvement'],
  },

  // ───────────── Vision & Strategy · Momen
  { chapter: 'strategy', type: 'divider' },
  {
    chapter: 'strategy', type: 'vision', kicker: 'Vision', title: 'Our vision',
    quote: 'A UAE where every person of determination reaches the food they need, on their own.',
    traits: [
      { head: 'Clear', text: 'One simple goal: independent access to food' },
      { head: 'Consistent', text: 'Holds as we grow from campuses to other sites' },
      { head: 'Unique', text: 'Only AIDA combines transport and diet matching' },
      { head: 'Purposeful', text: 'Gives PoD dignity and independence' },
    ],
    goals: ['Inclusive campuses across the UAE and GCC', 'No skipped meals because of access', 'The trusted standard for accessible dining'],
  },
  {
    chapter: 'strategy', type: 'mission', kicker: 'Mission & mantra', title: 'Our mission',
    mission: 'To give universities a safe, AI-driven mobility and meal system that lets students and professors who are People of Determination get suitable food independently.',
    aims: ['Partner with universities and student affairs offices', 'Work with food outlets on accurate ingredient data', 'Improve continuously from user feedback'],
    mantra: 'Lunch, on your own terms.',
    pillars: [
      { head: 'Independence', text: 'No asking anyone for help' },
      { head: 'Safety', text: 'Every meal matches your diet' },
      { head: 'Time', text: 'The whole trip fits one class break' },
    ],
  },
  {
    chapter: 'strategy', type: 'golden', kicker: 'Start with why', title: 'Golden circle',
    rings: [
      { head: 'Why', text: 'Every person of determination deserves to reach safe food on their own, with dignity.' },
      { head: 'How', text: 'Self-driving chairs, AI diet matching, pre-order and pickup, and a fold-out tray.' },
      { head: 'What', text: 'A smart wheelchair fleet and app for university campuses.' },
    ],
  },
  {
    chapter: 'strategy', type: 'swot', kicker: 'Strategy', title: 'SWOT analysis',
    quads: [
      { head: 'Strengths', tone: 'pos', list: ['Working app already built', 'Real user insight from 6 interviews', 'Unique: transport + diet matching', 'Cybersecurity skills to protect health data'] },
      { head: 'Weaknesses', tone: 'neg', list: ['High early cost per chair (~AED 38k)', 'Student team with limited hardware experience', 'No safety certification yet'] },
      { head: 'Opportunities', tone: 'pos', list: ['UAE national policy for PoD', "Universities' inclusion goals", 'Expansion to the GCC, hospitals and airports'] },
      { head: 'Threats', tone: 'neg', list: ['Safety rules for self-driving chairs', 'Cheaper partial fixes (delivery, lower counters)', 'Slow university procurement', 'Health-data privacy concerns'] },
    ],
  },

  // ───────────── Customers & Lean Startup · Faisal
  { chapter: 'lean', type: 'divider' },
  {
    chapter: 'lean', type: 'custdev', kicker: 'Customer development', title: 'Four steps to customers',
    steps: [
      { head: 'Customer discovery', q: 'Who are our customers and what do they need?', list: ['Buyers: university chairmen and student affairs', 'Users: PoD students and professors', 'Need: independence, diet safety, time', 'Hypotheses: universities buy a fleet; PoD use it weekly'] },
      { head: 'Customer validation', q: 'Test the idea with feedback and data', list: ['Done: 6 empathy interviews confirmed the need', 'Next: pitch to 5 universities for letters of intent', 'Next: prototype trial with our interviewees', 'Success: ≥2 letters of intent; ≥2 uses per student a week'] },
      { head: 'Customer creation', q: 'Build awareness and demand', list: ['News articles and interviews', 'Inclusivity foundations and PoD organisations', 'LinkedIn and Instagram', 'Live demos and a website with quotes'] },
      { head: 'Company building', q: 'Long-term relationships and growth', list: ['Maintenance contracts keep universities', 'Free system updates', 'Feedback loop with PoD users', 'Grow the team: sales and engineering'] },
    ],
    loop: 'Pivot back to discovery if validation fails',
    quote: '“No business plan survives first contact with customers.” — Steve Blank',
  },
  {
    chapter: 'lean', type: 'lean', kicker: 'Lean startup', title: 'Build · Measure · Learn',
    hypothesis: 'Universities will pay for a chair fleet to support PoD.',
    mvps: [
      { head: 'Video MVP', text: 'Demo video for universities; measure quote requests' },
      { head: 'Concierge MVP', text: 'Serve one PoD student by hand: order, diet check, delivery' },
      { head: 'Wizard of Oz MVP', text: 'The app looks automatic; staff match meals and push a normal chair' },
    ],
  },
  {
    chapter: 'lean', type: 'growth', kicker: 'Lean startup', title: 'Engines of growth',
    engines: [
      { head: 'Sticky', main: true, text: 'Keep universities with maintenance and free updates' },
      { head: 'Viral', text: 'Successful campuses shared in the news and by foundations' },
      { head: 'Paid', text: 'Sales meetings and events; keep cost per customer below its value' },
    ],
    pivotTitle: 'Pivot or persevere?',
    baseline: 'Baseline: quote requests, weekly use, satisfaction. Persevere if the numbers clearly improve.',
    pivots: [
      { head: 'Customer segment', text: 'Hospitals or airports' },
      { head: 'Value capture', text: 'Leasing instead of selling' },
      { head: 'Growth', text: 'Partnerships instead of paid sales' },
    ],
  },

  // ───────────── Business Model & Positioning · Matthew
  { chapter: 'market', type: 'divider' },
  {
    chapter: 'market', type: 'bmc', kicker: 'Business model', title: 'Business model canvas',
    blocks: {
      partners: ['Wheelchair and component suppliers', 'Campus food outlets', 'Inclusivity foundations', 'Cloud provider'],
      activities: ['System and app improvement', 'Chair development', 'New tech integrations', 'Version control'],
      resources: ['Designers, programmers, engineers', 'Salesperson, research', 'Capital, moulding factory'],
      value: ['Inclusive campus for PoD students and professors', 'Problem: food is far and doesn’t suit diets', 'Solution: chair transport + AI diet matching'],
      relationships: ['Articles, news, interviews, social media', 'Inclusivity foundations', 'Retain: maintenance and improvements'],
      channels: ['Face-to-face and online meetings', 'Website with quote and info'],
      segments: ['Universities', 'University chairmen', 'Office of student affairs'],
      costs: ['Factory', 'Components', 'Servers'],
      revenue: ['Fleet price by quote; volume discount', 'Maintenance priced per issue', 'Free system updates'],
    },
    keyIdea: 'Universities pay for an inclusive campus; PoD use AIDA for free.',
  },
  {
    chapter: 'market', type: 'tam', kicker: 'Market analysis', title: 'TAM · SAM · SOM',
    rings: [
      { head: 'TAM', name: 'Total addressable market', text: 'Institutions worldwide serving people with mobility disabilities: universities, hospitals, airports (1.3 billion people have a significant disability).' },
      { head: 'SAM', name: 'Serviceable available market', text: 'Universities in the UAE and GCC with PoD students and professors.' },
      { head: 'SOM', name: 'Base camp', text: "ADU's campuses plus 3–5 Abu Dhabi universities in the first 3 years." },
    ],
    source: 'Source: WHO Disability fact sheet (2023)',
  },
  {
    chapter: 'market', type: 'segment', kicker: 'Go-to-market', title: 'Target segment & best customer',
    segments: [
      { head: 'Geographic', text: 'Abu Dhabi first, then the UAE and GCC' },
      { head: 'Demographic', text: 'Universities with PoD students and professors; large campuses with many buildings' },
      { head: 'Psychographic', text: 'Leaders who value inclusion, rankings and national policy goals' },
    ],
    best: ['Values inclusion', 'Renews maintenance every year', 'Recommends AIDA to other universities', "Won't easily switch to a competitor"],
  },
  {
    chapter: 'market', type: 'positioning', kicker: 'Positioning', title: 'Positioning statement',
    lines: [
      ['For', 'universities with students and professors who are People of Determination'],
      ['Who', 'need an inclusive way for them to reach suitable food independently,'],
      ['AIDA is', 'an AI-driven smart wheelchair fleet and app'],
      ['That', 'takes users to their meal and matches it to their dietary needs.'],
      ['Unlike', 'staff help, delivery apps or standard power wheelchairs,'],
      ['Our product', 'combines self-driving transport and AI diet matching in one system.'],
    ],
  },
  {
    chapter: 'market', type: 'map', kicker: 'Positioning', title: 'Positioning map',
    // x: needs help (-1) → fully independent (+1); y: low (-1) → high (+1) dietary safety
    points: [
      { name: 'AIDA', x: 0.78, y: 0.82, us: true },
      { name: 'Menu / nutrition labels', x: -0.45, y: 0.45 },
      { name: 'Cafeteria redesign', x: -0.18, y: -0.18 },
      { name: 'Staff / friend help', x: -0.72, y: -0.3 },
      { name: 'Airport self-driving chairs', x: 0.62, y: -0.45 },
      { name: 'Delivery apps', x: -0.08, y: -0.65 },
      { name: 'Standard power wheelchair', x: 0.36, y: -0.85 },
    ],
    takeaways: ['Competitors solve one step: either transport or food information', 'AIDA is the only option high on both independence and dietary safety'],
  },

  // ───────────── Go-to-Market · Abdulla
  { chapter: 'gtm', type: 'divider' },
  {
    chapter: 'gtm', type: 'cards4', kicker: 'Go-to-market', title: 'Product–market fit',
    cards: [
      { head: 'User interface', text: 'In the app, users call a chair, choose a safe meal and track the trip' },
      { head: 'Application interface', text: 'Fits the campus day: order from class, ride to pickup, back within the break' },
      { head: 'Data interface', text: 'Menu data from outlets plus user feedback and usage improve matching' },
      { head: 'Buyer interface', text: 'Universities request a quote, buy a fleet and book maintenance per issue' },
    ],
  },
  {
    chapter: 'gtm', type: 'timeline', kicker: 'Go-to-market', title: 'Market penetration plan',
    steps: [
      { head: 'Pilot at ADU', text: 'Run AIDA on our own campus first' },
      { head: 'Student affairs meetings', text: 'Demos and quotes for university leaders' },
      { head: 'Media and foundations', text: 'News, interviews and inclusivity partners build trust' },
      { head: 'Volume discounts', text: 'More chairs, lower price per chair' },
      { head: 'Feedback and updates', text: 'Free updates keep customers loyal' },
    ],
  },
  {
    chapter: 'gtm', type: 'chasm', kicker: 'Crossing the chasm', title: 'Defining & crossing the chasm',
    groups: [
      { head: 'Innovators', text: 'ADU, our own campus pilot' },
      { head: 'Early adopters', text: 'Universities with strong inclusion goals' },
      { head: 'Early majority', text: 'Buy after seeing pilot results and news' },
      { head: 'Late majority', text: 'Buy once AIDA is the accepted standard' },
      { head: 'Laggards', text: 'Keep relying on staff help' },
    ],
    note: 'The chasm: moving from early adopters to the mainstream university market.',
    strategies: [
      { head: 'Product differentiation', text: 'Only AIDA combines self-driving transport and AI diet matching' },
      { head: 'Early adopter promotion', text: 'Turn the ADU pilot into a case study and testimonials' },
      { head: 'One beachhead', text: 'Focus on Abu Dhabi universities before expanding' },
      { head: 'Trusted recommendations', text: 'PoD organisations, foundations and students vouch for us' },
    ],
  },

  // ───────────── Capital, Risk & Legal · Fadel
  { chapter: 'capital', type: 'divider' },
  {
    chapter: 'capital', type: 'costs', kicker: 'Capital', title: 'Start-up costs',
    lead: 'The one-time and early operating costs needed to launch the business.',
    rows: [
      ['Prototype chair (base, sensors, motors, tray)', 38000],
      ['Charging dock and pickup shelf', 10000],
      ['Servers and security check (app already built)', 12000],
      ['Safety testing and insurance', 20000],
      ['Trade licence and legal', 15000],
      ['Demos, website and sales', 10000],
      ['Contingency (~10%)', 10000],
    ],
    total: '≈ 115,000',
    perChair: ['≈ AED 38,000 for the prototype (retail parts)', '≈ AED 9,500 in mass production (1,000 a year)'],
    pricing: ['Fleet price ≈ AED 30,000 per chair', 'Volume discount: 10+ chairs −10%, 25+ chairs −15%', 'Maintenance ≈ AED 2,000 per chair per year'],
    note: 'Team estimates, not supplier quotes.',
  },
  {
    chapter: 'capital', type: 'income', kicker: 'Capital', title: 'Projected income statement',
    lead: 'Revenue, expenses and profit or loss over three years (AED).',
    years: ['Year 1 · ADU pilot', 'Year 2', 'Year 3'],
    rows: [
      { label: 'Chairs sold', v: [5, 40, 120], plain: true },
      { label: 'Revenue: chair sales', v: [150000, 1080000, 3120000] },
      { label: 'Revenue: maintenance', v: [0, 90000, 330000] },
      { label: 'Total revenue', v: [150000, 1170000, 3450000], strong: true },
      { label: 'Cost of chairs sold', v: [-125000, -720000, -1680000] },
      { label: 'Gross profit', v: [25000, 450000, 1770000], strong: true },
      { label: 'Salaries', v: [-120000, -300000, -700000] },
      { label: 'R&D and certification', v: [-50000, -100000, -370000] },
      { label: 'Servers, marketing, legal, insurance', v: [-67000, -160000, -430000] },
      { label: 'Net profit / (loss)', v: [-212000, -110000, 270000], strong: true, net: true },
    ],
    note: 'Illustrative projection: AED 30k list price with volume discounts; cost per chair falls from 25k to 14k as volume grows. Break-even in Year 3.',
  },
  {
    chapter: 'capital', type: 'stairs', kicker: 'Capital', title: 'Capital sources',
    stages: [
      { head: 'Idea → prototype', amount: '≈ AED 115k', text: 'Khalifa Fund loan (80%), ADU Innovate, family and friends' },
      { head: 'Pilot · Year 1–2', amount: '≈ AED 350k', text: 'Angel investors, government grants, first university sale' },
      { head: 'Production · Year 3+', amount: '≈ AED 1–3M', text: 'Venture capital or a strategic partner (wheelchair maker)' },
      { head: 'Profitable', amount: 'As needed', text: 'Bank loans for factory and expansion' },
    ],
    axis: 'Lower risk → larger investments',
    note: 'Trade-off: give equity only for capital and expertise that grow the pie.',
  },
  {
    chapter: 'capital', type: 'risks', kicker: 'Risk', title: 'The most important risk right now',
    risks: [
      { head: 'Market risk', star: true, q: 'Will universities buy?', a: 'Letters of intent before building' },
      { head: 'Technological risk', q: 'Safe self-driving and accurate diet data', a: 'Mapped routes, low speed, dietitian checks' },
      { head: 'Capital risk', q: 'Expensive early chairs', a: 'One prototype first, staged funding' },
      { head: 'Team risk', q: 'Little hardware experience', a: 'ADU Innovate mentors, manufacturer partner' },
    ],
  },
  {
    chapter: 'capital', type: 'cards4', kicker: 'Legal', title: 'Legal matters in the UAE',
    cards: [
      { head: 'Business licence', text: 'Economic licence from ADDED (via TAMM) on the mainland, or a tech start-up licence in ADGM' },
      { head: 'Medical device registration', text: 'The chair must be registered with the Emirates Drug Establishment (formerly MOHAP)' },
      { head: 'Data protection', text: 'Health and diet data are sensitive under the Personal Data Protection Law (Federal Decree-Law 45/2021)' },
      { head: 'Intellectual property', text: 'Patent the chair design (Federal Law 11/2021, Ministry of Economy) and trademark the name AIDA' },
    ],
    source: 'Sources: added.gov.ae · adgm.com · RegDesk · UAE PDPL · moet.gov.ae',
  },

  // ───────────── Closing · Abbas
  { chapter: 'closing', type: 'divider' },
  {
    chapter: 'closing', type: 'timeline', kicker: 'Growth', title: 'Learning and adaptation',
    steps: [
      { head: 'Continuous feedback', text: 'Improve from PoD user and university feedback' },
      { head: 'Understanding users', text: 'Study diets, routes and peak times to improve matching' },
      { head: 'Adapting to competition', text: 'Adjust prices, discounts and features' },
      { head: 'Technology', text: 'New integrations and version-controlled updates' },
      { head: 'Safety and growth', text: 'Keep safety and data standards as we scale' },
    ],
  },
  {
    chapter: 'closing', type: 'pitch', kicker: 'Elevator pitch',
    text: [
      "Every day, students and professors who are People of Determination skip lunch, not because of the food, but because they can't get to it, or can't tell if it's safe for them.",
      'AIDA is a smart wheelchair fleet and app: it comes to you, takes you to a meal that matches your diet, and brings you back to class.',
      'Universities get a truly inclusive campus. Users get lunch, on their own terms.',
    ],
  },
  { chapter: 'closing', type: 'end' },
]

export const TEAM = ['Abbas Nuredin Kedir', 'Momen Badia Belgaroui', 'Faisal Hamad', 'Matthew', 'Abdulla Mohamed Alshehhi', 'Fadel Fuad Swedan']
