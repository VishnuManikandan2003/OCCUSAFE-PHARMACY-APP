import React from 'react';

interface AnalysisResultsProps {
  prediction: string;
  confidence: number;
  risk: string;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ prediction, confidence, risk }) => {
  const getStatusColor = (value: string) => {
    switch (value.toLowerCase()) {
      case 'positive':
      case 'high':
        return 'text-red-600';
      case 'negative':
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
          Detection Result
        </h4>
        <p className={`text-2xl font-bold ${getStatusColor(prediction)}`}>
          {prediction}
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
          Confidence Score
        </h4>
        <p className="text-2xl font-bold text-blue-600">
          {(confidence * 100).toFixed(1)}%
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
          Risk Level
        </h4>
        <p className={`text-2xl font-bold ${getStatusColor(risk)}`}>
          {risk}
        </p>
      </div>
    </div>
  );
};

export default AnalysisResults;