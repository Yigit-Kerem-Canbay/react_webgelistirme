import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { Alert, AlertDescription } from '../ui/Alert';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'İsim alanı boş bırakılamaz.';
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = 'İsim en az 2 karakter olmalıdır.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta alanı boş bırakılamaz.';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Lütfen geçerli bir e-posta adresi girin.';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Konu alanı boş bırakılamaz.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj alanı boş bırakılamaz.';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Mesaj gönderilemedi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100" noValidate>
      {submitSuccess && (
        <Alert variant="success" className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <AlertDescription>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağım.</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="İsim Soyisim"
          name="name"
          placeholder="Adınız Soyadınız"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          disabled={isSubmitting}
        />
        <Input
          label="E-posta"
          name="email"
          type="email"
          placeholder="ornek@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          disabled={isSubmitting}
        />
      </div>

      <Input
        label="Konu"
        name="subject"
        placeholder="Mesajınızın konusu"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        disabled={isSubmitting}
      />

      <Textarea
        label="Mesaj"
        name="message"
        placeholder="Mesajınızı buraya yazın..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        disabled={isSubmitting}
        rows={5}
      />

      <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
        {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
      </Button>
    </form>
  );
}
