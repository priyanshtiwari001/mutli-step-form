import { useEffect, useState } from "react";
import PageSeven from "./ui/PageSeven";
import PageSix from "./ui/PageSix";
import { PageThree } from "./ui/PageThree";
import ProgressBar from "./ui/ProgressBar";
import PageOne from "./ui/PageOne";
import PageTwo from "./ui/PageTwo";
import { PageFive } from "./ui/PageFive";
import { Button } from "./components/Button";
import PageFour from "./ui/PageFour";

function App() {
  const [page, setPage] = useState(0);
  const [pending, setPending] = useState(false);
  const [wait, setWait] = useState(<PageSix />);
  useEffect(() => {
    setTimeout(() => {
      setWait(<PageSeven />);
    }, 28000);
  }, []);
  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <PageOne setPending={setPending} />;
      case 1:
        return <PageTwo setPending={setPending} />;

      case 2:
        return <PageThree />;

      case 3:
        return <PageFour />;

      case 4:
        return <PageFive />;

      case 5:
        return wait;

      default:
        throw new Error("No Page left!!");
    }
  };
  return (
    <main className="max-w-screen-xl  mx-auto  h-full  flex flex-col  gap-9 px-3 font-poppins py-3  ">
      {page < 5 && <ProgressBar page={page} setPage={setPage} />}

      <div className="my-body">{PageDisplay()}</div>
      {page < 5 && (
        <Button
          className="relative left-[30%] md:left-[44%]"
          pending={pending}
          setPage={setPage}
        />
      )}
    </main>
  );
}

export default App;
