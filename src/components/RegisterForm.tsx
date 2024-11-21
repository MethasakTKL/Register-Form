import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid2";
// Validation schema
const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "Must have at least 2 characters.")
    .max(20, "Must be no more than 20 characters.")
    .required("Please enter your firstname."),
  lastName: yup
    .string()
    .min(2, "Must have at least 2 characters.")
    .max(20, "Must be no more than 20 characters.")
    .required("Please enter your lastname."),
  email: yup
    .string()
    .email("Email is invalid format.")
    .required("Please enter your email."),
  password: yup
    .string()
    .min(8, "Must have at least 8 characters.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/[0-9]/, "Password must contain at least one number.")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character."
    )
    .required("Please enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match") // แก้ไขตรงนี้
    .required("Please enter password again."),
});

export default function RegisterForm() {
  // useFormik hook
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          filter: "blur(15px)",
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Paper
            sx={{
              padding: "3rem",
              background: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              width: "95%",
              maxWidth: "500px",
              margin: "2rem auto",
            }}
          >
            <Typography
              sx={{
                fontSize: 40,
                fontWeight: "800",
                color: "#e25328",
                lineHeight: 1,
              }}
            >
              Questionaire Foxbith
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: 500,
                  pb: "rem",
                  color: "#626365",
                }}
              >
                Create Account
              </Typography>
            </Box>
            <Box sx={{ display:"flex",flexDirection:"column", height: "520px",gap:1}}>
              {/* First Name */}
              <TextField
                id="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                fullWidth
              />
              {/* Last Name */}
              <TextField
                id="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                fullWidth
              />
              {/* Email */}
              <TextField
                id="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
              />
              {/* Password */}
              <TextField
                type="password"
                id="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                fullWidth
              />
              {/* Confirm Password */}
              <TextField
                type="password"
                id="confirmPassword"
                label="Password (re-enter)"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
                fullWidth
              />
              <Box width={"100%"} sx={{}}>
                <Typography sx={{ fontSize: 13, color: "grey" }}>
                  Password <br />
                  - must contain at least one uppercase and one lowercase
                  letter.
                  <br />
                  - must contain at least one number.
                  <br />- must contain at least one special character.
                  [!@#$%^&*(),.?":{}
                  |]
                  <br />
                </Typography>
              </Box>
              {/* Submit Button */}
            </Box>{" "}
            <Button
              type="submit" // Use type="submit" to trigger the form submission
              variant="contained"
              sx={{
                mt: "2rem",
                width: "50%",
                height: "3rem",
                background: "#e25328",
              }}
              // disabled={formik.isSubmitting}
            >
              Register
            </Button>
          </Paper>
        </form>
      </Box>
    </Box>
  );
}
