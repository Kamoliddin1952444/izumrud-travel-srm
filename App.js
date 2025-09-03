import React, { useState } from 'react';

function App() {
  const [conversations, setConversations] = useState([]);

  const addConversation = () => {
    const newConv = { id: Date.now(), client: 'Yangi mijoz', status: 'Yangi' };
    setConversations([...conversations, newConv]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Izumrud Travel — SRM</h1>
      <button onClick={addConversation}>➕ Yangi suhbat qo'shish</button>
      <ul>
        {conversations.map(conv => (
          <li key={conv.id}>
            {conv.client} — {conv.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;