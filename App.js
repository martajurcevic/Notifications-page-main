const markAllButton = document.getElementById("mark_all");
const unreadCountElement = document.getElementById("notifes");

function updateUnreadCount() {
  const unreadMessages = document.querySelectorAll(".unread");
  unreadCountElement.innerText = unreadMessages.length;
}

function markMessageAsRead(message) {
  message.classList.remove("unread");
  updateUnreadCount();
}

function markAllMessagesAsRead() {
  const unreadMessages = document.querySelectorAll(".unread");
  unreadMessages.forEach((message) => {
    message.classList.remove("unread");
  });
  updateUnreadCount();
}

markAllButton.addEventListener("click", () => {
  markAllMessagesAsRead();
});

updateUnreadCount();
