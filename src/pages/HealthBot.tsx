import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AlertCircle, Send, ShoppingCart, Package, Bot, Loader2 } from 'lucide-react';
import { useStore } from '../store';
import { productsData } from '../data/products';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const HEALTH_PROMPT = `You are a medical assistant AI that helps with product recommendations and orders. Follow these guidelines strictly:

1. Always be professional and helpful while maintaining a caring tone
2. For any health concern:
   - Ask relevant follow-up questions if needed
   - Provide clear medical information
   - Recommend specific products from our catalog that match the condition
   - Include proper dosage information and warnings
3. When recommending products:
   - Only suggest products that directly relate to the user's condition
   - Include product IDs (e.g., med1, vit1) for easy cart addition
   - Explain why each product would help
   - Mention any relevant warnings or side effects
4. Format responses clearly with:
   - Brief explanation of the condition
   - Recommended products with reasons
   - General advice and precautions
5. Always include this disclaimer: "This is general advice. Please consult a healthcare professional for proper diagnosis and treatment."

Available products with their conditions and use cases: ${JSON.stringify(productsData)}

Example response for fever:
"I understand you have a fever. This could be due to various causes.

Recommended products:
1. Paracetamol Extra (med2) - Effective for reducing fever and providing pain relief
   - Dosage: 1-2 tablets every 4-6 hours
   - Contains: Paracetamol 500mg

2. ColdFlu Relief (med3) - If fever is accompanied by cold symptoms
   - Helps with multiple symptoms including fever, congestion
   - Take 1 tablet every 6 hours

3. Vitamin C 1000mg (vit1) - To support your immune system
   - Take 1 tablet daily

General advice:
- Rest and stay hydrated
- Monitor your temperature
- Seek medical attention if fever persists over 3 days or exceeds 39.5°C (103°F)

This is general advice. Please consult a healthcare professional for proper diagnosis and treatment."`;

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  products?: Array<{
    id: string;
    name: string;
    price: number;
    category: string;
    dosage: string;
    sideEffects: string[];
  }>;
}

const HealthBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'system',
      content: 'Hello! I\'m your health assistant. I can help you with medical advice and product recommendations. How can I assist you today?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const extractProductIds = (text: string): string[] => {
    const regex = /\b(med|vit|sup|imm)\d+\b/g;
    return (text.match(regex) || []);
  };

  const findProducts = (productIds: string[]) => {
    return productIds.map(id => {
      for (const [category, products] of Object.entries(productsData)) {
        const product = products.find(p => p.id === id);
        if (product) {
          return { ...product, category };
        }
      }
      return null;
    }).filter((product): product is NonNullable<typeof product> => product !== null);
  };

  const handleAddToCart = (productId: string) => {
    const product = findProducts([productId])[0];
    if (product) {
      addToCart(product);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      const chat = model.startChat({
        history: [
          {
            role: 'user',
            parts: [HEALTH_PROMPT],
          },
          {
            role: 'model',
            parts: ['I understand my role as a medical assistant. I will provide relevant product recommendations and medical advice while maintaining professionalism.'],
          },
        ],
      });

      const result = await chat.sendMessage(input);
      const response = await result.response;
      const responseText = response.text();
      
      const productIds = extractProductIds(responseText);
      const recommendedProducts = findProducts(productIds);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        products: recommendedProducts
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: 'I apologize, but I encountered an error. Please try again later.',
        },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-yellow-400" />
          <p className="ml-3 text-sm text-yellow-700">
            This AI health assistant provides general information only. Always consult a healthcare professional for medical advice.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-green-600 p-4">
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-white" />
            <h2 className="text-xl font-semibold text-white">Health Assistant</h2>
          </div>
        </div>

        <div className="h-[500px] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-green-100'
                    : message.role === 'system'
                    ? 'bg-gray-100'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <p className="text-gray-800 whitespace-pre-line">{message.content}</p>
                
                {message.products && message.products.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium text-gray-700">Recommended Products:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {message.products.map((product) => (
                        <div
                          key={product.id}
                          className="flex flex-col bg-white p-4 rounded-md border border-gray-200"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-sm text-gray-600">${product.price}</p>
                            </div>
                            <button
                              onClick={() => handleAddToCart(product.id)}
                              disabled={cart.some(item => item.id === product.id)}
                              className={`flex items-center space-x-1 px-3 py-1 rounded-md ${
                                cart.some(item => item.id === product.id)
                                  ? 'bg-gray-100 text-gray-500'
                                  : 'bg-green-600 text-white hover:bg-green-700'
                              }`}
                            >
                              {cart.some(item => item.id === product.id) ? (
                                <>
                                  <Package className="h-4 w-4" />
                                  <span>Added</span>
                                </>
                              ) : (
                                <>
                                  <ShoppingCart className="h-4 w-4" />
                                  <span>Add to Cart</span>
                                </>
                              )}
                            </button>
                          </div>
                          <div className="text-sm text-gray-600">
                            <p><strong>Dosage:</strong> {product.dosage}</p>
                            <p><strong>Side Effects:</strong> {product.sideEffects.join(', ')}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <Loader2 className="h-5 w-5 animate-spin text-green-600" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your symptoms or ask health-related questions..."
              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthBot;