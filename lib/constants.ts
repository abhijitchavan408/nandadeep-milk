export const SITE_CONFIG = {
  name: "Nandadeep Milk Dairy",
  nameMarathi: "नंददीप दूध डेअरी",
  tagline: "Farm Fresh Dairy Goodness, Delivered Daily",
  taglineMarathi: "शेतातून ताजे दुग्ध उत्पादने, दररोज डिलिव्हरी",
  description:
    "We collect fresh milk from local farmers, process & package it hygienically, and deliver pure dairy products to your doorstep daily.",
  descriptionMarathi:
    "आम्ही स्थानिक शेतकऱ्यांकडून ताजे दूध संकलित करतो, स्वच्छतेने प्रक्रिया आणि पॅकेजिंग करतो आणि दररोज शुद्ध दुग्ध उत्पादने तुमच्या दारापर्यंत पोहोचवतो.",
  email: "nandadeep015@gmail.com",
  phone: "+91 9892372738",
  address: "Bhuraj Enclave Shop No, 7 Mankhurd Sation Road Mankhurd (E)Mumbai No 400088",
  addressMarathi: "भुराज एन्क्लेव्ह शॉप नं. ७, मानखुर्द स्टेशन रोड, मानखुर्द (पू) मुंबई - ४०००८८",
} as const;

export const NAV_LINKS = [
  { label: "Home", labelMr: "मुख्यपृष्ठ", href: "/" },
  { label: "Products", labelMr: "उत्पादने", href: "/services" },
  { label: "About", labelMr: "आमच्याबद्दल", href: "/about" },
  { label: "Contact", labelMr: "संपर्क", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "fresh-milk",
    title: "Fresh Milk",
    titleMr: "ताजे दूध",
    shortDescription:
      "Pure cow and buffalo milk sourced from trusted local farmers, delivered fresh to your doorstep every morning.",
    shortDescriptionMr:
      "विश्वासू स्थानिक शेतकऱ्यांकडून संकलित शुद्ध गाय आणि म्हशीचे दूध, दररोज सकाळी तुमच्या दारापर्यंत ताजे.",
    fullDescription:
      "We source fresh milk daily from trusted local farmers, process it under strict hygiene standards, and deliver it through our cold chain system so you get the purest milk every single morning.",
    fullDescriptionMr:
      "आम्ही दररोज विश्वासू स्थानिक शेतकऱ्यांकडून ताजे दूध संकलित करतो, कडक स्वच्छता मानकांनुसार प्रक्रिया करतो आणि कोल्ड चेन प्रणालीद्वारे वितरित करतो जेणेकरून तुम्हाला दररोज सकाळी शुद्ध दूध मिळेल.",
    features: [
      "Sourced from local farmers",
      "Cow & buffalo milk",
      "A2 milk available",
      "Morning home delivery",
      "No preservatives added",
      "Hygienic cold chain",
    ],
    featuresMr: [
      "स्थानिक शेतकऱ्यांकडून संकलित",
      "गाय आणि म्हशीचे दूध",
      "A2 दूध उपलब्ध",
      "सकाळी होम डिलिव्हरी",
      "कोणतेही प्रिझर्व्हेटिव्ह नाही",
      "स्वच्छ कोल्ड चेन",
    ],
    icon: "Milk",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80",
  },
  {
    id: "fresh-curd",
    title: "Fresh Curd & Buttermilk",
    titleMr: "ताजे दही आणि ताक",
    shortDescription:
      "Thick, creamy curd and refreshing buttermilk made from pure whole milk.",
    shortDescriptionMr:
      "शुद्ध दुधापासून बनवलेले दाट, मलईदार दही आणि ताजेतवाने ताक.",
    fullDescription:
      "Our curd is set using traditional cultures and pure whole milk, giving it a thick, creamy texture and natural tangy flavor. Our buttermilk is freshly churned and seasoned — perfect for hot summer days.",
    fullDescriptionMr:
      "आमचे दही पारंपरिक संस्कृती आणि शुद्ध दुधाचा वापर करून तयार केले जाते, ज्यामुळे त्याला दाट, मलईदार पोत आणि नैसर्गिक चव मिळते. आमचे ताक ताजे लोण्यापासून काढलेले आणि मसालेदार आहे.",
    features: [
      "Thick set curd",
      "Fresh churned buttermilk",
      "Natural probiotics",
      "No artificial thickeners",
      "Multiple pack sizes",
      "Daily fresh preparation",
    ],
    featuresMr: [
      "दाट दही",
      "ताजे ताक",
      "नैसर्गिक प्रोबायोटिक्स",
      "कृत्रिम थिकनर नाही",
      "विविध पॅक आकार",
      "दररोज ताजे तयार",
    ],
    icon: "CupSoda",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
  },
  {
    id: "paneer-cheese",
    title: "Paneer & Cheese",
    titleMr: "पनीर आणि चीज",
    shortDescription:
      "Soft, fresh paneer and artisan cheese made from the richest whole milk.",
    shortDescriptionMr:
      "सर्वात समृद्ध दुधापासून बनवलेले मऊ, ताजे पनीर आणि चीज.",
    fullDescription:
      "Our paneer is handmade daily from pure, full-cream milk — soft, fresh, and perfect for any dish. We also offer a range of artisanal cheese varieties crafted with traditional methods for authentic taste.",
    fullDescriptionMr:
      "आमचे पनीर शुद्ध, फुल-क्रीम दुधापासून दररोज हाताने बनवले जाते — मऊ, ताजे आणि कोणत्याही पदार्थासाठी योग्य. आम्ही पारंपरिक पद्धतींनी तयार केलेल्या विविध चीज देखील देतो.",
    features: [
      "Fresh handmade paneer",
      "Soft & malai paneer",
      "Artisan cheese varieties",
      "No preservatives",
      "Made from full-cream milk",
      "Available in bulk orders",
    ],
    featuresMr: [
      "ताजे हाताने बनवलेले पनीर",
      "सॉफ्ट आणि मलई पनीर",
      "विविध चीज",
      "कोणतेही प्रिझर्व्हेटिव्ह नाही",
      "फुल-क्रीम दुधापासून बनवलेले",
      "मोठ्या ऑर्डरमध्ये उपलब्ध",
    ],
    icon: "Beef",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
  },
  {
    id: "ghee-butter",
    title: "Ghee & Butter",
    titleMr: "तूप आणि लोणी",
    shortDescription:
      "Pure desi ghee and fresh butter made the traditional way for authentic flavor.",
    shortDescriptionMr:
      "पारंपरिक पद्धतीने बनवलेले शुद्ध देसी तूप आणि ताजे लोणी.",
    fullDescription:
      "Our desi ghee is slow-cooked from fresh cream using the traditional bilona method, giving it a rich golden color and aromatic flavor. Our butter is hand-churned from fresh cream — pure, creamy, and utterly delicious.",
    fullDescriptionMr:
      "आमचे देसी तूप पारंपरिक बिलोना पद्धतीने ताज्या मलईपासून हळूहळू शिजवले जाते, ज्यामुळे त्याला समृद्ध सोनेरी रंग आणि सुगंधी चव मिळते. आमचे लोणी ताज्या मलईपासून हाताने घुसळलेले आहे.",
    features: [
      "Traditional bilona ghee",
      "Hand-churned butter",
      "A2 cow ghee",
      "Rich golden color & aroma",
      "No artificial additives",
      "Glass jar packaging",
    ],
    featuresMr: [
      "पारंपरिक बिलोना तूप",
      "हाताने घुसळलेले लोणी",
      "A2 गाईचे तूप",
      "समृद्ध सोनेरी रंग आणि सुगंध",
      "कृत्रिम पदार्थ नाहीत",
      "काचेच्या भांड्यात पॅकेजिंग",
    ],
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&q=80",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Baburao Gome",
    nameMr: "बाबुराव गोमे",
    role: "Founder & Owner",
    roleMr: "संस्थापक आणि मालक",
    bio: "15+ years of dairy business expertise. Passionate about connecting local farmers to customers with pure, fresh dairy products.",
    bioMr: "१५+ वर्षांचा दुग्ध व्यवसाय अनुभव. स्थानिक शेतकऱ्यांना ग्राहकांशी शुद्ध, ताज्या दुग्ध उत्पादनांद्वारे जोडण्याची आवड.",
  }
] as const;

export const STATS = [
  { value: "500+", labelEn: "Happy Families", labelMr: "आनंदी कुटुंबे" },
  { value: "2000+", labelEn: "Liters Daily", labelMr: "लिटर दररोज" },
  { value: "15+", labelEn: "Years of Trust", labelMr: "विश्वासाची वर्षे" },
  { value: "10+", labelEn: "Dairy Products", labelMr: "दुग्ध उत्पादने" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We have been getting milk from Nandadeep Milk Dairy for 5 years now. The quality and freshness is unmatched. Our children love it!",
    quoteMr:
      "आम्ही गेल्या ५ वर्षांपासून नंददीप दूध डेअरीकडून दूध घेत आहोत. गुणवत्ता आणि ताजेपणा अतुलनीय आहे. आमच्या मुलांना ते आवडते!",
    author: "Tata Power",   
    authorMr: "टाटा पॉवर",
    role: "Mumbai, India",
    roleMr: "मुंबई, भारत",
  },
  {
    quote:
      "The paneer is incredibly fresh and soft. I use it in all my cooking. The desi ghee also has an amazing aroma — just like the old days!",
    quoteMr:
      "पनीर अविश्वसनीयपणे ताजे आणि मऊ आहे. मी ते माझ्या सर्व स्वयंपाकात वापरते. देसी तूपाचा सुगंधही अप्रतिम आहे — जुन्या दिवसांसारखा!",
    author: "Kokilaben Hospital",
    authorMr: "कोकिलाबेन हॉस्पिटल",
    role: "Mumbai, India",
    roleMr: "मुंबई, भारत",
  },
  {
    quote:
      "Best dairy products in Mumbai! The morning delivery is always on time and the milk tastes absolutely pure. Highly recommended!",
    quoteMr:
      "मुंबईतील सर्वोत्तम दुग्ध उत्पादने! सकाळची डिलिव्हरी नेहमी वेळेवर असते आणि दुधाची चव अगदी शुद्ध असते. अत्यंत शिफारस!",
    author: "Saikrupa Food All BARC Canteen",
    authorMr: "साईकृपा फूड ऑल बीएआरसी कॅन्टीन",
    role: "Mumbai, India",
    roleMr: "मुंबई, भारत",
  },
] as const;

// Dairy images from Unsplash (free to use)

