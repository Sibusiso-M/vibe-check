const checkVibe = (textMessage) => {
  const lowerCaseTextMessage = textMessage.toLowerCase();
  let jsonResponse = undefined;

  if (
    lowerCaseTextMessage.includes("whatever") ||
    lowerCaseTextMessage.includes("fine")
  ) {
    jsonResponse = {
      vibe: "passive-aggressive",
      suggestion: "Maybe clarify how you really feel.",
    };
  } else if (
    lowerCaseTextMessage.includes("thanks!") ||
    lowerCaseTextMessage.includes("no worries")
  ) {
    jsonResponse = {
      vibe: "positive",
      suggestion: "All good! You’re sounding friendly.",
    };
  } else {
    jsonResponse = { vibe: "neutral", suggestion: "Clear and neutral tone." };
  }

  return jsonResponse;
};

module.exports = { checkVibe };
