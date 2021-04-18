import { PostsGalleryContainer, PostsGalleryColumn } from './PostsGallery.styled'
import { PostsGalleryProps } from './types'
import { PostThumbnail } from '../PostThumbnail'
import { PostModel } from '../../models/PostModel'
import { splitInChunks } from '../../utils/splitInChunks'

export const PostsGallery = ({ posts }: PostsGalleryProps) => {
  const postsChunks = splitInChunks(posts, 3);

  return (
    <PostsGalleryContainer>
      { postsChunks.map((chunk: PostModel[]) => (
        <PostsGalleryColumn>
          { chunk.map(post => <PostThumbnail post={post} />) }
        </PostsGalleryColumn>
      ))}
    </PostsGalleryContainer>
  )
}
