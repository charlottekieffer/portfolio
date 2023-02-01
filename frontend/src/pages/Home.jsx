import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Presentation />
        <Projects />
        <ContactForm />
      </main>
    </>
  );
}
