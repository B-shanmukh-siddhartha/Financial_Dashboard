function toggleChatbot() {
    const bot = document.getElementById("chatbot-container");
    bot.classList.toggle("hidden");
  }


  const API_KEY = 'cvselbpr01qhup0qbe3gcvselbpr01qhup0qbe40'; 

function toggleChatbot() {
  const bot = document.getElementById("chatbot-container");
  bot.classList.toggle("hidden");
}

async function getStockPrice(symbol) {
  const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.c) {
      return `💹 Current price of ${symbol}: $${data.c}`;
    } else {
      return `❌ Could not find stock info for ${symbol}`;
    }
  } catch (err) {
    return `⚠️ Error fetching data. Try again later.`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");

  input.addEventListener("keypress", async (e) => {
    if (e.key === "Enter" && input.value.trim()) {
      const userMsg = input.value.trim();
      appendMessage("You", userMsg);
      input.value = "";

      const symbol = extractSymbol(userMsg);
      if (symbol) {
        const reply = await getStockPrice(symbol);
        appendMessage("Bot", reply);
      } else {
        appendMessage("Bot", "🤖 Please ask about a stock like 'price of AAPL'");
      }
    }
  });

  function appendMessage(sender, text) {
    const msg = document.createElement("p");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function extractSymbol(text) {
    const knownSymbols = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'AMZN', 'IBM']; // Add more as needed
    const upperText = text.toUpperCase();
    
    for (const sym of knownSymbols) {
      if (upperText.includes(sym)) {
        return sym;
      }
    }
    return null;
  }  
});

