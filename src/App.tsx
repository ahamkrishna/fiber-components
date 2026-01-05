import React, { useState } from 'react';
import ComponentPalette from './components/palette/ComponentPalette';
import FiberCanvas from './components/canvas/FiberCanvas';
import type { Orientation, PlacedComponent } from './types/component';

/**
 * Maximum number of components that can be added to the sequence.
 * This limit ensures the UI remains manageable and prevents overflow.
 */
const MAX_COMPONENTS = 12;

/**
 * Main application component for the Fiber Component Calculator.
 * 
 * This component manages the state for the fiber optic component sequence,
 * including component selection, orientation (flip mode), and user interactions.
 * It provides a visual interface for building and analyzing fiber optic connections.
 * 
 * @component
 * @returns {JSX.Element} The main application interface
 */
function App() {
  // State management for the component sequence
  const [components, setComponents] = useState<PlacedComponent[]>([]);
  const [flipMode, setFlipMode] = useState<Orientation>('normal');
  const [showLimitWarning, setShowLimitWarning] = useState(false);

  /**
   * Toggles the component orientation between normal and flipped.
   * This affects how newly added components are oriented in the sequence.
   */
  const handleFlip = () => {
    setFlipMode(prev => prev === 'normal' ? 'flipped' : 'normal');
  };

  /**
   * Adds a new component to the sequence.
   * Enforces the maximum component limit and shows a warning if exceeded.
   * 
   * @param {string} assetId - The unique identifier of the component to add
   */
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

  /**
   * Removes a component from the sequence by its unique ID.
   * 
   * @param {string} id - The unique identifier of the component to remove
   */
  const handleRemove = (id: string) => {
    setComponents(prev => prev.filter(c => c.id !== id));
  };

  /**
   * Clears all components from the sequence, resetting to initial state.
   */
  const handleClearAll = () => {
    setComponents([]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Limit Warning Notification */}
      {showLimitWarning && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
          <p className="font-medium">Maximum limit of {MAX_COMPONENTS} components reached!</p>
        </div>
      )}

      {/* Main Container */}
      <div className="mx-auto p-8" style={{ maxWidth: '1400px' }}>
        {/* Components Section */}
        <div className="border border-gray-300 rounded-sm">
          {/* Header with Flip Button */}
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

          {/* Component Palette Section */}
          <div className="bg-white p-6">
            <ComponentPalette
              flipMode={flipMode}
              onAdd={handleAdd}
              disabled={components.length >= MAX_COMPONENTS}
            />
          </div>

          {/* Sequence Visualization Area */}
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
