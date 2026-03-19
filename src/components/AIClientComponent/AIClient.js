// import './AIClient.css';
// import { useState, useRef, useEffect } from "react";
// import api from '../../api';

// function AIClient() {

//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   // Auto scroll to bottom
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   const sendMessage = async () => {
//     if (!input.trim() || loading) return;

//     setMessages(prev => [...prev, { role: "user", content: input }]);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await api.post("/api/ai/chat", {
//         message: input
//       });

//       setMessages(prev => [
//         ...prev,
//         { role: "assistant", content: res.data.reply }
//       ]);
//     } catch {
//       setMessages(prev => [
//         ...prev,
//         { role: "assistant", content: "Something went wrong 😢" }
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
// <>   

// <div id="tooplate_content">
//     <div class="content_box content_box_last">

//     <div className="ai-chat">
//       <div className="ai-chat-header">🤖 AI Assistant</div>
//       <br/>
//       <div className="chat-body">
//         {messages.map((m, i) => (
//           < div key={i} className={`message ${m.role}`}>
//             {m.content}
//             <br/><br/>
//           </div>
//         ))}

//         {loading && <div className="typing">AI is typing...</div>}
//         <div ref={chatEndRef} />
//       </div>

//       <div className="chat-input">
//        <div> <textarea cols="114" rows="5"
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
//           placeholder="Ask anything..."
//         />
//         </div>
//         <div>
        
//         <button onClick={sendMessage}>Send</button>
//         </div>
//       </div>
//     </div>

//     </div>
// </div>

// </>
//   );
// }

// export default AIClient;









import './AIClient.css';
import { useState, useRef, useEffect } from "react";
import api from '../../api';

function AIClient() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await api.post("/api/ai/chat", {
        message: input
      });

      setMessages(prev => [
        ...prev,
        { role: "assistant", content: res.data.reply }
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Something went wrong 😢" }
      ]);
    }

    setLoading(false);
  };

  return (

<div id="tooplate_content">

<div className="content_box content_box_last">

<div className="ai-wrapper">

<div className="ai-chat">

<div className="ai-chat-header">
🤖 Pawn Shop AI Assistant
</div>

<div className="chat-body">

{messages.map((m, i) => (

<div key={i} className={`message ${m.role}`}>
{m.content}
</div>

))}

{loading && <div className="typing">AI is typing...</div>}

<div ref={chatEndRef}></div>

</div>

<div className="chat-input">

<textarea
value={input}
onChange={e=>setInput(e.target.value)}
placeholder="Ask about pawn items, prices..."
onKeyDown={(e)=>{
if(e.key==="Enter" && !e.shiftKey){
e.preventDefault();
sendMessage();
}
}}
/>

<button onClick={sendMessage}>Send</button>

</div>

</div>

</div>

</div>

</div>

);

}

export default AIClient;








