// استيراد مكتبة Supabase
const { createClient } = supabase;

// استبدل هذه القيم بالقيم الفعلية الخاصة بك من مشروع Supabase
const supabaseUrl = 'YOUR_SUPABASE_URL'; // URL لمشروعك في Supabase
const supabaseKey = 'YOUR_ANON_KEY';    // anon key الخاص بمشروعك
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
    } else {
        console.log('Order status:', data.status);
    }
}
