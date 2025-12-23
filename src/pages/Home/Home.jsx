import ChatBot from "../../components/chatbot/ChatBot/ChatBot";
import BoostProductivity from "../../components/layout/BoostProductivity/BoostProductivity";
import Footer from "../../components/layout/Footer/Footer";
import SmartConversation from "../../components/layout/SmartConversation/SmartConversation";
import "./style/Home.css";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <section className="homePage">
        <div>
          <h1 className="homeChild1">Welcome to ChatAI</h1>
          <p className="homeChild2">Real time answers</p>
          <Link to={"/about"} className="homeChild3">
            <button className="learn-more-btn">Learn More</button>
          </Link>
        </div>
      </section>

      <BoostProductivity />
      <SmartConversation />
      <ChatBot />
      <Footer />
    </>
  );
}
