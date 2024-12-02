import Avatar from '@eolluga/eolluga-ui/Display/Avatar';
import Icon from '@eolluga/eolluga-ui/icon/Icon';
import { Button } from '@/shadcn/ui/button';
import { Comment } from '@/types';

interface CommentItemProps {
  comment: Comment;
  onDelete: (commentId: number) => void;
  toggleReplies?: () => void;
  expanded?: boolean;
}

const CommentItem = ({ comment, onDelete, toggleReplies, expanded }: CommentItemProps) => (
  <div className="flex items-start gap-3 mb-2">
    <Avatar size="S" />
    <div className="flex-1">
      <div className="text-sm flex justify-between items-center">
        <span className="font-medium">User {comment.writerId}</span>
        <div>
          <button
            onClick={() => onDelete(comment.id)}
            className="flex items-center justify-center pb-1 rounded bg-transparent hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300"
          >
            <Icon icon="delete" size={20} className="text-gray-500" />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600">{comment.content}</p>
      {toggleReplies && comment.childComments && comment.childComments.length > 0 && (
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-500 hover:underline"
          onClick={toggleReplies}
        >
          {expanded ? '답글 숨기기' : `답글 ${comment.childComments.length}개 더보기`}
        </Button>
      )}
    </div>
  </div>
);

export default CommentItem;
