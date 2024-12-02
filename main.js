




// 1. Prompt orqali foydalanuvchidan ma'lumot olish
let userName = prompt("Ismingizni kiriting:");
let userSurname = prompt("Familiyangiz:");
let userAge = prompt("Yoshingiz:");


// 2. Foydalanuvchidan 1 yoki 2 tanlashini so'rash
let action = prompt("Iltimos, 1 yoki 2 raqamini tanlang:\n1. Ma'lumotlaringizni katta harflarda yozish.\n2. Ma'lumotlaringizni kichik harflarda yozish.");

// 3. Agar foydalanuvchi 1 yoki 2 ni tanlasa, tegishli amallarni bajarish
let resultText = "";

if (action === "1") {
    resultText = `Ismingiz: ${userName.toUpperCase()}<br>Familiyangiz: ${userSurname.toUpperCase()}<br>Yoshingiz: ${userAge}<br>`;
} else if (action === "2") {
    resultText = `Ismingiz: ${userName.toLowerCase()}<br>Familiyangiz: ${userSurname.toLowerCase()}<br>Yoshingiz: ${userAge}`;
} else {
    // Agar foydalanuvchi 1 yoki 2 ni tanlamagan bo'lsa, alert chiqarish
    alert("Iltimos, faqat 1 yoki 2 raqamini tanlang!");
}

// 4. Barcha ma'lumotlarni ekranda ko'rsatish
document.getElementById("result-text").innerHTML = resultText;
document.getElementById("result-container").style.display = "block";
