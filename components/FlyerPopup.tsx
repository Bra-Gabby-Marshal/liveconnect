"use client";

interface FlyerPopupProps {
  showFlyer: boolean;
  closeFlyer: () => void;
}

export default function FlyerPopup({ showFlyer, closeFlyer }: FlyerPopupProps) {
  if (!showFlyer) return null;

  return (
    <div
      className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center backdrop-blur-[5px]"
      onClick={closeFlyer}
    >
      <div
        className="w-[90%] max-w-[450px] bg-white rounded-[16px] p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-[15px]">
          <h2 className="text-[#e31e24] m-0 text-[24px]">Welcome to Live Connect!</h2>
          <p className="text-[#666] mt-[5px] mb-0">Professional Live Streaming Services</p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- popup image uses a custom DOM onError fallback that next/image can't replicate */}
        <img
          src="/img/pics/about.jpg"
          alt="Live Connect Flyer"
          className="w-full rounded-[12px] mb-5"
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

        <p className="text-center text-[#666] mb-5 text-[14px]">
          🎥 Multi-camera setup • 📡 Stream to all platforms • 🎬 Professional crew
        </p>

        <button
          onClick={closeFlyer}
          className="w-full p-[14px] bg-[#e31e24] text-white font-bold border-none rounded-[8px] cursor-pointer text-[16px] transition-all hover:bg-[#c41a1f] hover:-translate-y-0.5"
        >
          Enter Site →
        </button>
      </div>
    </div>
  );
}
