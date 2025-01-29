"use client";

import { useRef } from "react";

const ContactForm = () => {
  const fNameRef = useRef<HTMLInputElement>(null);
  const lNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fName = fNameRef.current?.value;
    const lName = lNameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const service = serviceRef.current?.value;
    const desc = descRef.current?.value;

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fName, lName, email, phone, service, desc }),
      });
      const result = await response.json();
      if (result.success) {
        alert("Email sent successfully");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert("An error occurred while sending the email.");
    }
  }

  return (
    <div className="w-full lg:w-2/3 max-w-lg lg:max-w-none p-5 lg:p-10 bg-secondary rounded-lg shadow-xl">
      <h2 className="text-2xl md:text-3xl text-accent py-4 md:py-8">
        Let&apos;s work together
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-5 md:gap-10"
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
          <input
            className="w-full bg-background rounded-md p-2 outline-accent"
            ref={fNameRef}
            name="fName"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="w-full bg-background rounded-md p-2 outline-accent"
            ref={lNameRef}
            name="lName"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
          <input
            className="w-full bg-background rounded-md p-2 outline-accent"
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            className="w-full bg-background rounded-md p-2 outline-accent"
            ref={phoneRef}
            name="phoneNumber"
            type="number"
            placeholder="Phone Number (with country code)"
            required
          />
        </div>
        <select
          className="w-full bg-background rounded-md p-2 outline-accent text-[#aaa]"
          ref={serviceRef}
          name="service"
          defaultValue="Select a Service"
        >
          <option disabled>Select a Service</option>
          <option value="Next.js Development">Next.js Development</option>
          <option value="MERN Development">MERN Development</option>
          <option value="React Native Development">
            React Native Development
          </option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>
        <textarea
          className="w-full bg-background rounded-md p-2 outline-accent"
          ref={descRef}
          name="description"
          placeholder="Enter your message here"
          rows={7}
        />
        <button className="py-2 px-5 rounded-full bg-accent text-black">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
