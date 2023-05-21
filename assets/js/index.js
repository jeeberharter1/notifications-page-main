const markRead = document.getElementById('mark-read'),
      notifications = document.querySelectorAll('.notification'),
      notificationsNo = document.getElementById('notifications'),
      notificationDots = document.querySelectorAll('.notification__unread');

// when "Mark all as read" button is clicked, remove unread styling and
// reset notification counter
if (markRead) {
    markRead.addEventListener('click', () => {
        notificationsNo.innerHTML = '0';

        notifications.forEach(notification => {
            notification.classList.remove('unread');
        })

        notificationDots.forEach(dot => {
            dot.classList.remove('notification__unread');
        })
    })
}