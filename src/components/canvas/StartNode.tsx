import { ReceiverLeft } from "../svg/assets";

/**
 * StartNode Component
 * 
 * Renders the start receiver (left receiver) in the fiber sequence.
 * This component represents the starting point of the fiber optic connection
 * and remains fixed at the left side of the sequence.
 * 
 * @component
 * @returns {JSX.Element} The start receiver node
 */
export default function StartNode() {
  return (
    <div className="flex-shrink-0">
      <img
        src={ReceiverLeft}
        alt="Start Receiver"
        className="w-32 h-36 object-contain"
      />
    </div>
  );
}
