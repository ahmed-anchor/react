const ProfileStatus = ({ 
  slices = 3, 
  imageUrl, 
  borderWidth = 6,  // Default to 6% of container size
  gapAngle = 4      // Gap between slices in degrees
}) => {
  // Calculate slice angles and thickness
  if (slices > 80) slices = 80
  const sliceAngle = 360 / slices;
  const thicknessPercentage = borderWidth; // Percentage of container size

  // Generate CSS conic-gradient values
  const gradientStops = [];
  for (let i = 0; i < slices; i++) {
    const start = i * (sliceAngle + gapAngle);
    const end = start + sliceAngle;
    gradientStops.push(`#F04A4C ${start}deg ${end}deg`);
    gradientStops.push(`transparent ${end}deg ${end + gapAngle}deg`);
  }

  return (
    <div className="relative w-12 h-12">
      {/* Border with dynamic thickness */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from -90deg, ${gradientStops.join(', ')})`,
          mask: `
            radial-gradient(
              farthest-side,
              transparent calc(100% - ${thicknessPercentage}% - 1px),
              black calc(100% - ${thicknessPercentage}%)
            )
          `,
          WebkitMask: `
            radial-gradient(
              farthest-side,
              transparent calc(100% - ${thicknessPercentage}% - 1px),
              black calc(100% - ${thicknessPercentage}%)
            )
          `
        }}
      />
      
      {/* Dynamic inner circle based on border width */}
      <div 
        className="absolute bg-white rounded-full"
        style={{
          top: `${borderWidth}%`,
          left: `${borderWidth}%`,
          right: `${borderWidth}%`,
          bottom: `${borderWidth}%`
        }}
      >
        <img
          src={imageUrl}
          className="w-full h-full rounded-full object-cover border-1 border-white"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default ProfileStatus;