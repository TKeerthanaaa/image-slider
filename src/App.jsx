import { useState } from "react";

// Component
import { Reviews } from "./components";

// Constants
import { reviews } from "./constants";

const App = () => {
  const [index, setIndex] = useState(0);

  const prevReview = () => {
    const lastIndex = reviews.length - 1;
    if (index === 0) {
      setIndex(lastIndex);
      return;
    }
    setIndex((val) => val - 1);
  };

  const nextReview = () => {
    const lastIndex = reviews.length - 1;
    if (index === lastIndex) {
      setIndex(0);
      return;
    }
    setIndex((val) => val + 1);
  };

  return (
    <main className="w-[100%] h-[75vh]">
      <div>
        <Reviews
          index={index}
          prevReview={prevReview}
          nextReview={nextReview}
        />
      </div>
    </main>
  );
};

export default App;
