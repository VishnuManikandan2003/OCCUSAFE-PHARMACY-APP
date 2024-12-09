# OccuSafe Backend

This is the backend service for OccuSafe's glaucoma detection system.

## Setup

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Place your trained model in:
   ```
   models/glaucoma_detection_model.keras
   ```

4. Run the server:
   ```bash
   uvicorn main:app --reload
   ```

## API Endpoints

- `GET /health`: Health check endpoint
- `POST /predict`: Upload an image for glaucoma detection

## Environment Variables

- `MODEL_PATH`: Path to the trained model file
- `DEBUG`: Enable/disable debug mode