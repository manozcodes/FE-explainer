/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Typography,
  IconButton,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function createData(name, price, qty, img) {
  return { name, price, qty, img, favorite: false };
}

export default function CartItems() {
  const [rows, setRows] = React.useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [subtotal, setSubtotal] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setSubtotal(
      rows.reduce(
        (acc, row) =>
          acc + row.price?.replaceAll("$", "")?.replaceAll('"', "") * row.qty ||
          1,
        0
      )
    );
    setDiscount(subtotal > 200 ? 20 : 0);
    setTotal(subtotal - discount);
  }, [rows]);

  const toggleFavorite = (name) => {
    setRows((prev) =>
      prev.map((row) =>
        row.name === name ? { ...row, favorite: !row.favorite } : row
      )
    );
  };

  const handleDelete = (name) => {
    setRows((prev) => prev.filter((row) => row.name !== name));
  };

  const updateQuantity = (name, delta) => {
    setRows((prev) =>
      prev.map((row) =>
        row.title === name
          ? { ...row, qty: Math.max(1, row.qty || 1 + delta) }
          : row
      )
    );
  };

  // const subtotal = rows.reduce(
  //   (acc, row) =>
  //     acc + row.price?.replaceAll("$", "")?.replaceAll('"', "") * row.qty || 1,
  //   0
  // );
  // const discount = subtotal > 200 ? 20 : 0;
  // const total = subtotal - discount;

  return (
    <Box display="flex" gap={3}>
      <Box flex={3}>
        <TableContainer
          component={Paper}
          sx={{ maxHeight: 600, overflow: "auto" }}
        >
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography variant="h6" fontWeight={600}>
                    Product
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6" fontWeight={600}>
                    Quantity
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6" fontWeight={600}>
                    Price
                  </Typography>
                </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <Box display="flex" gap={3}>
                      <img
                        src={
                          "https://plus.unsplash.com/premium_photo-1756757313440-eee42d853d80?q=80&w=1012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        alt={row.name}
                        style={{
                          width: 100,
                          height: 100,
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />

                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems={"flex-start"}
                      >
                        <Typography variant="h6" fontWeight={600}>
                          {row.title}
                        </Typography>
                        {/* <Typography variant="body1" fontWeight={400}>
                          Size: M
                        </Typography> */}
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box display="flex" alignItems="center" gap={1}>
                      <IconButton
                        onClick={() => updateQuantity(row.title, -1)}
                        sx={{
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          width: 32,
                          height: 32,
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography>{row.qty || 1}</Typography>
                      <IconButton
                        onClick={() => updateQuantity(row.title, 1)}
                        sx={{
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          width: 32,
                          height: 32,
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1" fontWeight={400}>
                      $
                      {(
                        row.price?.replaceAll("$", "")?.replaceAll('"', "") *
                          row.qty || 1
                      ).toFixed(2)}
                    </Typography>
                  </TableCell>

                  <TableCell align="center">
                    <IconButton onClick={() => toggleFavorite(row.name)}>
                      {row.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                  </TableCell>

                  <TableCell align="center">
                    <IconButton onClick={() => handleDelete(row.name)}>
                      <DeleteIcon />
                    </IconButton>
                    <Typography variant="body2">Remove</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box display="flex" justifyContent="space-between" mt={5}>
          <Button
            variant="outlined"
            sx={{ border: "1px solid #2d5546", color: "#2d5546" }}
            startIcon={<ArrowBackIcon />}
          >
            Continue Shopping
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2d5546",
              "&:hover": { backgroundColor: "#07733fd5" },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Make Purchase
          </Button>
        </Box>
      </Box>

      <Box flex={1} display="flex" flexDirection="column" gap={2}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Have a coupon?</Typography>
          <Box display="flex" mt={1}>
            <TextField
              size="small"
              placeholder="Coupon code"
              fullWidth
              sx={{
                "& fieldset": { borderRadius: "8px 0 0 8px" },
              }}
            />
            <Button
              variant="contained"
              sx={{
                borderRadius: "0 8px 8px 0",
                px: 3,
                backgroundColor: "#2d5546",
                "&:hover": { backgroundColor: "#07733fd5" },
              }}
            >
              Apply
            </Button>
          </Box>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Order Summary</Typography>
          <Divider sx={{ my: 1 }} />
          <Box display="flex" justifyContent="space-between">
            <Typography>Subtotal:</Typography>
            <Typography>${subtotal.toFixed(2)}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>Discount:</Typography>
            <Typography>-${discount.toFixed(2)}</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box display="flex" justifyContent="space-between">
            <Typography fontWeight={600}>Total:</Typography>
            <Typography fontWeight={600}>${total.toFixed(2)}</Typography>
          </Box>

          <Box
            display="flex"
            gap={2}
            mt={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              style={{ width: 30 }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="MasterCard"
              style={{ width: 30 }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              style={{ width: 50 }}
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
