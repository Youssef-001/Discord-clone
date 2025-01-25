import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { useEffect, useState } from "react";

// ServerBox component
function ServerBox({ avatar, serverId, channelId, servers, name}) {
  const baseUrl = "http://localhost:5000/uploads";
  const [imageUrl, setImageUrl] = useState(`${baseUrl}/${avatar}`);
  const navigate = useNavigate(); // Initialize the navigate function
  console.log("CHANNEL ID: ", servers)
  

  const handleNavigation = () => {
    navigate(`/server/${serverId}/channel/${channelId}`, {state:{servers, name}}); // Navigate to the desired URL
  };

  return (
    <button 
      onClick={handleNavigation} // Attach navigation function to onClick
      style={{ display: 'flex', alignItems: 'center', gap: '1rem', all: 'unset', cursor:'pointer' }}
    >
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt="Server Avatar" 
          style={{ width: '60px', height: '60px', borderRadius: '50%' }} 
        />
      ) : (
        <div 
          style={{ 
            width: '50px', 
            height: '50px', 
            backgroundColor: 'gray', 
            borderRadius: '50%' 
          }} 
        />
      )}
    </button>
  );
}

export default ServerBox;
