import { getIn } from "formik";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery"

function AddressForm({
    type,
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
  }) {
    const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <div>
      
    </div>
  )
}

export default AddressForm
