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
    const file = formData.get('image');
    if (!file) {
      return NextResponse.json({ error: 'Görsel gerekli' }, { status: 400 });
    }

    // Gerçek entegrasyon için GPT-4o vision çağrısı buraya gelir.
    const mockSummary = {
      title: 'Defter sayfası özeti',
      bullets: [
        'Dijital minimalizm ve dikkat ekonomisi üzerine notlar',
        'Teknolojiyi araç olarak kullanma vurgusu',
        'Boşluk ve odaklanma önerileri'
      ],
      full: 'Görsel bir defter sayfası içeriyor. Ana tema dikkat ve dijital minimalizm.'
    };

    return NextResponse.json({
      summary: mockSummary,
      source: 'vision-mock',
      note: 'Gerçek vision modeli için openai paketi gereklidir.'
    });
  } catch (e) {
    return NextResponse.json({ error: 'Görsel analizi sırasında hata' }, { status: 500 });
  }
}
