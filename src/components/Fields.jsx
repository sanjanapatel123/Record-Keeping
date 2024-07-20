import Button from "@mui/material/Button";
import { IoMdRemoveCircle } from "react-icons/io";

const Fields = ({ name, email, index, removeItem }) => {
  return (
    <div className="data">
      <div className="data_val">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Button onClick={()=>removeItem(index)} color="error" variant="contained">
          <IoMdRemoveCircle />
        </Button>
      </div>
    </div>
  );
};

export default Fields;
