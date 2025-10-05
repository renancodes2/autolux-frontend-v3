"use client";

import {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
  FieldError,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
  type: string;
  name: Path<T>;
  id?: string;
  placeholder?: string;
  error?: FieldError,
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
}

export function Input<T extends FieldValues>({
  type,
  name,
  id,
  placeholder,
  error,
  register,
  rules,
}: InputProps<T>) {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`outline-none border-0 bg-gray-200 mt-2 h-10 shadow-md rounded-md p-2 ${
          error ? "border-red-500" : "border-slate-400"
        }`}
      />
      {error && error.message && (
        <span className="text-red-500 text-sm mt-2">{error.message}</span>
      )}
    </div>
  );
}