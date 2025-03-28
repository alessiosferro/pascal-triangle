import { strings } from "../../strings";

export const Header = () => {
  return (
    <header className="py-4 shadow">
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-2xl">{strings.app.title}</h1>
      </div>
    </header>
  );
};
