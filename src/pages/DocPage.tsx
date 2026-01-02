import { useParams, Navigate } from 'react-router-dom';
import { MarkdownViewer } from '../components/MarkdownViewer';
import { getDocById } from '../data/curriculum';

export const DocPage = () => {
  const { docId } = useParams<{ docId: string }>();

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

  return <MarkdownViewer filePath={doc.path} title={doc.title} />;
};
