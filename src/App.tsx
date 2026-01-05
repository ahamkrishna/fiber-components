import React, { useState } from 'react';
import ComponentPalette from './components/palette/ComponentPalette';
import FiberCanvas from './components/canvas/FiberCanvas';
import type { Orientation, PlacedComponent } from './types/component';

const MAX_COMPONENTS = 12;

function App() {
  const [components, setComponents] = useState<PlacedComponent[]>([]);
  const [flipMode, setFlipMode] = useState<Orientation>('normal');
  const [showLimitWarning, setShowLimitWarning] = useState(false);

  const handleFlip = () => {
    setFlipMode(prev => prev === 'normal' ? 'flipped' : 'normal');
  };

  const handleAdd = (assetId: string) => {
    if (components.length >= MAX_COMPONENTS) {
      setShowLimitWarning(true);
      setTimeout(() => setShowLimitWarning(false), 3000);
      return;
    }

    const newComponent: PlacedComponent = {
      id: crypto.randomUUID(),
      assetId,
      orientation: flipMode
    };
    setComponents(prev => [...prev, newComponent]);
  };

  const handleRemove = (id: string) => {
    setComponents(prev => prev.filter(c => c.id !== id));
  };

  const handleClearAll = () => {
    setComponents([]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Limit Warning */}
      {showLimitWarning && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
          <p className="font-medium">Maximum limit of {MAX_COMPONENTS} components reached!</p>
        </div>
      )}

      {/* Main Container - Increased max width */}
      <div className="mx-auto p-8" style={{ maxWidth: '1400px' }}>
        {/* Components Section */}
        <div className="border border-gray-300 rounded-sm">
          {/* Dark Header - Exact match to #333 */}
          <div style={{ backgroundColor: '#333333' }} className="text-white px-6 py-2.5 flex items-center justify-between">
            <h2 className="text-lg font-bold">Components</h2>
            <button
              onClick={handleFlip}
              className="px-4 py-2.5 border border-white rounded-none text-sm font-bold transition-colors hover:bg-gray-700"
              style={{ backgroundColor: 'transparent' }}
            >
              {flipMode === 'normal' ? 'Flip Components' : 'Back to Original'}
            </button>
          </div>

          {/* Component Palette - White background */}
          <div className="bg-white p-6">
            <ComponentPalette
              flipMode={flipMode}
              onAdd={handleAdd}
              disabled={components.length >= MAX_COMPONENTS}
            />
          </div>

          {/* Sequence Area - Exact grey #F4F4F4 */}
          <div style={{ backgroundColor: '#F4F4F4' }} className="p-6">
            <div className="flex items-center justify-end mb-4">
              {components.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="px-4 py-2 text-sm font-bold rounded-none transition-colors hover:bg-gray-200"
                  style={{ backgroundColor: '#F0F0F0', color: '#000000' }}
                >
                  Clear All
                </button>
              )}
            </div>
            <FiberCanvas
              components={components}
              onRemove={handleRemove}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
