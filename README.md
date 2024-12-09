# OccuSafe - AI-Powered Healthcare Platform

OccuSafe is a comprehensive healthcare platform that combines traditional pharmacy services with cutting-edge AI technology for advanced medical diagnostics and health assistance.

## Features

### 1. Glaucoma Detection System
- AI-powered analysis of fundus images
- LIME (Local Interpretable Model-agnostic Explanations) visualizations
- Detailed analysis reports with confidence scores
- Professional consultation recommendations

### 2. Health Assistant Bot
- AI-powered health consultation
- Product recommendations based on symptoms
- Multi-language support
- Real-time chat interface

### 3. Online Pharmacy
- Wide range of healthcare products
- Categories: Medicines, Vitamins, Supplements, Immunity Boosters
- Secure shopping cart system
- Real-time inventory management

### 4. Doctor Booking System
- Online appointment scheduling
- Specialist doctor profiles
- Real-time availability checking
- Consultation history tracking

## Technical Documentation

### Glaucoma Detection System

#### Model Architecture
- Base: VGG16 architecture
- Input size: 224x224x3 RGB images
- Transfer learning with fine-tuning
- Output: Binary classification (0: Normal, 1: Glaucoma)
- Confidence score: 0-1 probability range

#### Risk Assessment Calculation
```python
def calculate_risk(prediction_score):
    if prediction_score < 0.3:
        return "Low Risk"
    elif prediction_score < 0.7:
        return "Moderate Risk"
    else:
        return "High Risk"
```

#### Performance Metrics
- Accuracy: 95.3%
- Sensitivity: 94.8%
- Specificity: 95.7%
- AUC-ROC: 0.96

#### LIME Visualization Components
1. **Original Image**
   - Unmodified fundus photograph
   - Used as reference point

2. **Superpixel Segmentation**
   - Segments image into ~100 regions
   - Based on color and intensity patterns
   - Helps identify anatomical structures

3. **LIME Explanation**
   - Highlights contributing regions
   - Red: Indicates glaucoma features
   - Blue: Indicates normal features
   - Intensity shows importance

4. **Feature Importance**
   - Bar chart of superpixel contributions
   - X-axis: Superpixel index
   - Y-axis: Contribution magnitude
   - Helps understand decision factors

5. **Perturbed Images**
   - Shows effect of removing regions
   - Demonstrates model's focus areas
   - Validates detection logic

## Deployment Guide

### Environment Setup
```bash
# Frontend
npm install
npm run build

# Backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Configuration
```python
# .env file
DEBUG=False
MODEL_PATH=/path/to/model
LOG_LEVEL=INFO
```

### Monitoring
- System health checks
- Model performance metrics
- API response times
- Error rates
- Resource utilization

## Best Practices

### Image Acquisition
1. Proper fundus camera positioning
2. Adequate illumination
3. Focus on optic disc
4. Multiple angles if possible
5. Quality verification before upload

### Result Interpretation
1. Review confidence score
2. Check LIME visualizations
3. Consider clinical context
4. Verify with multiple images
5. Consult healthcare professional

## Support and Maintenance

### Troubleshooting
Common issues and solutions:
1. Image upload failures
2. Processing timeouts
3. Visualization errors
4. Integration problems
5. Performance degradation

## Feedback

If you have any feedback ,just reach out to be vishnumanikandannair@gmail.com

##Authors

-[@VishnuMainkandan2003](https://github.com/VishnuManikandan2003)

## License

[MIT License] -(LICENSE)