import type { ComponentAsset, Orientation } from "@/types/component";

/**
 * Props for the ComponentButton component
 */
type Props = {
  /** The component asset containing SVG references and metadata */
  asset: ComponentAsset;
  /** Current orientation to display (normal or flipped) */
  orientation: Orientation;
  /** Callback function when the button is clicked */
  onClick: (assetId: string) => void;
  /** Whether the button should be disabled */
  disabled?: boolean;
};

/**
 * ComponentButton Component
 * 
 * Renders a clickable button displaying a fiber optic component SVG.
 * The button shows the appropriate SVG based on the current orientation mode.
 * When disabled (e.g., component limit reached), visual feedback is provided.
 * 
 * @component
 * @param {Props} props - Component props
 * @returns {JSX.Element} A clickable component button
 */
export default function ComponentButton({ asset, orientation, onClick, disabled = false }: Props) {
  // Select the appropriate SVG based on current orientation
  const svgSrc = orientation === 'normal' ? asset.normal : asset.flipped;

  return (
    <button
      onClick={() => !disabled && onClick(asset.id)}
      disabled={disabled}
      className={`
        flex items-center justify-center transition-opacity
        ${disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer hover:opacity-80'}
      `}
      title={asset.id}
    >
      <img
        src={svgSrc}
        alt={asset.id}
        className="w-20 h-20 object-contain"
      />
    </button>
  );
}
