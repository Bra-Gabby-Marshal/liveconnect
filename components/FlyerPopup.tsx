"use client";

interface FlyerPopupProps {
  showFlyer: boolean;
  closeFlyer: () => void;
}

export default function FlyerPopup({ showFlyer, closeFlyer }: FlyerPopupProps) {
  if (!showFlyer) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(5px)'
      }}
      onClick={closeFlyer}
    >
      <div 
        style={{
          width: '90%',
          maxWidth: '450px',
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          animation: 'slideIn 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <h2 style={{ color: '#e31e24', margin: 0, fontSize: '24px' }}>Welcome to Live Connect!</h2>
          <p style={{ color: '#666', margin: '5px 0 0 0' }}>Professional Live Streaming Services</p>
        </div>
        
        <img
          src="/img/pics/about.jpg"
          alt="Live Connect Flyer"
          style={{
            width: '100%',
            borderRadius: '12px',
            marginBottom: '20px'
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              const fallback = document.createElement('div');
              fallback.style.cssText = `
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 40px;
                text-align: center;
                border-radius: 12px;
                margin-bottom: 20px;
              `;
              fallback.innerHTML = '<h3>Live Connect Studios</h3><p>Professional Live Streaming & Event Production</p>';
              parent.insertBefore(fallback, target);
              target.remove();
            }
          }}
        />
        
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px', fontSize: '14px' }}>
          🎥 Multi-camera setup • 📡 Stream to all platforms • 🎬 Professional crew
        </p>
        
        <button
          onClick={closeFlyer}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#e31e24',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c41a1f';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e31e24';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Enter Site →
        </button>
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateY(-30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}