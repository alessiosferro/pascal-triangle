import { useState } from "react";
import { Button } from "./components/atoms/Button";
import { Input } from "./components/molecules/Input";
import { Header } from "./components/organisms/Header";
import { strings } from "./strings";
import { isOdd } from "./utils/isOdd";
import { getPascalTriangle, PascalTriangle } from "./utils/getPascalTriangle";

const MINIMUM_SIZE = 1;
const MAXIMUM_SIZE = 32;

function App() {
  const [triangle, setTriangle] = useState<PascalTriangle>([]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    // Prevent form submission
    event.preventDefault();

    // Parse the data from the input
    const formData = new FormData(event.currentTarget);
    const triangleSize = Number(formData.get("triangle-size"));

    // Simple validation for the triangleSize value
    if (!triangleSize || Number.isNaN(triangleSize)) {
      alert(strings.errors.numberFormat);
      return;
    }

    if (triangleSize < MINIMUM_SIZE || triangleSize > MAXIMUM_SIZE) {
      alert(strings.errors.numberRange);
      return;
    }

    // Calculate the triangle for the given size
    const triangle = getPascalTriangle(triangleSize);

    // Update the triangle state
    setTriangle(triangle);
  };

  return (
    <>
      <Header />

      <main className="px-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-132 mt-8 mx-auto flex gap-4 items-end justify-center"
        >
          <Input
            label={strings.common.triangleSize}
            type="number"
            max={MAXIMUM_SIZE}
            min={MINIMUM_SIZE}
            name="triangle-size"
          />

          <Button text={strings.cta.generate} />
        </form>

        <div className="flex flex-col lg:items-center gap-4 my-20">
          {triangle.map((row) => (
            <div className="flex gap-4">
              {row.map((item) => (
                <p
                  className={`text-xs p-1 flex items-center justify-center ${
                    isOdd(item.rawValue) ? " bg-yellow-400" : ""
                  }`}
                >
                  {item.formattedValue}
                </p>
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
