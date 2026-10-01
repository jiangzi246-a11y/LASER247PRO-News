import { MatchPreview } from '../types';

export const MATCH_PREVIEWS: MatchPreview[] = [
  {
    id: 'ipl-csk-vs-mi-2025',
    sport: 'Cricket',
    tournament: 'Indian Premier League 2025',
    teamA: {
      name: 'Chennai Super Kings',
      shortName: 'CSK',
      score: '184/4 (20 ov)',
      odds: 1.88,
      winProb: 53,
    },
    teamB: {
      name: 'Mumbai Indians',
      shortName: 'MI',
      score: '172/7 (18.4 ov)',
      odds: 1.95,
      winProb: 47,
    },
    status: 'LIVE',
    time: 'Live · 19th Over',
    venue: 'MA Chidambaram Stadium, Chennai',
    expertTip: 'Chepauk pitch gripping for spinners in middle overs. CSK death bowlers defending with slower variations.',
    confidence: 'High',
    keyStat: 'CSK have won 7 of the last 8 encounters at Chepauk when batting first.'
  },
  {
    id: 'ucl-real-madrid-vs-man-city',
    sport: 'Football',
    tournament: 'UEFA Champions League Semifinal',
    teamA: {
      name: 'Real Madrid',
      shortName: 'RMA',
      odds: 2.45,
      winProb: 40,
    },
    teamB: {
      name: 'Manchester City',
      shortName: 'MCI',
      odds: 2.70,
      winProb: 37,
    },
    drawOdds: 3.40,
    status: 'TODAY',
    time: 'Tonight · 20:00 GMT',
    venue: 'Santiago Bernabéu, Madrid',
    expertTip: 'Both Teams to Score (BTTS) & Over 2.5 Goals holds 78% historical alignment in knockout ties between these two.',
    confidence: 'Value Pick',
    keyStat: 'Average 3.6 goals per match across the last 6 head-to-head European clashes.'
  },
  {
    id: 'cricket-india-vs-australia-t20',
    sport: 'Cricket',
    tournament: 'ICC T20 Championship Series',
    teamA: {
      name: 'India',
      shortName: 'IND',
      odds: 1.72,
      winProb: 58,
    },
    teamB: {
      name: 'Australia',
      shortName: 'AUS',
      odds: 2.15,
      winProb: 42,
    },
    status: 'UPCOMING',
    time: 'Tomorrow · 14:00 IST',
    venue: 'Wankhede Stadium, Mumbai',
    expertTip: 'Toss winning captain will bowl first due to expected heavy dew. Target score over 195.',
    confidence: 'High',
    keyStat: 'India have chased successfully in 82% of matches at Wankhede since 2022.'
  },
  {
    id: 'epl-arsenal-vs-liverpool',
    sport: 'Football',
    tournament: 'English Premier League',
    teamA: {
      name: 'Arsenal',
      shortName: 'ARS',
      odds: 2.20,
      winProb: 44,
    },
    teamB: {
      name: 'Liverpool',
      shortName: 'LIV',
      odds: 3.10,
      winProb: 31,
    },
    drawOdds: 3.45,
    status: 'UPCOMING',
    time: 'Sunday · 16:30 BST',
    venue: 'Emirates Stadium, London',
    expertTip: 'Under 3.5 total cards and Over 9.5 corners based on wide wing play metrics.',
    confidence: 'Medium',
    keyStat: 'Arsenal have conceded just 0.72 goals per 90 minutes at home this campaign.'
  }
];
