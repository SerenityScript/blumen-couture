import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./styleForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mdkoazjy");
  if (state.succeeded) {
    return <div className='HeadingCont MessageCont'>
      <p className='HeadingGold'>Vielen Dank für Ihre Nachricht!</p>
      <p className='HeadingGold'>Wir werden uns schnellstmöglich bei Ihnen melden</p>
    </div>;
  }
  return (
    <div className='card'>
      <h3 className="HeadingGold">Schreiben Sie uns</h3>

    <form onSubmit={handleSubmit} className="form">
    <div className="group">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        
      <textarea
        id="message"
        name="message"
        placeholder='Ihre Nachricht'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </div>
        
    <button type="submit" disabled={state.submitting}>
      Submit
    </button>
    </form>
    </div>
  );
}

export default ContactForm;