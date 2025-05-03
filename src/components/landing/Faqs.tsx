"use client";
import { useState } from "react";
import React from "react";
import FaqItem from "./faq";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I request a song?",
      answer:
        "Simply search for your favorite track in the app and pay the DJ’s set fee. Once your request is accepted, you’ll see its place in the queue and get notified when it’s about to play!",
    },
    {
      question: "How do DJs get paid?",
      answer:
        "Simply search for your favorite track in the app and pay the DJ’s set fee. Once your request is accepted, you’ll see its place in the queue and get notified when it’s about to play!",
    },
    {
      question: "Can I tip a DJ without requesting a song?",
      answer:
        "Simply search for your favorite track in the app and pay the DJ’s set fee. Once your request is accepted, you’ll see its place in the queue and get notified when it’s about to play!",
    },
    {
      question: "How do I sign up as a DJ?",
      answer:
        "Simply search for your favorite track in the app and pay the DJ’s set fee. Once your request is accepted, you’ll see its place in the queue and get notified when it’s about to play!",
    },
    {
      question: "What payment methods are available?",
      answer:
        "Simply search for your favorite track in the app and pay the DJ’s set fee. Once your request is accepted, you’ll see its place in the queue and get notified when it’s about to play!",
    },
  ];

  return (
    <section className="bg-white flex flex-col items-center py-30 px-24 min-h-screen">
      <h3 className="text-5xl font-medium pb-6">You ask, we answer</h3>
      <p className="text-xl pb-7 max-w-xl text-center">
        Got questions? We’ve got answers. From song requests to payouts, here’s
        everything you need to know to make the most of Quee.
      </p>
      <div className="flex flex-col gap-4 mx-auto w-full">
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
