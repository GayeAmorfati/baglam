'use client';
import { useState } from 'react';

export default function Home() {
  const [transcript, setTranscript] = useState('');
  const [summary, setSummary] = useState(null);
  const [status, setStatus] = useState('');

  async function handleAudio(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatus('Ses işleniyor…');
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/transcribe', { method: 'POST', body: fd });
    const data = await res.json();
    if (data.error) setStatus(data.error);
    else {
      setTranscript(data.text);
      setStatus('Deşifre tamam');
    }
  }

  async function handleImage(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatus('Görsel analiz ediliyor…');
    const fd = new FormData();
    fd.append('image', file);
    const res = await fetch('/api/analyze-image', { method: 'POST', body: fd });
    const data = await res.json();
    if (data.error) setStatus(data.error);
    else {
      setSummary(data.summary);
      setStatus('Özet hazır');
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui', background: '#F7F3EC', minHeight: '100vh', padding: 40 }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>Bağlam</h1>
      <p style={{ color: '#686B62' }}>Ses deşifresi ve görsel özeti — AI iskeleti</p>

      <div style={{ marginTop: 32, display: 'grid', gap: 24, maxWidth: 640 }}>
        <div style={{ background: 'white', padding: 20, borderRadius: 12, border: '1px solid #E4DED4' }}>
          <h3>Ses notu</h3>
          <input type="file" accept="audio/*" onChange={handleAudio} />
          {transcript && <pre style={{ marginTop: 12, whiteSpace: 'pre-wrap' }}>{transcript}</pre>}
        </div>

        <div style={{ background: 'white', padding: 20, borderRadius: 12, border: '1px solid #E4DED4' }}>
          <h3>Görsel özeti</h3>
          <input type="file" accept="image/*" onChange={handleImage} />
          {summary && (
            <div style={{ marginTop: 12 }}>
              <strong>{summary.title}</strong>
              <ul>{summary.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            </div>
          )}
        </div>

        {status && <div style={{ color: '#53644A' }}>{status}</div>}
      </div>

      <p style={{ marginTop: 40, fontSize: 14, color: '#686B62' }}>
        API anahtarı yoksa uçlar 503 döner. Gerçek Whisper / Vision için openai paketini ekle.
      </p>
    </div>
  );
}
