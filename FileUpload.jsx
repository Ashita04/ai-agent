export default function FileUpload({ onUpload }) {
  const handleDrop = (e) => {
    e.preventDefault();
    onUpload(e.dataTransfer.files[0]);
  };

  return (
    <div
      className="dropzone card"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => document.getElementById("file").click()}
    >
      <input
        id="file"
        type="file"
        accept=".pdf"
        hidden
        onChange={(e) => onUpload(e.target.files[0])}
      />
      <h2>📄 Upload SRS Document</h2>
      <p>Drag & drop or click to upload</p>
    </div>
  );
}
