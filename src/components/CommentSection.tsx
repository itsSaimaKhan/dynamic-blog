// import React, { useState } from "react";
// import { Card, CardContent } from "../components/ui/card";
// import { Input } from "../components/ui/input";
// import { Button } from "../components/ui/button";

// interface Comment {
//   id: string;
//   author: string;
//   text: string;
// }

// interface CommentsectionProps {
//   postId: string;
// }

// export default function Commentsection({ postId }: CommentsectionProps) {
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [newComment, setNewComment] = useState("");
//   const [authorName, setAuthorName] = useState("");
//   const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
//   const [error, setError] = useState("");

//   const handleAddComment = () => {
//     if (!authorName.trim() || !newComment.trim()) {
//       setError("Both name and comment are required.");
//       return;
//     }

//     const newCommentObj: Comment = {
//       id: new Date().toISOString(),
//       author: authorName,
//       text: newComment,
//     };
//     setComments([...comments, newCommentObj]);
//     setNewComment("");
//     setAuthorName("");
//     setError(""); // Clear errors on successful addition
//   };

//   const handleEditComment = (commentID: string) => {
//     const commentToEdit = comments.find((comment) => comment.id === commentID);
//     if (commentToEdit) {
//       setNewComment(commentToEdit.text);
//       setAuthorName(commentToEdit.author);
//       setEditingCommentId(commentID);
//     }
//   };

//   const handleSaveEditedComment = () => {
//     if (!authorName.trim() || !newComment.trim()) {
//       setError("Both name and comment are required.");
//       return;
//     }

//     const updatedComments = comments.map((comment) =>
//       comment.id === editingCommentId
//         ? { ...comment, text: newComment, author: authorName }
//         : comment
//     );
//     setComments(updatedComments);
//     setNewComment("");
//     setAuthorName("");
//     setEditingCommentId(null);
//     setError(""); // Clear errors on successful edit
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-semibold">Comments</h2>
//       <div className="mt-4 space-y-4">
//         {comments.length > 0 ? (
//           comments.map((comment) => (
//             <Card key={comment.id}>
//               <CardContent className="p-4">
//                 <div className="font-semibold">{comment.author}</div>
//                 <p>{comment.text}</p>
//                 <Button
//                   onClick={() => handleEditComment(comment.id)}
//                   className="mt-2 text-blue-500"
//                 >
//                   Edit
//                 </Button>
//               </CardContent>
//             </Card>
//           ))
//         ) : (
//           <p className="text-slate-400">No comments yet</p>
//         )}
//       </div>

//       <div className="mt-6">
//         {error && <p className="text-red-500 mb-2">{error}</p>}
//         <Input
//           type="text"
//           value={authorName}
//           onChange={(e) => setAuthorName(e.target.value)}
//           placeholder="Your Name"
//           className="w-full mb-2"
//         />
//         <Input
//           type="text"
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Add a comment"
//           className="w-full mb-2"
//         />
//         <Button
//           onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
//           className="mt-4"
//         >
//           {editingCommentId ? "Save" : "Submit"}
//         </Button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentsectionProps {
  postId: string;
}

export default function Commentsection({ postId }: CommentsectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);

  // Example of using postId temporarily
  React.useEffect(() => {
    console.log(`Current Post ID: ${postId}`); // Temporary usage to avoid linting error
  }, [postId]);

  return (
    <div>
      <h2>Comments</h2>
      {/* Comments section code */}
    </div>
  );
}
