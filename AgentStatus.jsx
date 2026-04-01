import React from "react";

const AGENTS = [
  { key: "Business Analyst", label: "Business Analyst" },
  { key: "QA Engineer", label: "QA Engineer" },
  { key: "QA Reviewer", label: "QA Reviewer" },
  { key: "Finalizer", label: "Finalizer" }
];

export default function AgentStatus({ logs }) {
  const getStatus = (agent) => {
    const found = logs.find(log => log.includes(agent.key));

    if (!found) return "pending";
    if (found.toLowerCase().includes("completed") || found.toLowerCase().includes("final"))
      return "done";

    return "running";
  };

  const renderIcon = (status) => {
    if (status === "done") return "✅";
    if (status === "running") return "🟡";
    return "⏳";
  };

  return (
    <div className="card">
      <h3>🤖 Agent Status</h3>

      {AGENTS.map(agent => {
        const status = getStatus(agent);

        return (
          <div
            key={agent.key}
            style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
          >
            <span style={{ marginRight: "10px" }}>
              {renderIcon(status)}
            </span>
            <span>
              <strong>{agent.label}</strong>
              {status === "done" && " – Completed"}
              {status === "running" && " – Processing"}
              {status === "pending" && " – Waiting"}
            </span>
          </div>
        );
      })}
    </div>
  );
}
