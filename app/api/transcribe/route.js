import { NextResponse } from 'next/server';

export async function POST(req) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'AI yapılandırılmamış. OPENAI_API_KEY eksik.' },
      { status: 503 }
    );
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file');
    if (!file) {
      return NextResponse.json({ error: 'Ses dosyası gerekli' }, { status: 400 });
    }

    // Gerçek entegrasyon için OpenAI Whisper çağrısı buraya gelir.
    // Şimdilik örnek yanıt:
    const mockText = 'Bugün D.A.N.G.+ kampı için üç öncelik belirledim. İlk olarak müfredatı gözden geçireceğim.';

    return NextResponse.json({
      text: mockText,
      source: 'whisper-mock',
      note: 'Gerçek Whisper bağlantısı için openai paketi ve API anahtarı gereklidir.'
    });
  } catch (e) {
    return NextResponse.json({ error: 'Deşifre sırasında hata' }, { status: 500 });
  }
}
