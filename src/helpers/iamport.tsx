import { RequestPayParams, RequestPayResponse } from "@/types/iamport";

const onClickPayment = (
  mid: string, 
  price: number,
  buyer_name: string,
  buyer_tel: string,
  buyer_addr: string,
  callback: (response: RequestPayResponse) => void
) => {
  if (!window.IMP) return

  const { IMP } = window
  IMP.init(import.meta.env.VITE_iamport_idCode)

  const data: RequestPayParams = {
    pg: `kakaopay`,
    pay_method: "kakaopay",
    merchant_uid: mid,
    amount: price,
    name: "XSO",
    buyer_name,
    buyer_tel,
    buyer_addr
  }

  IMP.request_pay(data, callback)
}

export default onClickPayment