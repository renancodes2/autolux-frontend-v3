import React from "react";


interface WhyBuyHere {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function WhyBuyHere({ title, description, icon }: WhyBuyHere){
  return (
    <div className="flex  items-center flex-col rounded-lg bg-slate-100 shadow-md p-10">
      <span>{icon}</span>
      <h2 className="mt-3 font-semibold text-lg">{title}</h2>
      <p className="text-center mt-1 max-w-55 text-gray-600">{description}</p>
    </div>
  )
}
