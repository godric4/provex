// src/components/FaqPage.js

import { MiniHero, Question } from '../components';

const FaqPage = () => {
  const faqs = [
    {
      question: 'How do I start the process of buying a home?',
      answer:
        'To begin the home-buying process, you can start by browsing our available listings on our website or contacting one of our agents directly. They will guide you through the steps from there.',
    },
    {
      question:
        "Why should i invest in the company's investment product packages?",
      answer:
        "The motive of investors investing directly in the company's products package is to generate more income, safety and capital gains from the company",
    },
    {
      question: 'What should I consider when buying a property?',
      answer:
        'Consider factors such as location, budget, amenities, and potential for appreciation before making a decision.',
    },
    {
      question: 'How do I determine the fair market value of a property?',
      answer:
        'Our experienced agents use a combination of market research, comparable sales, and their expertise to help you determine the fair market value of a property.',
    },
    {
      question: 'Do I need a real estate agent to buy or sell a property?',
      answer:
        'While it is possible to buy or sell a property without an agent, having a professional by your side can save you time, money, and potential headaches. Our agents bring expertise and market knowledge to every transaction',
    },
    {
      question: 'How long does the typical home-buying process take?',
      answer:
        'The timeline can vary, but on average, it takes about 30-45 days from making an offer to closing the deal. Factors like financing, inspections, and negotiations can influence the duration.',
    },
  ];

  return (
    <>
      <MiniHero title='Frequently Asked Questions' />
      <div className='container mx-auto mt-8 p-4'>
        <h1 className='text-2xl font-bold mb-4'>Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <Question key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </>
  );
};

export default FaqPage;
