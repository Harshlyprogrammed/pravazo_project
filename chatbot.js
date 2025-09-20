const chatIcon = document.getElementById("chat-icon");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("close-chat");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

// Toggle chatbot
chatIcon.onclick = () => chatbot.style.display = "flex";
closeChat.onclick = () => chatbot.style.display = "none";

// Function to send message
function sendMessage() {
  let userMsg = chatInput.value.trim();
  if (!userMsg) return;

  // Show user message
  chatBody.innerHTML += `<div class="user-msg">${userMsg}</div>`;
  chatInput.value = "";

  // Scroll down
  chatBody.scrollTop = chatBody.scrollHeight;

  // Dummy AI reply
  setTimeout(() => {
    const fakeReplies = {
        "hi": "Hello 👋! I’m your travel assistant. Where would you like to go?",
        "hello": "Hi there! 😊 Ready to plan your trip?",
        "how are you": "I’m doing great 🌍! Excited to help you travel.",
        "bye": "Goodbye 👋! Safe travels!",
        "hey": "Hey! 😎 Ready for your next adventure?",
        "good morning": "Good morning! ☀️ Where shall we explore today?",
        "good evening": "Good evening! 🌙 Planning any trips tonight?",
        "what's up": "Not much! 😄 How about we plan some travel fun?",
        "hi there": "Hi there! 🌟 Let’s find your next destination!",
        "greetings": "Greetings! 🌍 Ready to explore the world with me?",
        "how’s it going": "I’m doing great! 😁 How about you?",
        "yo": "Yo! ✈️ Let’s make some travel plans!",
        "long time no see": "Hey! 👋 Missed you! Ready for a new adventure?",
        "good night": "Good night! 🌙 Dreaming of your next trip?",
      
        // ===== ITINERARIES =====
        "5 day itinerary goa": "Here’s a 5-day Goa itinerary:\nDay 1: Panjim city tour.\nDay 2: North Goa beaches (Baga, Anjuna).\nDay 3: South Goa (Palolem, Colva).\nDay 4: Dudhsagar Falls.\nDay 5: Shopping & departure.",
        "3 day itinerary manali": "Manali in 3 days:\nDay 1: Hadimba Temple & Mall Road.\nDay 2: Solang Valley & adventure sports.\nDay 3: Rohtang Pass (if open) & departure.",
        "7 day itinerary kerala": "Kerala in 7 days:\nDay 1: Cochin arrival.\nDay 2: Munnar tea gardens.\nDay 3: Munnar sightseeing.\nDay 4: Thekkady wildlife.\nDay 5: Alleppey houseboat.\nDay 6: Kovalam beach.\nDay 7: Trivandrum & departure.",
      
        // ===== BEST TIME TO VISIT =====
        "best time to visit manali": "October–June is best. For snow, Dec–Feb ❄️. For activities, March–June.",
        "best time to visit rajasthan": "October–March is ideal, as summers are very hot 🏜️.",
        "best time to visit dubai": "November–March (cool weather 🌤️). Summers are extremely hot.",
      
        // ===== FOOD & CULTURE =====
        "famous food in goa": "Goan fish curry, vindaloo, xacuti, and bebinca (dessert).",
        "famous food in rajasthan": "Dal Baati Churma, Laal Maas, Gatte ki Sabzi.",
        "famous food in thailand": "Pad Thai, Green Curry, Mango Sticky Rice, Tom Yum soup.",
        "shopping in dubai": "Best places: Dubai Mall, Gold Souk, Spice Souk, Mall of Emirates.",
      
        // ===== VISA & TRAVEL =====
        "is visa required for bali": "Yes, Indian tourists get Visa on Arrival in Bali 🇮🇩 (30 days).",
        "is visa required for thailand": "Thailand offers Visa on Arrival for Indians 🇹🇭.",
        "how to reach kerala": "By air (Cochin, Trivandrum), train (Ernakulam, Alleppey), or road.",
        "how to reach ladakh": "Fly to Leh airport or drive via Manali-Leh or Srinagar-Leh highways.",
      
        // ===== ADVENTURE & ACTIVITIES =====
        "adventure activities in manali": "Paragliding, river rafting, skiing, trekking.",
        "adventure activities in dubai": "Skydiving, dune bashing, desert safari, jet skiing.",
        "scuba diving in india": "Best spots: Andaman (Havelock), Goa, Lakshadweep.",
      
        // ===== HONEYMOON DESTINATIONS =====
        "honeymoon in india": "Top picks: Goa, Kerala, Andaman, Manali, Kashmir.",
        "honeymoon abroad": "Bali, Maldives, Switzerland, Paris, Thailand.",
      
        // ===== DEFAULT =====
        "default": [
          "That’s interesting! Tell me more.",
          "Hmm 🤔, let me think about that.",
          "Wow, sounds cool!",
          "I see, please explain a bit more."
        ]
      }
      

    // Convert user message to lowercase for matching
    let lowerMsg = userMsg.toLowerCase();
    let botReply = fakeReplies[lowerMsg];

    // If no exact match, pick random default reply
    if (!botReply) {
      let replies = fakeReplies["default"];
      botReply = replies[Math.floor(Math.random() * replies.length)];
    }

    // Show bot reply with AI tag
    chatBody.innerHTML += `
      <div class="bot-msg">
        ${botReply}
        <div class="ai-tag">✨ Answered by AI</div>
      </div>
    `;

    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
}

// Send on button click
sendBtn.onclick = sendMessage;

// Send on Enter key
chatInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
