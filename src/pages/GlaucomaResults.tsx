import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import AnalysisResults from '../components/ImageAnalysis/AnalysisResults';
import LIMEVisualizations from '../components/ImageAnalysis/LIMEVisualizations';

const GlaucomaResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results;

  useEffect(() => {
    if (!results) {
      navigate('/glaucoma-detection');
    }
  }, [results, navigate]);

  const getPredictionDetails = (predictions: number[][]) => {
    if (!predictions || !predictions[0]) {
      return {
        prediction: 'Unknown',
        confidence: 0,
        risk: 'Unknown'
      };
    }

    const confidence = predictions[0][0];
    const prediction = confidence > 0.5 ? 'Positive' : 'Negative';
    const risk = prediction === 'Positive' ? 'High' : 'Low';

    return {
      prediction,
      confidence: confidence > 0.5 ? confidence : 1 - confidence,
      risk
    };
  };

  if (!results || !results.predictions || !results.images) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <p className="ml-3 text-red-700">
              No analysis results found. Please perform a new analysis.
            </p>
          </div>
          <Link
            to="/glaucoma-detection"
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to Detection Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          to="/glaucoma-detection"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Detection
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Glaucoma Detection Results</h1>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            <p className="ml-3 text-sm text-yellow-700">
              This is a screening result only. Please consult an eye care professional for proper diagnosis.
            </p>
          </div>
        </div>

        <AnalysisResults {...getPredictionDetails(results.predictions)} />
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Analysis Visualizations</h2>
          <LIMEVisualizations visualizations={results.images} />
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Schedule a comprehensive eye examination with an ophthalmologist
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Bring these results to your appointment
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Regular eye check-ups are essential for early detection
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Monitor any changes in vision and report them to your doctor
            </li>
          </ul>
          <div className="mt-6">
            <Link
              to="/doctor-booking"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlaucomaResults;