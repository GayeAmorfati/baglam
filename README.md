# Bağlam — İkinci Beyin ve Bağlam Merkezi

Sıcak, editoryal ikinci beyin uygulaması.  
Not, proje, görev, bağlam paketi + ses deşifresi ve görsel özeti.

## Kurulum

```bash
npm install
cp .env.example .env.local
# .env.local içine OPENAI_API_KEY ekle
npm run dev
```

## Yapay Zeka Uçları

- `POST /api/transcribe` — ses dosyası (multipart) → metin
- `POST /api/analyze-image` — görsel → özet

AI anahtarı yoksa uçlar açık hata döner, arayüz ham içeriği yine kaydeder.

## Özellikler (mevcut iskelet)

- Hızlı yakalama (metin / ses / görsel / sosyal)
- Notlar ve etiketler
- Proje + Kanban
- Global arama
- Bağlam paketi
- PDF / Markdown dışa aktarma (planlı)

Marka adı geçicidir. Veri modeli çalışma alanı bazlıdır.
