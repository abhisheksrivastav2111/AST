export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl?: string;
  category: string;
  publishedAt: string;
  author: string;
  source?: string;
}

const MOCK_ARTICLES: Article[] = [
  {
    id: "13",
    title: "यूरोज़ोन में महंगाई दर में हल्की बढ़ोतरी",
    summary: "यूरोज़ोन में उपभोक्ता महंगाई दर में 0.2% की मामूली बढ़त दर्ज की गई है।",
    content:
      "यूरोपीय सांख्यिकी कार्यालय द्वारा जारी आंकड़ों के अनुसार, ऊर्जा कीमतों में वृद्धि के चलते इस महीने यूरोज़ोन की महंगाई दर 0.2% रही। विशेषज्ञों का मानना है कि यह बदलाव यूरोपीय सेंट्रल बैंक की नीतियों पर तत्काल प्रभाव नहीं डालेगा, लेकिन यह बताता है कि महंगाई का दबाव अभी भी कायम है।",
    imageUrl: "https://picsum.photos/seed/business1/800/600",
    category: "Business",
    publishedAt: "2025-11-28T09:00:00Z",
    author: "एलेना पेत्रोवा",
    source: "यूरोस्टेट डेली"
  },

  {
    id: "14",
    title: "एआई से कैंसर दवा खोज में बड़ी तेजी",
    summary: "मशीन लर्निंग मॉडल अब कुछ ही मिनटों में लाखों दवाओं का विश्लेषण कर रहे हैं।",
    content:
      "स्टैनफोर्ड लैब के वैज्ञानिकों ने दावा किया है कि उनका नया एआई मॉडल कुछ ही मिनटों में करोड़ों रासायनिक यौगिकों का विश्लेषण कर सकता है। इस मॉडल ने फेफड़ों के एक आक्रामक कैंसर के लिए तीन संभावित नई दवाओं की पहचान की है। शोधकर्ता इसे चिकित्सा क्षेत्र में ऐतिहासिक उपलब्धि मान रहे हैं।",
    imageUrl: "https://picsum.photos/seed/science1/800/600",
    category: "Science",
    publishedAt: "2025-11-27T14:30:00Z",
    author: "डॉ. बेन मिलर",
    source: "बायोटेक रिव्यू"
  },

  {
    id: "15",
    title: "नया टैक्स बिल पास, संसद में हंगामा",
    summary:
      "कॉरपोरेट और उच्च आय वाले व्यक्तियों को प्रभावित करने वाला विवादास्पद कर सुधार विधेयक पास।",
    content:
      "लंबी बहस के बाद आखिरकार 'फेयर शेयर टैक्स एक्ट' संसद में पास हो गया। समर्थकों का कहना है कि इससे सामाजिक योजनाओं के लिए फंड मिलेगा, जबकि विरोधियों ने निवेश और रोजगार में गिरावट की आशंका जताई है। अगले वित्तीय वर्ष से यह कानून लागू होगा।",
    imageUrl: "https://picsum.photos/seed/politics1/800/600",
    category: "Politics",
    publishedAt: "2025-11-28T15:10:00Z",
    author: "ग्रेस हॉपर",
    source: "द वॉशिंगटन लेजर"
  },

  {
    id: "16",
    title: "600 किमी रेंज वाली नई इलेक्ट्रिक कार लॉन्च",
    summary: "वोल्टा मोटर्स ने सॉलिड-स्टेट बैटरी वाली कार से बाजार में हलचल मचा दी।",
    content:
      "डेट्रॉइट ऑटो शो में वोल्टा मोटर्स ने अपनी नई ईवी 'पायनियर' पेश की है। कंपनी का दावा है कि यह कार एक बार चार्ज करने पर 600 किमी चलेगी। इसमें ऑटोनॉमस ड्राइविंग और रीसाइकल्ड इंटीरियर जैसी आधुनिक तकनीकें भी शामिल हैं।",
    imageUrl: "https://picsum.photos/seed/technology1/800/600",
    category: "Technology",
    publishedAt: "2025-11-27T11:55:00Z",
    author: "जेसिका ली",
    source: "फ्यूचर मोबिलिटी"
  },

  {
    id: "17",
    title: "मेडिटेरेनियन डाइट से मानसिक स्वास्थ्य में सुधार",
    summary: "लंबे अध्ययन में पाया गया कि यह डाइट अवसाद के जोखिम को काफी हद तक घटाती है।",
    content:
      "लैंसेट में प्रकाशित एक अध्ययन में बताया गया है कि जैतून तेल, मछली और सब्जियों पर आधारित मेडिटेरेनियन डाइट अवसाद और चिंता को कम करती है। शोधकर्ताओं के अनुसार, इस डाइट में मौजूद एंटी-इंफ्लेमेटरी गुण मस्तिष्क के लिए बेहद लाभदायक होते हैं।",
    imageUrl: "https://picsum.photos/seed/health1/800/600",
    category: "Health",
    publishedAt: "2025-11-25T19:40:00Z",
    author: "डॉ. सैमुअल चो",
    source: "न्यूट्रिशन टुडे"
  },

  {
    id: "18",
    title: "हॉलीवुड चैरिटी गाला में सितारों की चमक",
    summary: "'होप फॉर टुमॉरो' इवेंट में सेलिब्रिटीज ने रिकॉर्ड फंड जुटाया।",
    content:
      "प्रतिष्ठित वार्षिक 'होप फॉर टुमॉरो' चैरिटी गाला में मशहूर हस्तियों ने शिरकत की। इस वर्ष 50 मिलियन डॉलर से अधिक की राशि जुटाई गई। अभिनेता मार्क डेविस को मानवतावादी पुरस्कार से सम्मानित किया गया।",
    imageUrl: "https://picsum.photos/seed/entertainment1/800/600",
    category: "Entertainment",
    publishedAt: "2025-11-26T21:00:00Z",
    author: "फियोना गेल",
    source: "गाला इनसाइडर"
  },

  {
    id: "19",
    title: "ग्रैंड स्लैम में उभरती खिलाड़ी की ऐतिहासिक जीत",
    summary:
      "अनसीडेड खिलाड़ी मारिया सैंटोस ने विश्व नंबर-1 को हराकर खिताब जीता।",
    content:
      "मारिया सैंटोस ने पेरिस में अपने पहले ग्रैंड स्लैम खिताब पर कब्जा जमाया। फाइनल मैच रोमांचक रहा और चार सेटों तक चला। वह बीते दो दशकों में सबसे कम रैंक वाली खिलाड़ी हैं जिन्होंने यह खिताब जीता है।",
    imageUrl: "https://picsum.photos/seed/sports1/800/600",
    category: "Sports",
    publishedAt: "2025-11-28T11:00:00Z",
    author: "क्रिस एवरट",
    source: "टेनिस वीकली"
  },

  {
    id: "20",
    title: "प्रशांत महासागर में कोरल रीफ बचाने की मुहिम",
    summary: "वैज्ञानिकों ने कोरल रीफ के संरक्षण के लिए बड़े स्तर पर पहल शुरू की।",
    content:
      "‘ब्लू फ्यूचर’ पहल के तहत प्रशांत महासागर के पांच प्रमुख कोरल रीफ क्षेत्रों में लैब-ग्रोथ कोरल्स को ट्रांसप्लांट किया जाएगा। वैज्ञानिकों का कहना है कि माइक्रो-फ्रैगमेंटेशन तकनीक से कोरल तेजी से बढ़ते हैं।",
    imageUrl: "https://picsum.photos/seed/world1/800/600",
    category: "World",
    publishedAt: "2025-11-24T17:20:00Z",
    author: "डॉ. लियो मार्क",
    source: "ओशनोग्राफिक टाइम्स"
  },

  {
    id: "21",
    title: "महानगर में नई मेट्रो लाइन की शुरुआत",
    summary: "नई लाइन से यात्रियों को औसतन 30 मिनट कम समय लगेगा।",
    content:
      "‘सेंट्रल कनेक्टर’ नामक नई मेट्रो लाइन का उद्घाटन कर दिया गया है। यह शहर के प्रमुख व्यावसायिक और आवासीय क्षेत्रों को जोड़ती है। अधिकारियों ने उम्मीद जताई है कि इससे ट्रैफिक और प्रदूषण में कमी आएगी।",
    imageUrl: "https://picsum.photos/seed/general1/800/600",
    category: "World",
    publishedAt: "2025-11-28T07:45:00Z",
    author: "पीटर वोंग",
    source: "अर्बन प्लानिंग मंथली"
  },

  {
    id: "22",
    title: "डिजिटल आर्ट का एनएफटी 15 मिलियन डॉलर में बिका",
    summary: "प्रसिद्ध डिजिटल कलाकार के एनएफटी ने नीलामी में रिकॉर्ड तोड़ा।",
    content:
      "‘द इंफिनिट लूप’ नामक 3D एनिमेटेड डिजिटल आर्ट पीस 15 मिलियन डॉलर में बिका। इससे एनएफटी कला को मुख्यधारा में और मजबूती मिली है।",
    imageUrl: "https://picsum.photos/seed/tech2/800/600",
    category: "Technology",
    publishedAt: "2025-11-26T18:00:00Z",
    author: "एडम वेस्ट",
    source: "डिजिटल आर्ट डेली"
  }
];


export async function getArticles(category?: string, query?: string): Promise<Article[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  let filtered = [...MOCK_ARTICLES];

  if (category) {
    const cat = category.toLowerCase();

 
    const CATEGORY_MAP: Record<string, string> = {
      tech: "technology",
      cricket: "sports",
      nation: "politics",
    };

    const mappedCategory = CATEGORY_MAP[cat] || cat;

    filtered = filtered.filter(article =>
      article.category.toLowerCase() === mappedCategory
    );
  }

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(article =>
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.content.toLowerCase().includes(q)
    );
  }

  return filtered;
}
export async function getArticleById(id: string): Promise<Article | null> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_ARTICLES.find(a => a.id === id) || null;
}

export async function getCategories(): Promise<{ name: string; slug: string }[]> {
  // simulate latency (keep same pattern as other helpers)
  await new Promise((resolve) => setTimeout(resolve, 200));

  // collect unique categories in original order
  const seen = new Set<string>();
  const cats: string[] = [];
  for (const a of MOCK_ARTICLES) {
    const c = a.category?.trim() || "General";
    if (!seen.has(c.toLowerCase())) {
      seen.add(c.toLowerCase());
      cats.push(c);
    }
  }

  const makeSlug = (name: string) =>
    name.toLowerCase().replace(/[\s&/]+/g, "-").replace(/[^\w-]+/g, "");

  const result = cats.map((name) => ({
    name,
    slug: makeSlug(name),
  }));

  return result;
}

export async function getTrendingArticles(): Promise<Article[]> {
  await new Promise(resolve => setTimeout(resolve, 400));
  // Return first 5 as trending
  return MOCK_ARTICLES.slice(0, 5);
}
