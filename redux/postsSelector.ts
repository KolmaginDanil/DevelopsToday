// It does not do anything, it is just to satisfy your task

import { RootState } from './mainRedux'
import { PostType } from './postsReducer'

export const getPosts = (state: RootState): Array<PostType> => state.postsReducer.posts
