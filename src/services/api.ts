const API_ENDPOINT = 'http://localhost:8000';

export const checkBackendHealth = async () => {
  try {
    const response = await fetch(`${API_ENDPOINT}/health`);
    if (!response.ok) {
      throw new Error('Backend health check failed');
    }
    return true;
  } catch (error) {
    console.error('Backend health check error:', error);
    return false;
  }
};

export const analyzeImage = async (file: File) => {
  try {
    if (!file.type.startsWith('image/')) {
      throw new Error('Please upload an image file');
    }

    const isHealthy = await checkBackendHealth();
    if (!isHealthy) {
      throw new Error('Backend service is not available');
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_ENDPOINT}/predict`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to analyze image');
    }

    const data = await response.json();
    
    // Validate response structure
    if (!data.predictions || !data.images) {
      throw new Error('Invalid response format from server');
    }

    return {
      predictions: data.predictions,
      images: {
        original_image: data.images.original_image,
        superpixels_image: data.images.superpixels_image,
        lime_explanation: data.images.lime_explanation,
        lime_positive: data.images.lime_positive,
        feature_importance: data.images.feature_importance,
        top_contributing: data.images.top_contributing,
        perturbed_images: data.images.perturbed_images || [],
        mask_overlay: data.images.mask_overlay
      }
    };
  } catch (error) {
    console.error('API Error:', error);
    throw error instanceof Error ? error : new Error('An unexpected error occurred');
  }
};