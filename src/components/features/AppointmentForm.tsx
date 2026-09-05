import React, { useState } from 'react';
import { useState as useStateHook } from 'react';
import { Input, Select, Textarea, Button } from '@/components/ui';
import { specialties } from '@/data/specialties';
import { doctors } from '@/data/doctors';
import { icons } from '@/components/ui/Icons';

interface AppointmentFormProps {
  defaultSpecialty?: string;
  defaultDoctor?: string;
  className?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  specialty: string;
  doctor: string;
  reason: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  specialty: '',
  doctor: '',
  reason: '',
  consent: false,
};

export function AppointmentForm({ defaultSpecialty, defaultDoctor, className }: AppointmentFormProps) {
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    specialty: defaultSpecialty || '',
    doctor: defaultDoctor || '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const filteredDoctors = formData.specialty
    ? doctors.filter(d => d.specialtyId === formData.specialty)
    : doctors;

  const validateForm = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
    if (!data.lastName.trim()) newErrors.lastName = 'Le nom est requis';
    if (!data.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Veuillez saisir un email valide';
    }
    if (!data.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^[0-9+\s()-]{10,}$/.test(data.phone)) {
      newErrors.phone = 'Veuillez saisir un numéro valide';
    }
    if (!data.date) newErrors.date = 'Veuillez choisir une date';
    else {
      const selectedDate = new Date(data.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) newErrors.date = 'La date doit être future';
    }
    if (!data.time) newErrors.time = 'Veuillez choisir un horaire';
    if (!data.specialty) newErrors.specialty = 'Veuillez sélectionner une spécialité';
    if (!data.consent) newErrors.consent = 'Veuillez accepter le traitement de vos données';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1200));
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData(formData);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  // Success view
  if (isSubmitted && submittedData) {
    return (
      <div className="bg-surface rounded-2xl shadow-elevated p-8 lg:p-12 text-center animate-fade-in" role="status">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-6 animate-scale-in">
          <svg className="w-10 h-10 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h2 className="font-display font-bold text-heading-xl text-ink mb-3">
          Demande de rendez-vous envoyée
        </h2>
        <p className="text-body-lg text-ink-muted mb-8 max-w-lg mx-auto">
          Merci {submittedData.firstName}, votre demande a bien été prise en compte.
          Notre secrétariat vous contactera sous 24h pour confirmer votre rendez-vous.
        </p>
        <div className="bg-cloud rounded-xl p-6 mb-8 max-w-md mx-auto text-left">
          <h3 className="text-label font-medium text-ink mb-4 uppercase tracking-wider">Récapitulatif</h3>
          <dl className="space-y-3 text-body-sm">
            <div className="flex justify-between">
              <dt className="text-ink-muted">Patient</dt>
              <dd className="font-medium text-ink">{submittedData.firstName} {submittedData.lastName}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-muted">Spécialité</dt>
              <dd className="font-medium text-ink">
                {specialties.find(s => s.id === submittedData.specialty)?.name || submittedData.specialty}
              </dd>
            </div>
            {submittedData.doctor && (
              <div className="flex justify-between">
                <dt className="text-ink-muted">Médecin</dt>
                <dd className="font-medium text-ink">
                  Dr {doctors.find(d => d.id === submittedData.doctor)?.firstName}{' '}
                  {doctors.find(d => d.id === submittedData.doctor)?.lastName}
                </dd>
              </div>
            )}
            <div className="flex justify-between">
              <dt className="text-ink-muted">Date</dt>
              <dd className="font-medium text-ink">{new Date(submittedData.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-muted">Horaire</dt>
              <dd className="font-medium text-ink">{submittedData.time}</dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="secondary" size="lg" onClick={handleReset}>
            Nouvelle demande
          </Button>
          <Button variant="primary" size="lg" asChild>
            <a href="/fr/">
              Retour à l'accueil
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface rounded-2xl shadow-elevated p-6 lg:p-10"
      noValidate
      aria-label="Formulaire de demande de rendez-vous"
    >
      {/* Progress indicator */}
      <div className="mb-8">
        <h2 className="font-display font-bold text-heading-lg text-ink mb-2">
          Demande de rendez-vous
        </h2>
        <p className="text-body-sm text-ink-muted mb-4">
          Les champs marqués d'un astérisque (*) sont obligatoires
        </p>
      </div>

      <div className="space-y-8">
        {/* Step 1: Patient Information */}
        <fieldset>
          <legend className="flex items-center gap-3 text-label font-semibold text-ink mb-4">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-heal text-snow text-body-sm font-semibold">1</span>
            Vos informations
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Prénom *"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              placeholder="Ex : Marie"
              autoComplete="given-name"
            />
            <Input
              label="Nom *"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              placeholder="Ex : Dupont"
              autoComplete="family-name"
            />
            <Input
              label="Email *"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Ex : marie.dupont@email.fr"
              autoComplete="email"
            />
            <Input
              label="Téléphone *"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="Ex : 06 12 34 56 78"
              autoComplete="tel"
            />
          </div>
        </fieldset>

        {/* Step 2: Appointment Details */}
        <fieldset>
          <legend className="flex items-center gap-3 text-label font-semibold text-ink mb-4">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-heal text-snow text-body-sm font-semibold">2</span>
            Détails du rendez-vous
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Spécialité *"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              error={errors.specialty}
              placeholder="Choisir une spécialité"
              options={specialties.map(s => ({ value: s.id, label: s.name }))}
            />
            <Select
              label="Médecin (optionnel)"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              placeholder="Préférer un médecin précis"
              options={filteredDoctors.map(d => ({ value: d.id, label: `Dr ${d.firstName} ${d.lastName}` }))}
            />
            <Input
              label="Date souhaitée *"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              error={errors.date}
              min={new Date().toISOString().split('T')[0]}
            />
            <Select
              label="Horaire *"
              name="time"
              value={formData.time}
              onChange={handleChange}
              error={errors.time}
              placeholder="Choisir un horaire"
              options={[
                '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
                '11:00', '11:30', '13:00', '13:30', '14:00', '14:30',
                '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
              ].map(t => ({ value: t, label: t }))}
            />
          </div>
        </fieldset>

        {/* Step 3: Reason */}
        <fieldset>
          <legend className="flex items-center gap-3 text-label font-semibold text-ink mb-4">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-heal text-snow text-body-sm font-semibold">3</span>
            Motif de la consultation
          </legend>
          <Textarea
            label="Description (optionnelle)"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Décrivez brièvement le motif de votre consultation (symptômes, antécédents, documents médicaux à apporter...)"
            rows={4}
          />
          <div className="mt-4">
            <p className="text-body-sm text-ink-muted mb-3">
              Documents à apporter : pièce d'identité, carte Vitale, mutuelle, ordonnances et comptes-rendus médicaux récents.
            </p>
          </div>
        </fieldset>

        {/* Consent */}
        <div className="border-t border-cloud pt-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 w-5 h-5 rounded border-cloud text-heal focus:ring-heal"
            />
            <span className="text-body-sm text-ink-muted">
              J'accepte que mes informations soient utilisées pour la gestion de ma demande de rendez-vous.
              Elles ne seront pas transmises à des tiers sans mon accord.{' '}
              <span className="text-vital font-medium">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="text-caption text-vital mt-1.5 flex items-center gap-1" role="alert">
              <icons.alertCircle className="w-4 h-4 flex-shrink-0" />
              {errors.consent}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isSubmitting}
            fullWidth
            className="sm:w-auto"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
            {!isSubmitting && <icons.arrowRight className="w-5 h-5" />}
          </Button>
          <p className="text-caption text-ink-muted">
            Réponse garantie sous 24h ouvrées
          </p>
        </div>

        {/* Alternative booking */}
        <div className="border-t border-cloud pt-6">
          <p className="text-body-sm text-center text-ink-muted mb-4">
            Vous préférez un autre moyen ? Notre secrétariat est à votre écoute.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:0123456789" className="inline-flex items-center gap-2 text-body-sm font-medium text-heal hover:text-heal-hover transition-colors">
              <icons.phone className="w-4 h-4" />
              01 23 45 67 89
            </a>
            <span className="hidden sm:block w-px h-4 bg-cloud" aria-hidden="true" />
            <a href="mailto:rdv@saint-claire.fr" className="inline-flex items-center gap-2 text-body-sm font-medium text-heal hover:text-heal-hover transition-colors">
              <icons.mail className="w-4 h-4" />
              rdv@saint-claire.fr
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}