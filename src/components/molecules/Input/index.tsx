import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  id?: string;
  max?: number;
  min?: number;
  name: string;
}

export const Input = (props: InputProps) => {
  const id = props.id || props.name;

  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {props.label}
      </label>

      <input
        name={props.name}
        max={props.max}
        min={props.min}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={props.type || "text"}
        placeholder={props.placeholder}
      />
    </div>
  );
};
