import { useEffect, useState } from "react";

// ServerBox component
function ServerBox({ avatarBuffer }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (avatarBuffer) {
      // Convert Uint8Array to Blob
      const blob = new Blob([avatarBuffer], { type: "image/jpeg" }); // Ensure correct MIME type (e.g., image/jpeg, image/png)
      
      // Create an object URL for the Blob
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
      console.log(url);

      // Cleanup the object URL when the component is unmounted or avatarBuffer changes
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [avatarBuffer]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      {imageUrl ? (
        <img src={imageUrl} alt="Server Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      ) : (
        <div style={{ width: '50px', height: '50px', backgroundColor: 'gray', borderRadius: '50%' }} />
      )}
    </div>
  );
}

export default ServerBox;
