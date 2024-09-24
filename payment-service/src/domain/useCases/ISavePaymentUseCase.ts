import { PaymentEntity } from "../../domain/entities";

export interface ISavePaymentUseCase {
    execute(data:any):Promise<PaymentEntity | null>
}