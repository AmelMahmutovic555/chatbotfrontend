import { useEffect, useRef, useState } from "react";
import axios from "axios";

import "./style/ChatBot.css";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [toggleAiBtn, setToggleAiBtn] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (sentMessages) {
      axios
        .get("http://localhost:5000/get-info")
        .then((response) => {
          setSentMessages(response.data.result);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [sentMessages]);

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const sentMessage = {
      message: message,
    };

    if (message.trim() === "") return;

    const currentDate = new Date();
    const time =
      String(currentDate.getHours()).padStart(2, "0") +
      ":" +
      String(currentDate.getMinutes()).padStart(2, "0");

    setSentMessages((prevState) => [
      ...prevState,
      {
        date: time,
        role: "user",
        message: message,
      },
    ]);

    setMessage("");

    axios
      .post(`http://localhost:5000/find-complexity`, sentMessage)
      .then((response) => {
        setSentMessages((prevState) => [
          ...prevState,
          {
            date: time,
            role: "ai",
            message: response.data.message,
          },
        ]);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }

  function toggleButton() {
    setToggleAiBtn((prevState) => !prevState);
  }

  return (
    <>
      {toggleAiBtn ? (
        <>
          <section className={`chatAiSection`}>
            <div className="firstAiChild">
              <p>Let's chat</p>
              <p>
                <img src="/greenDot.png" width={15} height={15} alt="dot" />{" "}
                Online
              </p>
            </div>

            <div className="secondAiChild">
              <button className="toggleBtn" onClick={toggleButton}>
                <img src="/x.jpg" alt="xBtn" width={50} height={50} />
              </button>

              <div className="chatMessages">
                {sentMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`msgRow ${
                      message.role === "user" ? "right" : "left"
                    }`}
                    ref={bottomRef}
                  >
                    {message.role === "user" ? (
                      <div className="user">User</div>
                    ) : (
                      <div className="ai">AI</div>
                    )}

                    {!error ? message.message : error}

                    {message.role === "user" ? (
                      <div className="userTime">{message.date}</div>
                    ) : (
                      <div className="aiTime">{message.date}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="thirdAiChild">
              {loading && (
                <div className="gif">
                  <img src="/loading.gif" alt="gif" width={50} height={50} />
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                />

                {loading ? (
                  <button type="submit" disabled className="btnSubmit">
                    <img src="/send.png" alt="gif" width={30} height={20} />
                  </button>
                ) : (
                  <button type="submit" className="btnSubmit">
                    <img src="/send.png" alt="gif" width={30} height={20} />
                  </button>
                )}
              </form>
            </div>
          </section>
        </>
      ) : (
        <div>
          <button className="toggleBtn" onClick={toggleButton}>
            <img src="/chatIcon.jpg" alt="chatIcon" width={50} height={50} />
          </button>
        </div>
      )}
    </>
  );
}
