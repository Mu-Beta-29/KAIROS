// Erken erişim formu: doğrulama ve teşekkür mesajı.
// Not: Form verisi şimdilik hiçbir yere gönderilmiyor. Sunucu hazır olunca buraya bağlanacak.

const form = document.getElementById('early-access-form');
const success = document.getElementById('signup-success');

const messages = {
  name: { missing: 'Lütfen adını ve soyadını yaz.' },
  email: { missing: 'Lütfen e-posta adresini yaz.', invalid: 'Geçerli bir e-posta adresi yaz.' },
  phone: { invalid: 'Geçerli bir telefon numarası yaz.' },
  profession: { missing: 'Lütfen mesleğini seç.' },
  consent: { missing: 'Devam etmek için aydınlatma metnini onaylaman gerekiyor.' },
};

const fields = Array.from(form.elements).filter((el) => messages[el.name]);

function validateField(field) {
  const error = document.getElementById(field.id + '-error');
  let message = '';

  if (field.validity.valueMissing) {
    message = messages[field.name].missing;
  } else if (!field.validity.valid) {
    message = messages[field.name].invalid;
  }

  error.textContent = message;
  field.setAttribute('aria-invalid', message ? 'true' : 'false');
  return !message;
}

// Hatalı alan düzeltildikçe hata mesajını güncelle
fields.forEach((field) => {
  const eventName = field.type === 'checkbox' || field.tagName === 'SELECT' ? 'change' : 'input';
  field.addEventListener(eventName, () => {
    if (field.getAttribute('aria-invalid') === 'true') validateField(field);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const invalid = fields.filter((field) => !validateField(field));
  if (invalid.length) {
    invalid[0].focus();
    return;
  }

  form.hidden = true;
  success.textContent = 'Teşekkürler! Erken erişim açıldığında sana e-posta göndereceğiz.';
  success.focus();
});
