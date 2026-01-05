import { ReceiverRight } from "../svg/assets";

/**
 * EndNode Component
 * 
 * Renders the end receiver (right receiver) in the fiber sequence.
 * This component represents the endpoint of the fiber optic connection
 * and dynamically repositions based on the number of components in the sequence.
 * 
 * @component
 * @returns {JSX.Element} The end receiver node
 */
export default function EndNode() {
  return (
    <div className="flex-shrink-0">
      <img
        src={ReceiverRight}
        alt="End Receiver"
        className="w-32 h-36 object-contain"
      />
    </div>
  );
}
