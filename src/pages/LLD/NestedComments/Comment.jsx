import CommentItem from "./CommentItem";

const Comment = ({ data }) => {
  return (
    <div className="p-2">
      {data?.map((comment, idx) => (
        <CommentItem comment={comment} index={idx} />
      ))}
    </div>
  );
};

export default Comment;
