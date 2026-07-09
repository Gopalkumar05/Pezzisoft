export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
];

export const FEATURES = [
  {
    id: 1,
    title: 'Smart Attendance Tracking',
    description: 'Track real-time attendance with biometric, mobile & web-based accuracy.',
    icon: 'FaUserCheck',
    points: [
      'Real-time employee check-in & check-out tracking',
      'Biometric, mobile & web-based attendance options',
      'GPS & location-based monitoring',
      'Reduce buddy punching & manual errors'
    ]
  },
  {
    id: 2,
    title: 'Automated Payroll Processing',
    description: 'Auto-calculate salaries, deductions & payslips without manual errors.',
    icon: 'FaCalculator',
    points: [
      'Auto salary calculation with deductions',
      'Instant payslip generation',
      'Tax, PF, ESI auto-computation',
      'Error-free monthly payroll processing'
    ]
  },
  {
    id: 3,
    title: 'Shift & Roster Management',
    description: 'Easily create, update & manage complex employee shift schedules.',
    icon: 'FaClock',
    points: [
      'Create flexible shift schedules',
      'Easy shift swapping & updates',
      'Manage rotational & night shifts',
      'Avoid roster conflicts instantly'
    ]
  },
  {
    id: 4,
    title: 'Overtime & Night Shift Calculation',
    description: 'Accurate overtime & night shift pay calculation as per company rules.',
    icon: 'FaMoneyBillWave',
    points: [
      'Automatic overtime calculation',
      'Night shift allowance management',
      'Rule-based pay configuration',
      'Accurate hourly rate computation'
    ]
  }
];

export const PROBLEMS = [
  'Manual attendance mistakes',
  'Wrong overtime calculation',
  'Night shift salary issues',
  'Shift Change Not Updated Properly',
  'Multiple Shift in Same Day',
  'Complex roster management'
];

export const INDUSTRIES = [
  'Hospitals',
  'Manufacturing',
  'Schools',
  'Corporate Offices',
  'Retail Businesses'
];

export const CLIENT_LOGOS = [
  { id: 1, name: 'RAM', logo: '/logos/client-ram.jpg' },
  { id: 2, name: 'EatBetter', logo: '/logos/client-eatbetter.jpg' },
  { id: 3, name: 'Ramsnehi', logo: '/logos/client-ramsnehi.jpg' },
  { id: 4, name: 'Assess Infra', logo: '/logos/client-assessinfra.jpg' },
  { id: 5, name: 'Shree Agrasen Marbles', logo: '/logos/client-marbles.jpg' },
  { id: 6, name: 'PSC', logo: '/logos/client-psc.jpg' },
  { id: 7, name: 'Hotel Narain Niwas', logo: '/logos/client-hotel.jpg' },
  { id: 8, name: 'Perfality', logo: '/logos/client-perfality.jpg' },
  { id: 9, name: 'Pyramid', logo: '/logos/client-pyramid.jpg' },
  { id: 10, name: 'Shree Radhe Govind', logo: '/logos/client-govind.jpg' },
  { id: 11, name: 'Rankawat', logo: '/logos/client-rankawat.jpg' }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'HR Manager',
    company: 'EatBetter Foods',
    quote: 'Pezzi Softech has transformed our payroll processing. What used to take days now takes hours with zero errors.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Operations Head',
    company: 'RAM Group',
    quote: 'The shift management feature is a game-changer for our manufacturing unit. Highly recommended!'
  },
  {
    id: 3,
    name: 'Amit Patel',
    position: 'CFO',
    company: 'Assess Infra',
    quote: 'Accurate, reliable, and cost-effective. Pezzi Softech is the best investment we made for our HR department.'
  }
];

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/pezzisoftech',
  instagram: 'https://instagram.com/pezzisoftech',
  youtube: 'https://youtube.com/pezzisoftech',
  linkedin: 'https://linkedin.com/company/pezzisoftech'
};

export const CONTACT_INFO = {
  email: 'sales@pezzisoftech.com',
  phone: '+91-XXXXXXXXXX',
  address: 'Plot No. 1, C211-212, Shakti Khand 2, Indirapuram, Ghaziabad, Uttar Pradesh 201014',
  addressLines: [
    'Plot No. 1, C211-212, Shakti Khand 2',
    'Indirapuram, Ghaziabad, Uttar Pradesh 201014'
  ],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d3501.442231157591!2d77.36290057550134!3d28.646474475657158!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d28.646521999999997!2d77.365448!4m5!1s0x390cfa8652706105%3A0xce9766de18135b33!2sPEZZI%20SOFTECH%20INDIA%20LLP%2C%20Plot%20No.%201%2C%20Shakti%20Khand%202%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!3m2!1d28.646465199999998!2d77.36551279999999!5e0!3m2!1sen!2sin!4v1783157138249!5m２!１sen!２sin",
  company:'Pezzi Softech India LLP',
  phone:'+91-XXXXXXXXXX',
  phoneDisplay:'+91-XXXXXXXXXX',
  officeHours:'Mon - Sat: 9:00 AM - 6:00 PM',

};



export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 500,
    currency: '₹',
    period: '/ Monthly upto 20 employees',
    additionalCost: '20Rs per employee per month for additional employee',
    icon: 'FaStarHalfAlt',
    popular: false,
    buttonText: 'Get Started',
    buttonLink: '/contact',
    color: 'from-blue-400 to-blue-600',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
    features: ['Organization Setup', 'Single Branch', 'Financial Settings', 'Employee Self Service', 'Biometric integration', 'Employee Basic', 'Bulk Data Upload'],
    bestFor: 'Small Teams'
  },
  {
    id: 'essential',
    name: 'Essential',
    price: 750,
    currency: '₹',
    period: '/ Monthly upto 20 employees',
    additionalCost: '30Rs per employee per month for additional employee',
    icon: 'FaStar',
    popular: false,
    buttonText: 'Get Started',
    buttonLink: '/contact',
    color: 'from-green-400 to-green-600',
    borderColor: 'border-green-200',
    bgColor: 'bg-green-50',
    features: ['Organization Setup', 'Single Branch', 'Financial Settings', 'Employee Self Service', 'Biometric integration', 'Employee Basic', 'Bulk Data Upload', 'Payroll Management Basic', 'Monthly salary config'],
    bestFor: 'Growing Teams'
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 1000,
    currency: '₹',
    period: '/ Monthly upto 20 employees',
    additionalCost: '40Rs per employee per month for additional employee',
    icon: 'FaStarHalfAlt',
    popular: true,
    buttonText: 'Get Started',
    buttonLink: '/contact',
    color: 'from-primary to-primary-dark',
    borderColor: 'border-primary',
    bgColor: 'bg-primary/5',
    features: ['Organization Setup', 'Multi-Branch Support', 'Financial Settings', 'Employee Self Service', 'Biometric integration', 'Employee Basic', 'Bulk Data Upload', 'Payroll Management', 'Monthly salary config', 'Documentation', 'OD tour & visit entry', 'Manual swipe request', 'App Based Attendance', 'Leave Carry Forward Config', 'Statutory Compliance', 'Salary Advance / Loans', 'Monthly Payslip'],
    bestFor: 'SMEs'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 1250,
    currency: '₹',
    period: '/ Monthly upto 20 employees',
    additionalCost: '50Rs per employee per month for additional employee',
    icon: 'FaStar',
    popular: false,
    buttonText: 'Get Started',
    buttonLink: '/contact',
    color: 'from-purple-400 to-purple-600',
    borderColor: 'border-purple-200',
    bgColor: 'bg-purple-50',
    features: ['Organization Setup', 'Multi-Branch Support', 'Financial Settings', 'Employee Self Service', 'Biometric integration', 'Employee Basic', 'Bulk Data Upload', 'Payroll Management', 'Monthly salary config', 'Documentation', 'Email Settings', 'Role Based Config', 'Employee Hierarchy Manag', 'OD tour & visit entry', 'Manual swipe request', 'App Based Attendance', 'GeoFence', 'Leave Carry Forward Config', 'Statutory Compliance', 'Formula creator', 'Salary Advance / Loans', 'Arrears', 'Hourly salary config', 'Letter / Excel For Bank', 'Monthly Payslip'],
    bestFor: 'Enterprises'
  }
];

export const FEATURES_MATRIX = {
  headers: ['Features', 'Starter', 'Essential', 'Standard', 'Professional'],
  rows: [
    { feature: 'Organization Setup', starter: true, essential: true, standard: true, professional: true },
    { feature: 'Multi-Branch Support', starter: false, essential: false, standard: true, professional: true },
    { feature: 'Attendance Management', starter: 'Basic', essential: 'Basic', standard: 'Partial', professional: 'Advanced' },
    { feature: 'Leave Management', starter: 'Basic', essential: 'Basic', standard: 'Partial', professional: 'Advanced' },
    { feature: 'Payroll Management', starter: false, essential: 'Basic', standard: true, professional: true },
    { feature: 'Attendance Rules', starter: 'Basic', essential: 'Basic', standard: 'Partial', professional: 'Advanced' },
    { feature: 'Employee Roles & Hierarchy', starter: false, essential: false, standard: 'Partial', professional: 'Advanced' },
    { feature: 'Reports & Analytics', starter: 'Basic', essential: 'Basic', standard: 'Partial', professional: 'Advanced' },
    { feature: 'Best For', starter: 'Small Teams', essential: 'Growing Teams', standard: 'SMEs', professional: 'Enterprises' }
  ]
};

export const DETAILED_FEATURES_MATRIX = {
  headers: ['Features', 'Starter', 'Essential', 'Standard', 'Professional'],
  rows: [
    { feature: 'Announcement', starter: true, essential: true, standard: true, professional: true },
    { feature: 'Single Branch', starter: true, essential: true, standard: true, professional: true },
    { feature: 'Multi-Branch', starter: false, essential: false, standard: true, professional: true },
    { feature: 'Financial Settings', starter: true, essential: true, standard: true, professional: true },
    { feature: 'Employee Self Service', starter: true, essential: true, standard: true, professional: true },
    { feature: 'Documentation', starter: false, essential: false, standard: true, professional: true },
    { feature: 'Email Settings', starter: false, essential: false, standard: false, professional: true },
    { feature: 'Biometric integration', starter: true, essential: true, standard: true, professional: true },
    { feature: 'Employee Basic', starter: true, essential: true, standard: true, professional: true },
    { feature: 'Role Based Config.', starter: false, essential: false, standard: false, professional: true },
    { feature: 'Employee Hierarchy Manag.', starter: false, essential: false, standard: false, professional: true },
    { feature: 'Bulk Data Upload', starter: true, essential: true, standard: true, professional: true },
    { feature: 'Employee - Report', starter: 'Basic', essential: 'Basic', standard: 'Partial', professional: 'Advance' },
    { feature: 'Shift Management', starter: 'Basic', essential: 'Basic', standard: 'Partial', professional: 'Advance' },
    { feature: 'Attendance Rules Config', starter: 'Basic', essential: 'Basic', standard: 'Partial', professional: 'Advance' },
    { feature: 'OD tour & visit entry', starter: false, essential: false, standard: true, professional: true },
    { feature: 'Manual swipe request', starter: false, essential: false, standard: true, professional: true },
    { feature: 'Attendance Regularization', starter: false, essential: false, standard: 'Basic', professional: 'Advance' },
    { feature: 'App Based Attendance', starter: false, essential: false, standard: true, professional: true },
    { feature: 'GeoFence', starter: false, essential: false, standard: false, professional: true },
    { feature: 'OT Calculations', starter: 'Basic', essential: 'Basic', standard: 'Partial', professional: 'Advance' },
    { feature: 'Attendance - Reports', starter: 'Basic', essential: 'Basic', standard: 'Partial', professional: 'Advance' },
    { feature: 'Leave rules config.', starter: 'Basic', essential: 'Basic', standard: 'Partial', professional: 'Advance' },
    { feature: 'Leave type config', starter: 'Basic', essential: 'Basic', standard: 'Partial', professional: 'Advance' },
    { feature: 'Leave Carry Forward Config', starter: false, essential: false, standard: true, professional: true },
    { feature: 'Leave - Reports', starter: 'Basic', essential: 'Basic', standard: 'Partial', professional: 'Advance' },
    { feature: 'Statutory Compliance', starter: false, essential: false, standard: true, professional: true },
    { feature: 'Formula creator', starter: false, essential: false, standard: false, professional: true },
    { feature: 'Salary Advance / Loans', starter: false, essential: false, standard: true, professional: true },
    { feature: 'Arrears', starter: false, essential: false, standard: false, professional: true },
    { feature: 'Monthly salary config.', starter: false, essential: true, standard: true, professional: true },
    { feature: 'Hourly salary config', starter: false, essential: false, standard: false, professional: true },
    { feature: 'Payroll - reports', starter: false, essential: 'Basic', standard: 'Partial', professional: 'Advance' },
    { feature: 'Letter / Excel For Bank', starter: false, essential: false, standard: false, professional: true },
    { feature: 'Monthly Payslip', starter: false, essential: false, standard: true, professional: true }
  ]
};


export const CONTACT_INTERESTS = [
  'Attendance Software',
  'Payroll Software',
  'Request Demo',
  'Price Details',
  'Support Needed'
];

// Add contact-specific section data
export const CONTACT_SECTIONS = {
  header: {
    title: 'Contact Us',
    subtitle: 'Have questions about attendance or payroll? Our team is here to help.'
  },
  location: {
    title: 'Our Location'
  }
};