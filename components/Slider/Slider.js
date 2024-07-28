"use client";
const Slider = ({ value, onChange }) => {
  return (
    <div className="flex justify-center mt-4 rotate-90">
      <input
        type="range"
        min="90"
        max="180"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default Slider;
