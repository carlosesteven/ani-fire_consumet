export const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"]

export const NavbarItems = [
  { name: "Home", href: "/" },
  { name: "Search", href: "/" },
  { name: "Recomdation", href: "/" },
  { name: "Upcoming Anime", href: "/" },
  { name: "Trending Anime", href: "/" },
];

export const defaultUrl = process.env.NEXT_PUBLIC_ANIME_URL;

export const AsideNavbarItems = [
  { name: "Home", icon: "/assets/home.svg" },
  { name: "Suggestions", icon: "/assets/add.svg" },
];

export const CategoriesItems = [
  { name: "Most Popular", icon: "/assets/popular.svg" },
  { name: "Most Favorite", icon: "/assets/star.svg" },
];

export const GeneralItems = [{ name: "Sign in", icon: "/assets/user.svg" }];

export const MenuItems = [
  { name: "Home", href: "/home" },
  { name: "Movies", href: "/movie" },
  { name: "TV Series", href: "/tv" },
  { name: "Most Popular", href: "/most-popular" },
  { name: "Top Airing", href: "/top-airing" },
];

export const TopSearchItems = [
  { name: "Solo Leveling", href: "/search?keyword=solo leveling&page=1" },
  { name: "One Piece", href: "/search?keyword=one piece&page=1" },
  { name: "Jujutsu Kaisen", href: "/search?keyword=jujutsu kaisen&page=1" },
  { name: "Blue Exorcist: Shimane Illuminati Saga", href: "/search?keyword=blue exorcist&page=1" },
  { name: "Domestic Kanojo", href: "/search?keyword=domestic kanojo&page=1" },
  { name: "Demon Slayer", href: "/search?keyword=demon slayer&page=1" },
  { name: "Your lie in April", href: "/search?keyword=your lie in april&page=1" },
  { name: "Your Name", href: "/search?keyword=your name&page=1" },
  { name: "Classroom Of Elite Season 3", href: "/search?keyword=classroom of elite&page=1" },
  { name: "Sasaki And Peeps", href: "/search?keyword=sasaki and peeps&page=1" },
  { name: "I Want To Eat Your Pancrease", href: "/search?keyword=i want to eat your pancrease&page=1" },
];

export const MainNavbarItems = [
  { name: "Home", href: "/home" },
  { name: "Subbed Anime", href: "/anime/subbed-anime" },
  { name: "Dubbed Anime", href: "/anime/dubbed-anime" },
  { name: "Most Popular", href: "/anime/most-popular" },
  { name: "Movies", href: "/anime/movie" },
  { name: "TV Series", href: "/anime/tv" },
  { name: "OVAs", href: "/anime/ova" },
  { name: "ONAs", href: "/anime/ona" },
  { name: "Specials", href: "/anime/special" },
  //{ name: "Events", href: "/anime/events" },
];

export const genreList = [
  { name: "Action", href: "/genre/action?page=1" },
  { name: "Adventure", href: "/genre/adventure?page=1" },
  { name: "Cars", href: "/genre/cars?page=1" },
  { name: "Comedy", href: "/genre/comedy?page=1" },
  { name: "Dementia", href: "/genre/dementia?page=1" },
  { name: "Demons", href: "/genre/demons?page=1" },
  { name: "Drama", href: "/genre/drama?page=1" },
  { name: "Ecchi", href: "/genre/ecchi?page=1" },
  { name: "Fantasy", href: "/genre/fantasy?page=1" },
  { name: "Game", href: "/genre/game?page=1" },
  { name: "Harem", href: "/genre/harem?page=1" },
  { name: "Historical", href: "/genre/historical?page=1" },
  { name: "Horror", href: "/genre/horror?page=1" },
  { name: "Isekai", href: "/genre/isekai?page=1" },
  { name: "Josei", href: "/genre/josei?page=1" },
  { name: "Kids", href: "/genre/kids?page=1" },
  { name: "Magic", href: "/genre/magic?page=1" },
  { name: "Martial arts", href: "/genre/martial arts?page=1" },
  { name: "Mecha", href: "/genre/mecha?page=1" },
  { name: "Military", href: "/genre/military?page=1" },
  { name: "Music", href: "/genre/music?page=1" },
  { name: "Mystery", href: "/genre/mystery?page=1" },
  { name: "Parody", href: "/genre/parody?page=1" },
  { name: "Psycological", href: "/genre/psycological?page=1" },
  { name: "Romance", href: "/genre/romance?page=1" },
  { name: "Samurai", href: "/genre/samurai?page=1" },
  { name: "School", href: "/genre/school?page=1" },
  { name: "Sci-fi", href: "/genre/sci-fi?page=1" },
  { name: "Seinen", href: "/genre/seinen?page=1" },
  { name: "Shoujo", href: "/genre/shoujo?page=1" },
  { name: "Shoujo ai", href: "/genre/shoujo ai?page=1" },
  { name: "Shounen", href: "/genre/shounen?page=1" },
  { name: "Shounen ai", href: "/genre/shounen ai?page=1" },
  { name: "Slice of life", href: "/genre/slice of life?page=1" },
  { name: "Space", href: "/genre/space?page=1" },
  { name: "Sports", href: "/genre/sports?page=1" },
  { name: "Super power", href: "/genre/super power?page=1" },
  { name: "Supernatural", href: "/genre/supernatural?page=1" },
  { name: "Thriller", href: "/genre/thriller?page=1" },
  { name: "Vampire", href: "/genre/vampire?page=1" },
]

export const headerItems = [
  { name: "HOME", href: "/home" },
  { name: "ABOUT US", href: "/" },  
  { name: "OUR APPLICATIONS", href: "https://csc-lab.xyz"},
  //{ name: "SUPPORT", href: "mailto:soporte@csc-lab.xyz", target: "_blank"},
  // { name: "Community", href: "/community" },
  // { name: "Watchlist", href: "/watchlist"},
]

export const URI = process.env.NODE_ENV !== "production" ? 'http://localhost:3000' : 'https://ani-fire.vercel.app'
