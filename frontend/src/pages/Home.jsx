import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";

export default function Home() {
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Presentation />
        <Projects />
      </main>
    </>
  );
}
