// استيراد مكتبة Supabase
const { createClient } = supabase;

// استبدل هذه القيم بالقيم الفعلية الخاصة بك من مشروع Supabase
const supabaseUrl = 'https://jmtblmywbuigkgteaaky.supabase.co'; // رابط Supabase الفعلي
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptdGJsbXl3YnVpZ2tndGVhYWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwNTc0MzUsImV4cCI6MjA1MjYzMzQzNX0.2d0_wH5uaKX64FxiR3RYmGevh2cF6Vs7VQ0k6zptIqI';    // الـ anon key الفعلي
const supabase = createClient(supabaseUrl, supabaseKey);

// دالة لإنشاء طلب
async function createOrder(orderData) {
    const { data, error } = await supabase
        .from('orders')   // اسم الجدول الذي أنشأته في Supabase
        .insert([orderData]);   // إدخال بيانات الطلب في الجدول

    if (error) {
        console.error('Error creating order:', error.message);
    } else {
        console.log('Order created:', data);
    }
}

// دالة للحصول على حالة الطلب
async function getOrderStatus(orderId) {
    const { data, error } = await supabase
        .from('orders') // نفس اسم الجدول في Supabase
        .select('status') // الحصول على حالة الطلب
        .eq('id', orderId) // شرط البحث باستخدام الـ ID
        .single();  // احصل على عنصر واحد فقط

    if (error) {
        console.error('Error fetching order status:', error.message);
        document.getElementById('order-status').innerText = 'Error: ' + error.message;
    } else {
        console.log('Order status:', data.status);
        document.getElementById('order-status').innerText = 'Order Status: ' + data.status;
    }
}

