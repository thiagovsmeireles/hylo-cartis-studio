'use client';
import { useRef, useState } from 'react';
import { Volume2, VolumeX, Activity } from 'lucide-react';

export default function SoundToggle() {
  const [on, setOn] = useState(false);
  const ctx = useRef<AudioContext | null>(null);
  const nodes = useRef<{ osc: OscillatorNode; gain: GainNode } | null>(null);
  const toggle = () => {
    if (!on) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctx.current = new AC();
      const osc = ctx.current.createOscillator();
      const gain = ctx.current.createGain();
      osc.type = 'sawtooth'; osc.frequency.value = 55;
      gain.gain.value = 0.03;
      const lfo = ctx.current.createOscillator(); lfo.frequency.value = 0.4;
      const lfoGain = ctx.current.createGain(); lfoGain.gain.value = 0.015;
      lfo.connect(lfoGain); lfoGain.connect(gain.gain);
      osc.connect(gain); gain.connect(ctx.current.destination);
      osc.start(); lfo.start();
      nodes.current = { osc, gain };
      setOn(true);
    } else {
      nodes.current?.osc.stop(); ctx.current?.close();
      nodes.current = null; setOn(false);
    }
  };
  return (
    <button onClick={toggle} aria-pressed={on} aria-label={on ? 'Desligar som ambiente' : 'Ligar som ambiente (Sound of Hylo)'}
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 bg-ink/80 backdrop-blur border border-white/15 text-bone font-mono text-[10px] tracking-widest px-4 py-3 hover:border-acid">
      {on ? <Activity size={14} className="text-acid" /> : null}
      {on ? <Volume2 size={14} /> : <VolumeX size={14} />}
      {on ? 'SOUND ON' : 'PLAY SOUND'}
    </button>
  );
}
