import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/shadcn/ui/drawer';
import CommentItem from '../comments/CommentItem';
import CommentInput from '../comments/CommentInput';
import { Comment } from '@/types/CommentTypes';
import useAddComment from '@/api/comments/addComments';
import useFetchComments from '@/api/comments/fetchComments';
import { useEffect, useState } from 'react';
import useDeleteComment from '@/api/comments/deleteComments';

interface ReplyBottomSheetProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  parentComment: Comment | null;
  quizId: number;
}

export default function ReplyBottomSheet({
  isOpen,
  setOpen,
  parentComment,
  quizId,
}: ReplyBottomSheetProps) {
  const { fetchComments } = useFetchComments(quizId);
  const addCommentMutation = useAddComment(quizId);
  const deleteCommentMutation = useDeleteComment(quizId);

  const [localParentComment, setLocalParentComment] = useState<Comment | null>(parentComment);

  useEffect(() => {
    if (isOpen && parentComment) {
      fetchComments();
      setLocalParentComment(parentComment);
    }
  }, [isOpen, fetchComments, parentComment]);

  const handleAddComment = (content: string) => {
    if (!parentComment) return;

    addCommentMutation.mutate(
      {
        parentCommentId: parentComment.id,
        content,
      },
      {
        onSuccess: async () => {
          try {
            const response = await fetchComments();

            const newComments = response.data || [];

            const updatedParent = newComments.find(
              (comment: Comment) => comment.id === parentComment.id,
            );

            if (updatedParent) {
              setLocalParentComment(updatedParent);
            }
          } catch (error) {
            console.error('댓글 새로고침 실패:', error);
          }
        },
      },
    );
  };

  const handleDeleteComment = (commentId: number) => {
    deleteCommentMutation.mutate(commentId, {
      onSuccess: async () => {
        try {
          const response = await fetchComments();
          const newComments = response.data || [];

          const updatedParent = newComments.find(
            (comment: Comment) => comment.id === parentComment?.id,
          );

          if (updatedParent) {
            setLocalParentComment(updatedParent);
          }
        } catch (error) {
          console.error('댓글 새로고침 실패:', error);
        }
      },
      onError: () => {
        console.error('댓글 삭제 실패');
      },
    });
  };

  return (
    <Drawer open={isOpen} onOpenChange={setOpen}>
      <DrawerContent className="min-h-[80dvh] max-h-[80dvh] w-full bg-white border-t-2 flex flex-col">
        <DrawerHeader className="relative flex-shrink-0">
          <DrawerTitle>답글</DrawerTitle>
          <button type="button" className="absolute top-5 right-7" onClick={() => setOpen(false)}>
            닫기
          </button>
        </DrawerHeader>

        {localParentComment && (
          <div className="p-4 border-b bg-gray-50">
            <p className="font-medium">{localParentComment.writer.name}</p>
            <p className="text-sm text-gray-700">{localParentComment.content}</p>
          </div>
        )}

        <div className="p-4 flex-1 overflow-y-auto">
          {localParentComment?.childComments && localParentComment.childComments.length > 0 ? (
            localParentComment.childComments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                onDelete={() => handleDeleteComment(comment.id)} // 삭제 핸들러 연결
              />
            ))
          ) : (
            <p className="text-gray-500">아직 답글이 없습니다.</p>
          )}
        </div>

        <div className="p-4 border-t bg-white">
          <CommentInput onSubmit={handleAddComment} placeholder="답글을 입력하세요..." />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
