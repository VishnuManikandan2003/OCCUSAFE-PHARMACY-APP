import React, { useState, useEffect } from 'react';
import { Upload, AlertCircle, ServerCrash, Loader2 } from 'lucide-react';
import { analyzeImage, checkBackendHealth } from '../services/api';
import { useNavigate } from 'react-router-dom';

const GlaucomaDetection = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isBackendAvailable, setIsBackendAvailable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkBackend = async () => {
      const isHealthy = await checkBackendHealth();
      setIsBackendAvailable(isHealthy);
    };
    checkBackend();
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await analyzeImage(selectedImage);
      console.log('Analysis response:', response); // Debug log
      navigate('/glaucoma-results', { 
        state: { 
          results: response 
        }
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error analyzing image. Please try again.';
      setError(errorMessage);
      console.error('Analysis error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isBackendAvailable) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex items-center">
            <ServerCrash className="h-6 w-6 text-red-400" />
            <p className="ml-3 text-red-700">
              Backend service is not available. Please ensure the Python backend is running.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-yellow-400" />
          <p className="ml-3 text-sm text-yellow-700">
            This is a screening tool only. Please consult an eye care professional for proper diagnosis.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Glaucoma Detection</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Fundus Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isLoading}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <p className="ml-3 text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {previewUrl && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Image Preview</h3>
            <img
              src={previewUrl}
              alt="Preview"
              className="max-w-full h-auto rounded-lg"
            />
            <button
              onClick={handleAnalyze}
              disabled={isLoading}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 w-full flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Analyzing...
                </>
              ) : (
                'Analyze Image'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlaucomaDetection;