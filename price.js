// سعر كل عنصر بشكل افتراضي
const prices = {
    tomato: 1.00,
    onion: 0.80,
    potato: 0.50
};

// تحديث السعر بناءً على الكمية التي يختارها المستخدم
function updatePrice(item, quantity) {
    const price = prices[item];  // استرجاع السعر الأساسي للعنصر
    const totalPrice = price * quantity;  // حساب السعر الإجمالي
    document.getElementById(`${item}-price`).innerText = `Total Price: $${totalPrice.toFixed(2)}`;
}

// أمثلة لاستخدام الدالة
// تحديث السعر عند تغيير الكمية للطماطم
updatePrice('tomato', 3);  // تحديث السعر إلى 3 طماطم

// تحديث السعر عند تغيير الكمية للبصل
updatePrice('onion', 5);  // تحديث السعر إلى 5 بصلات

// تحديث السعر عند تغيير الكمية للبطاطس
updatePrice('potato', 2);  // تحديث السعر إلى 2 بطاطس
