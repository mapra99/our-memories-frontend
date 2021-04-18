import { PostThumbnailProps } from './types'
import {
  PostThumbnailContainer,
  PostThumbnailImage } from './PostThumbnail.styled'

export const PostThumbnail = ({post}: PostThumbnailProps) => (
  <PostThumbnailContainer>
    <PostThumbnailImage src={post.imageUrl} alt={post.title} />
  </PostThumbnailContainer>
)
