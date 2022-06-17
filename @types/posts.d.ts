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

type PostDataTypes = 'text' | 'code' | 'image' | 'subtitle';

interface PostData {
  tag: PostDataTypes;
  data: string;
  index: number;
  picture?: { filename: string; description: string };
}

interface Post {
  slug: string;
  title: string;
  banner: { filename: string; description: string };
  data: PostData[];
  owner: { firstName: string; lastName: string };
  createdAt: string;
}
