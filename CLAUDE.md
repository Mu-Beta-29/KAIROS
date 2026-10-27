# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Komutlar

Derleme, paket kurulumu, linter veya test yok.

- Sayfayı açmak için `index.html` dosyasını tarayıcıda açın.
- Yerel sunucuyla açmak için proje klasöründe: `python3 -m http.server` (ardından http://localhost:8000).

## Kullanılan teknoloji

- Sadece HTML, CSS ve JavaScript (framework veya kütüphane yok).
- Yazı tipleri Google Fonts'tan geliyor: başlıklarda Fraunces, metinlerde Inter.

## Proje özeti

KAIRO; berber, danışman ve koç gibi serbest çalışanlar için randevu, müşteri ve ödeme yönetimi sitesi. Şu an sadece landing page var:

- `index.html`: sayfanın içeriği. Bölümler sırasıyla: hero, sorun ve çözüm (`#problem`), nasıl çalışır (`#how-it-works`), fiyatlandırma (`#pricing`), erken erişim formu (`#early-access`), alt bilgi.
- `styles.css`: tüm stiller. Bölümler aynı sırayla, numaralı yorumlarla ayrılmış.
- `main.js`: erken erişim formunun doğrulaması ve teşekkür mesajı.

## Kurallar

- Dosya ve klasör adları İngilizce olmalı (ör. `signup.html`, `main.js`).
- Sitede kullanıcıya görünen metinler Türkçe olmalı.
- Renkler `styles.css` içinde `:root` altında değişken olarak tanımlı. Yeni renk gerekirse oraya ekleyin ve karanlık mod bölümünde (`prefers-color-scheme: dark`) karşılığını da tanımlayın.
- Sayfa telefonda da düzgün görünmeli. Mevcut ekran genişliği eşikleri: 900px ve 520px.

## Yasaklar

- HTML, CSS ve JS dışında bir teknoloji eklemeyin (React, Tailwind, npm paketleri vb.), açıkça istenmedikçe.
- Landing page'de "Kayıt Ol" dışında buton eklemeyin (ör. "Giriş Yap"), açıkça istenmedikçe. Sadece iki "Kayıt Ol" butonu var: hero'da ve formda. Fiyat kartlarında buton yok.
- Renkleri doğrudan yazmayın; `:root` değişkenlerini kullanın.

## Açıklamalar

- Hero'daki "Kayıt Ol" butonu (`.cta`) sayfayı erken erişim formuna kaydırır. Formun gönder butonu da "Kayıt Ol".
- Form verisi hiçbir yere gönderilmiyor; `main.js` sadece doğrulama yapıp teşekkür mesajı gösteriyor. Sunucu gelince bağlanacak.
- Fiyatlar (₺0 / ₺299 / ₺699) ve "ilk 3 ay ücretsiz" bilgisi yer tutucudur.
- KVKK / aydınlatma metni bağlantıları yer tutucudur (`href="#"`).
- Giriş bölümündeki randevu kartı ve "Bu hafta" kutusu sadece görsel; içindeki isimler ve sayılar örnek veridir.
