import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

function Shipping({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    setFieldValue,
  }) {
  return (
    <Box m="30px auto">
      {/* BILLING FORM */}
      <Box>
      <Typography sx={{ mb: "15px" }} fontSize="18px">
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  )
}

export default Shipping
