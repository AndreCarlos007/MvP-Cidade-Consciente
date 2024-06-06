import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

// Lista de palavrões para filtrar
const forbiddenWords = ['palavrao1', 'palavrao2', 'palavrao3'];

// Função para filtrar palavrões
const filterProfanity = (text) => {
  let cleanText = text;
  forbiddenWords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    cleanText = cleanText.replace(regex, '****');
  });
  return cleanText;
};

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [username, setUsername] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() === '' || username.trim() === '') return;

    const filteredPost = filterProfanity(newPost);
    const post = {
      id: uuidv4(),
      username,
      content: filteredPost,
      date: new Date().toLocaleString(),
      comments: [],
    };
    setPosts([...posts, post]);
    setNewPost('');
  };

  const handleCommentSubmit = (postId, comment) => {
    if (comment.trim() === '') return;

    const filteredComment = filterProfanity(comment);
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, { id: uuidv4(), content: filteredComment, date: new Date().toLocaleString() }] } 
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto gradientBg shadow-md rounded-md p-4">
        <h1 className="text-2xl font-bold mb-4">Fórum</h1>
        <form onSubmit={handlePostSubmit} className="mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite seu nome de usuário"
          />
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Digite seu post aqui..."
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Postar
          </button>
        </form>
        <div className="space-y-4">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-4 rounded-md shadow-sm"
            >
              <p><strong>{post.username}</strong> <em>{post.date}</em></p>
              <p>{post.content}</p>
              <CommentSection postId={post.id} comments={post.comments} onCommentSubmit={handleCommentSubmit} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CommentSection = ({ postId, comments, onCommentSubmit }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(postId, newComment);
    setNewComment('');
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Comentários</h2>
      <form onSubmit={handleCommentSubmit} className="mt-2">
        <textarea
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="2"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Digite seu comentário aqui..."
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Comentar
        </button>
      </form>
      <div className="mt-4 space-y-2">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-2 rounded-md shadow-sm">
            <p><em>{comment.date}</em></p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
