import RedeemGiftCardDTO from "./RedeemGiftCardDTO";

export class GiftCard {
  id: number;
  amount: number;
  redeemed: boolean;
  creationDate: string;

  constructor(
    giftCard: GiftCard,
    id = 0,
    amount = 0,
    redeemed = false,
    creationDate = ""
  ) {
    if (giftCard) {
      this.id = giftCard.id;
      this.amount = giftCard.amount;
      this.redeemed = giftCard.redeemed;
      this.creationDate = giftCard.creationDate;
    } else {
      this.id = id;
      this.amount = amount;
      this.redeemed = redeemed;
      this.creationDate = creationDate;
    }
  }

  public static async getGiftCardByCode(code: String) {
    const response = await fetch(
      import.meta.env.PUBLIC_API + "giftcards/giftcard.php?code=" + code,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      return data as GiftCard;
    } else {
      if (response.status === 400 || response.status === 404) {
        throw new Error(data.message);
      } else {
        throw new Error("Unexpected Error");
      }
    }
  }

  public static async redeemedGiftcard(dto: RedeemGiftCardDTO) {
    const response = await fetch(
      import.meta.env.PUBLIC_API + "giftcards/giftcard.php",
      {
        method: "POST",
        body: JSON.stringify(dto),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      return data.message;
    } else {
      if (response.status === 400 || response.status === 404) {
        throw new Error(data.error);
      } else {
        throw new Error("Server Error");
      }
    }
  }

  public static async downloadLetter(code: string) {
    window.open(import.meta.env.PUBLIC_API + 'giftcards/download-letter.php?code=' + code)
}
}
