# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Komutlar

Derleme, paket kurulumu, linter veya test yok.

- Sayfayı açmak için `index.html` dosyasını tarayıcıda açın.
- Yerel sunucuyla açmak için proje klasöründe: `python3 -m http.server` (ardından http://localhost:8000).

## Kullanılan teknoloji

- Ön yüz (landing page ve ileride yönetim paneli): sadece HTML, CSS ve JavaScript (framework veya kütüphane yok).
- Backend (planlanıyor, henüz kurulmadı): Node.js + Express + TypeScript. Ayrıntılar aşağıdaki "Backend kararları" bölümünde.
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

- Ön yüze HTML, CSS ve JS dışında bir teknoloji eklemeyin (React, Tailwind vb.), açıkça istenmedikçe. Backend için Node.js, Express, TypeScript ve gerekli npm paketleri açıkça istendi; bunlar `backend/` içinde kalır.
- Landing page'de "Kayıt Ol" dışında buton eklemeyin (ör. "Giriş Yap"), açıkça istenmedikçe. Sadece iki "Kayıt Ol" butonu var: hero'da ve formda. Fiyat kartlarında buton yok.
- Renkleri doğrudan yazmayın; `:root` değişkenlerini kullanın.

## Açıklamalar

- Hero'daki "Kayıt Ol" butonu (`.cta`) sayfayı erken erişim formuna kaydırır. Formun gönder butonu da "Kayıt Ol".
- Form verisi hiçbir yere gönderilmiyor; `main.js` sadece doğrulama yapıp teşekkür mesajı gösteriyor. Sunucu gelince bağlanacak.
- Fiyatlar (₺0 / ₺299 / ₺699) ve "ilk 3 ay ücretsiz" bilgisi yer tutucudur.
- KVKK / aydınlatma metni bağlantıları yer tutucudur (`href="#"`).
- Giriş bölümündeki randevu kartı ve "Bu hafta" kutusu sadece görsel; içindeki isimler ve sayılar örnek veridir.

## Backend kararları

Henüz kod yazılmadı; tasarım konuşması sürüyor. Şu ana kadar alınan kararlar:

- Öncelik: randevu ve müşteri takip sistemi.
- Kullanıcılar hizmet sağlayıcılardır (berber, danışman, koç). Her biri yalnızca kendi randevularını ve müşterilerini görür.
- Teknoloji: Node.js (v24 LTS, nvm ile kurulu), Express, TypeScript. Backend `backend/` klasöründe olacak.
- Yönetim paneli ön yüzü: düz HTML, CSS ve JS. Landing page'e dokunulmayacak.
- Panel akışı: giriş yap, açılışta o günün randevularını gör, sekmelerle müşteri listesine veya haftalık / aylık takvime geç.
- Veriler şimdilik bellekte tutulacak (sunucu yeniden başlayınca silinir). Veritabanı sonra seçilecek; bu yüzden veri erişimi ayrı bir katmanda (depo) olmalı.
- Müşterilerin randevu alacağı sayfa bir sonraki adımdır, ilk sürümde yok. Randevuyu şimdilik hizmet sağlayıcı panelden girer.
- Henüz karar verilmedi: randevu ve müşteri kaydındaki alanlar, giriş yöntemi ayrıntıları (e-posta + parola ve oturum çerezi önerildi, onaylanmadı).
