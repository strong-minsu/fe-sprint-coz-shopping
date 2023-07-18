import "./ProductModal.css";
import { useEffect, useRef } from "react";

function ModalBasic(props) {
  // 모달 끄기
  const closeModal = () => {
    props.setModalOpen(false);
  };
  const modalRef = useRef();

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (e) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        props.setModalOpen(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  return (
    <div className="modal-background">
      <div className="modal-container" ref={modalRef}>
        <i
          className="close-modal fa-solid fa-rectangle-xmark fa-lg"
          onClick={closeModal}
        ></i>

        <div className="modal-img-container">
          <img className="modal-img" src={props.modalSrc} alt="" />
        </div>
      </div>
    </div>
  );
}
export default ModalBasic;
