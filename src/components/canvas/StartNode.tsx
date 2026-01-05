import { ReceiverLeft } from "../svg/assets";

export default function StartNode() {
  return (
    <div className="flex-shrink-0">
      {/* Receiver - increased size */}
      <img
        src={ReceiverLeft}
        alt="Start Receiver"
        className="w-32 h-36 object-contain"
      />
    </div>
  );
}
