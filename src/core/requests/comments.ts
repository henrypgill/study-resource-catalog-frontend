import { backendAPI } from "./setupAxios";
import { User } from "./users";

export interface CommentCandidate {
  resource_id: number;
  user_id: number;
  content: string;
}

export interface Comment extends Omit<CommentCandidate, "user_id"> {
  id: number;
  user: User;
  created_at: Date;
}

export const getComments = async (
  resourceId: number | string
): Promise<Comment[]> => {
  const res = await backendAPI.get(`/resources/${resourceId}/comments/`);
  return res.data;
};

export const postComment = async (comment: CommentCandidate) => {
  await backendAPI.post(`/resources/${comment.resource_id}/comments`, comment);
};
