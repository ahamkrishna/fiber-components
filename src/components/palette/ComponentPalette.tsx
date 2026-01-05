import type { Orientation } from "@/types/component";
import { COMPONENT_ASSETS } from "../svg/assets";
import ComponentButton from "./ComponentButton";

/**
 * Props for the ComponentPalette component
 */
type Props = {
  /** Current orientation mode for newly added components */
  flipMode: Orientation;
  /** Callback function when a component is selected */
  onAdd: (assetId: string) => void;
  /** Whether component selection should be disabled (e.g., when limit reached) */
  disabled?: boolean;
};

/**
 * ComponentPalette Component
 * 
 * Displays the available fiber optic components in a two-row grid layout.
 * Components are organized by type:
 * - Row 1: MPO-to-LC transition modules and conversion modules (9 items)
 * - Row 2: Standard connectors and splice components (6 items)
 * 
 * Both rows are left-aligned to match the reference design.
 * 
 * @component
 * @param {Props} props - Component props
 * @returns {JSX.Element} The component palette grid
 */
export default function ComponentPalette({ flipMode, onAdd, disabled = false }: Props) {
  // Split components into two rows based on their position in the assets array
  const row1 = COMPONENT_ASSETS.slice(0, 9);  // Transition + Conversion modules
  const row2 = COMPONENT_ASSETS.slice(9, 15); // Connectors + Splice

  return (
    <div className="space-y-6">
      {/* Row 1: Transition and conversion modules (9 columns, left-aligned) */}
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(9, 80px)', justifyContent: 'start' }}>
        {row1.map(asset => (
          <ComponentButton
            key={asset.id}
            asset={asset}
            orientation={flipMode}
            onClick={onAdd}
            disabled={disabled}
          />
        ))}
      </div>

      {/* Row 2: Standard connectors and splice (6 columns, left-aligned) */}
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(6, 80px)', justifyContent: 'start' }}>
        {row2.map(asset => (
          <ComponentButton
            key={asset.id}
            asset={asset}
            orientation={flipMode}
            onClick={onAdd}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}
