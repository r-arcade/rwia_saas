"use client";

import { useState } from 'react';

type Props = {
  question: string;
  answer: string;
};

const Accordion = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-light-border dark:border-dark-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-fluid-3 flex justify-between items-center text-light-foreground dark:text-dark-foreground"
      >
        <span className="font-semibold text-fluid-body">{question}</span>
        <span className="text-primary font-bold text-fluid-h3">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-fluid-3 text-light-foreground/70 dark:text-dark-foreground/70">
          <p className="text-fluid-sm">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
