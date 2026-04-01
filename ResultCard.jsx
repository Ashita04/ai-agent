export default function ResultCard({ count }) {
  return (
    <div className="card">
      <h3 className="done">✅ Processing Complete</h3>
      <p>Total Test Cases Generated: <strong>{count}</strong></p>
    </div>
  );
}
