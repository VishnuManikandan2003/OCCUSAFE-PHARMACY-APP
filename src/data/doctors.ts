interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  rating: number;
  experience: string;
  languages: string[];
  education: string;
  availability: string[];
  consultationFee: number;
}

export const doctors: Doctor[] = [
  {
    id: 'doc1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Ophthalmologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    experience: '15+ years',
    languages: ['English', 'Spanish'],
    education: 'MD, Harvard Medical School',
    availability: ['Mon-Fri', '9:00 AM - 5:00 PM'],
    consultationFee: 150
  },
  {
    id: 'doc2',
    name: 'Dr. Michael Chen',
    specialization: 'Glaucoma Specialist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    experience: '12+ years',
    languages: ['English', 'Mandarin'],
    education: 'MD, Johns Hopkins University',
    availability: ['Mon-Thu', '10:00 AM - 6:00 PM'],
    consultationFee: 175
  },
  {
    id: 'doc3',
    name: 'Dr. Emily Rodriguez',
    specialization: 'Retina Specialist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    rating: 4.7,
    experience: '10+ years',
    languages: ['English', 'Spanish', 'Portuguese'],
    education: 'MD, Stanford University',
    availability: ['Tue-Sat', '9:00 AM - 5:00 PM'],
    consultationFee: 160
  }
];