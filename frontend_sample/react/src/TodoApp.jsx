import React, { useState, useEffect } from "react";

// JWTトークン取得は仮定: localStorage.getItem('token') で取得
// APIエンドポイントは /api/todo で統一

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // JWTトークン取得
  const token = localStorage.getItem("token");

  // ToDo一覧取得
  useEffect(() => {
    if (!token) return;
    setLoading(true);
    fetch("/api/todo", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch tasks");
        setLoading(false);
      });
  }, [token]);

  // タスク追加
  const handleAddTask = async () => {
    if (!newTaskTitle.trim()) return;
    setError("");
    try {
      const res = await fetch("/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: newTaskTitle }),
      });
      if (!res.ok) throw new Error("Add failed");
      const newTask = await res.json();
      setTasks((prev) => [...prev, newTask]);
      setNewTaskTitle("");
    } catch {
      setError("タスク追加に失敗しました");
    }
  };

  // タスク完了トグル
  const handleToggleTask = async (task) => {
    setError("");
    try {
      const res = await fetch(`/api/todo/${task.id}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Toggle failed");
      const updated = await res.json();
      setTasks((prev) =>
        prev.map((t) => (t.id === updated.id ? { ...t, done: updated.done } : t))
      );
    } catch {
      setError("更新に失敗しました");
    }
  };

  return (
    <div style={{ padding: "16px", fontFamily: "sans-serif" }}>
      <h2>ToDo App</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div style={{ marginBottom: 16 }}>
        <input
          style={{ border: "1px solid #ccc", padding: 8, width: "70%" }}
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="New task"
        />
        <button
          style={{ background: "#007bff", color: "white", padding: "8px 12px", marginLeft: 8 }}
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul style={{ padding: 0, listStyle: "none" }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ marginBottom: 8 }}>
              <span
                style={{
                  textDecoration: task.done ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => handleToggleTask(task)}
              >
                {task.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
