<template>
  <div class="bg-black text-zinc-200 font-serif selection:bg-red-900/60 selection:text-zinc-100 relative">
    <!-- Camadas de atmosfera -->
    <div class="sigil"></div>
    <div class="fog"></div>
    <div class="grain"></div>
    <div class="vignette"></div>

    <!-- Barra superior -->
    <header class="fixed top-0 inset-x-0 z-20 backdrop-blur bg-black/40 border-b border-red-900/30">
      <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="candle"></div><div class="candle"></div><div class="candle"></div>
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
        >
          {{ playing ? 'SILENCIAR ABISMO' : 'ÁUDIO DO ABISMO' }}
        </button>

        <!-- Áudio -->
        <audio ref="audioRef" id="ambience" loop preload="auto" crossorigin="anonymous">
          <!-- Exemplo livre (silêncio), será trocado via script ao tocar -->
          <source src="https://cdn.jsdelivr.net/gh/anars/blank-audio/15-seconds-of-silence.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </header>

    <!-- HERO -->
    <section class="relative min-h-[92vh] flex items-center justify-center text-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/90 to-black"></div>
      <div class="relative z-10 max-w-3xl px-6 parallax">
        <h1 class="glitch text-5xl md:text-6xl font-black tracking-wide text-red-600" data-text="O ORACULISTA DAS SOMBRAS">
          O ORACULISTA DAS SOMBRAS
        </h1>
        <p class="mt-6 text-zinc-300/90 leading-relaxed">
          <span class="text-red-500 font-bold">20+ anos</span> de ofício nos caminhos interditos.
          Leituras pelo <span class="italic">Oráculo de Ossos</span> e pelas <span class="italic">Cartas dos Daemons</span>.
          Abra o véu — se ousar.
        </p>
        <a href="#consultas" class="btn-abyss inline-block mt-10 px-8 py-4 rounded-full bg-red-800 hover:bg-red-900 text-white font-bold tracking-widest shadow-lg shadow-red-900/40">
          AGENDAR RITUAL
        </a>
        <div class="mt-6 text-xs uppercase tracking-[0.4em] text-zinc-500">Sussurros • Cinzas • Sigilos</div>
      </div>
    </section>

    <div class="blood-divider"></div>

    <!-- SOBRE -->
    <section id="sobre" class="py-20 bg-zinc-950/70 border-t border-red-900/30">
      <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div class="space-y-6">
          <h2 class="text-3xl font-extrabold text-red-600">Quem é Luxwell</h2>
          <p class="text-zinc-300 leading-relaxed">
          
Artista • Ocultista • Criador de Caminhos • Portador da Luz Negra

Luxwell é uma das vozes mais singulares e enigmáticas do ocultismo contemporâneo.
Cantor, magista e orientador espiritual, ele une sabedoria ancestral,
experiência prática e visão moderna para transformar vidas através da gnose, da arte e do autoconhecimento profundo.

Reconhecido por sua presença intensa, seu olhar direto e sua linguagem sem filtros, Luxwell se tornou referência para aqueles que buscam clareza espiritual, expansão de consciência e poder pessoal real.
          </p>
          <ul class="list-disc pl-5 text-zinc-300 space-y-2">
            <li>Ritos com <strong>ossos consagrados</strong> — voz dos ancestrais.</li>
            <li><strong>Cartas dos Daemons</strong> — mensagens diretas do abismo.</li>
            <li>Sigilos, pactos e <strong>orientação estratégica</strong> para decisões difíceis.</li>
          </ul>
        </div>
        <div class="occult-card rounded-2xl p-8">
          <div class="text-sm tracking-widest text-red-400 mb-4">ATELIÊ DO ABISMO</div>
          <div class="grid grid-cols-3 gap-3">
            <div class="aspect-square rounded-xl bg-zinc-900/70 flex items-center justify-center text-3xl">☠</div>
            <div class="aspect-square rounded-xl bg-zinc-900/70 flex items-center justify-center text-3xl">✴</div>
            <div class="aspect-square rounded-xl bg-zinc-900/70 flex items-center justify-center text-3xl">🜏</div>
            <div class="aspect-square rounded-xl bg-zinc-900/70 flex items-center justify-center text-3xl">🜍</div>
            <div class="aspect-square rounded-xl bg-zinc-900/70 flex items-center justify-center text-3xl">⛧</div>
            <div class="aspect-square rounded-xl bg-zinc-900/70 flex items-center justify-center text-3xl">🜃</div>
          </div>
          <p class="mt-6 text-zinc-400 text-sm">
            Elementos simbólicos apenas para fins estéticos e ritualísticos. Acolho os iniciados; advirto os curiosos.
          </p>
        </div>
      </div>
    </section>

    <!-- CONSULTAS -->
    <section id="consultas" class="py-20 bg-black border-t border-red-900/30">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold text-red-600 text-center mb-12">Aberturas de Caminho</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Ossos -->
          <div class="occult-card rounded-2xl p-8">
            <div class="text-red-500 text-sm tracking-widest">ORÁCULO DE OSSOS</div>
            <h3 class="mt-2 text-xl font-bold">Voz dos Ancestrais</h3>
            <p class="mt-3 text-zinc-300">Leitura profunda com ossos consagrados, guiada por presságios e quedas.</p>
            <div class="mt-6 text-red-400 font-extrabold text-lg">R$ 199</div>
            <a href="#contato" class="btn-abyss inline-block mt-6 px-5 py-2.5 rounded-full bg-red-800 hover:bg-red-900 font-bold">AGENDAR</a>
          </div>

          <!-- Daemons -->
          <div class="occult-card rounded-2xl p-8">
            <div class="text-red-500 text-sm tracking-widest">CARTAS DOS DAEMONS</div>
            <h3 class="mt-2 text-xl font-bold">Mensagens do Abismo</h3>
            <p class="mt-3 text-zinc-300">Consulta oracular com conjunção de cartas e sigilos, para respostas objetivas.</p>
            <div class="mt-6 text-red-400 font-extrabold text-lg">R$ 149</div>
            <a href="#contato" class="btn-abyss inline-block mt-6 px-5 py-2.5 rounded-full bg-red-800 hover:bg-red-900 font-bold">INICIAR</a>
          </div>

          <!-- Completa -->
          <div class="occult-card rounded-2xl p-8">
            <div class="text-red-500 text-sm tracking-widest">RITO COMPLETO</div>
            <h3 class="mt-2 text-xl font-bold">Fusão: Ossos + Daemons</h3>
            <p class="mt-3 text-zinc-300">Sessão extensa com leitura cruzada e direcionamento estratégico.</p>
            <div class="mt-6 text-red-400 font-extrabold text-lg">R$ 299</div>
            <a href="#contato" class="btn-abyss inline-block mt-6 px-5 py-2.5 rounded-full bg-red-800 hover:bg-red-900 font-bold">TRAVESSIA</a>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTEMUNHOS -->
    <section id="testemunhos" class="py-20 bg-zinc-950/70 border-t border-red-900/30">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-extrabold text-red-600 mb-10">Ecos do Vazio</h2>
        <div class="space-y-8 text-zinc-300">
          <blockquote class="italic">“Os ossos caíram — e nada foi o mesmo.”</blockquote>
          <blockquote class="italic">“As cartas falaram em meu nome. Tive a resposta que evitei por anos.”</blockquote>
          <blockquote class="italic">“Não é entretenimento. É pacto com a verdade.”</blockquote>
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
        href="https://wa.me/5599999999999"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-abyss inline-block px-8 py-4 rounded-full bg-red-800 hover:bg-red-900 font-bold tracking-widest shadow-lg shadow-red-900/40"
      >
        FALAR VIA WHATSAPP
      </a>
      <div class="mt-6 text-xs text-zinc-600">Atendo com hora marcada. Conteúdo espiritual e artístico.</div>
    </section>

    <!-- RODAPÉ -->
    <footer class="py-8 bg-zinc-950 text-center border-t border-red-900/30">
      <div class="runes text-zinc-500 text-xs">ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ • ᛟ ᛞ ᛃ ᛉ ᛇ</div>
      <div class="mt-2 text-zinc-600 text-[11px]">© 2025 Oraculista das Sombras — Todos os direitos reservados.</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';

const audioRef = ref<HTMLAudioElement | null>(null);
const soundBtnRef = ref<HTMLButtonElement | null>(null);
const armed = ref(false);
const playing = ref(localStorage.getItem('abyss_playing') === 'true');

const AUDIO_URL = 'https://cdn.freesound.org/previews/624/624215_5674468-lq.mp3'; // exemplo público
let fading: number | null = null;

function fade(targetVolume: number, ms = 600) {
  const audio = audioRef.value;
  if (!audio) return;
  if (fading) cancelAnimationFrame(fading);
  const start = audio.volume;
  const delta = targetVolume - start;
  if (delta === 0) return;
  const t0 = performance.now();

  const step = (t: number) => {
    const p = Math.min(1, (t - t0) / ms);
    audio.volume = start + delta * p;
    if (p < 1) {
      fading = requestAnimationFrame(step);
    }
  };
  fading = requestAnimationFrame(step);
}

async function ensureArmed() {
  const audio = audioRef.value;
  if (!audio || armed.value) return;
  // iOS/Safari pedem interação do usuário antes de setar/play src
  audio.src = AUDIO_URL;
  armed.value = true;
}

async function toggleAudio() {
  const audio = audioRef.value;
  if (!audio) return;
  try {
    if (!armed.value) await ensureArmed();

    if (audio.paused) {
      audio.volume = 0;
      await audio.play();
      fade(1, 700);
      playing.value = true;
      localStorage.setItem('abyss_playing', 'true');
    } else {
      fade(0, 400);
      setTimeout(() => {
        audio.pause();
        playing.value = false;
        localStorage.setItem('abyss_playing', 'false');
      }, 420);
    }
  } catch (e) {
    // navegador pode bloquear até ter interação
    alert('O navegador bloqueou a reprodução. Toque/click novamente para iniciar o áudio.');
    // eslint-disable-next-line no-console
    console.warn(e);
  }
}

function onVisibilityChange() {
  const audio = audioRef.value;
  if (!audio) return;
  if (document.hidden) {
    if (!audio.paused) audio.pause();
  } else if (localStorage.getItem('abyss_playing') === 'true') {
    audio.play().then(() => {
      playing.value = true;
    }).catch(() => {
      // aguardará próximo clique do usuário
    });
  }
}

// “Desbloquear” o áudio no primeiro toque/click (iOS/Safari)
function unlockOnce() {
  try {
    // criar/retomar um AudioContext só para liberar políticas de autoplay
    const Ctx = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (Ctx) {
      const ctx = new Ctx();
      if (ctx.state === 'suspended') ctx.resume();
    }
  } catch {
    /* noop */
  }
  window.removeEventListener('touchend', unlockOnce);
  window.removeEventListener('click', unlockOnce);
}

onMounted(() => {
  window.addEventListener('touchend', unlockOnce, { once: true, passive: true });
  window.addEventListener('click', unlockOnce, { once: true });
  document.addEventListener('visibilitychange', onVisibilityChange);

  // Se usuário já estava tocando antes, permite autostart após primeira interação
  if (playing.value) {
    // não auto-play imediato (respeita políticas); o primeiro clique no botão chamará toggleAudio
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('touchend', unlockOnce);
  window.removeEventListener('click', unlockOnce);
  document.removeEventListener('visibilitychange', onVisibilityChange);
});
</script>

<style scoped>
/* ====== Atmosfera ====== */
:root { --red:#8b0000; --red2:#b30000; --ink:#0b0b0b; }
body { cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><text y="22" x="3" font-size="24" fill="red">✠</text></svg>') 16 16, crosshair; }
.vignette:after{
  content:""; position:fixed; inset:0; pointer-events:none;
  box-shadow: inset 0 0 200px 120px rgba(0,0,0,.85);
  z-index:10;
}
.grain:before{
  content:""; position:fixed; inset:-10%;
  background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)"/></svg>');
  opacity:.06; animation:grain 8s steps(10) infinite; z-index:11; pointer-events:none; mix-blend-mode:overlay;
}
@keyframes grain { 0%{transform:translate(0,0)} 100%{transform:translate(-7%,5%)} }

/* Névoa */
.fog, .fog:before, .fog:after{
  position:fixed; inset:-20%; pointer-events:none; z-index:2;
  background: radial-gradient(60% 40% at 20% 30%, rgba(200,0,0,.08), transparent 60%),
              radial-gradient(50% 35% at 80% 70%, rgba(255,255,255,.06), transparent 60%),
              radial-gradient(70% 50% at 50% 50%, rgba(120,0,0,.06), transparent 60%);
  filter: blur(30px);
  animation: drift 30s linear infinite;
}
.fog:before{ content:""; animation-duration: 55s; mix-blend-mode:screen; }
.fog:after{ content:""; animation-duration: 75s; mix-blend-mode:screen; }
@keyframes drift { 0%{transform:translate3d(0,0,0)} 50%{transform:translate3d(4%, -3%, 0)} 100%{transform:translate3d(0,0,0)} }

/* Pentagrama de fundo (SVG) */
.sigil{
  position:fixed; inset:0; z-index:0; opacity:.07; pointer-events:none;
  background:
    radial-gradient(circle at 50% 50%, rgba(255,0,0,.2), transparent 35%),
    url('data:image/svg+xml;utf8,\
    <svg xmlns="http://www.w3.org/2000/svg" viewBox=\"0 0 100 100\">\
    <g fill=\"none\" stroke=\"%23b30000\" stroke-width=\"1.5\" opacity=\"0.7\">\
    <circle cx=\"50\" cy=\"50\" r=\"45\"/>\
    <polygon points=\"50,7 64,38 96,38 70,58 80,90 50,72 20,90 30,58 4,38 36,38\"/>\
    </g></svg>') center/520px 520px no-repeat;
  filter: drop-shadow(0 0 14px rgba(139,0,0,.35));
}

/* Glitch & Flicker */
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

/* Gotejamento “sangue” */
.blood-divider{
  position:relative; height:24px; background:linear-gradient(to bottom, var(--red2), transparent 70%);
  filter: drop-shadow(0 10px 10px rgba(179,0,0,.3));
}
.blood-divider:before, .blood-divider:after{
  content:""; position:absolute; top:0; width:14px; height:28px; background:var(--red2);
  border-bottom-left-radius:8px; border-bottom-right-radius:8px; animation:drip 6s ease-in-out infinite;
}
.blood-divider:before{ left:12%; animation-delay: .8s }
.blood-divider:after { left:72%; height:36px; animation-delay: 1.9s }
@keyframes drip { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }

/* Velas (flicker) */
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

/* Cards macabros */
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

/* Botão sinistro */
.btn-abyss{
  position:relative; overflow:hidden;
  box-shadow: 0 0 0 rgba(179,0,0,0);
}
.btn-abyss:before{
  content:""; position:absolute; inset:-120% -120% auto auto; width:200%; height:200%;
  background: conic-gradient(from 0deg, transparent, rgba(179,0,0,.18), transparent 30%);
  animation:spin 6s linear infinite; pointer-events:none;
}
@keyframes spin { to{ transform: rotate(360deg) } }

/* Parallax sutil do Hero */
.parallax { transform: translateZ(0); will-change: transform; }
.parallax:hover { transform: translateY(-2px); }

/* Rodapé runas */
.runes { letter-spacing:.2em; }
</style>
