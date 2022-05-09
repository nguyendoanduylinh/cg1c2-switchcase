let browser = prompt("Bạn đang dùng trình duyệt gì?")
switch (browser) {
    case "Edge":
        alert("Bạn đang dùng trình duyệt tốt nhất rồi!");
        break;
    case "Chrome":
    case "Firefox":
    case "Opera":
    case "Safari":
        alert("Chúng tôi cũng hỗ trợ trình duyệt này!");
        break;
    default:
        alert("Hy vọng trang web này hiển thị tốt!")
}