'use client';
import React, { useMemo } from 'react';

interface OfficeBuildingGraphicProps {
  progress: number; // 0 to 1
}

const OfficeBuildingGraphic: React.FC<OfficeBuildingGraphicProps> = ({ progress }) => {
  const windowCount = 48; // 6 floors, 8 windows per floor
  const litWindowsCount = useMemo(() => Math.floor(progress * windowCount), [progress]);

  const windows = useMemo(() => {
    const windowStates = Array(windowCount).fill(false);
    // Simple sequential lighting for a more predictable "filling up" feel
    for (let i = 0; i < litWindowsCount; i++) {
      windowStates[i] = true;
    }
    return windowStates;
  }, [litWindowsCount]);

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
      <svg viewBox="0 0 200 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Building Structure */}
        <defs>
          <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2d3748', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1a202c', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect x="25" y="10" width="150" height="280" rx="5" fill="url(#buildingGradient)" />
        
        {/* Door */}
        <rect x="85" y="250" width="30" height="40" fill="#111827" />

        {/* Windows */}
        {Array.from({ length: 6 }).map((_, floor) =>
          Array.from({ length: 8 }).map((_, win) => {
            const windowIndex = floor * 8 + win;
            const isLit = windows[windowIndex];
            return (
              <rect
                key={`${floor}-${win}`}
                x={35 + win * 17}
                y={30 + floor * 38}
                width="10"
                height="20"
                fill={isLit ? '#facc15' : '#4a5568'}
                rx="1"
                style={{ transition: 'fill 0.5s ease-in-out' }}
              />
            );
          })
        )}
      </svg>
    </div>
  );
};

export default OfficeBuildingGraphic;
