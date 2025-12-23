import { Link } from "react-router";
import "./style/SmartConversation.css";

export default function SmartConversation() {
  return (
    <>
      <section className="velocityParent">
        <div>
          <h2>Smart Conversations. Instant Results.</h2>
        </div>
        <div>
          <p>
            ChatAI is your personal assistant for everyday tasks—ask questions,
            get clear explanations, rewrite text, generate ideas, and solve
            problems in seconds. Whether you’re studying, working, coding, or
            just need quick help, ChatAI makes it simple to go from “not sure”
            to “done” with less stress and more confidence.
          </p>
          <Link to={"/about"}>
            <button className="learn-more-btn">Learn More</button>
          </Link>
        </div>
      </section>
    </>
  );
}
