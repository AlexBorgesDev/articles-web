interface HomePost {
  slug: string;
  title: string;
  banner: { filename: string; description: string };
  owner: { firstName: string; lastName: string };
}

interface ResponsePosts {
  page: number;
  take: number;
  data: HomePost[];
  total: number;
}
