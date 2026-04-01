const steps = [
  "Uploading SRS",
  "Extracting Requirements",
  "Generating Test Cases",
  "Reviewing",
  "Finalizing Output"
];

export default function Pipeline({ activeStep }) {
  return (
    <div className="card">
      <h3>Processing Pipeline</h3>
      {steps.map((s, i) => (
        <div key={i} className="pipeline-step">
          {i <= activeStep ? "✅" : "⏳"} {s}
        </div>
      ))}
    </div>
  );
}
