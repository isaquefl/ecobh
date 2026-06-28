import { useState } from 'react';
import { materialOptions } from '../data/categories';
import { submitSuggestion } from '../services/suggestions';
import { SectionTitle } from './SectionTitle';

const initialForm = {
  name: '',
  email: '',
  place: '',
  material: 'eletronico',
  message: ''
};

export function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('info');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setFeedbackType('error');
      setFeedback('Revise os campos destacados antes de enviar.');
      return;
    }

    setSubmitting(true);
    setFeedbackType('info');
    setFeedback('Enviando sua sugestão...');

    try {
      await submitSuggestion(form);
      setFeedbackType('success');
      setFeedback('Sugestão enviada com sucesso! Nossa equipe vai revisar e, se confirmada, ela aparece no mapa. Obrigado por contribuir. 💚');
      setForm(initialForm);
    } catch (error) {
      setFeedbackType('error');
      setFeedback(error.message || 'Não foi possível enviar agora. Tente novamente em instantes.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contato">
      <SectionTitle
        eyebrow="Contribuição"
        title="Sugira pontos de coleta, correções ou parcerias"
        description="Conhece um ponto que não está no mapa? Envie abaixo. Cada sugestão é revisada pela nossa equipe antes de entrar na plataforma."
      />

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label>
            Nome
            <input
              value={form.name}
              onChange={(event) => updateField('name', event.target.value)}
              placeholder="Seu nome"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <small>{errors.name}</small>}
          </label>
          <label>
            E-mail <span className="optional">(opcional)</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              placeholder="voce@email.com"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <small>{errors.email}</small>}
          </label>
        </div>

        <div className="form-row">
          <label>
            Local sugerido
            <input
              value={form.place}
              onChange={(event) => updateField('place', event.target.value)}
              placeholder="Nome, endereço ou bairro"
              aria-invalid={Boolean(errors.place)}
            />
            {errors.place && <small>{errors.place}</small>}
          </label>
          <label>
            Material principal
            <select value={form.material} onChange={(event) => updateField('material', event.target.value)}>
              {materialOptions.filter((option) => option.value !== 'all').map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        </div>

        <label>
          Detalhes
          <textarea
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="Informe horário, referência, tipo de correção ou motivo da sugestão."
            rows="5"
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <small>{errors.message}</small>}
        </label>

        <button className="primary-button" type="submit" disabled={submitting}>
          {submitting ? 'Enviando…' : 'Enviar sugestão'}
        </button>
        {feedback && <p className={`form-feedback ${feedbackType}`}>{feedback}</p>}
      </form>
    </section>
  );
}

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = 'Informe pelo menos 2 caracteres.';
  // E-mail é opcional, mas se preenchido precisa ser válido.
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Digite um e-mail válido.';
  if (form.place.trim().length < 4) errors.place = 'Informe o local com mais detalhes.';
  if (form.message.trim().length < 10) errors.message = 'Descreva a sugestão em pelo menos 10 caracteres.';
  return errors;
}
