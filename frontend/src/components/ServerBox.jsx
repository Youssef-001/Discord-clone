import { useEffect, useState } from "react";

// ServerBox component
function ServerBox({ avatar }) {
  const baseUrl = "http://localhost:5000/uploads";
  const [imageUrl, setImageUrl] = useState(`${baseUrl}/${avatar}`);  

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      {imageUrl ? (
        <img src={imageUrl} alt="Server Avatar" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
      ) : (
        <div style={{ width: '50px', height: '50px', backgroundColor: 'gray', borderRadius: '50%' }} />
      )}
    </div>
  );
}

export default ServerBox;
