import type { PlacedComponent } from "@/types/component";
import { COMPONENT_ASSETS } from "../svg/assets";

/**
 * Props for the PlacedComponentView component
 */
type Props = {
  /** The placed component data including ID, asset reference, and orientation */
  data: PlacedComponent;
  /** Callback function to handle component removal */
  onRemove: (id: string) => void;
};

/**
 * PlacedComponentView Component
 * 
 * Renders a component that has been placed in the fiber sequence.
 * Displays the component SVG in the correct orientation with a remove button.
 * The component is smaller than the palette version to fit the sequence layout.
 * 
 * @component
 * @param {Props} props - Component props
 * @returns {JSX.Element | null} The placed component view or null if asset not found
 */
export default function PlacedComponentView({ data, onRemove }: Props) {
  // Look up the component asset by ID
  const asset = COMPONENT_ASSETS.find(a => a.id === data.assetId);

  if (!asset) return null;

  // Select the appropriate SVG based on the component's orientation
  const svgSrc = data.orientation === 'normal' ? asset.normal : asset.flipped;

  return (
    <div className="flex flex-col items-center flex-shrink-0">
      {/* Component SVG - scaled down for sequence display */}
      <img
        src={svgSrc}
        alt={data.assetId}
        className="w-14 h-14 object-contain"
      />

      {/* Remove button with compact styling */}
      <div
        className="font-bold cursor-pointer hover:underline"
        onClick={() => onRemove(data.id)}
        style={{ fontSize: '8px', marginTop: '8px', color: '#000000' }}
      >
        Remove
      </div>
    </div>
  );
}
