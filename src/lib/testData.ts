
export type TestCategory = 'blood' | 'urine' | 'ecg' | 'popular';

export interface Test {
  id: string;
  name: string;
  price: number;
  category: TestCategory;
  preparation?: string;
  reportDelivery?: string;
  description?: string;
}

export interface OrganTest {
  id: string;
  name: string;
  icon: string;
  tests: string[]; // Test IDs
}

export const tests: Test[] = [
  // Blood Tests
  { id: 'cbc', name: 'Complete Blood Count (CBC)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'bmp', name: 'Basic Metabolic Panel (BMP)', price: 799, category: 'blood', preparation: 'Fasting for 8-12 hours recommended.', reportDelivery: 'Same day' },
  { id: 'cmp', name: 'Comprehensive Metabolic Panel (CMP)', price: 799, category: 'blood', preparation: 'Fasting for 8-12 hours recommended.', reportDelivery: 'Same day' },
  { id: 'lipid', name: 'Lipid Panel', price: 799, category: 'blood', preparation: 'Fasting for 9-12 hours recommended.', reportDelivery: 'Same day' },
  { id: 'glucose', name: 'Blood Glucose Test', price: 799, category: 'blood', preparation: 'Fasting for 8 hours recommended.', reportDelivery: 'Same day' },
  { id: 'hba1c', name: 'Hemoglobin A1c (HbA1c)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'tsh', name: 'Thyroid Stimulating Hormone (TSH)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'freet3', name: 'Free T3 (Triiodothyronine)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'freet4', name: 'Free T4 (Thyroxine)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'lft', name: 'Liver Function Tests (LFTs)', price: 799, category: 'blood', preparation: 'Fasting for 8-12 hours recommended.', reportDelivery: 'Same day' },
  { id: 'kidney', name: 'Kidney Function Tests (Creatinine + BUN)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'electrolyte', name: 'Electrolyte Panel', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'crp', name: 'C-Reactive Protein (CRP)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'vitamind', name: 'Vitamin D Test', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'iron', name: 'Iron Studies', price: 799, category: 'blood', preparation: 'Fasting for 8-12 hours recommended.', reportDelivery: 'Same day' },
  { id: 'insulin', name: 'Fasting Insulin', price: 799, category: 'blood', preparation: 'Fasting for 8-12 hours required.', reportDelivery: 'Same day' },
  { id: 'calcium', name: 'Serum Calcium', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'magnesium', name: 'Serum Magnesium', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'pt', name: 'Prothrombin Time (PT/INR)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'aptt', name: 'Activated Partial Thromboplastin Time (APTT)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'esr', name: 'Erythrocyte Sedimentation Rate (ESR)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'bun', name: 'Blood Urea Nitrogen (BUN)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'albumin', name: 'Serum Albumin', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'totalprotein', name: 'Total Protein Test', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'psa', name: 'Prostate-Specific Antigen (PSA)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'tropinin', name: 'Troponin I (Heart Marker)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day', description: 'Measures levels of troponin proteins in blood to help diagnose heart attacks.' },
  { id: 'bnp', name: 'Brain Natriuretic Peptide (BNP)', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'homocysteine', name: 'Homocysteine', price: 799, category: 'blood', preparation: 'Fasting for 8-12 hours recommended.', reportDelivery: 'Same day' },
  { id: 'vitb12', name: 'Vitamin B12 Test', price: 799, category: 'blood', preparation: 'Fasting for 8 hours recommended.', reportDelivery: 'Same day' },
  { id: 'folate', name: 'Folate Test', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'cortisol', name: 'Cortisol Test', price: 799, category: 'blood', preparation: 'Blood sample typically collected in the morning.', reportDelivery: 'Same day' },
  { id: 'testosterone', name: 'Testosterone Test', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'estrogen', name: 'Estrogen Test', price: 799, category: 'blood', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  
  // Urine Tests
  { id: 'urinalysis', name: 'Urinalysis (UA)', price: 799, category: 'urine', preparation: 'Clean catch sample recommended.', reportDelivery: 'Same day' },
  { id: 'urineculture', name: 'Urine Culture', price: 799, category: 'urine', preparation: 'Clean catch sample required.', reportDelivery: '48-72 hours' },
  { id: 'urineprotein', name: 'Urine Protein Test', price: 799, category: 'urine', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'urineglucose', name: 'Urine Glucose Test', price: 799, category: 'urine', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'urinecreatinine', name: 'Urine Creatinine Test', price: 799, category: 'urine', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'microalbumin', name: 'Microalbumin Test', price: 799, category: 'urine', preparation: 'First morning sample preferred.', reportDelivery: 'Same day' },
  { id: 'urineelectrolyte', name: 'Urine Electrolyte Test', price: 799, category: 'urine', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'urineketone', name: 'Urine Ketone Test', price: 799, category: 'urine', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'urinebilirubin', name: 'Urine Bilirubin Test', price: 799, category: 'urine', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'urineuricacid', name: 'Urine Uric Acid Test', price: 799, category: 'urine', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: '24hrurine', name: '24-Hour Urine Protein', price: 799, category: 'urine', preparation: 'Collect all urine over 24-hour period.', reportDelivery: '1-2 days' },
  { id: 'urinedrug', name: 'Urine Drug Screen (5-Panel)', price: 799, category: 'urine', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  
  // ECG and Related Tests
  { id: 'ecg', name: 'Electrocardiogram (ECG/EKG)', price: 799, category: 'ecg', preparation: 'Wear loose, comfortable clothing.', reportDelivery: 'Immediate' },
  { id: 'stresstest', name: 'Stress Test (Treadmill ECG)', price: 799, category: 'ecg', preparation: 'Wear comfortable clothing and walking shoes.', reportDelivery: 'Same day' },
  { id: 'echo', name: 'Echocardiogram (Basic)', price: 799, category: 'ecg', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'cardiacenzyme', name: 'Cardiac Enzyme Panel (CK-MB)', price: 799, category: 'ecg', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'ddimer', name: 'D-Dimer Test (Clot Marker)', price: 799, category: 'ecg', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
];

export const popularTests: Test[] = [
  { id: 'tropinin', name: 'Troponin I (Heart Marker)', price: 500, category: 'popular', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'kidneyscreen', name: 'Kidney basic screen', price: 800, category: 'popular', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
  { id: 'vitamindb12', name: 'Vitamin D 25 OH Total & Vitamin B12', price: 899, category: 'popular', preparation: 'No special preparation required.', reportDelivery: 'Same day' },
];

export const organTests: OrganTest[] = [
  {
    id: 'heart',
    name: 'Heart',
    icon: 'heart', // Using Lucide icon name instead of image path
    tests: ['ecg', 'stresstest', 'echo', 'cardiacenzyme', 'tropinin', 'bnp', 'ddimer']
  },
  {
    id: 'thyroid',
    name: 'Thyroid',
    icon: 'activity', // Using Lucide icon name instead of image path
    tests: ['tsh', 'freet3', 'freet4']
  },
  {
    id: 'liver',
    name: 'Liver',
    icon: 'pyramid', // Using Lucide icon name
    tests: ['lft', 'albumin', 'totalprotein', 'bilirubin']
  },
  {
    id: 'lungs',
    name: 'Lungs',
    icon: 'wind', // Using Lucide icon name
    tests: ['echo', 'pulmonaryfunction']
  },
  {
    id: 'infertility',
    name: 'Infertility',
    icon: 'baby', // Using Lucide icon name
    tests: ['testosterone', 'estrogen', 'folate', 'vitb12']
  },
  {
    id: 'kidney',
    name: 'Kidney',
    icon: 'bean', // Using Lucide icon name
    tests: ['kidney', 'bun', 'urinalysis', 'microalbumin', 'urineprotein']
  }
];

// Helper function to get tests by category
export const getTestsByCategory = (category: TestCategory): Test[] => {
  return tests.filter(test => test.category === category);
};

// Helper function to get tests by organ
export const getTestsByOrgan = (organId: string): Test[] => {
  const organ = organTests.find(o => o.id === organId);
  if (!organ) return [];
  
  return organ.tests.map(testId => tests.find(t => t.id === testId)).filter(Boolean) as Test[];
};

// Helper function to get a test by ID
export const getTestById = (id: string): Test | undefined => {
  return tests.find(test => test.id === id) || popularTests.find(test => test.id === id);
};
