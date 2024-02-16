import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1>Opps, sorry, page is not found :(</h1>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
