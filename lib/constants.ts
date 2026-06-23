export const SITE_CONFIG = {
  name: "Nandadeep Milk Dairy",
  nameMarathi: "नंददीप दूध डेअरी",
  tagline: "Farm Fresh Dairy Goodness, Delivered Daily",
  taglineMarathi: "शेतातून ताजे दुग्ध उत्पादने, दररोज डिलिव्हरी",
  description:
    "From our farm to your family — experience the richness of pure milk, fresh curd, creamy paneer, and traditional dairy products.",
  descriptionMarathi:
    "आमच्या शेतातून तुमच्या कुटुंबापर्यंत — शुद्ध दूध, ताजे दही, मलईदार पनीर आणि पारंपरिक दुग्ध उत्पादनांचा अनुभव घ्या.",
  email: "nandadeepmilkdairy@gmail.com",
  phone: "+91 9657782463",
  address: "Nandadeep Milk Dairy Farm, Kharadi, Pune - 411014",
  addressMarathi: "नंददीप दूध डेअरी फार्म, खराडी, पुणे - ४११०१४",
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
      "Pure, farm-fresh cow and buffalo milk delivered to your doorstep every morning.",
    shortDescriptionMr:
      "दररोज सकाळी शुद्ध, शेतातून ताजे गाय आणि म्हशीचे दूध तुमच्या दारापर्यंत.",
    fullDescription:
      "Our farm-fresh milk comes directly from our healthy, grass-fed cows and buffaloes. We ensure the highest quality through rigorous hygiene standards and cold chain delivery so you get the purest milk every single morning.",
    fullDescriptionMr:
      "आमचे शेतातून ताजे दूध आमच्या निरोगी, गवत खाणाऱ्या गायी आणि म्हशींकडून थेट येते. कडक स्वच्छता मानके आणि कोल्ड चेन डिलिव्हरीद्वारे आम्ही सर्वोच्च गुणवत्ता सुनिश्चित करतो.",
    features: [
      "Farm-fresh cow milk",
      "Rich buffalo milk",
      "A2 milk available",
      "Morning home delivery",
      "No preservatives added",
      "Hygienic cold chain",
    ],
    featuresMr: [
      "शेतातून ताजे गाईचे दूध",
      "समृद्ध म्हशीचे दूध",
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
    bio: "15+ years of dairy farming expertise",
    bioMr: "१५+ वर्षांचा दुग्ध व्यवसाय अनुभव",
  },
  {
    name: "Nanda Gome",
    nameMr: "नंदा गोमे",
    role: "Quality Manager",
    roleMr: "गुणवत्ता व्यवस्थापक",
    bio: "Ensures the highest quality standards for all our products.",
    bioMr: "आमच्या सर्व उत्पादनांसाठी सर्वोच्च गुणवत्ता मानके सुनिश्चित करतात.",
  },
  {
    name: "Ranjit Chavan",
    nameMr: "रणजित चव्हाण",
    role: "Farm Operations Head",
    roleMr: "फार्म ऑपरेशन्स प्रमुख",
    bio: "Manages daily operations and cattle welfare at the farm.",
    bioMr: "शेतातील दैनंदिन कार्ये आणि गुरांची काळजी यांचे व्यवस्थापन.",
  },
] as const;

export const STATS = [
  { value: "500+", labelEn: "Happy Families", labelMr: "आनंदी कुटुंबे" },
  { value: "2000+", labelEn: "Liters Daily", labelMr: "लिटर दररोज" },
  { value: "15+", labelEn: "Years of Trust", labelMr: "विश्वासाची वर्षे" },
  { value: "20+", labelEn: "Dairy Products", labelMr: "दुग्ध उत्पादने" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We have been getting milk from Nandadeep Milk Dairy for 5 years now. The quality and freshness is unmatched. Our children love it!",
    quoteMr:
      "आम्ही गेल्या ५ वर्षांपासून नंददीप दूध डेअरीकडून दूध घेत आहोत. गुणवत्ता आणि ताजेपणा अतुलनीय आहे. आमच्या मुलांना ते आवडते!",
    author: "Sunita Patil",
    authorMr: "सुनिता पाटील",
    role: "Homemaker, Kharadi",
    roleMr: "गृहिणी, खराडी",
  },
  {
    quote:
      "The paneer is incredibly fresh and soft. I use it in all my cooking. The desi ghee also has an amazing aroma — just like the old days!",
    quoteMr:
      "पनीर अविश्वसनीयपणे ताजे आणि मऊ आहे. मी ते माझ्या सर्व स्वयंपाकात वापरते. देसी तूपाचा सुगंधही अप्रतिम आहे — जुन्या दिवसांसारखा!",
    author: "Rajesh Deshmukh",
    authorMr: "राजेश देशमुख",
    role: "Restaurant Owner, Pune",
    roleMr: "रेस्टॉरंट मालक, पुणे",
  },
  {
    quote:
      "Best dairy products in Pune! The morning delivery is always on time and the milk tastes absolutely pure. Highly recommended!",
    quoteMr:
      "पुण्यातील सर्वोत्तम दुग्ध उत्पादने! सकाळची डिलिव्हरी नेहमी वेळेवर असते आणि दुधाची चव अगदी शुद्ध असते. अत्यंत शिफारस!",
    author: "Meera Joshi",
    authorMr: "मीरा जोशी",
    role: "Health Coach, Viman Nagar",
    roleMr: "हेल्थ कोच, विमान नगर",
  },
] as const;

// Dairy images from Unsplash (free to use)
export const DAIRY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1200&q=80",
  heroMobile: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80",
  milk: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80",
  cow: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&q=80",
  farm: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80",
  curd: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
  paneer: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
  ghee: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&q=80",
  butter: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=800&q=80",
  cheese: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80",
  delivery: "https://images.unsplash.com/photo-1544085311-11a028465b03?w=800&q=80",
  bottles: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80",
} as const;
