document.addEventListener("DOMContentLoaded", function () {
  const notificationContainer = document.getElementById(
    "notificationContainer"
  );
  const notifesSpan = document.getElementById("notifes");
  const markAllButton = document.getElementById("mark_all");

  const notifications = [
    {
      imageSrc: "assets/images/avatar-mark-webber.webp",
      imageAltText: "User image: Mark Webber",
      userName: "Mark Webber",
      action: "REACT_TO_POST",
      post: "My first tournament today!",
      status: "NEW",
      group: null,
      time: "1m ago",
      message: null,
      commentedPicture: null,
      commentedPictureAltText: null,
    },
    {
      imageSrc: "assets/images/avatar-angela-gray.webp",
      imageAltText: "User image: Angela Gray",
      userName: "Angela Gray",
      action: "FOLLOW",
      post: null,
      status: "NEW",
      group: null,
      time: "5m ago",
      message: null,
      commentedPicture: null,
      commentedPictureAltText: null,
    },
    {
      imageSrc: "assets/images/avatar-jacob-thompson.webp",
      imageAltText: "User image: Jacob Thompson",
      userName: "Jacob Thompson",
      action: "REACT_TO_POST",
      post: "Chess Club",
      status: "NEW",
      group: null,
      time: "1 day ago",
      message: null,
      commentedPicture: null,
      commentedPictureAltText: null,
    },
    {
      imageSrc: "assets/images/avatar-rizky-hasanuddin.webp",
      imageAltText: "User image: Rizky Hasanuddin",
      userName: "Rizky Hasanuddin",
      action: "PRIVATE_MESSAGE",
      post: null,
      status: null,
      group: null,
      time: "5 days ago",
      message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now, and I'm already having lots of fun and improving my game.`,
      commentedPicture: null,
      commentedPictureAltText: null,
    },
    {
      imageSrc: "assets/images/avatar-kimberly-smith.webp",
      imageAltText: "User image: Kimberly Smith",
      userName: "Kimberly Smith",
      action: "COMMENT_ON_PICTURE",
      post: null,
      status: null,
      group: null,
      time: "1 week ago",
      message: null,
      commentedPicture: "assets/images/image-chess.webp",
      commentedPictureAltText: "Chess player",
    },
    {
      imageSrc: "assets/images/avatar-nathan-peterson.webp",
      imageAltText: "User image: Nathan Peterson",
      userName: "Nathan Peterson",
      action: "REACT_TO_POST",
      post: "5 end-game strategies to increase your win rate",
      status: null,
      group: null,
      time: "2 weeks ago",
      message: null,
      commentedPicture: null,
      commentedPictureAltText: null,
    },
    {
      imageSrc: "assets/images/avatar-anna-kim.webp",
      imageAltText: "User image: Anna Kim",
      userName: "Anna Kim",
      action: "REACT_TO_POST",
      post: "Chess Club",
      status: null,
      group: null,
      time: "2 weeks ago",
      message: null,
      commentedPicture: null,
      commentedPictureAltText: null,
    },
  ];

  function createNotificationCard(notification) {
    const notificationCard = document.createElement("div");
    notificationCard.className = "notification_card";
    if (notification.status === "NEW") {
      notificationCard.classList.add("unread");
    }

    const avatar = document.createElement("img");
    avatar.src = notification.imageSrc;
    avatar.alt = notification.imageAltText;

    const description = document.createElement("div");
    description.className = "description";

    const userActivity = document.createElement("p");
    userActivity.className = "user_activity";

    const strongName = document.createElement("strong");
    strongName.innerText = notification.userName;

    const strongPost = document.createElement("strong");
    strongPost.innerText = notification.post;

    const actionText = document.createTextNode(
      notification.action === "REACT_TO_POST"
        ? ` reacted to your recent post `
        : notification.action === "FOLLOW"
        ? " followed you"
        : notification.action === "JOIN_GROUP"
        ? ` has joined your group ${notification.post}`
        : notification.action === "PRIVATE_MESSAGE"
        ? " sent you a private message"
        : notification.action === "COMMENT_ON_PICTURE"
        ? ` commented on your picture`
        : notification.action === "LEFT_GROUP"
        ? ` left the group ${notification.post}`
        : ` left the group `
    );

    userActivity.appendChild(strongName);

    if (notification.userName === "REACT_TO_POST") {
      const postLink = document.createElement("a");
      postLink.style.color = "var(--Blue)";
      postLink.style.cursor = "pointer";
      postLink.style.fontWeight = "var(--Dark-blue)";
      postLink.innerText = notification.post;
      userActivity.appendChild(actionText);
      userActivity.appendChild(postLink);
    } else {
      userActivity.appendChild(actionText);
    }

    userActivity.appendChild(strongPost);

    const time = document.createElement("p");
    time.className = "time";
    time.innerText = notification.time;

    description.appendChild(userActivity);
    description.appendChild(time);

    notificationCard.appendChild(avatar);
    notificationCard.appendChild(description);

    if (notification.commentedPicture) {
      const pictureLink = document.createElement("a");
      const commentedPicture = document.createElement("img");
      commentedPicture.src = notification.commentedPicture;
      commentedPicture.alt = notification.comentedPictureAltText;
      pictureLink.appendChild(commentedPicture);
      notificationCard.appendChild(pictureLink);
    }

    if (notification.message) {
      const messageContainer = document.createElement("div");
      messageContainer.className = "message";
      const messageText = document.createElement("p");
      messageText.innerText = notification.message;
      messageContainer.appendChild(messageText);
    }

    return notificationCard;
  }

  function updateUnreadCount() {
    const unreadMessages = document.querySelectorAll(".unread");
    notifesSpan.innerText = unreadMessages.length;
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

  markAllButton.addEventListener("click", markAllMessagesAsRead);

  notifications.forEach((notification) => {
    const notificationCard = createNotificationCard(notification);
    notificationCard.addEventListener("click", () => {
      markMessageAsRead(notificationCard);
    });

    if (notification.userName === "Rizky Hasanuddin") {
      notificationContainer.appendChild(notificationCard);
      if (notification.message) {
        const messageContainer = document.createElement("div");
        messageContainer.className = "message";
        const messageText = document.createElement("p");
        messageText.innerText = notification.message;
        messageContainer.appendChild(messageText);
        notificationContainer.appendChild(messageContainer);
      }
    } else {
      notificationContainer.appendChild(notificationCard);
    }
  });

  updateUnreadCount();
});
