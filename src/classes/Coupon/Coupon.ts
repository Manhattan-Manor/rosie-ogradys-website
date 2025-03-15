export class Coupon {
    id: number;
    code: string;
    isPercentage: boolean;
    value: number;
    expiration: string;

    constructor(coupon?: Coupon, id:number = 0, code: string = '', isPercentage: boolean = false, value: number = 0, expiration: string = ''){
        if (coupon) {
            this.id = coupon.id;
            this.code = coupon.code;
            this.isPercentage = coupon.isPercentage;
            this.value = coupon.value;
            this.expiration = coupon.expiration;
        } else {
            this.id = id;
            this.code = code;
            this.isPercentage = isPercentage;
            this.value = value;
            this.expiration = expiration;
        }
    }


    public static async getCouponByCode(code: String) {
        const response = await fetch(
            import.meta.env.PUBLIC_API +
            "coupons.php?code=" + code,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                
            }
        );

        if (!response.ok) {
            const errorMessage: {message?: string} = await response.text();
            throw new Error(errorMessage.message || "Error fetching coupon.");
        }
        const data: Coupon = await response.json(); 
        return data;
    }
}