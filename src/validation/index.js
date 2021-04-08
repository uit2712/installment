import { defineRule } from 'vee-validate'

// dùng validate động, truyền thêm message vào e, nghiên cứu thêm chỗ này
defineRule('required', (value) => {
    if (!value || !value.length) {
        return `This field is required`;
    }
    return true;
});
