import { useState } from "react";
import "./App.css";
import { Button } from "./components/atoms/Button";
import { Input } from "./components/molecules/Input";
import { Header } from "./components/organisms/Header";
import { strings } from "./strings";
import { isOdd } from "./utils/isOdd";

function App() {
  const [triangle, setTriangle] = useState<number[][]>([]);

  function pascalTriangle(triangleSize: number) {
    let triangle = Array.from({ length: triangleSize }, (_, i) =>
      Array(i + 1).fill(1)
    );

    for (let i = 2; i < triangleSize; i++) {
      for (let j = 1; j < i; j++) {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }

    return triangle;
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const triangleSize = Number(formData.get("triangle-size"));

    if (!triangleSize || Number.isNaN(triangleSize)) {
      alert(strings.errors.numberFormat);
      return;
    }

    if (triangleSize < 2 || triangleSize > 32) {
      alert(strings.errors.numberRange);
      return;
    }

    setTriangle(pascalTriangle(triangleSize));
  };

  return (
    <>
      <Header />

      <main>
        <form
          onSubmit={handleSubmit}
          className="max-w-132 mt-12 mx-auto flex gap-4 items-end justify-center"
        >
          <Input
            label={strings.common.triangleSize}
            type="number"
            max={32}
            min={2}
            name="triangle-size"
          />

          <Button text={strings.cta.generate} />
        </form>

        <div className="flex flex-col items-center mt-10 gap-2 p-32">
          {triangle.map((row) => (
            <div className="flex gap-2">
              {row.map((value) => (
                <p
                  className={`text-xs p-1 flex items-center justify-center ${
                    isOdd(value) ? " bg-yellow-400" : ""
                  }`}
                >
                  {value}
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
