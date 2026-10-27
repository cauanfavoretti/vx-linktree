import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight, GraduationCap, Building2, UserRound, Share2, Check, X } from 'lucide-react';
import { motion, MotionConfig, useReducedMotion } from 'motion/react';
import { content, details, whatsappMessages } from './content';
type Destination = keyof typeof content.destinations;

function MethodXVisual({ reduced }: { reduced: boolean | null }) {
  return <div className="commercial-visual method-x-visual" aria-hidden="true">
    <div className="commercial-grid"/>
    <svg viewBox="0 0 320 360" fill="none">
      <motion.g animate={reduced ? {} : { rotate: [0, 6, 0], scale: [1, 1.035, 1] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '160px 165px' }}>
        <rect x="57" y="62" width="206" height="206" rx="32" stroke="#ff6b1a" strokeOpacity=".22" transform="rotate(18 160 165)"/>
        <rect x="68" y="73" width="184" height="184" rx="28" stroke="#ffffff" strokeOpacity=".12" transform="rotate(-12 160 165)"/>
      </motion.g>
      <motion.g animate={reduced ? {} : { y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
        <path d="M91 92H135L166 140L197 92H241L188 170L244 250H198L166 201L133 250H88L143 170Z" fill="#ff6b1a" fillOpacity=".12" transform="translate(10 8)"/>
        <path d="M81 82H125L156 130L187 82H231L178 160L234 240H188L156 191L123 240H78L133 160Z" fill="#ff6b1a"/>
        <path d="M81 82H125L156 130L187 82H231L178 160L234 240H188L156 191L123 240H78L133 160Z" stroke="#ffc59b" strokeOpacity=".45"/>
      </motion.g>
      <motion.circle cx="263" cy="80" r="4" fill="#f3f2eb" animate={reduced ? {} : { opacity: [.3, 1, .3] }} transition={{ duration: 3, repeat: Infinity }}/>
      <path d="M50 276H270" stroke="#ff6b1a" strokeOpacity=".25"/>
      <text x="79" y="298" fill="#c4c3bb" fontSize="9" letterSpacing="4" fontFamily="monospace">MÉTODO X · CURSO</text>
    </svg>
  </div>;
}

export default function App() {
  const [notice, setNotice] = useState('');
  const [redirect, setRedirect] = useState<{ url: string | null } | null>(null);
  const [feedback, setFeedback] = useState('');
  const redirectLock = useRef(false);
  const [activeDetail, setActiveDetail] = useState<keyof typeof details | null>(null);
  const [copied, setCopied] = useState(false);
  const [transitionId, setTransitionId] = useState(0);
  const [closing, setClosing] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const reduceMotion = useReducedMotion();
  const courseWhatsApp = content.methodXWhatsappUrl || (content.whatsappNumber ? `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(whatsappMessages.courses)}` : null);
  useEffect(() => {
    function resetNavigation() { redirectLock.current = false; setRedirect(null); }
    window.addEventListener('pageshow', resetNavigation);
    return () => window.removeEventListener('pageshow', resetNavigation);
  }, []);
  useEffect(() => {
    if (!feedback) return;
    const timer = window.setTimeout(() => setFeedback(''), 5000);
    return () => window.clearTimeout(timer);
  }, [feedback]);
  function closeDetail() { setClosing(true); }
  function destinationUrl(key: Destination) {
    if (key === 'vx' || key === 'business') return content.vxWebsite;
    if (key === 'courses' || key === 'learn') return courseWhatsApp;
    return content.destinations[key];
  }
  function finishRedirect(url: string | null) {
    redirectLock.current = false;
    setRedirect(null);
    if (url) window.location.assign(url);
    else setFeedback('O link do WhatsApp do Método X será disponibilizado em breve.');
  }
  function openDestination(key: Destination, title: string) {
    if (redirectLock.current) return;
    const url = destinationUrl(key);
    if (key !== 'about' || url) {
      redirectLock.current = true;
      setFeedback('');
      if (reduceMotion) finishRedirect(url);
      else setRedirect({ url });
      return;
    }
    setClosing(false); setTransitionId(id => id + 1); setActiveDetail('about'); setNotice(title); dialogRef.current?.showModal();
  }
  function cta(key: Destination, title: string, children: ReactNode) {
    const url = destinationUrl(key);
    return url ? <a className="cta" href={url} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return; event.preventDefault(); openDestination(key, title); }}>{children}<ArrowUpRight size={19}/></a> : <button className="cta" onClick={() => openDestination(key, title)}>{children}<ArrowUpRight size={19}/></button>;
  }
  async function share() {
    try {
      if (navigator.share) await navigator.share({ title: `${content.name} | ${content.specialty}`, url: location.href });
      else { await navigator.clipboard.writeText(location.href); setCopied(true); setTimeout(() => setCopied(false), 2400); }
    } catch (error) {
      if (!(error instanceof DOMException && error.name === 'AbortError')) { setClosing(false); setTransitionId(id => id + 1); setActiveDetail(null); setNotice('Compartilhar página'); dialogRef.current?.showModal(); }
    }
  }
  const highlights = [
    { key: 'courses', label: 'Cursos', icon: GraduationCap },
    { key: 'vx', label: 'VX', icon: Building2 },
    { key: 'about', label: 'Sobre mim', icon: UserRound },
  ] as const;
  return <MotionConfig reducedMotion="user">
    <a href="#caminhos" className="skip-link">Pular para os links</a>
    <div className="ambient" aria-hidden="true"/>
    <div className="page-shell">
      <header><a className="wordmark" href="#" aria-label="VX, início"><img src="/vx-logo.png" alt="VX"/></a><span className="header-label">VENDAS. PESSOAS. RESULTADOS.</span><button className="share" onClick={share} aria-label={copied ? 'Link copiado' : 'Compartilhar página'}>{copied ? <Check size={17}/> : <Share2 size={17}/>}</button></header>
      <main>
        <motion.section className="profile" initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }} aria-labelledby="profile-name">
          <div className="avatar-wrap"><img className="avatar" src={content.photo} alt="Fábio Castello"/><span className="avatar-badge" aria-hidden="true">X</span></div>
          <div className="eyebrow">{content.role}</div>
          <h1 id="profile-name">{content.name}<span> | {content.specialty}</span></h1>
          <p className="bio">{content.bio}</p>
          <p className="signature">{content.signature.replace('Método X.', '')}<strong>Método <span>X.</span></strong></p>
          <div className="profile-tag"><span className="small-dot"/>Treinamentos e implantação comercial</div>
        </motion.section>
        <section id="caminhos" aria-labelledby="paths-title">
          <div className="section-heading"><span className="line"/><h2 id="paths-title">QUAL É O SEU PRÓXIMO PASSO?</h2><span className="line"/></div>
          <div className="cards">
            <motion.article className="path-card learn" initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .4 }}>
              <img className="card-photo" src={content.photo} alt=""/>
              <div className="photo-shade"/>
              <div className="card-content"><div className="card-kicker"><img className="card-logo" src="/vx-logo.png" alt="VX"/> PARA SUA EMPRESA</div><h3>Seu comercial.<br/><span>Em outro nível.</span></h3><p>Treinamentos e implantação<br className="desktop-break"/> para estruturar seu comercial.</p></div>
              {cta('vx', 'VX', <>Quero estruturar minha empresa</>)}
            </motion.article>
            <motion.article className="path-card business" initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .4 }}>
              <MethodXVisual reduced={reduceMotion}/>
              <div className="card-content"><div className="card-kicker"><GraduationCap size={16}/> CURSOS · MÉTODO X</div><h3>Vender mais.<br/><span>Começa em você.</span></h3><p>Conheça o curso para desenvolver<br className="desktop-break"/> suas habilidades em vendas.</p></div>
              {cta('courses', 'Cursos · Método X', <>Quero conhecer o Método X</>)}
            </motion.article>
          </div>
        </section>
        <section className="highlights" aria-labelledby="highlights-title"><div className="section-heading"><span className="line"/><h2 id="highlights-title">EXPLORE MAIS</h2><span className="line"/></div><nav aria-label="Destaques"><ul>{highlights.map(({ key, label, icon: Icon }) => <li key={key}><button onClick={() => openDestination(key, label)}><span className="highlight-icon">{key === 'vx' ? <img src="/vx-logo.png" alt=""/> : <Icon size={23} strokeWidth={1.5}/>}<ArrowUpRight className="highlight-arrow" size={12}/></span><span>{label}</span></button></li>)}</ul></nav></section>
      </main>
      <footer><img className="footer-logo" src="/vx-logo.png" alt="VX"/><span>CONEXÕES QUE MOVEM RESULTADOS.</span><small>© {new Date().getFullYear()} VX</small></footer>
    </div>
    <div role="status" className={copied || feedback ? 'toast visible' : 'toast'}>{copied ? 'Link copiado para compartilhar.' : feedback}</div>
    {redirect && <div className="brand-wipe redirect-wipe" aria-label="Abrindo destino" role="status">
      <motion.div className="wipe-band wipe-white" initial={{ x: '-105%' }} animate={{ x: ['-105%', '0%', '105%'] }} transition={{ duration: .85, times: [0, .45, 1], ease: [.76, 0, .24, 1] }}><span>CONEXÕES.</span></motion.div>
      <motion.div className="wipe-band wipe-orange" initial={{ x: '-105%' }} animate={{ x: ['-105%', '0%', '105%'] }} transition={{ delay: .07, duration: .85, times: [0, .45, 1], ease: [.76, 0, .24, 1] }} onAnimationComplete={() => finishRedirect(redirect.url)}><span>QUE MOVEM.</span></motion.div>
    </div>}
    <dialog className="experience-dialog" ref={dialogRef} onCancel={event => { event.preventDefault(); closeDetail(); }} onClick={event => { if (event.target === event.currentTarget) closeDetail(); }} aria-labelledby="dialog-title" aria-describedby="dialog-description">
      {!reduceMotion && <div key={`wipe-${transitionId}`} className="brand-wipe" aria-hidden="true">
        <motion.div className="wipe-band wipe-white" initial={{ x: '-105%' }} animate={{ x: ['-105%', '0%', '105%'] }} transition={{ duration: .95, times: [0, .42, 1], ease: [.76, 0, .24, 1] }}><span>CONEXÕES.</span></motion.div>
        <motion.div className="wipe-band wipe-orange" initial={{ x: '-105%' }} animate={{ x: ['-105%', '0%', '105%'] }} transition={{ delay: .07, duration: .95, times: [0, .42, 1], ease: [.76, 0, .24, 1] }}><span>QUE MOVEM.</span></motion.div>
      </div>}
      <motion.section key={`detail-${transitionId}`} className={`experience-panel detail-${activeDetail ?? 'share'}`} initial={{ opacity: 0, y: reduceMotion ? 0 : 28, scale: reduceMotion ? 1 : .98 }} animate={closing ? { opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : .98 } : { opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduceMotion ? .1 : .36, delay: closing || reduceMotion ? 0 : .46 }} onAnimationComplete={() => { if (closing) { dialogRef.current?.close(); setClosing(false); } }}>
        {activeDetail && <div className="experience-visual">
          {activeDetail === 'courses' ? <MethodXVisual reduced={reduceMotion}/> : <motion.img key={activeDetail} className="experience-photo" src={content.photo} alt="Fábio Castello, da VX" initial={{ scale: reduceMotion ? 1 : 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.15, delay: .5 }}/>}
          <div className="experience-photo-shade"/>
          <img className="experience-logo" src="/vx-logo.png" alt="VX"/>
          <div className="visual-caption"><span>{activeDetail === 'courses' ? 'CONHECIMENTO QUE TRANSFORMA' : activeDetail === 'vx' ? 'SEU PRÓXIMO NÍVEL COMERCIAL' : 'VENDAS. PESSOAS. CONEXÕES.'}</span><strong>{activeDetail === 'courses' ? <>MÉTODO <em>X.</em></> : activeDetail === 'vx' ? <>SEU COMERCIAL.<br/><em>OUTRO NÍVEL.</em></> : <>FÁBIO<br/>{' '}<em>CASTELLO.</em></>}</strong></div>
        </div>}
        <div className="experience-content">
          <div className="dialog-top"><span className="eyebrow">{activeDetail ? details[activeDetail].eyebrow : 'VX · COMPARTILHAR'}</span><button autoFocus className="close" onClick={closeDetail} aria-label="Fechar painel"><X size={21}/></button></div>
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .67, duration: .35 }}>
            <h2 id="dialog-title">{activeDetail ? details[activeDetail].title : notice}</h2>
            <p id="dialog-description">{activeDetail ? details[activeDetail].description : 'Copie o endereço da página na barra do navegador para compartilhar.'}</p>
            {activeDetail && details[activeDetail].points.length > 0 && <div className="about-biography">{details[activeDetail].points.map(point => <p key={point}>{point}</p>)}<a href={content.instagramUrl} target="_blank" rel="noopener noreferrer">Acompanhe no Instagram <ArrowUpRight size={14}/></a></div>}

          </motion.div>
          <button className="back-link" onClick={closeDetail}>Voltar para a página</button>
        </div>
      </motion.section>
    </dialog>
  </MotionConfig>;
}
