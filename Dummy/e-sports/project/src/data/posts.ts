export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
  author: string;
  authorImage: string;
  readTime: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Team Liquid Dominates Valorant Champions 2024",
    excerpt: "In a stunning display of skill and teamwork, Team Liquid secures their position as the best team in professional Valorant.",
    content: `Team Liquid has proven once again why they're considered one of the best Valorant teams globally. In a thrilling final match that went to all five maps, they showcased exceptional strategic depth and mechanical skill.

The tournament's defining moment came during the fourth map on Haven, where ScreaM's clutch ace in overtime shifted the momentum entirely in Liquid's favor. The team's innovative composition and strategic adaptations throughout the series demonstrated why they remain at the forefront of competitive Valorant.

Key highlights from the tournament include:
• Record-breaking 16-round win streak in the group stage
• ScreaM's tournament MVP performance with a 1.47 rating
• Revolutionary Viper setups on Pearl that changed the meta
• Unprecedented coordination between utility usage and executes

The victory marks Team Liquid's third major title this year, solidifying their dynasty in professional Valorant. Their success has sparked discussions about the evolution of tactical shooters and the increasing skill ceiling in professional play.`,
    category: "Valorant",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop",
    date: "2024-04-15",
    author: "Alex Chen",
    authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop",
    readTime: "8 min read",
    tags: ["Valorant", "Team Liquid", "Esports", "Tournament"]
  },
  {
    id: 2,
    title: "CS2 Major Prize Pool Hits Record $2M",
    excerpt: "Valve announces unprecedented prize pool for upcoming Stockholm Major, setting new standards for esports competitions.",
    content: `The competitive CS2 scene is about to witness its biggest tournament yet. Valve's announcement of a $2 million prize pool marks a historic moment in esports history.

This unprecedented prize pool represents more than just monetary value - it's a statement about the growing legitimacy and mainstream acceptance of professional gaming. The decision comes after months of community feedback and increasing viewership numbers across major tournaments.

The Stockholm Major will feature:
• 24 teams from 6 regions
• New format with extended lower bracket
• Live audience for all playoff matches
• Interactive viewer drops and rewards

Industry analysts predict this could set a new standard for first-person shooter tournaments, potentially influencing prize pools across other esports titles.`,
    category: "CS2",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop",
    date: "2024-04-14",
    author: "Sarah Williams",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
    readTime: "6 min read",
    tags: ["CS2", "Valve", "Tournament", "Prize Pool"]
  },
  {
    id: 3,
    title: "League of Legends Introduces Revolutionary Spectator Mode",
    excerpt: "Riot Games unveils groundbreaking spectator features that will transform how fans experience professional matches.",
    content: `The future of League of Legends spectating is here. Riot's latest update introduces AR elements, detailed statistics overlays, and interactive features that allow viewers to gain unprecedented insight into professional matches.

The new spectator mode includes:
• Real-time damage prediction overlays
• Interactive minimap with heat maps
• Player perspective switching
• Advanced statistical analysis
• Custom viewing angles

This update represents the biggest change to the viewing experience since the game's release. Professional broadcasts will now have access to tools previously only available to analysts, creating a more immersive and educational experience for viewers.`,
    category: "League of Legends",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop",
    date: "2024-04-13",
    author: "Marcus King",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
    readTime: "5 min read",
    tags: ["League of Legends", "Riot Games", "Spectator Mode"]
  },
  {
    id: 4,
    title: "Dota 2 Unveils Next-Gen Tournament Platform",
    excerpt: "Valve revolutionizes tournament organization with AI-powered matchmaking and advanced analytics.",
    content: `Valve's latest innovation in the Dota 2 ecosystem promises to transform how tournaments are organized and experienced. The new platform combines machine learning with years of competitive data to create the most sophisticated tournament system yet.

The platform introduces several groundbreaking features that will benefit both tournament organizers and participants. Advanced analytics and real-time performance metrics will provide unprecedented insights into team and player performance.`,
    category: "Dota 2",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop",
    date: "2024-04-12",
    author: "Elena Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
    readTime: "7 min read",
    tags: ["Dota 2", "Tournament", "Technology"]
  },
  {
    id: 5,
    title: "Overwatch 2 Pro League Announces Global Expansion",
    excerpt: "The Overwatch League unveils plans for significant expansion into emerging markets with new teams and formats.",
    content: `The Overwatch League is set to undergo its biggest expansion yet, with plans to introduce eight new teams across various regions. This massive growth initiative aims to tap into emerging esports markets while restructuring the competitive format to accommodate the expanded roster.

Key developments include:
• Addition of teams from South America and Southeast Asia
• New tournament structure with regional qualifiers
• Increased prize pool for all divisions
• Enhanced broadcast coverage in multiple languages
• Integration with amateur leagues for talent development

The expansion marks a significant milestone in Overwatch esports, promising to bring professional competition to previously underserved regions while maintaining the high production standards that fans have come to expect.`,
    category: "Overwatch",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop",
    date: "2024-04-11",
    author: "James Wilson",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
    readTime: "6 min read",
    tags: ["Overwatch", "Esports", "Global", "Tournament"]
  },
  {
    id: 6,
    title: "FaZe Clan Launches Revolutionary Gaming Academy",
    excerpt: "Leading esports organization introduces comprehensive training program for aspiring professional gamers.",
    content: `FaZe Clan has unveiled its groundbreaking Gaming Academy, a state-of-the-art facility designed to nurture the next generation of esports talent. The academy combines traditional sports training methodologies with cutting-edge gaming technology to create a holistic development program.

The program features:
• Professional coaching from retired esports stars
• Mental health and wellness support
• Streaming and content creation workshops
• Business and brand development training
• Regular scrimmages against professional teams

This initiative represents a significant step forward in professionalizing esports training and development, potentially setting a new industry standard for talent cultivation.`,
    category: "Esports",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&auto=format&fit=crop",
    date: "2024-04-10",
    author: "Nina Patel",
    authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&auto=format&fit=crop",
    readTime: "9 min read",
    tags: ["FaZe Clan", "Training", "Esports", "Education"]
  },
  {
    id: 7,
    title: "Mobile Esports Revenue Surpasses PC Gaming",
    excerpt: "Industry report reveals mobile esports has become the highest-grossing segment in competitive gaming.",
    content: `In a groundbreaking development, mobile esports has officially surpassed traditional PC gaming in terms of revenue generation. This milestone reflects the growing accessibility and popularity of mobile gaming platforms, particularly in emerging markets.

The report highlights several key factors:
• Massive growth in Southeast Asian markets
• Increased sponsorship deals for mobile tournaments
• Higher viewer engagement rates on mobile platforms
• Success of cross-platform titles
• Innovation in mobile-first game design

This shift in the esports landscape has prompted many traditional organizations to expand their mobile divisions, with several major teams announcing new mobile rosters across various titles.`,
    category: "Mobile Gaming",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&auto=format&fit=crop",
    date: "2024-04-09",
    author: "David Chang",
    authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop",
    readTime: "7 min read",
    tags: ["Mobile Gaming", "Esports", "Industry", "Revenue"]
  },
  {
    id: 8,
    title: "AI-Powered Coaching Platform Revolutionizes Training",
    excerpt: "New artificial intelligence system provides personalized coaching for competitive gamers.",
    content: `A breakthrough in esports training has arrived with the launch of an AI-powered coaching platform that analyzes gameplay in real-time and provides personalized feedback. This innovative system uses machine learning algorithms to identify areas for improvement and suggest specific training routines.

The platform offers:
• Real-time performance analysis
• Personalized training programs
• Pattern recognition in gameplay
• Predictive opponent modeling
• Advanced statistics tracking

Early adoption by professional teams has shown promising results, with several organizations reporting significant improvements in player performance after implementing the system.`,
    category: "Technology",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&auto=format&fit=crop",
    date: "2024-04-08",
    author: "Lisa Zhang",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop",
    readTime: "8 min read",
    tags: ["AI", "Coaching", "Technology", "Training"]
  },
  {
    id: 9,
    title: "Epic Games Announces $10M Fortnite World Cup",
    excerpt: "Largest prize pool in battle royale history set for upcoming Fortnite World Cup.",
    content: `Epic Games has raised the stakes in competitive gaming with the announcement of a $10 million prize pool for the upcoming Fortnite World Cup. This unprecedented purse marks the largest prize pool ever offered in battle royale esports.

The tournament will feature:
• Qualifiers across six continents
• New competitive format changes
• Live stadium events
• Interactive viewer rewards
• Celebrity showmatches

The announcement has sent waves through the esports community, with professional players and organizations scrambling to prepare for what promises to be the most significant battle royale event in history.`,
    category: "Fortnite",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&auto=format&fit=crop",
    date: "2024-04-07",
    author: "Tom Anderson",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
    readTime: "6 min read",
    tags: ["Fortnite", "Prize Pool", "Tournament", "Epic Games"]
  }
];

export const categories = ["All", "Valorant", "CS2", "League of Legends", "Dota 2", "Overwatch", "Fortnite", "Mobile Gaming", "Technology"];