interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  conditions: string[];
  dosage: string;
  sideEffects: string[];
}

interface ProductData {
  medicines: Product[];
  vitamins: Product[];
  supplements: Product[];
  immunity: Product[];
}

export const productsData: ProductData = {
  medicines: [
    {
      id: 'med1',
      name: 'Eye Drops Plus',
      price: 19.99,
      description: 'Advanced formula for eye lubrication and comfort',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=400',
      category: 'medicines',
      conditions: ['dry eyes', 'eye irritation', 'red eyes'],
      dosage: '1-2 drops per eye, 3-4 times daily',
      sideEffects: ['temporary blurred vision', 'mild stinging']
    },
    {
      id: 'med2',
      name: 'Paracetamol Extra',
      price: 8.99,
      description: 'Fast-acting pain relief and fever reduction',
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=400',
      category: 'medicines',
      conditions: ['fever', 'headache', 'body pain', 'cold', 'flu'],
      dosage: '1-2 tablets every 4-6 hours',
      sideEffects: ['nausea', 'stomach upset']
    },
    {
      id: 'med3',
      name: 'ColdFlu Relief',
      price: 12.99,
      description: 'Complete relief from cold and flu symptoms',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400',
      category: 'medicines',
      conditions: ['cold', 'flu', 'runny nose', 'congestion', 'fever'],
      dosage: '1 tablet every 6 hours',
      sideEffects: ['drowsiness', 'dry mouth']
    },
    {
      id: 'med4',
      name: 'Allergy Relief',
      price: 15.99,
      description: 'Non-drowsy antihistamine for allergy symptoms',
      image: 'https://images.unsplash.com/photo-1550572017-37b15da58f26?auto=format&fit=crop&q=80&w=400',
      category: 'medicines',
      conditions: ['allergies', 'hay fever', 'itchy eyes', 'runny nose'],
      dosage: '1 tablet daily',
      sideEffects: ['mild headache', 'dry mouth']
    },
    {
      id: 'med5',
      name: 'Cough Syrup Plus',
      price: 11.99,
      description: 'Effective relief from cough and chest congestion',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=400',
      category: 'medicines',
      conditions: ['cough', 'chest congestion', 'bronchitis'],
      dosage: '10ml every 4-6 hours',
      sideEffects: ['drowsiness', 'mild nausea']
    }
  ],
  vitamins: [
    {
      id: 'vit1',
      name: 'Vitamin C 1000mg',
      price: 24.99,
      description: 'High-strength vitamin C with zinc for immune support',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400',
      category: 'vitamins',
      conditions: ['immune support', 'cold prevention', 'antioxidant'],
      dosage: '1 tablet daily',
      sideEffects: ['none known when taken as directed']
    },
    {
      id: 'vit2',
      name: 'Multivitamin Complete',
      price: 29.99,
      description: 'Comprehensive daily multivitamin formula',
      image: 'https://images.unsplash.com/photo-1577636706176-1edbf8d23cd3?auto=format&fit=crop&q=80&w=400',
      category: 'vitamins',
      conditions: ['general health', 'energy', 'immunity'],
      dosage: '1 tablet daily with food',
      sideEffects: ['mild stomach upset if taken without food']
    }
  ],
  supplements: [
    {
      id: 'sup1',
      name: 'Immune Defense',
      price: 39.99,
      description: 'Advanced immune system support complex',
      image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=400',
      category: 'supplements',
      conditions: ['immune support', 'cold prevention', 'wellness'],
      dosage: '2 capsules daily',
      sideEffects: ['none reported']
    },
    {
      id: 'sup2',
      name: 'Probiotic Plus',
      price: 34.99,
      description: 'Advanced probiotic for gut health and immunity',
      image: 'https://images.unsplash.com/photo-1550572017-37b15da58f26?auto=format&fit=crop&q=80&w=400',
      category: 'supplements',
      conditions: ['digestive health', 'immune support', 'antibiotics recovery'],
      dosage: '1 capsule daily',
      sideEffects: ['temporary bloating during first few days']
    }
  ],
  immunity: [
    {
      id: 'imm1',
      name: 'Immunity Boost Complex',
      price: 29.99,
      description: 'Complete immune system support with vitamins C, D, and zinc',
      image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400',
      category: 'immunity',
      conditions: ['immune support', 'cold prevention', 'wellness'],
      dosage: '1 tablet daily',
      sideEffects: ['none known when taken as directed']
    },
    {
      id: 'imm2',
      name: 'Herbal Immune Support',
      price: 34.99,
      description: 'Natural immune support with echinacea and elderberry',
      image: 'https://images.unsplash.com/photo-1571781565036-d3f759be73e4?auto=format&fit=crop&q=80&w=400',
      category: 'immunity',
      conditions: ['immune support', 'cold symptoms', 'natural health'],
      dosage: '2 capsules twice daily',
      sideEffects: ['rare allergic reactions in sensitive individuals']
    }
  ]
};