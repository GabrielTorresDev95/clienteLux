<template>
  <div class="bg-black text-zinc-200 font-serif selection:bg-red-900/60 selection:text-zinc-100 relative pt-20">
    <!-- CAMADAS -->
    <div class="sigil" aria-hidden="true"></div>
    <div class="fog" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>
    <div class="vignette" aria-hidden="true"></div>

    <!-- HEADER -->
    <header class="fixed top-0 inset-x-0 z-20 backdrop-blur bg-black/40 border-b border-red-900/30">
      <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2" aria-hidden="true">
          <div class="candle"></div>
          <div class="candle"></div>
          <div class="candle"></div>
        </div>

        <nav class="hidden md:flex gap-6 text-sm tracking-widest">
          <a href="#consultas" class="hover:text-red-500">CONSULTAS</a>
          <a href="#sobre" class="hover:text-red-500">SOBRE</a>
          <a href="#testemunhos" class="hover:text-red-500">ECOS</a>
          <a href="#contato" class="hover:text-red-500">PORTAL</a>
        </nav>

        <button
          ref="soundBtnRef"
          class="btn-abyss px-4 py-2 rounded-full bg-red-800/70 hover:bg-red-900 text-sm font-bold tracking-widest"
          @click="toggleAudio"
          type="button"
          :aria-pressed="playing"
          aria-label="Alternar áudio ambiente"
          :data-need-gesture="needGesture"
        >
          {{ playing ? 'SILENCIAR ABISMO' : (needGesture ? 'TOQUE PARA ATIVAR ÁUDIO' : 'ÁUDIO DO ABISMO') }}
        </button>

        <!-- ÁUDIO -->
        <audio
          ref="audioRef"
          id="ambience"
          loop
          preload="auto"
          crossorigin="anonymous"
          autoplay
          muted
          playsinline
        >
          <source src="https://cdn.jsdelivr.net/gh/anars/blank-audio/15-seconds-of-silence.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </header>

    <!-- HERO -->
    <section
      class="relative min-h-[92vh] flex items-center justify-center text-center overflow-hidden"
      style="background-image:url('https://images.unsplash.com/photo-1508050919630-b135583b29ab?q=80&w=1600&auto=format&fit=crop'); background-size:cover; background-position:center;"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>

      <div class="relative z-10 max-w-3xl px-6 parallax">
        <span class="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-400">
          <i class="block size-1.5 rounded-full bg-red-600"></i>
          Ritos &amp; Oráculos
          <i class="block size-1.5 rounded-full bg-red-600"></i>
        </span>

        <div class="mt-6 flex justify-center">
          <img
            :src="heroImg"
            alt="Selo do Oraculista das Sombras"
            class="w-80 h-80 object-cover ring-4 ring-red-900/50 shadow-2xl shadow-red-900/40 animate-[fadeLoop_6s_ease-in-out_infinite]"
            loading="eager"
            decoding="async"
          />
        </div>

        <h1 class="glitch text-5xl md:text-6xl font-black tracking-wide text-red-600 mt-4" data-text="O ORACULISTA DE OSSOS">
          O ORACULISTA DE OSSOS
        </h1>
      </div>
    </section>

    <div class="blood-divider" aria-hidden="true"></div>

    <!-- SOBRE -->
    <section id="sobre" class="py-20 bg-zinc-950/70 border-t border-red-900/30">
      <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <!-- TEXTO -->
        <div class="space-y-6">
          <h2 class="text-3xl font-extrabold text-red-600">⭐ QUEM É LUXWELL</h2>
          <p class="text-zinc-300 leading-relaxed">
            

            Luxwell Mago é ocultista, músico e oraculista com mais de 16 anos de prática dedicada ao autoconhecimento, à gnose e aos mistérios luciferianos.

Seu trabalho une tradições ocultistas, simbolismo arquetípico, música como linguagem ritual e o oráculo como ferramenta de consciência, criando pontes entre o mundo interno, o inconsciente profundo e a expansão da percepção.

Como oraculista, atua há 16 anos auxiliando pessoas em processos de clareza, decisão e reconexão com sua própria força interior, utilizando sistemas simbólicos e práticas de leitura não-dogmáticas.

Como músico, traduz estados de consciência, arquétipos e experiências espirituais em som, compreendendo a música como um veículo mágico de gnose, expressão e transformação.

Luxwell não segue caminhos prontos: sua atuação é autoral, independente e voltada ao despertar da soberania individual.
          </p>

          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-red-900/50 ring-1 ring-red-800">✠</span>
              <p class="text-zinc-300 leading-relaxed">
                Ritos com <strong>ossos consagrados</strong> — voz dos ancestrais.
              </p>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-red-900/50 ring-1 ring-red-800">⛧</span>
              <p class="text-zinc-300 leading-relaxed">
                <strong>Cartas dos Daemons</strong> — mensagens diretas do abismo.
              </p>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-red-900/50 ring-1 ring-red-800">🜏</span>
              <p class="text-zinc-300 leading-relaxed">
                Sigilos, pactos e <strong>orientação estratégica</strong> para decisões difíceis.
              </p>
            </li>
          </ul>
        </div>

        <!-- MOSAICO DE IMAGENS -->
        <div class="occult-card rounded-2xl p-4 md:p-6">
          <div class="w-full overflow-hidden rounded-xl" style="aspect-ratio: 3 / 2;">
            <img
              :src="oraculista"
              alt="Oraculista"
              loading="lazy"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CONSULTAS -->
    <section id="consultas" class="py-20 bg-black border-t border-red-900/30">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold text-red-600 text-center mb-12">Aberturas de Caminho</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- OSSOS -->
          <article class="occult-card rounded-2xl overflow-hidden">
            <div
              class="aspect-video bg-center bg-cover"
              :style="{ backgroundImage: `url(${lux})` }"
              role="img"
              aria-label="Voz dos Ancestrais"
            ></div>
            <div class="p-8">
              <div class="text-red-500 text-xs tracking-widest"></div>
              <h3 class="mt-2 text-xl font-bold">Mentoria a Gnose Luciferiana</h3>
              <p class="mt-3 text-zinc-300">Mentoria e orientação a Gnose Luciferiana e montar o Altar.</p>
              <div class="mt-6 text-red-400 font-extrabold text-lg">R$ 166</div>
              <a href="#contato" class="btn-abyss inline-block mt-6 px-5 py-2.5 rounded-full bg-red-800 hover:bg-red-900 font-bold">AGENDAR</a>
            </div>
          </article>

          <!-- DAEMONS -->
          <article class="occult-card rounded-2xl overflow-hidden">
            <div
              class="aspect-video bg-center bg-cover"
              :style="{ backgroundImage: `url(${oracle})` }"
              role="img"
              aria-label="Cartas dos Daemons"
            ></div>
            <div class="p-8">
              <div class="text-red-500 text-xs tracking-widest"></div>
              <h3 class="mt-2 text-xl font-bold">Oraculo Dos Ossos e Cartas dos Daemons</h3>
              <p class="mt-3 text-zinc-300">Consulta oracular dos ossos e as cartas dos daemons por video chamada.</p>
              <div class="mt-6 text-red-400 font-extrabold text-lg">R$ 333</div>
              <a href="#contato" class="btn-abyss inline-block mt-6 px-5 py-2.5 rounded-full bg-red-800 hover:bg-red-900 font-bold">INICIAR</a>
            </div>
          </article>

          <!-- COMPLETA -->
          <article class="occult-card rounded-2xl overflow-hidden">
            <div
              class="aspect-video bg-center bg-cover"
              style="background-image:url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop');"
              role="img"
              aria-label="Fusão: Ossos + Daemons"
            ></div>
            <div class="p-8">
              <div class="text-red-500 text-xs tracking-widest"></div>
              <h3 class="mt-2 text-xl font-bold">Iniciação a Gnose Luciferiana</h3>
              <p class="mt-3 text-zinc-300">Sessão extensa com leitura cruzada e direcionamento estratégico.</p>
              <div class="mt-6 text-red-400 font-extrabold text-lg">R$ 1666</div>
              <a href="#contato" class="btn-abyss inline-block mt-6 px-5 py-2.5 rounded-full bg-red-800 hover:bg-red-900 font-bold">TRAVESSIA</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- TESTEMUNHOS -->
    <section id="testemunhos" class="py-20 bg-zinc-950/70 border-t border-red-900/30">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-extrabold text-red-600 mb-10">Ecos do Vazio</h2>
        <div class="space-y-8 text-zinc-300">
          <figure>
            <blockquote class="italic">“Os ossos caíram — e nada foi o mesmo.”</blockquote>
            <figcaption class="mt-2 text-xs text-zinc-500">— Viajante anônimo</figcaption>
          </figure>
          <figure>
            <blockquote class="italic">“As cartas falaram em meu nome. Tive a resposta que evitei por anos.”</blockquote>
            <figcaption class="mt-2 text-xs text-zinc-500">— Devota do Sul</figcaption>
          </figure>
          <figure>
            <blockquote class="italic">“Não é entretenimento. É pacto com a verdade.”</blockquote>
            <figcaption class="mt-2 text-xs text-zinc-500">— Peregrino</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- CONTATO -->
    <section id="contato" class="py-20 bg-black border-t border-red-900/30 text-center">
      <h2 class="text-3xl font-extrabold text-red-600 mb-6">Abra o Portal</h2>
      <p class="text-zinc-400 max-w-xl mx-auto mb-8">
        Envie sua intenção. As portas se abrem para quem fala com firmeza.
      </p>
      <a
        :href="`https://wa.me/558594328597`"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-abyss inline-block px-8 py-4 rounded-full bg-red-800 hover:bg-red-900 font-bold tracking-widest shadow-lg shadow-red-900/40"
      >
        FALAR VIA WHATSAPP
      </a>
      <div class="mt-6 text-xs text-zinc-600">Atendo com hora marcada. Conteúdo espiritual e artístico.</div>
    </section>

    <!-- FOOTER -->
    <footer class="py-8 bg-zinc-950 text-center border-t border-red-900/30">
      <div class="runes text-zinc-500 text-xs">ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ • ᛟ ᛞ ᛃ ᛉ ᛇ</div>
      <div class="mt-2 text-zinc-600 text-[11px]">
        © {{ currentYear }} Oraculista das Sombras — Todos os direitos reservados.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Imagens (troque pelos arquivos reais em /src/assets)
import heroImg from '../assets/gnose.jpeg'
import oraculista from '../assets/oraculista.jpeg'
import lux from '../assets/lux.jpeg'
import oracle from '../assets/oraculo.jpeg'


import { onMounted, onBeforeUnmount, ref, computed } from 'vue'

const audioRef = ref<HTMLAudioElement | null>(null)
const soundBtnRef = ref<HTMLButtonElement | null>(null)
const armed = ref(false)
const needGesture = ref(false) // navegador exigiu interação

// inicia ligado por padrão (e grava escolha)
const stored = typeof window !== 'undefined' ? localStorage.getItem('abyss_playing') : null
const playing = ref(stored ? stored === 'true' : true)

const whatsNumber = ref('5599999999999') // <-- DDI+DDD+número
const currentYear = computed(() => new Date().getFullYear())

// Áudio — coloque o arquivo em public/audio/Pai_Nosso_Luxwell.mp3
const AUDIO_URL = '/audio/Pai_Nosso_Luxwell.mp3' // ✅ caminho certo quando o arquivo está em /public/audio
let fading: number | null = null

function clamp(v: number, min = 0, max = 1) { return Math.max(min, Math.min(max, v)) }

function fade(targetVolume: number, ms = 600) {
  const audio = audioRef.value
  if (!audio) return
  if (fading) cancelAnimationFrame(fading)
  const start = audio.volume
  const delta = clamp(targetVolume) - start
  if (delta === 0) return
  const t0 = performance.now()
  const step = (t: number) => {
    const p = Math.min(1, (t - t0) / ms)
    audio.volume = clamp(start + delta * p)
    if (p < 1) fading = requestAnimationFrame(step)
  }
  fading = requestAnimationFrame(step)
}

async function ensureArmed() {
  const audio = audioRef.value
  if (!audio || armed.value) return
  audio.src = AUDIO_URL
  armed.value = true
}

async function tryAutoplayNow() {
  const audio = audioRef.value
  if (!audio) return
  await ensureArmed()
  try {
    audio.muted = true
    audio.volume = 0
    await audio.play()        // pode falhar sem gesto
    setTimeout(() => {
      audio.muted = false
      fade(1, 800)
      playing.value = true
      needGesture.value = false
      localStorage.setItem('abyss_playing', 'true')
    }, 80)
  } catch {
    // bloqueado: pedimos gesto sutil no botão
    needGesture.value = true
    playing.value = false
    localStorage.setItem('abyss_playing', 'false')
  }
}

function unlockOnce() {
  try {
    const Ctx = (window as any).AudioContext || (window as any).webkitAudioContext
    if (Ctx) {
      const ctx = new Ctx()
      if (ctx.state === 'suspended') ctx.resume()
    }
  } catch {}
}

async function toggleAudio() {
  const audio = audioRef.value
  if (!audio) return
  try {
    if (!armed.value) await ensureArmed()
    if (audio.paused || needGesture.value) {
      unlockOnce()
      audio.muted = false
      audio.volume = 0
      await audio.play()
      fade(1, 700)
      playing.value = true
      needGesture.value = false
      localStorage.setItem('abyss_playing', 'true')
    } else {
      fade(0, 400)
      setTimeout(() => {
        audio.pause()
        playing.value = false
        localStorage.setItem('abyss_playing', 'false')
      }, 420)
    }
  } catch {
    needGesture.value = true
    playing.value = false
    localStorage.setItem('abyss_playing', 'false')
  }
}


function onVisibilityChange() {
  const audio = audioRef.value
  if (!audio) return
  // Não pausamos ao ocultar; ao voltar, garantimos que retoma se usuário quis.
  if (!document.hidden && localStorage.getItem('abyss_playing') === 'true') {
    audio.play().catch(() => {})
  }
}


onMounted(() => {
  document.addEventListener('visibilitychange', onVisibilityChange)
  tryAutoplayNow() // tenta tocar ao montar
  window.addEventListener('click', unlockOnce, { once: true })
  window.addEventListener('touchend', unlockOnce, { once: true, passive: true })
  window.addEventListener('keydown', unlockOnce, { once: true })
})

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', onVisibilityChange)
  window.removeEventListener('click', unlockOnce)
  window.removeEventListener('touchend', unlockOnce)
  window.removeEventListener('keydown', unlockOnce)
})
</script>

<style>
/* ====== ATMOSFERA GLOBAL ====== */
:root { --red:#8b0000; --red2:#b30000; --ink:#0b0b0b; }
body { cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><text y="22" x="3" font-size="24" fill="red">✠</text></svg>') 16 16, crosshair; }

@media (prefers-reduced-motion: reduce) {
  .glitch, .fog, .grain:before, .vignette:after, .candle:after, .btn-abyss:before, .occult-card:hover { animation: none !important; }
}

/* VIGNETTE */
.vignette:after{
  content:""; position:fixed; inset:0; pointer-events:none;
  box-shadow: inset 0 0 200px 120px rgba(0,0,0,.85);
  z-index:10;
}

/* GRAIN */
.grain:before{
  content:""; position:fixed; inset:-10%;
  background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)"/></svg>');
  opacity:.06; animation:grain 8s steps(10) infinite; z-index:11; pointer-events:none; mix-blend-mode:overlay;
}
@keyframes grain { 0%{transform:translate(0,0)} 100%{transform:translate(-7%,5%)} }

/* Aparecer/Desaparecer contínuo */
@keyframes fadeLoop { 0%,100%{opacity:0} 50%{opacity:1} }

/* NÉVOA */
.fog, .fog:before, .fog:after{
  position:fixed; inset:-20%; pointer-events:none; z-index:2;
  background:
    radial-gradient(60% 40% at 20% 30%, rgba(200,0,0,.08), transparent 60%),
    radial-gradient(50% 35% at 80% 70%, rgba(255,255,255,.06), transparent 60%),
    radial-gradient(70% 50% at 50% 50%, rgba(120,0,0,.06), transparent 60%);
  filter: blur(30px);
  animation: drift 30s linear infinite;
}
.fog:before{ content:""; animation-duration: 55s; mix-blend-mode:screen; }
.fog:after{ content:""; animation-duration: 75s; mix-blend-mode:screen; }
@keyframes drift { 0%{transform:translate3d(0,0,0)} 50%{transform:translate3d(4%,-3%,0)} 100%{transform:translate3d(0,0,0)} }

/* SIGIL DE FUNDO */
.sigil{
  position:fixed; inset:0; z-index:0; opacity:.07; pointer-events:none;
  background:
    radial-gradient(circle at 50% 50%, rgba(255,0,0,.2), transparent 35%),
    url('data:image/svg+xml;utf8,\
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\
    <g fill="none" stroke="%23b30000" stroke-width="1.5" opacity="0.7">\
    <circle cx="50" cy="50" r="45"/>\
    <polygon points="50,7 64,38 96,38 70,58 80,90 50,72 20,90 30,58 4,38 36,38"/>\
    </g></svg>') center/520px 520px no-repeat;
  filter: drop-shadow(0 0 14px rgba(139,0,0,.35));
}

/* GLITCH & FLICKER */
.glitch{
  position:relative; text-shadow:0 0 8px rgba(179,0,0,.45);
  animation:flicker 4s infinite;
}
.glitch:before, .glitch:after{
  content:attr(data-text); position:absolute; left:0; top:0; width:100%; overflow:hidden;
}
.glitch:before{ transform:translate(2px,0); clip-path:inset(0 0 55% 0); color:#ff1a1a; opacity:.7; animation:gl1 2s infinite; }
.glitch:after { transform:translate(-2px,0); clip-path:inset(45% 0 0 0); color:#a10000; opacity:.7; animation:gl2 2.3s infinite; }
@keyframes gl1{0%{transform:translate(1px,0)}50%{transform:translate(3px,-1px)}100%{transform:translate(1px,0)}}
@keyframes gl2{0%{transform:translate(-1px,0)}50%{transform:translate(-3px,1px)}100%{transform:translate(-1px,0)}}
@keyframes flicker{
  0%, 18%, 22%, 25%, 53%, 57%, 100% {opacity:1}
  20%, 24%, 55% {opacity:.9}
  21%, 56% {opacity:.4}
}

/* DIVISÓRIA DE “SANGUE” */
.blood-divider{
  position:relative; height:24px; background:linear-gradient(to bottom, var(--red2), transparent 70%);
  filter: drop-shadow(0 10px 10px rgba(179,0,0,.3));
}
.blood-divider:before, .blood-divider:after{
  content:""; position:absolute; top:0; width:14px; height:28px; background:var(--red2);
  border-bottom-left-radius:8px; border-bottom-right-radius:8px; animation:drip 6s ease-in-out infinite;
}
.blood-divider:before{ left:12%; animation-delay:.8s }
.blood-divider:after { left:72%; height:36px; animation-delay:1.9s }
@keyframes drip { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }

/* VELAS */
.candle{
  width:9px; height:18px; background:linear-gradient(#fff, #d4d4d4);
  position:relative; border-radius:2px; margin:0 6px;
  box-shadow:0 0 14px rgba(255,230,180,.35);
}
.candle:after{
  content:""; position:absolute; top:-10px; left:50%; transform:translateX(-50%);
  width:6px; height:10px; background:radial-gradient(closest-side, #ffd27a, #ff6b00 70%, transparent 71%);
  border-radius:50% 50% 45% 45%;
  animation:flame 1.1s infinite;
  filter:drop-shadow(0 0 8px #ff9a1a);
}
@keyframes flame{ 0%{transform:translate(-50%,0) scale(.95)} 50%{transform:translate(-50%,-2px) scale(1.05)} 100%{transform:translate(-50%,0) scale(.95)} }

/* CARDS */
.occult-card{
  transform: perspective(800px) rotateX(0deg) rotateY(0deg);
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  border:1px solid rgba(139,0,0,.25);
  background:
    radial-gradient(1200px 600px at 50% -10%, rgba(179,0,0,.08), transparent 60%),
    rgba(15,15,15,.9);
  box-shadow: 0 0 0 rgba(179,0,0,0);
}
.occult-card:hover{
  transform: perspective(800px) rotateX(3deg) rotateY(-4deg) translateY(-2px);
  box-shadow: 0 12px 40px rgba(179,0,0,.25), inset 0 0 40px rgba(179,0,0,.08);
  border-color: rgba(179,0,0,.6);
}

/* BOTÃO */
.btn-abyss{ position:relative; overflow:hidden; box-shadow:0 0 0 rgba(179,0,0,0); }
.btn-abyss:before{
  content:""; position:absolute; inset:-120% -120% auto auto; width:200%; height:200%;
  background: conic-gradient(from 0deg, transparent, rgba(179,0,0,.18), transparent 30%);
  animation:spin 6s linear infinite; pointer-events:none;
}
.btn-abyss[data-need-gesture="true"]{
  animation: pulse 1.2s ease-in-out infinite;
}
@keyframes spin { to{ transform: rotate(360deg) } }
@keyframes pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(179,0,0,.45) }
  50%     { box-shadow: 0 0 20px 6px rgba(179,0,0,.35) }
}

/* PARALLAX SUTIL */
.parallax { transform: translateZ(0); will-change: transform; }
.parallax:hover { transform: translateY(-2px); }

/* RODAPÉ */
.runes { letter-spacing:.2em; }
</style>
