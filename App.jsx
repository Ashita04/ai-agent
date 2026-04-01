import { useState } from "react";
import axios from "axios";

import FileUpload from "./components/FileUpload";
// import Pipeline from "./components/Pipeline";
import ConsoleLog from "./components/ConsoleLog";
import ResultCard from "./components/ResultCard";
import AgentStatus from "./components/AgentStatus";

export default function App() {
  const [logs, setLogs] = useState([]);
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(null);

  const uploadFile = async (file) => {
    setLogs(["Uploading file..."]);
    setStep(0);

    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      "http://localhost:8000/generate-testcases/",
      formData
    );

    setLogs(res.data.logs || []);
    setCount(res.data.count);
    setStep(4);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto" }}>
      <h1>🧠 SRS → Test Case Generator</h1>

      <FileUpload onUpload={uploadFile} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {/* <Pipeline activeStep={step} /> */}
        <AgentStatus logs={logs} />
        <ConsoleLog logs={logs} />
      </div>

      {count !== null && <ResultCard count={count} />}
    </div>
  );
}