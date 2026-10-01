export type CategoryType = 
  | 'all'
  | 'sports'
  | 'cricket'
  | 'football'
  | 'live-casino'
  | 'slots'
  | 'crash-aviator'
  | 'guides'
  | 'promotions';

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  category: CategoryType;
  categoryName: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  views: number;
  featured?: boolean;
  trending?: boolean;
  seoKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  keyTakeaways: string[];
  faq?: Array<{ question: string; answer: string }>;
}

export interface MatchPreview {
  id: string;
  sport: 'Cricket' | 'Football' | 'Tennis' | 'Basketball';
  tournament: string;
  teamA: {
    name: string;
    shortName: string;
    score?: string;
    odds: number;
    winProb: number;
  };
  teamB: {
    name: string;
    shortName: string;
    score?: string;
    odds: number;
    winProb: number;
  };
  drawOdds?: number;
  status: 'LIVE' | 'TODAY' | 'UPCOMING';
  time: string;
  venue: string;
  expertTip: string;
  confidence: 'High' | 'Medium' | 'Value Pick';
  keyStat: string;
}

export interface Comment {
  id: string;
  articleId: string;
  author: string;
  content: string;
  date: string;
  likes: number;
}
