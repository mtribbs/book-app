import {FaEdit} from "react-icons/fa";
import {FaTrashAlt} from "react-icons/fa";


const TableField = ({fieldName, settingsField, removeBook, editBook}) => {
    return (
        <div className="tableField">
            {fieldName}
            {settingsField && (
                <>
                <FaEdit 
                onClick={editBook} 
                style={{ color: "#36304a", marginRight: "10px" }} 
                />
                <FaTrashAlt 
                onClick={removeBook} 
                style={{ color: "#36304a", marginRight: "10px" }} 
                />
                </>
            )}
        </div>
    );
};

export default TableField;