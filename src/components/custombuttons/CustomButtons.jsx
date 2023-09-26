import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CustomPrevButton = ({ onClick }) => (
  <button onClick={onClick} className="custom-prev-button">
    <FaChevronLeft className="icon text-white" />
  </button>
);

const CustomNextButton = ({ onClick }) => (
  <button onClick={onClick} className="custom-next-button">
    <FaChevronRight className="icon text-white" />
  </button>
);

export { CustomPrevButton, CustomNextButton };
