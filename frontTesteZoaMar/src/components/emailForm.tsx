import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const templateParams = {
          email,
          message,
        };
      
        try {
          await emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            templateParams,
            'YOUR_USER_ID'
          );

          alert('Email sent successfully!');
      } catch (error) {
        console.error('Failed to send email:', error);
      }
      
      setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} 
    className="flex md:gap-4 gap-1 md:mt-36 m-2"
    >
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor email"
          className="border border-white md:p-3 p-1 w-96 md:mt-20 bg-transparent rounded"
          required
        />
      {/* <div className="mb-4">
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        ></textarea>
      </div> */}
      <div>
        <button
          type="submit"
          className="bg-white text-black p-3 border rounded md:mt-20"
        >
          Assinar
        </button>
      </div>
    </form>
  );
};

export default EmailForm;