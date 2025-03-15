import type CreateReservationPurchaseDTO from "./DTOs/CreateReservationPurchaseDTO";

export class Transaction {
    public static async createTransaction(dto: CreateReservationPurchaseDTO) {
        const response = await fetch(
            import.meta.env.PUBLIC_API +
            "transaction.php" ,
            {
                method: "POST",
                body: JSON.stringify(dto),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data: {message: String} = await response.json()
        return data.message;
    }
    public static async confirmTransaction(idTransaction: string) {
         await fetch(
            import.meta.env.PUBLIC_API +
            "transaction.php?transactionId=" + idTransaction ,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return true;
    }
    public static async downloadTickets(transactionId: string) {
        window.open(import.meta.env.PUBLIC_API + 'transaction.php?transactionId=' + transactionId)
    }

    public static async downloadBlobTickets(transactionId: string) {
        const response = await fetch(import.meta.env.PUBLIC_API + `transaction.php?transactionId=${transactionId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/pdf',
            },
        });

        if (response.ok) {
            const blob = await response.blob();
            return blob;
        } else {
            throw "Error downloading PDF";
        }

    }

    public static generateCustomTransactionID() {
        const prefix = "DC_100P";
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const timestamp = Date.now();
        let randomPart = "";
        
        for (let i = 0; i < 20; i++) {
          randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        randomPart += "_FDC_";
        
        return `${prefix}_${randomPart}_${timestamp}`;
      }
}