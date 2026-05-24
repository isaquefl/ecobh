import { useState } from 'react';
import { materialOptions } from '../data/categories';
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
  const [errors, setErrors] = useState({});

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setFeedback('Revise os campos destacados antes de enviar.');
      return;
    }

    setFeedback('Sugestão registrada localmente para demonstração. Em produção, este formulário seria conectado a um backend seguro.');
    setForm(initialForm);
  }

  return (
    <section id="contato">
      <SectionTitle
        eyebrow="Contribuição"
        title="Sugira pontos de coleta, correções ou parcerias"
        description="O formulário é visual e simulado nesta versão, sem coleta real em servidor e sem exposição de chaves sensíveis."
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
            E-mail
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

        <button className="primary-button" type="submit">Enviar sugestão</button>
        {feedback && <p className="form-feedback">{feedback}</p>}
      </form>
    </section>
  );
}

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = 'Informe pelo menos 2 caracteres.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Digite um e-mail válido.';
  if (form.place.trim().length < 4) errors.place = 'Informe o local com mais detalhes.';
  if (form.message.trim().length < 10) errors.message = 'Descreva a sugestão em pelo menos 10 caracteres.';
  return errors;
}
