// src/pages/Notifications.js
import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const handleShowNotifications = () => {
    // when button clicked, populate notifications
    setNotifications([
      { id: 1, text: "New post published!" },
      { id: 2, text: "You received a new comment." },
      { id: 3, text: "Post updated successfully." },
    ]);
  };

  return (
    <section className="notificationsPage">
      <h2>Notifications</h2>

      <button onClick={handleShowNotifications}>Show Notifications</button>

      <section className="notificationsList">
        {notifications.map((note) => (
          <div key={note.id}>{note.text}</div>
        ))}
      </section>
    </section>
  );
};

export default Notifications;
