import { Status } from "@/types/order";

function orderStatusToString(status: Status, isSeller: boolean) {
  switch (status) {
    case "order_completed":
      return isSeller ? "구매 확인" : "주문 완료"
    case "waiting_deliver":
      return "발송 대기"
    case "deliver_started":
      return "발송 시작"
    case "deliver_completed":
      return isSeller? "판매 완료" : "발송 완료"
    case "order_canceled":
      return "주문 취소"
    default:
      return "무명 상태"
  }
}

export default orderStatusToString