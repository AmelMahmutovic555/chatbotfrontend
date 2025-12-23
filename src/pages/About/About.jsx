import ChatBot from "../../components/chatbot/ChatBot/ChatBot";
import Footer from "../../components/layout/Footer/Footer";
import "./style/About.css";

export default function About() {
  return (
    <>
      <section className="about">
        <div className="aboutChild1">
          <h1>ABOUT</h1>
          <p>
            ChatAI is like having a smart helper in your pocket. Need a quick
            explanation, a better email, a fresh idea, or help with homework or
            code? Just ask. It’s fast, easy to use, and built to help you move
            from “I don’t know” to “done” with less stress.
          </p>
        </div>

        <div className="aboutChild">
          <div>
            <p>CREATOR</p>
          </div>
          <div>
            <p className="creator">Amel Mahmutovic</p>
            <img src="/Amel.jpg" alt="amel" width={200} />
          </div>
        </div>
      </section>

      <ChatBot />
      <Footer />
    </>
  );
}
