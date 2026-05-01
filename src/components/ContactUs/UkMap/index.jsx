"use client";

export default function UkMap() {
  return (
    <div className="w-full h-75 md:h-100 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d319881.3127630492!2d-0.123584!3d51.514904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605ae4ec9bc63%3A0x220b4d060b9e248b!2sHigh%20Jump%20Digital%20Limited!5e1!3m2!1sen!2sus!4v1776758342576!5m2!1sen!2sus"
        className="w-full h-full grayscale contrast-125 brightness-90"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}