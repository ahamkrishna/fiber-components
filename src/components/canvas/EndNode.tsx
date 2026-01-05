import { ReceiverRight } from "../svg/assets";

export default function EndNode() {
  return (
    <div className="flex-shrink-0">
      {/* Receiver - increased size */}
      <img
        src={ReceiverRight}
        alt="End Receiver"
        className="w-32 h-36 object-contain"
      />
    </div>
  );
}
