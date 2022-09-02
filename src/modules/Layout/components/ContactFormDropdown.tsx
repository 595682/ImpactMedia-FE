import { contactFormOptions } from 'contents/contactForm';
import React from 'react';

interface IContactFormDropdown {
  defaultService: number;
  handleServiceChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled: boolean;
}

const ContactFormDropdown = ({
  defaultService,
  handleServiceChange,
  disabled,
}: IContactFormDropdown) => {
  return (
    <div className="sm:col-span-2 ">
      <label
        htmlFor="service"
        className="block text-sm font-medium text-gray-700"
      >
        Service
      </label>
      <select
        id="service"
        name="service"
        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-theme-primary focus:ring-theme-primary"
        value={defaultService}
        onChange={handleServiceChange}
        disabled={disabled}
      >
        {contactFormOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default ContactFormDropdown;
