import React from 'react';

interface LIMEVisualizationsProps {
  visualizations: {
    original_image: string;
    superpixels_image: string;
    lime_explanation: string;
    lime_positive: string;
    feature_importance: string;
    top_contributing: string;
    perturbed_images: string[];
    mask_overlay: string;
  };
}

const LIMEVisualizations: React.FC<LIMEVisualizationsProps> = ({ visualizations }) => {
  if (!visualizations) {
    return <div>No visualization data available</div>;
  }

  const renderImage = (src: string | undefined, alt: string, title: string) => {
    if (!src) return null;
    return (
      <div className="space-y-2">
        <h3 className="font-medium text-gray-700">{title}</h3>
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iMTIiIHk9IjEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgTm90IEF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderImage(visualizations.original_image, "Original", "Original Image")}
        {renderImage(visualizations.superpixels_image, "Superpixels", "Superpixel Segmentation")}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderImage(visualizations.lime_explanation, "LIME Explanation", "LIME Explanation")}
        {renderImage(visualizations.lime_positive, "Positive Contributions", "Positive Contributions")}
      </div>

      {renderImage(visualizations.feature_importance, "Feature Importance", "Feature Importance Distribution")}
      {renderImage(visualizations.top_contributing, "Top Contributing", "Top Contributing Regions")}
      {renderImage(visualizations.mask_overlay, "Mask Overlay", "LIME Mask Overlay")}

      {visualizations.perturbed_images && visualizations.perturbed_images.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-medium text-gray-700">Perturbed Images Analysis</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visualizations.perturbed_images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Perturbed ${index + 1}`}
                className="w-full rounded-lg shadow-md"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iMTIiIHk9IjEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgTm90IEF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LIMEVisualizations;