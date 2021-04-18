import { PostsGalleryContainer } from './PostsGallery.styled'
import { PostsGalleryProps } from './types'
import { PostThumbnail } from '../PostThumbnail'
import { PostModel } from '../../models/PostModel'

export const PostsGallery = ({ posts }: PostsGalleryProps) => (
  <PostsGalleryContainer>
    { posts.length && posts.map((post: PostModel) => <PostThumbnail post={post} />)}
  </PostsGalleryContainer>
)
