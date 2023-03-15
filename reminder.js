import React, { useState } from 'react';

function WashHandsReminder() {
  const [showReminder, setShowReminder] = useState(true);

  const handleDismiss = () => {
    setShowReminder(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {showReminder && (
       <div className="reminder" style={{ backgroundColor: "white", padding: "50px", borderRadius: "10px", boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
        <p style={{ fontSize: "3em", fontWeight: "bold" }}>Don't forget to wash your hands!</p>
        <button onClick={handleDismiss} style={{ backgroundColor: "transparent", border: "2px solid blue", color: "blue", fontSize: "1.5em", fontWeight: "bold", padding: "10px 20px", borderRadius: "5px", marginTop: "20px", transition: "all 0.3s ease" }} onMouseEnter={(e) => {e.target.style.backgroundColor = "blue"; e.target.style.color = "white";}} onMouseLeave={(e) => {e.target.style.backgroundColor = "transparent"; e.target.style.color = "blue";}}>Dismiss</button>
     </div>
      )}
    </div>
  );
}

export default WashHandsReminder;
