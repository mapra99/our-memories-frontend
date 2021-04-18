import { createContext, useState } from "react"
import { useMutation } from '@apollo/client';
import { IPostsContext, NewPostData } from './types'
import { CREATE_POST } from '../../api/mutations/posts';
import { PostModel } from '../../models';

export const PostsContext = createContext<IPostsContext | null>(null);

export const PostsProvider: React.FC = ({children}) => {
  const [posts, setPosts] = useState<PostModel[]>([])
  const [createPostRequest] = useMutation(CREATE_POST);

  const createPost = async (postData: NewPostData) => {
    const {title, blob} = postData;
    const result = await createPostRequest({ variables: { createPostInput: { title, signedBlobId: blob.signed_id }}})
    const post = result.data

    setPosts([
      post,
      ...posts
    ]);

    return post;
  }

  const contextVal: IPostsContext = {
    posts,
    createPost
  }

  return (
    <PostsContext.Provider value={contextVal}>
      {children}
    </PostsContext.Provider>
  )
}
