import { useMutation } from '@apollo/client';
import { CheckIcon } from '@heroicons/react/outline';
import { contactFormOptions } from 'contents/contactForm';
import type { SyntheticEvent } from 'react';
import React, { useEffect, useState } from 'react';

import Button from '@/common/components/buttons/button';
import Spinner from '@/common/components/Spinner';
import { useAppContext } from '@/lib/context/state';
import { CREATE_CONNECTION } from '@/lib/gql/mutations/connection';

import ContactFormDropdown from './ContactFormDropdown';

export interface IformData {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  service: number;
}

interface IContactForm {
  title: any;
  replace?: {
    message?: string;
    dropdown?: number;
  };
}
const ContactForm = ({ title, replace }: IContactForm) => {
  const [service, setService] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { state } = useAppContext();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleCompleted = () => {
    setLoading(false);
    setSuccess(true);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  const [submit] = useMutation(CREATE_CONNECTION, {
    onCompleted: () => handleCompleted(),
    onError: () => handleError(),
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);
    const { isQuot } = state;
    const reqService = contactFormOptions.find(
      (option) => option.id === service
    );

    submit({
      variables: {
        isQuot,
        firstName,
        lastName,
        email,
        description: message,
        service: reqService?.label || '',
      },
    });
  };

  useEffect(() => {
    if (state.quotOpen) {
      setSuccess(false);
      setLoading(false);
      setError(false);
    }
  }, [state.quotOpen]);

  useEffect(() => {
    if (replace?.dropdown) {
      setService(replace?.dropdown);
    }
  }, [replace]);

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setService(parseInt(e.target.value, 10));
  };

  return (
    <div className="flex h-full w-full max-w-md flex-col items-center justify-center">
      {success && (
        <div className="flex w-full flex-col items-center justify-center py-4 text-theme-primary">
          <CheckIcon className="h-20 w-20 " />
          <span className="text-4xl font-bold">SUCCESS!</span>
          <p className="text-2xl">We have received your request!</p>
          <p className="text-lg">We will get back to you shortly.</p>
        </div>
      )}
      {!success && (
        <>
          <h3 className="text-4xl font-medium uppercase text-gray-900">
            {title}
          </h3>
          {error && (
            <div className="my-4 w-full rounded-xl bg-red-200 p-4 text-sm">
              An unexpected error happened while submitting your form! Please
              try again or contact us via{' '}
              <a className="font-bold" href="mailto:contact@impactmedia.com">
                contact@impactmedia.com
              </a>
            </div>
          )}
          <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-900"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  value={firstName}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-theme-primary focus:ring-theme-primary"
                  disabled={loading}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-900"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  value={lastName}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-theme-primary focus:ring-theme-primary"
                  disabled={loading}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-theme-primary focus:ring-theme-primary"
                  disabled={loading}
                />
              </div>
            </div>
            {replace?.dropdown ? (
              <ContactFormDropdown
                defaultService={service}
                handleServiceChange={handleServiceChange}
                disabled={loading}
              />
            ) : null}
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  {replace?.message ? replace.message : 'Message'}
                </label>
                <span id="message-max" className="text-sm text-gray-500">
                  Max. 500 characters
                </span>
              </div>
              <div className="mt-1">
                <textarea
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-theme-primary focus:ring-theme-primary"
                  aria-describedby="message-max"
                  defaultValue={''}
                  disabled={loading}
                />
              </div>
            </div>
            <div className="sm:col-span-2 sm:flex sm:justify-end">
              <Button
                color="primary"
                title={!loading ? 'SUBMIT' : 'SUBMITTING'}
                onClick={handleSubmit}
                disabled={loading}
                icon={loading ? <Spinner /> : null}
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
};
export default ContactForm;
