import React from "react";

const DiscordLogin = () => {
  const discordLogin = async () => {
    const url = `https://discord.com/oauth2/authorize?client_id=1215549687805911101&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=email+identify`;
    window.location.href = url;
  };

  // 임시 스타일 정의
  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    fontSize: "20px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button onClick={discordLogin} style={buttonStyle}>
      Login with Discord
    </button>
  );
};

export default DiscordLogin;
