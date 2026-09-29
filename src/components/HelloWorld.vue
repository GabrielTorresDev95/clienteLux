<script setup lang="ts">

import oraculista from '../assets/oraculista.jpeg'
import lux from '../assets/lobosolitario.png'
import oracle from '../assets/oraculo.jpeg'

import {
  onMounted,
  onBeforeUnmount,
  ref,
  computed
} from 'vue'


/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_NUMBER = '558594328597'

const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site e gostaria de saber mais sobre o atendimento.'


/**
 * Abre o WhatsApp tentando funcionar também em:
 *
 * - TikTok
 * - Instagram
 * - Facebook
 * - Chrome Android
 * - Safari iPhone
 * - navegadores internos
 * - computador
 */
function abrirWhatsApp(
  mensagem: string = WHATSAPP_MESSAGE
) {

  const texto = encodeURIComponent(mensagem)

  /*
   * Link universal.
   *
   * Funciona normalmente em navegador e também
   * serve como fallback caso o aplicativo não abra.
   */
  const whatsappWeb =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`

  /*
   * Deep Link.
   *
   * Tenta chamar diretamente o aplicativo
   * instalado no celular.
   */
  const whatsappApp =
    `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${texto}`


  /*
   * Descobre qual navegador/app está
   * exibindo o site.
   */
  const userAgent =
    navigator.userAgent ||
    navigator.vendor ||
    ''


  /*
   * Detecta TikTok.
   *
   * Dependendo da versão do aplicativo,
   * diferentes identificadores podem aparecer.
   */
  const isTikTok =
    /TikTok|musical_ly|BytedanceWebview|ByteLocale/i.test(
      userAgent
    )


  /*
   * Detecta Instagram.
   */
  const isInstagram =
    /Instagram/i.test(userAgent)


  /*
   * Detecta Facebook.
   */
  const isFacebook =
    /FBAN|FBAV/i.test(userAgent)


  /*
   * Detecta dispositivo móvel.
   */
  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(
      userAgent
    )


  /*
   * =====================================================
   * TIKTOK
   * =====================================================
   *
   * O TikTok normalmente abre páginas dentro
   * do próprio navegador interno.
   *
   * Primeiro tentamos chamar diretamente
   * o aplicativo do WhatsApp.
   */
  if (isTikTok && isMobile) {

    console.log(
      'Navegador TikTok detectado'
    )

    window.location.href =
      whatsappApp


    /*
     * FALLBACK
     *
     * Se o protocolo whatsapp:// não conseguir
     * sair do navegador interno do TikTok,
     * tentamos o endereço HTTPS.
     */
    setTimeout(() => {

      /*
       * Se a página ainda estiver visível,
       * provavelmente o WhatsApp não abriu.
       */
      if (!document.hidden) {

        window.location.href =
          whatsappWeb

      }

    }, 1200)

    return
  }


  /*
   * =====================================================
   * INSTAGRAM / FACEBOOK
   * =====================================================
   */

  if (
    isMobile &&
    (
      isInstagram ||
      isFacebook
    )
  ) {

    console.log(
      'Navegador interno de rede social detectado'
    )

    window.location.href =
      whatsappApp


    setTimeout(() => {

      if (!document.hidden) {

        window.location.href =
          whatsappWeb

      }

    }, 1200)

    return
  }


  /*
   * =====================================================
   * CELULAR NORMAL
   * =====================================================
   *
   * Chrome, Safari, Firefox, Edge etc.
   */

  if (isMobile) {

    console.log(
      'Navegador mobile detectado'
    )

    window.location.href =
      whatsappWeb

    return
  }


  /*
   * =====================================================
   * COMPUTADOR
   * =====================================================
   *
   * Abre WhatsApp Web / aplicativo associado.
   */

  console.log(
    'Navegador desktop detectado'
  )

  window.location.href =
    whatsappWeb
}


/* =========================================================
   ANO
========================================================= */

const currentYear = computed(
  () => new Date().getFullYear()
)


/* =========================================================
   ÁUDIO
========================================================= */

const audioRef =
  ref<HTMLAudioElement | null>(null)

const soundBtnRef =
  ref<HTMLButtonElement | null>(null)

const armed =
  ref(false)

const needGesture =
  ref(false)


const stored =
  typeof window !== 'undefined'
    ? localStorage.getItem('abyss_playing')
    : null


const playing =
  ref(
    stored
      ? stored === 'true'
      : true
  )


const AUDIO_URL =
  '/audio/Pai_Nosso_Luxwell.mp3'


let fading:
  number | null = null


function clamp(
  v: number,
  min = 0,
  max = 1
) {

  return Math.max(
    min,
    Math.min(max, v)
  )
}


/* =========================================================
   FADE DO ÁUDIO
========================================================= */

function fade(
  targetVolume: number,
  ms = 600
) {

  const audio =
    audioRef.value

  if (!audio)
    return


  if (fading)
    cancelAnimationFrame(fading)


  const start =
    audio.volume


  const delta =
    clamp(targetVolume) - start


  if (delta === 0)
    return


  const t0 =
    performance.now()


  const step = (
    t: number
  ) => {

    const p =
      Math.min(
        1,
        (t - t0) / ms
      )


    audio.volume =
      clamp(
        start + delta * p
      )


    if (p < 1) {

      fading =
        requestAnimationFrame(step)

    }

  }


  fading =
    requestAnimationFrame(step)

}


/* =========================================================
   PREPARAR ÁUDIO
========================================================= */

async function ensureArmed() {

  const audio =
    audioRef.value


  if (
    !audio ||
    armed.value
  )
    return


  audio.src =
    AUDIO_URL


  armed.value =
    true
}


/* =========================================================
   AUTOPLAY
========================================================= */

async function tryAutoplayNow() {

  const audio =
    audioRef.value


  if (!audio)
    return


  await ensureArmed()


  try {

    audio.muted =
      true


    audio.volume =
      0


    await audio.play()


    setTimeout(() => {

      audio.muted =
        false


      fade(
        1,
        800
      )


      playing.value =
        true


      needGesture.value =
        false


      localStorage.setItem(
        'abyss_playing',
        'true'
      )

    }, 80)

  }

  catch {

    needGesture.value =
      true


    playing.value =
      false


    localStorage.setItem(
      'abyss_playing',
      'false'
    )

  }

}


/* =========================================================
   DESBLOQUEIO DE ÁUDIO
========================================================= */

function unlockOnce() {

  try {

    const Ctx =
      (window as any).AudioContext ||
      (window as any).webkitAudioContext


    if (Ctx) {

      const ctx =
        new Ctx()


      if (
        ctx.state ===
        'suspended'
      ) {

        ctx.resume()

      }

    }

  }

  catch {}

}


/* =========================================================
   BOTÃO DE ÁUDIO
========================================================= */

async function toggleAudio() {

  const audio =
    audioRef.value


  if (!audio)
    return


  try {

    if (!armed.value)
      await ensureArmed()


    if (
      audio.paused ||
      needGesture.value
    ) {

      unlockOnce()


      audio.muted =
        false


      audio.volume =
        0


      await audio.play()


      fade(
        1,
        700
      )


      playing.value =
        true


      needGesture.value =
        false


      localStorage.setItem(
        'abyss_playing',
        'true'
      )

    }

    else {

      fade(
        0,
        400
      )


      setTimeout(() => {

        audio.pause()


        playing.value =
          false


        localStorage.setItem(
          'abyss_playing',
          'false'
        )

      }, 420)

    }

  }

  catch {

    needGesture.value =
      true


    playing.value =
      false


    localStorage.setItem(
      'abyss_playing',
      'false'
    )

  }

}


/* =========================================================
   VOLTAR PARA PÁGINA
========================================================= */

function onVisibilityChange() {

  const audio =
    audioRef.value


  if (!audio)
    return


  if (
    !document.hidden &&
    localStorage.getItem(
      'abyss_playing'
    ) === 'true'
  ) {

    audio
      .play()
      .catch(() => {})

  }

}


/* =========================================================
   MOUNT
========================================================= */

onMounted(() => {

  document.addEventListener(
    'visibilitychange',
    onVisibilityChange
  )


  tryAutoplayNow()


  window.addEventListener(
    'click',
    unlockOnce,
    {
      once: true
    }
  )


  window.addEventListener(
    'touchend',
    unlockOnce,
    {
      once: true,
      passive: true
    }
  )


  window.addEventListener(
    'keydown',
    unlockOnce,
    {
      once: true
    }
  )

})


/* =========================================================
   UNMOUNT
========================================================= */

onBeforeUnmount(() => {

  document.removeEventListener(
    'visibilitychange',
    onVisibilityChange
  )


  window.removeEventListener(
    'click',
    unlockOnce
  )


  window.removeEventListener(
    'touchend',
    unlockOnce
  )


  window.removeEventListener(
    'keydown',
    unlockOnce
  )

})

</script>