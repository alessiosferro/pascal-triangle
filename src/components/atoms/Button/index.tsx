interface ButtonProps {
  text: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 transition-colors py-2 px-4 text-white rounded-sm">
      {props.text}
    </button>
  );
};
