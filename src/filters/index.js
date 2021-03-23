export function formatPrice(number) {
    return (new Intl.NumberFormat("en-DE").format(number) + "₫");
}