import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MarkdownViewer } from '../components/MarkdownViewer';
import { QuizModal } from '../components/QuizModal';
import { getDocById, getNextDoc } from '../data/curriculum';
import { getQuizByChapterId } from '../data/quizzes';
import './DocPage.css';

export const DocPage = () => {
  const { docId } = useParams<{ docId: string }>();
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  if (!docId) {
    return <Navigate to="/" replace />;
  }

  const doc = getDocById(docId);

  if (!doc) {
    return (
      <div className="not-found">
        <h2>ページが見つかりません</h2>
        <p>指定されたドキュメントは存在しません。</p>
      </div>
    );
  }

  const quiz = getQuizByChapterId(docId);
  const nextDoc = getNextDoc(docId);

  return (
    <>
      <MarkdownViewer filePath={doc.path} title={doc.title} />

      {quiz && (
        <div className="quiz-section">
          <div className="quiz-section-content">
            <div className="quiz-section-info">
              <h3>確認クイズ</h3>
              <p>
                この章の理解度を確認しましょう。
                <span className="quiz-count">{quiz.questions.length}問</span>
                <span className="quiz-pass-info">（8割以上で合格）</span>
              </p>
            </div>
            <button
              className="quiz-start-button"
              onClick={() => setIsQuizOpen(true)}
            >
              クイズを開始
            </button>
          </div>
        </div>
      )}

      {quiz && (
        <QuizModal
          quiz={quiz}
          nextDoc={nextDoc}
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
        />
      )}
    </>
  );
};
