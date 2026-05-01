"use client";

export default function ThMap() {
  return (
    <div className="w-full h-75 md:h-100 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.187248039573!2d100.5585005!3d13.721284599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fd7e5a34b5f%3A0x91ffdf7520dfc144!2sHigh%20Jump%20Digital%20Co.%2C%20Ltd.!5e1!3m2!1sen!2sin!4v1776763603909!5m2!1sen!2sin"
        className="w-full h-full grayscale contrast-125 brightness-90"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}